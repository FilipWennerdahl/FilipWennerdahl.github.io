import { PAGE } from "../../helpers/page-constant";
import { PICTURE } from "../../helpers/picture-constant";
import CasualPicture from "../../resources/images/casual-picture.jpg";
import ProfilePicture from "../../resources/images/profile-picture.jpg";
import React from "react";

import "./introduction.scss";

export default class Introduction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			profilePicture: PICTURE.CASUAL,
		};
	}

	flipPicture = picture => {
		this.setState({
			profilePicture: picture
		});
	}

	render() {
		return (
			<div className="introduction content">
				<div className="leftFlex">
					<h1 className="content_header">Introduction</h1>
				</div>

				<div className="introduction_content">
					<div className="introductionRow introductionRow-info introductionRow-mb">
						<div className="introductionRow_content containerBGRight">
							<div className={"introductionText " + 
							(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")
							}>
								<h3>Hi, I'm Filip.</h3>
							</div>

							<div className={"introductionText " + 
							(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")
							}>I'm a full stack developer and you've found my portfoilo.</div>
							
							<div className={"introductionText " + 
							(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")
							}>Here you can find my skills, experiences and some of the game projects I've worked on.</div>
							
							<div className={"introductionText " + 
							(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")
							}>Enjoy!</div>
						</div>

						<div className="introductionRow_picture">
							<div className="profilePictureContainer" onClick={() => this.flipPicture(this.state.profilePicture === PICTURE.CASUAL ? PICTURE.BUSINESS : PICTURE.CASUAL)}>
								<div className={"profilePicture " +
								(this.state.profilePicture === PICTURE.BUSINESS ? "profilePicture-flipped" : "")
								}>
									<img src={CasualPicture} alt="casual"></img>

									<img src={ProfilePicture} className="profilePicture_business" alt="business"></img>
								</div>
							</div>

							<div>
								<div className={"pictureButton " +
								(this.state.profilePicture === PICTURE.CASUAL ? "pictureButton-selected" : "")
								} onClick={() => this.flipPicture(PICTURE.CASUAL)}>Casual</div> / <div className={"pictureButton " +
								(this.state.profilePicture === PICTURE.BUSINESS ? "pictureButton-selected" : "")
								} onClick={() => this.flipPicture(PICTURE.BUSINESS)}>Business</div>
							</div>
						</div>
					</div>

					<div className="introductionRow introductionRow-list">
						<h4>Site info</h4>

						<div className="siteInfo containerBGDown">
							<h3>Technologies</h3>
							<ul className={"blinderEffect " +
							(this.props.currentPage === PAGE.INTRODUCTION ? "blinderEffect-active" : "")
							}>
								<li>
									React
								</li>

								<li>
									<a href="https://github.com/elraccoone/react-unity-webgl" target="_blank" rel="noopener noreferrer">
									React Unity WebGL
									</a>
								</li>

								<li>
									<a href="https://casesandberg.github.io/react-color/" target="_blank" rel="noopener noreferrer">
										React Color
									</a>
								</li>

								<li>
									<a href="https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie" target="_blank" rel="noopener noreferrer">
										Universal Cookie
									</a>
								</li>

								<li>
									<a href="https://github.com/FormidableLabs/react-swipeable" target="_blank" rel="noopener noreferrer">
										React Swipeable
									</a>
								</li>
							</ul>
						</div>

						<div className="siteInfo containerBGDown">
							<h3>Features</h3>
							<ul className={"blinderEffect " +
							(this.props.currentPage === PAGE.INTRODUCTION ? "blinderEffect-active" : "")
							}>
								<li>
									Responsive design
								</li>

								<li>
									Selectable colour scheme
								</li>
							</ul>
						</div>

						<div className="siteInfo containerBGDown">
							<h3>Navigation</h3>
							<ul className={"blinderEffect " +
							(this.props.currentPage === PAGE.INTRODUCTION ? "blinderEffect-active" : "")
							}>
								<li>
									Top Menu Buttons
								</li>
								<li>
									Arrow keys
								</li>
								<li>
									Swiping
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	};
}