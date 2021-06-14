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

const cookies = new Cookies();
let comments = [];

export default class Misc extends React.Component {
	constructor(props) {
		super(props);

		let uuidCookie = cookies.get("app-uuid");
		let appThemeCookie = cookies.get("app-theme");

		this.state={
			currentColour: appThemeCookie ? appThemeCookie : { r: 100, g: 181, b: 246, hex: "#64b5f6" },
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
		fetch("https://filipwennerdahl-github-io.ey.r.appspot.com/api/comments?" + new URLSearchParams({
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

		fetch("https://filipwennerdahl-github-io.ey.r.appspot.com/api/comments", {
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
		fetch("https://filipwennerdahl-github-io.ey.r.appspot.com/api/comments?" + new URLSearchParams({
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
									Delete Comment
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
					<h1 className="content_header">Contact and settings</h1>
				</div>

				<div className="misc_content">
					<div className={"miscContainer" +
						(!this.state.commentsLoaded ? " miscContainer-hidden" : "")
						}>
						<div className="miscContainer_header">
							<h4>Comments</h4>
						</div>

						{commentItems}

						<div className={"commentField miscContainer_content containerBGDown" +
						(this.state.commentOwner ? " commentField-hidden" : "")
						}>
							<div className={"commentField_content" +
							(this.props.currentPage === PAGE.MISC ? " commentField_content-visible" : "")
							}>
								<div>
									Author:<input type="text" maxLength="40" placeholder="Name" className="commentField_name"
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
										Send Comment
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="miscContainer">
						<div className="miscContainer_header">
							<h4>Contact Information</h4>
						</div>

						<div className="miscContainer_content containerBGDown">
							<div className={"miscContainer_text " + 
							(this.props.currentPage === PAGE.MISC ? "miscContainer_text-visible" : "")
							}>
								Currently I'm mainly interested in full stack work but I'd also like to expand my app development skills. I am NOT interested in test automation or pure java development at this moment.
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-envelope-o" aria-hidden="true"></i>
									Email:
								</div>

								<a href="mailto:filipwennerdahl@hotmail.com">filipwennerdahl@hotmail.com</a>
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-linkedin-square" aria-hidden="true"></i>
									LinkedIn:
								</div>

								<a href="https://www.linkedin.com/in/filip-wennerdahl/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/filip-wennerdahl/</a>
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-github-square" aria-hidden="true"></i>
									GitHub:
								</div>

								<a href="https://github.com/filipwennerdahl" target="_blank" rel="noopener noreferrer">https://github.com/filipwennerdahl</a>
							</div>
						</div>
					</div>

					<div className="miscContainer">
						<div className="miscContainer_header">
							<h4>Colour Theme Picker</h4>
						</div>

						<div className="miscContainer_content miscContainer_content-center miscContainer_content-disclaimer containerBGDown">
								In choosing a colour you accept to store a cookie with the app theme information.
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