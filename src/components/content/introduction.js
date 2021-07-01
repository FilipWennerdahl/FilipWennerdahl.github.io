import { PAGE } from "../../helpers/page-constant";
import { PICTURE } from "../../helpers/picture-constant";
import CasualPicture from "../../resources/images/casual-picture.jpg";
import ProfilePicture from "../../resources/images/profile-picture.jpg";
import React from "react";

import "./introduction.scss";

class IntroParagraph {
	constructor(text) {
		this.key = Math.random();
		this.text = text
	}
}

class PortfolioInfo {
	constructor(title, url) {
		this.key = Math.random();
		this.title = title
		this.url = url
	}
}

const introHeader = "Hi, I'm Filip!";
const portfolioInfoHeader = "Portfolio Info";
const frontEndHeader = "Front-end Technologies";
const backEndHeader = "Back-end Technologies";
const featuresHeader = "Features";

const introParagraphs = [
	new IntroParagraph("I'm a full stack developer and you've found my portfoilo."),
	new IntroParagraph("Here you can find my skills, experiences and some of the game projects I've worked on."),
	new IntroParagraph("You may also notice that I tried to let my love for nature shine through."),
	new IntroParagraph("Enjoy!")
]

const frontEndTechnologiesList = [
	new PortfolioInfo("React"),
	new PortfolioInfo("React Unity WebGL", "https://github.com/elraccoone/react-unity-webgl"),
	new PortfolioInfo("React Color", "https://casesandberg.github.io/react-color/"),
	new PortfolioInfo("Universal Cookie", "https://github.com/reactivestack/cookies/tree/master/packages/universal-cookie"),
	new PortfolioInfo("React Swipeable", "https://github.com/FormidableLabs/react-swipeable")
]

const backEndTechnologiesList = [
	new PortfolioInfo("Golang"),
	new PortfolioInfo("App Engine"),
	new PortfolioInfo("Firestore")
]

const featuresList = [
	new PortfolioInfo("Responsive design"),
	new PortfolioInfo("Selectable colour scheme"),
	new PortfolioInfo("Persistent comment section")
]

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
		const intro = introParagraphs.map((paragraph, index) => {
			return(
				<div key={paragraph.key} className={"introductionText " + 
				(this.props.currentPage === PAGE.INTRODUCTION ? "introductionText-visible" : "")}>
					{paragraph.text}
				</div>
			);
		});

		const frontEndTech = frontEndTechnologiesList.map((tech, index) => {
			return(
				<li>
					{!tech.url &&
						<div>
							{tech.title}
						</div>
					}

					{tech.url &&
						<a href={tech.url} target="_blank" rel="noopener noreferrer">
							{tech.title}
						</a>
					}
				</li>
			);
		});

		const backEndTech = backEndTechnologiesList.map((tech, index) => {
			return(
				<li>
					{!tech.url &&
						<div>
							{tech.title}
						</div>
					}

					{tech.url &&
						<a href={tech.url} target="_blank" rel="noopener noreferrer">
							{tech.title}
						</a>
					}
				</li>
			);
		});

		const features = featuresList.map((tech, index) => {
			return(
				<li>
					{!tech.url &&
						<div>
							{tech.title}
						</div>
					}

					{tech.url &&
						<a href={tech.url} target="_blank" rel="noopener noreferrer">
							{tech.title}
						</a>
					}
				</li>
			);
		});

		return (
			<div className="introduction content">
				<div className="leftFlex">
					<h1 className="content_header">Introduction</h1>
				</div>

				<div className="introduction_content">
					<div className="introductionRow introductionRow-info introductionRow-mb">
						<div className="introductionRow_intro">
							<h4>
								{introHeader}
							</h4>

							<div className="introductionRow_content containerBGRight">
								{intro}
							</div>
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
						<h4>
							{portfolioInfoHeader}
						</h4>

						<div className="siteInfo containerBGDown">
							<h3>
								{frontEndHeader}
							</h3>

							<ul className={"blinderEffect " +
							(this.props.currentPage === PAGE.INTRODUCTION ? "blinderEffect-active" : "")
							}>
								{frontEndTech}
							</ul>
						</div>

						<div className="siteInfo containerBGDown">
							<h3>
								{backEndHeader}
							</h3>

							<ul className={"blinderEffect " +
							(this.props.currentPage === PAGE.INTRODUCTION ? "blinderEffect-active" : "")
							}>
								{backEndTech}
							</ul>
						</div>

						<div className="siteInfo containerBGDown">
							<h3>
								{featuresHeader}
							</h3>

							<ul className={"blinderEffect " +
							(this.props.currentPage === PAGE.INTRODUCTION ? "blinderEffect-active" : "")
							}>
								{features}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	};
}