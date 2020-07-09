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
				<h1 className="content_header">Introduction</h1>

				<div className="introduction_content">
					<div className="introductionRow introductionRow-info">
						<div className="introductionRow_content">
							<div className={"introductionText " + 
							(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")
							}>Hi, I'm Filip. I am a full-stack developer.</div>

							<div className={"introductionText " + 
							(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")
							}>You have found my digital CV & Portfoilo (lucky you).</div>
							
							<div className={"introductionText " + 
							(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")
							}>Here you can find my skills, experience and some of the games I've created.</div>
							
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

					<div className="introductionRow introductionRow-site">
						<h4>Site info</h4>
					</div>

					<div className="introductionRow introductionRow-list">
						<div className="siteInfo">
							Tech:
							<ul className={"blinderEffect " +
							(this.props.currentPage === PAGE.INTRODUCTION ? "blinderEffect-active" : "")
							}>
								<li>
									React
								</li>
								<li>
									Scss
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

						<div className="siteInfo">
							Features:
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

						<div className="siteInfo">
							Navigation:
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