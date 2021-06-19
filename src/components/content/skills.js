import { PAGE } from "../../helpers/page-constant";
import React from "react";

import AngularLogo from "../../resources/icons/angular.svg";
import AppiumLogo from "../../resources/icons/appium.svg";
import CPlusPlusLogo from "../../resources/icons/c-plus-plus.svg";
import CSharpLogo from "../../resources/icons/csharp.svg";
import ElasticsearchLogo from "../../resources/icons/elasticsearch.svg";
import GAPLogo from "../../resources/icons/google-app-engine.svg";
import GCPLogo from "../../resources/icons/google-cloud-platform.svg";
import GitLogo from "../../resources/icons/git.svg";
import GoLogo from "../../resources/icons/go.svg";
import JavaLogo from "../../resources/icons/java.svg";
import JavaScriptLogo from "../../resources/icons/javascript.svg";
import JqueryLogo from "../../resources/icons/jquery.svg";
import NodeLogo from "../../resources/icons/node.svg";
import ReactLogo from "../../resources/icons/react.svg";
import SeleniumLogo from "../../resources/icons/selenium.svg";
import SqlLogo from "../../resources/icons/sql.svg";
import MonoLogo from "../../resources/icons/mono.svg";
import TSLogo from "../../resources/icons/typescript.svg";
import UnityLogo from "../../resources/icons/unity.svg";

import "./skills.scss";

class Skill {
	constructor(name, icon, usingFa, iconStyling) {
		this.key = Math.random();
		this.name = name;
		this.icon = icon;
		this.usingFa = usingFa;
		this.iconStyling = iconStyling;
	}
}

const platforms = [
	new Skill("Windows", "windows", true, {fontSize: "1.4em"}),
	new Skill("macOS", "apple", true),
	new Skill("Chromebook", "chrome", true),
	new Skill("iOS", "apple", true),
	new Skill("Android", "android", true),
	new Skill("Linux", "linux", true)
]

const technologies = [
	new Skill("AngularJS", AngularLogo, false),
	new Skill("Git", GitLogo, false),
	new Skill("Appium", AppiumLogo, false, {height: "1.4em"}),
	new Skill("Selenium", SeleniumLogo, false),
	new Skill("Google Cloud Platform", GCPLogo, false),
	new Skill("Google App Engine", GAPLogo, false),
	new Skill("Node.js", NodeLogo, false),
	new Skill("jQuery", JqueryLogo, false, {height: "1.4em"}),
	new Skill("elasticsearch", ElasticsearchLogo, false, {height: "1.5em"}),
	new Skill("Angular", AngularLogo, false),
	new Skill("React", ReactLogo, false),
	new Skill("Mono framework", MonoLogo, false),
	new Skill("Unity", UnityLogo, false)
]

const languages = [
	new Skill("JavaScript", JavaScriptLogo, false),
	new Skill("HTML5", "html5", {fontSize: "2em", marginLeft: "0.3em"}),
	new Skill("CSS", "css3", true),
	new Skill("Java", JavaLogo, false),
	new Skill("Golang", GoLogo, false),
	new Skill("C#", CSharpLogo, false),
	new Skill("SQL", SqlLogo, false),
	new Skill("C++", CPlusPlusLogo, false),
	new Skill("Objective-C", "apple", true),
	new Skill("TypeScript", TSLogo, false, {height: "1.4em"}),
]


export default class Skills extends React.Component {
	render() {
		const platformSkills = platforms.map((skill) => {
			return(
				<div key={skill.key} className="skill" title={skill.name}>
					<div className="skill_text">
						{skill.name}
					</div>

					{skill.usingFa &&
						<i className={`fa fa-${skill.icon}`} style={skill.iconStyling} aria-hidden="true"></i>
					}

					{!skill.usingFa &&
						<img src={skill.icon} alt={skill.name} style={skill.iconStyling}></img>
					}
				</div>
			);
		});

		const technologySkills = technologies.map((skill) => {
			return(
				<div key={skill.key} className="skill" title={skill.name}>
					<div className="skill_text">
						{skill.name}
					</div>

					{skill.usingFa &&
						<i className={`fa fa-${skill.icon}`} style={skill.iconStyling} aria-hidden="true"></i>
					}

					{!skill.usingFa &&
						<img src={skill.icon} alt={skill.name} style={skill.iconStyling}></img>
					}
				</div>
			);
		});

		const languageSkills = languages.map((skill) => {
			return(
				<div key={skill.key} className="skill" title={skill.name}>
					<div className="skill_text">
						{skill.name}
					</div>

					{skill.usingFa &&
						<i className={`fa fa-${skill.icon}`} style={skill.iconStyling} aria-hidden="true"></i>
					}

					{!skill.usingFa &&
						<img src={skill.icon} alt={skill.name} style={skill.iconStyling}></img>
					}
				</div>
			);
		});

		return (
			<div className="skills content">
				<div className="leftFlex">
					<h1 className="content_header">Skills</h1>
				</div>

				<div className="skillType">
					<div className="skillType_header">
						<h3>
							<i className="fa fa-code" aria-hidden="true"></i>
							Languages
						</h3>
					</div>

					<div className="skillList">
						<div className="skillList_description">
							During my time as a developer I've used several different languages both professionally and in hobby projects.
						</div>

						<div className={"skillList_container bold blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")}>
							{languageSkills}
						</div>
					</div>
				</div>

				<div className="skillType">
					<div className="skillType_header">
						<h3>
							<i className="fa fa-microchip" aria-hidden="true"></i>
							Technologies
						</h3>
					</div>

					<div className="skillList">
						<div className="skillList_description skillList_description-right">
								Building websites, applications and games requires a wide array tools and frameworks.  
						</div>

						<div className={"skillList_container bold blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")}>
							{technologySkills}
						</div>
					</div>
				</div>

				<div className="skillType">
					<div className="skillType_header">
						<h3>
							<i className="fa fa-laptop" aria-hidden="true"></i>
							Platforms
						</h3>
					</div>

					<div className="skillList">
						<div className="skillList_description">
								My expeirence of developing cross platform applications and setting up CI has exposed me to most of the major platforms. 
						</div>

						<div className={"skillList_container bold blinderEffect " +
							(this.props.currentPage === PAGE.SKILLS ? "blinderEffect-active" : "")}>
							{platformSkills}
						</div>
					</div>
				</div>
			</div>
		);
	}
}