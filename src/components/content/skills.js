import { PAGE } from "../../helpers/page-constant";
import React from "react";

import AngularLogo from "../../resources/icons/angular.svg";
import AppiumLogo from "../../resources/icons/appium.svg";
import ClojureLogo from "../../resources/icons/clojure.svg";
import CPlusPlusLogo from "../../resources/icons/c-plus-plus.svg";
import CSharpLogo from "../../resources/icons/csharp.svg";
import DotNetLogo from "../../resources/icons/dotnet.svg";
import ElasticsearchLogo from "../../resources/icons/elasticsearch.svg";
import GAPLogo from "../../resources/icons/google-app-engine.svg";
import GCPLogo from "../../resources/icons/google-cloud-platform.svg";
import GitLogo from "../../resources/icons/git.svg";
import GoLogo from "../../resources/icons/go.svg";
import JavaLogo from "../../resources/icons/java.svg";
import JavaScriptLogo from "../../resources/icons/javascript.svg";
import JqueryLogo from "../../resources/icons/jquery.svg";
import NodeLogo from "../../resources/icons/node.svg";
import PrologLogo from "../../resources/icons/prolog.svg";
import ReactLogo from "../../resources/icons/react.svg";
import SeleniumLogo from "../../resources/icons/selenium.svg";
import SqlLogo from "../../resources/icons/sql.svg";

import "./skills.scss";

export default class Skills extends React.Component {
	render() {
		return (
			<div className="skills content">
				<div className="leftFlex">
					<h1 className="content_header">Skills</h1>
				</div>

				<div className="skillLevel threeStars">
					<div className="skillLevel_container">
						<i className={"fa fa-star star " + 
						(this.props.currentPage === PAGE.SKILLS ? "popInThird" : "")
						} aria-hidden="true"></i>

						<i className={"fa fa-star star " + 
						(this.props.currentPage === PAGE.SKILLS ? "popInSecond" : "")
						} aria-hidden="true"></i>

						<i className={"fa fa-star star " + 
						(this.props.currentPage === PAGE.SKILLS ? "popInFirst" : "")
						} aria-hidden="true"></i>
					</div>

					<div className="skillList">
						<div className="skillList_container">
							<h3>
								<i className="fa fa-laptop" aria-hidden="true"></i>
								Platforms
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill skill-windows">
									Windows
									<i className="fa fa-windows" aria-hidden="true"></i>
								</div>

								<div className="skill skill-apple">
									macOS
									<i className="fa fa-apple" aria-hidden="true"></i>
								</div>
							</div>
						</div>

						<div className="skillList_container">
							<h3>
								<i className="fa fa-microchip" aria-hidden="true"></i>
								Technologies
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill skill-html">
									AngularJS
									<img src={AngularLogo} alt="angularjs"></img>
								</div>

								<div className="skill">
									Git
									<img src={GitLogo} alt="git"></img>
								</div>

								<div className="skill skill-appium">
									Appium
									<img src={AppiumLogo} alt="appium"></img>
								</div>

								<div className="skill">
									Selenium
									<img src={SeleniumLogo} alt="selenium"></img>
								</div>
							</div>
						</div>

						<div className="skillList_container">
							<h3>
								<i className="fa fa-code" aria-hidden="true"></i>
								Languages
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill">
									JavaScript
									<img src={JavaScriptLogo} alt="javascript"></img>
								</div>

								<div className="skill skill-html">
									HTML5
									<i className="fa fa-html5" aria-hidden="true"></i>
								</div>

								<div className="skill skill-css">
									CSS
									<i className="fa fa-css3" aria-hidden="true"></i>
								</div>

								<div className="skill">
									Java
									<img src={JavaLogo} alt="java"></img>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="skillLevel twoStars">
					<div className="skillLevel_container">
						<i className={"fa fa-star star " + 
						(this.props.currentPage === PAGE.SKILLS ? "popInFirst" : "")
						} aria-hidden="true"></i>

						<i className={"fa fa-star star " + 
						(this.props.currentPage === PAGE.SKILLS ? "popInSecond" : "")
						} aria-hidden="true"></i>
					</div>

					<div className="skillList">
						<div className="skillList_container">
							<h3>
								<i className="fa fa-laptop" aria-hidden="true"></i>
								Platforms
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill skill-apple">
									iOS
									<i className="fa fa-apple" aria-hidden="true"></i>
								</div>

								<div className="skill skill-chrome">
									Chromebook
									<i className="fa fa-chrome" aria-hidden="true"></i>
								</div>
							</div>
						</div>

						<div className="skillList_container">
							<h3>
								<i className="fa fa-microchip" aria-hidden="true"></i>
								Technologies
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill">
									Google Cloud Platform
									<img src={GCPLogo} alt="google-cloud-platform"></img>
								</div>

								<div className="skill">
									Google App Engine
									<img src={GAPLogo} alt="google-app-engine"></img>
								</div>

								<div className="skill">
									Node.js
									<img src={NodeLogo} alt="node"></img>
								</div>

								<div className="skill skill-jquery">
									jQuery
									<img src={JqueryLogo} alt="jquery"></img>
								</div>

								<div className="skill skill-elasticsearch">
									elasticsearch
									<img src={ElasticsearchLogo} alt="elasticsearch"></img>
								</div>
							</div>
						</div>

						<div className="skillList_container">
							<h3>
								<i className="fa fa-code" aria-hidden="true"></i>
								Languages
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill">
									Go
									<img src={GoLogo} alt="go"></img>
								</div>

								<div className="skill">
									C Sharp
									<img src={CSharpLogo} alt="csharp"></img>
								</div>

								<div className="skill">
									SQL
									<img src={SqlLogo} alt="sql"></img>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="skillLevel oneStar">
					<div className="skillLevel_container">
						<i className={"fa fa-star star " + 
						(this.props.currentPage === PAGE.SKILLS ? "popInFirst" : "")
						} aria-hidden="true"></i>
					</div>

					<div className="skillList">
						<div className="skillList_container">
							<h3>
								<i className="fa fa-laptop" aria-hidden="true"></i>
								Platforms
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill skill-windows">
									Android
									<i className="fa fa-android" aria-hidden="true"></i>
								</div>

								<div className="skill skill-windows">
									Linux
									<i className="fa fa-linux" aria-hidden="true"></i>
								</div>
							</div>
						</div>

						<div className="skillList_container">
							<h3>
								<i className="fa fa-microchip" aria-hidden="true"></i>
								Technologies
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill">
									Angular
									<img src={AngularLogo} alt="angular"></img>
								</div>
								
								<div className="skill skill-html">
									React
									<img src={ReactLogo} alt="react"></img>
								</div>

								<div className="skill skill-html">
									React Native
									<img src={ReactLogo} alt="reat-native"></img>
								</div>


								<div className="skill skill-html">
									.Net
									<img src={DotNetLogo} alt="dotnet"></img>
								</div>
							</div>
						</div>

						<div className="skillList_container">
							<h3>
								<i className="fa fa-code" aria-hidden="true"></i>
								Languages
							</h3>

							<div className={"blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")
							}>
								<div className="skill">
									C++
									<img src={CPlusPlusLogo} alt="c++"></img>
								</div>

								<div className="skill skill-apple">
									Objective-C
									<i className="fa fa-apple" aria-hidden="true"></i>
								</div>

								<div className="skill">
									Prolog
									<img src={PrologLogo} alt="prolog"></img>
								</div>

								<div className="skill">
									Clojure
									<img src={ClojureLogo} alt="clojure"></img>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}