import { BASE_URL } from "../../helpers/base-url-constant";
import { PAGE } from "../../helpers/page-constant";
import { SwatchesPicker } from "react-color";
import Cookies from "universal-cookie";
import React from "react"

import "./misc.scss"

class Comment {
	constructor(author, content, owner, created) {
		this.key = Math.random();
		this.author = author
		this.content = content
		this.owner = owner
		this.created = new Date(created)
	}
}

const pageHeader = "Contact & Settings";

const cookies = new Cookies();

const commentsHeader = "Comments";
const nameLabel = "Name:";
const btnPostComment = "Post Comment";
const btnDeleteComment = "Delete Comment";
let comments = [];

const contactInfoHeader = "Contact Information";
const contactDisclaimer = "Currently I'm mainly interested in fullstack work but I'd also like to expand my app development skills. I'm NOT interested in test automation or pure java development at this moment.";
const emailLabel = "Email:";
const emailAddress = "filipwennerdahl@hotmail.com";
const linkedInLabel = "LinkedIn:";
const linkedInAddress = "https://www.linkedin.com/in/filip-wennerdahl/";
const gitHubLabel = "GitHub:";
const gitHubAddress = "https://github.com/filipwennerdahl";

const colourThemeHeader = "Colour Theme Picker";
const colourThemeDisclaimer = "In choosing a colour you accept to store a cookie with the app theme information.";

export default class Misc extends React.Component {
	constructor(props) {
		super(props);

		let uuidCookie = cookies.get("app-uuid");
		let appThemeCookie = cookies.get("app-theme");

		this.state={
			currentColour: appThemeCookie ? appThemeCookie : { r: 0, g: 121, b: 107, hex: "#00796b" },
			appUUID: uuidCookie ? uuidCookie : this.generateUUID(),
			newCommentAuthor: "",
			newComment: "",
			commentsLoaded: false
		}

		cookies.set("app-uuid", this.state.appUUID,  { path: "/", maxAge: 16000000, sameSite: true });
		cookies.set("app-theme", this.state.currentColour,  { path: "/", maxAge: 16000000, sameSite: true });

		this.updateAppTheme(this.state.currentColour.r, this.state.currentColour.g, this.state.currentColour.b);
	}

	componentDidMount() {
		this.fetchComments();
	}

	// Logic taken from: https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
	generateUUID() {
		return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
			let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8); /* eslint-disable-line */
			return v.toString(16);
		});
	}

	fetchComments() {
		fetch(BASE_URL + "/api/comments?" + new URLSearchParams({
			id: this.state.appUUID
		}))
		.then(response => {
			if (response.status !== 200) {
				return
			}

			return response.json()
		})
		.then(data => {
			if (data) {
				data.forEach (c => {
					comments.push(new Comment(c.author, c.content, c.owner, c.created))
					if (c.owner) {
						this.setState({
							commentOwner: true
						})
					}
				});
			}

			this.setState({
				commentsLoaded: true
			})
		});
	}

	updateAppTheme = (r, g, b) => {
		let rgb = r + "," + g + "," + b;

		document.documentElement.style.setProperty("--app-theme", "rgba(" + rgb + ", 0.3)");
		document.documentElement.style.setProperty("--app-theme-button", "rgba(" + rgb + ", 0.15)");
		document.documentElement.style.setProperty("--app-theme-button-hover", "rgba(" + rgb + ", 0.27)");
		document.documentElement.style.setProperty("--app-theme-border", "rgba(" + rgb + ", 1)");
	}

	handleChangeColourComplete = (colour) => {
		this.setState({
			currentColour: { r: colour.rgb.r, g: colour.rgb.g, b: colour.rgb.b, hex: colour.hex}
		});

		this.updateAppTheme(colour.rgb.r, colour.rgb.g, colour.rgb.b);

		cookies.set("app-theme", this.state.currentColour,  { path: "/", maxAge: 2600000, sameSite: true });
	}

	postComment = () => {
		const newComment = {
			author: this.state.newCommentAuthor,
			content: this.state.newComment,
			id: this.state.appUUID
		}

		fetch(BASE_URL + "/api/comments", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newComment)
		}).then(response => {
			if (response.status !== 200) {
				return
			}

			response.json().then(data => {
				comments.unshift(new Comment(
					data.author,
					data.content,
					data.owner,
					data.created,
				));

				this.setState({
					commentOwner: data.owner
				})
			}).finally(() => {
				this.setState({
					newComment: "",
					newCommentAuthor: ""
				});
			});
		});
	}

	deleteComment = () => {
		fetch(BASE_URL + "/api/comments?" + new URLSearchParams({
			id: this.state.appUUID
		}), {
			method: "DELETE",
		})
		.then(() => {
			comments = comments.filter(comment => {
				return !comment.owner;
			})

			this.setState({
				commentOwner: false
			});
		});
	}

	render() {
		const commentItems = comments.map((comment) => {
			return(
				<div key={comment.key} className="comments">
					<h5 className="comments_header">
						<div>
							{comment.author}
						</div>

						<div>
							{comment.created.toDateString()}
						</div>
					</h5>

					<div className={"comments_content miscContainer_content containerBGDown" +
					(this.props.currentPage === PAGE.MISC ? " comments_content-visible" : "")
					}>
						<div>
							{comment.content}
						</div>

						<div>
							{comment.owner &&
								<button className="comments_button" onClick={this.deleteComment}>
									{btnDeleteComment}
								</button>
							}
						</div>
					</div>
				</div>
			);
		});

		return(
			<div className="misc content">
				<div className="leftFlex">
					<h1 className="content_header">
						{pageHeader}
					</h1>
				</div>

				<div className="misc_content">
					<div className={"miscContainer" +
						(!this.state.commentsLoaded ? " miscContainer-hidden" : "")
						}>
						<div className="miscContainer_header">
							<h4>
								{commentsHeader}
							</h4>
						</div>

						{commentItems}

						<div className={"commentField miscContainer_content containerBGDown" +
						(this.state.commentOwner ? " commentField-hidden" : "")
						}>
							<div className={"commentField_content" +
							(this.props.currentPage === PAGE.MISC ? " commentField_content-visible" : "")
							}>
								<div>
									{nameLabel}<input type="text" maxLength="40" className="commentField_name"
									value={this.state.newCommentAuthor}
									onChange={event => {
										this.setState({
											newCommentAuthor: event.target.value
										});
									}}
									></input>
								</div>

								<div className="commentRow">
									<textarea className="commentRow_text" placeholder="Leave a comment.." rows="2"
									value={this.state.newComment}
									onChange={event => {
										this.setState({
											newComment: event.target.value
										});
									}}></textarea>

									<button className="commentRow_button" onClick={this.postComment} disabled={!this.state.newComment || !this.state.newCommentAuthor}>
										{btnPostComment}
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="miscContainer">
						<div className="miscContainer_header">
							<h4>
								{contactInfoHeader}
							</h4>
						</div>

						<div className="miscContainer_content containerBGDown">
							<div className={"miscContainer_text " + 
							(this.props.currentPage === PAGE.MISC ? "miscContainer_text-visible" : "")
							}>
								{contactDisclaimer}
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-envelope-o" aria-hidden="true"></i>
									{emailLabel}
								</div>

								<a href={"mailto:" + emailAddress}>{emailAddress}</a>
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-linkedin-square" aria-hidden="true"></i>
									{linkedInLabel}
								</div>

								<a href={linkedInAddress} target="_blank" rel="noopener noreferrer">{linkedInAddress}</a>
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-github-square" aria-hidden="true"></i>
									{gitHubLabel}
								</div>

								<a href={gitHubAddress} target="_blank" rel="noopener noreferrer">{gitHubAddress}</a>
							</div>
						</div>
					</div>

					<div className="miscContainer">
						<div className="miscContainer_header">
							<h4>
								{colourThemeHeader}
							</h4>
						</div>

						<div className="miscContainer_content miscContainer_content-center miscContainer_content-disclaimer containerBGDown">
							{colourThemeDisclaimer}
						</div>

						<SwatchesPicker 
								className="miscContainer_content-center"
								width="auto"
								height="auto"
								color={ this.state.currentColour.hex }
								onChangeComplete={ this.handleChangeColourComplete } />
					</div>

				</div>
			</div>
		);
	};
}