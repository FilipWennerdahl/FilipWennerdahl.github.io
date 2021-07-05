import { PAGE } from "../../helpers/page-constant";
import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

import "./games.scss";

class Game {
	constructor(title, paragraphs) {
		this.title = title
		this.paragraphs = paragraphs
	}
}

class GameParagraph {
	constructor(text) {
		this.key = Math.random();
		this.text = text
	}
}

const pageHeader = "Games";

const gameSpaceGame = new Game(
	"Space Game",
	[
		new GameParagraph("\"Have you ever wondered how a manually controlled spaceship would avoid collisions while accelerating to the speed of light? By using it's built in chrono-fluxometer of course! The chrono-fluxometer has the ability for slow down time for a short period and is connected to the ships near-collisions-detection system\"."),
		new GameParagraph("I made a small prototype as a proof of concept for an idea I had, what if I combined an endless runner with the \"bullet time\" mechanic from the Max Payne games. Well, this is the resault. <a href=\"https://github.com/FilipWennerdahl/MobileSpaceGame\" target=\"_blank\" rel=\"noopener noreferrer\">The source code can be found here.</a>"),
		new GameParagraph("You control the the ship with A (move left) and D (move right), the goal is to get as far as possible."),
		new GameParagraph("Unfourtantly due to WebGL limitations, this in browser version of the game is not supported on mobile devices If you have an Android device you can <a href=\"https://rawgit.com/FilipWennerdahl/MobileSpaceGame/master/Game-Android/MobileSpaceGame.apk\" target=\"_blank\" rel=\"noopener noreferrer\">download the game here (APK).</a>")
	]
)
const spaceGameContent = new UnityContent(
	"https://rawgit.com/FilipWennerdahl/MobileSpaceGame/master/Game-WebGL/Build/Game-WebGL.json",
	"https://rawgit.com/FilipWennerdahl/MobileSpaceGame/master/Game-WebGL/Build/UnityLoader.js", {
		unityVersion: "2017.3.1"
	}
);

const gameTowerOfHanoi = new Game(
	"Tower of Hanoi",
	[
		new GameParagraph("This is a work sample I did for Toca Boca where I was asked to recreate the classic game Tower of Hanoi using Unity. All the original rules of the game had to be implemented as well as a win state and touch device support."),
		new GameParagraph("The art assets was provided by and is property of Toca Boca. <a href=\"https://github.com/FilipWennerdahl/TowerOfHanoi\" target=\"_blank\" rel=\"noopener noreferrer\">The source code can be found here.</a>"),
		new GameParagraph("Unfourtantly due to WebGL limitations, this in browser version of the game is not supported on mobile devices. If you have an Android device you can <a href=\"https://rawgit.com/FilipWennerdahl/TowerOfHanoi/master/Game-Android/TowerOfHanoi.apk\" target=\"_blank\" rel=\"noopener noreferrer\">download the game here (APK).</a>")
	]
)
const towerOfHanoiContent = new UnityContent(
	"https://rawgit.com/FilipWennerdahl/TowerOfHanoi/master/Game-WebGL/Build/Game-WebGL.json",
	"https://rawgit.com/FilipWennerdahl/TowerOfHanoi/master/Game-WebGL/Build/UnityLoader.js", {
		unityVersion: "2017.3.1"
	}
);

const gameBotsonAndFindOS = new Game(
	"Botson & FindOS",
	[
		new GameParagraph("The biggest team project during my university studies was a several month long game development project. We ended up creating a 2 person coop puzzle game where the respective players movement was connected to the movement of enemies and traps. If you are on Windows you can <a href=\"https://drive.google.com/uc?export=download&id=154XUMaxtREeNQmJcEIOzmXhgOByljAOc\" target=\"_blank\" rel=\"noopener noreferrer\">download and try the game with a friend here.</a>"),
		new GameParagraph("The team consisted of three developers and two designers where my role as a developer included tasks such as: character movement, trap and item behaviour, physics enhancements, level design, general scripting and QA/bug fixing."),
		new GameParagraph("Botson & FindOS was nominated for Best Execution in Design at Swedish Game Awards 2017.")
	]
)

export default class Games extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spaceGameLoaded: false,
			spaceGameStyle: {
				height: "70vh",
				width: "calc(70vh / 1.78)"
			},
			towerOfHanoiLoaded: false,
			towerOfHanoiStyle: {
				height: "calc(var(--unity-container-width) / 1.78)",
				width: "var(--unity-container-width)"
			}
		};
	}

	// Since Unity WebGL do not dynamically scale after being loadeded we lock the size at load to avoid ugly container scaling.
	loadSpaceGame = () => {
		if (!this.state.spaceGameLoaded) {
			this.setState({
				spaceGameLoaded: true,
				spaceGameStyle: {
					height: document.getElementsByClassName("spaceGame").offsetHeight + "px",
					width: document.getElementsByClassName("spaceGame").offsetWidth + "px"
				}
			});	
		}
	}

	loadTowerOfHanoiGame = () => {
		if (!this.state.towerOfHanoiLoaded) {
			this.setState({
				towerOfHanoiLoaded: true,
				towerOfHanoiStyle: {
					height: document.getElementById("towerOfHanoi").offsetHeight + "px",
					width: document.getElementById("towerOfHanoi").offsetWidth + "px"
				}
			});
		}
	}

	componentDidUpdate(newProps) {
		if ((this.state.spaceGameLoaded || this.state.towerOfHanoiLoaded) && newProps.currentPage !== PAGE.GAMES) {
			this.setState({
				spaceGameLoaded: false,
				spaceGameStyle: {
					height: "70vh",
					width: "calc(70vh / 1.78)"
				},
				towerOfHanoiLoaded: false,
				towerOfHanoiStyle: {
					height: "calc(var(--unity-container-width) / 1.78)",
					width: "var(--unity-container-width)",
				}
			});
		}
	}

	render() {
		const spaceGameDescription = gameSpaceGame.paragraphs.map((paragraph, index) => {
			return(
				<div key={paragraph.key}
					className={"gameText " +
						(index === 0 ? "italic " : "") + 
						(this.props.currentPage === PAGE.GAMES ? "gameText-visible" : "")
					}
					dangerouslySetInnerHTML={{__html: paragraph.text}}>
				</div>
			);
		});

		const towerOfHanoiDescription = gameTowerOfHanoi.paragraphs.map((paragraph) => {
			return(
				<div key={paragraph.key}
					className={"gameText " +
						(this.props.currentPage === PAGE.GAMES ? "gameText-visible" : "")
					}
					dangerouslySetInnerHTML={{__html: paragraph.text}}>
				</div>
			);
		});

		const botsonAndFindOSDescription = gameBotsonAndFindOS.paragraphs.map((paragraph) => {
			return(
				<div key={paragraph.key}
					className={"gameText " +
						(this.props.currentPage === PAGE.GAMES ? "gameText-visible" : "")
					}
					dangerouslySetInnerHTML={{__html: paragraph.text}}>
				</div>
			);
		});


		return(
			<div className="games content">
				<div className="leftFlex">
					<h1 className="content_header">
						{pageHeader}
					</h1>
				</div>

				<div className="games_header games_header-left">
					<h4>
						{gameSpaceGame.title}
					</h4>
				</div>

				<div className="games_container games_container-left containerBGDown">
					{spaceGameDescription}
				</div>

				<div className="games_container games_container-center">
					<div id="spaceGame" className={"unityContainer unityContainer-portrait " +
					(!this.state.spaceGameLoaded ? "unityContainer-unLoaded" : "")} onClick={this.loadSpaceGame}
					style={this.state.spaceGameStyle}>
						{!this.state.spaceGameLoaded ? <i className="fa fa-play-circle-o" aria-hidden="true"></i> : ""}

						{this.state.spaceGameLoaded ? <Unity unityContent={spaceGameContent} /> : ""}
					</div>
				</div>

				<div className="games_header games_header-right">
					<h4>
						{gameTowerOfHanoi.title}
					</h4>
				</div>

				<div className="games_container games_container-right containerBGDown">
					{towerOfHanoiDescription}
				</div>

				<div className="games_container games_container-center">
						<div id="towerOfHanoi" className={"unityContainer unityContainer-landscape " +
						(!this.state.towerOfHanoiLoaded ? "unityContainer-unLoaded" : "")} onClick={this.loadTowerOfHanoiGame}
						style={this.state.towerOfHanoiStyle}>
							{!this.state.towerOfHanoiLoaded ? <i className="fa fa-play-circle-o" aria-hidden="true"></i> : ""}

							{this.state.towerOfHanoiLoaded ? <Unity unityContent={towerOfHanoiContent} /> : ""}
						</div>
				</div>

				<div className="games_header games_header-left">
					<h4>
						{gameBotsonAndFindOS.title}
					</h4>
				</div>

				<div className="games_container games_container-left containerBGDown">
					{botsonAndFindOSDescription}
				</div>

				<div className="games_container games_container-center">
					<iframe id="videoBotson" title="Botson & FindOS" src="https://www.youtube.com/embed/KT1SzL1UhQw?rel=0" vq="hd1080" frameBorder="0" allowFullScreen></iframe>
				</div>
			</div>
		);
	};
}