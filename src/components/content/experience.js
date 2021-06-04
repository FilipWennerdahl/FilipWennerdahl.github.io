import { PAGE } from "../../helpers/page-constant";
import React from "react";

import "./experience.scss";

const employments = [
	{
		key: Math.random(),
		location: "DigiExam, Stockholm",
		date: "Jan 2019 - Present",
		description: "I am currently employed as a full stack developer where my assignments include everything from developing the front- and back-end of our web application as " +
		"well as our native client application. The front-end technologies are mainly comprised of JavaScript using a hybrid AngularJS/Angular app (we are currently in the " +
		"process of moving to the latest version of Angular), the back-end of Go using App Engine and GCP as our host. The back-end work also includes maintaining and developing " +
		"new REST APIs. Developing the native student clients includes working with C++, Objective-C++, Electron and chromeOS since we support Mac, PC, Chromebook and iOS. " +
		"Our latest addition is an Android app using Kotlin as our native interface and a WebView to host the core application. I did the main specification and research " + 
		"for the Android project."
	},
	{
		key: Math.random(),
		location: "Kentor / Sopra Steria, Stockholm",
		date: "Jun 2017 – Dec 2018",
		description: "Employed as an IT consultant where my main assignment was located at Telia. At Telia my work included automated test framework development and management " +
		"for browser and smartphone testing, development of test PoC’s, automated test maintenance for the Telia Play+ service, etc. Outside of the Telia assignment I also " +
		"worked on in house projects such as maintenance of a patient management system for dental care built with ASP.NET and assisting in R&D for VR/AR applications."
	}
]

const educations = [
	{
		key: Math.random(),
		location: "Bachelor’s degree in Computer Science (180p), Stockholm University",
		date: "Aug 2014 – Jun 2017",
		description: "Orientation game development – construction. The focus of the education was primarily system development during game development. The majority of " +
		"the courses had a focus on programming in Java and C++ as well as system science but also modeling through use case- and UML diagrams and SQL database management. " +
		"The university education also provided experience of data structure- and algorithm analysis as well as test-driven development using Java, it consisted of " +
		"unit-, integration- and systemtesting."
	}
]
const educationsIndexing = employments.length % 2 === 0 ? 1 : 0;

const projects = [
	{
		key: Math.random(),
		location: "Jul 2020 - Continuous",
		date: "Digital portfolio/cv, react",
		description: "This digital portfolio/cv is my first react project where I've mainly worked with AngularJS and Angular before. I wanted to try something new and decided " +
		"use react to rebuild my online portofilo, the development took a few days without any major hickups. In the end I did like the process of working with react, " +
		"especially for a small perosnal project it was pretty great!."
	}
]
const projectsIndexing = educations.length % 2 === 0 ? 1 : 0;

export default class Experience extends React.Component {
	render() {
		const employtmentItems = employments.map((employment, index) => {
			return(
				<div key={employment.key} className={`experience_content experienceSection experience_content-${index % 2 === 0 ? "left" : "right"}`}>
					<div className="experienceSection_header">
						<div>
							{employment.location}
						</div>
					
						<div>
							{employment.date}
						</div>
					</div>

					<div className="experienceSection_content">
						<div className={"textContainer "  + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							{employment.description}
						</div>
					</div>
				</div>
			);
		});

		const educationItems = educations.map((edication, index) => {
			return(
				<div key={edication.key} className={`experience_content experienceSection experience_content-${index % educationsIndexing === 0 ? "left" : "right"}`}>
					<div className="experienceSection_header">
						<div>
							{edication.location}
						</div>
					
						<div>
							{edication.date}
						</div>
					</div>

					<div className="experienceSection_content">
						<div className={"textContainer "  + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							{edication.description}
						</div>
					</div>
				</div>
			);
		});

		const projectItems = projects.map((project, index) => {
			return(
				<div key={project.key} className={`experience_content experienceSection experience_content-${index % projectsIndexing === 0 ? "left" : "right"}`}>
					<div className="experienceSection_header">
						<div>
							{project.location}
						</div>
					
						<div>
							{project.date}
						</div>
					</div>

					<div className="experienceSection_content">
						<div className={"textContainer "  + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							{project.description}
						</div>
					</div>
				</div>
			);
		});

		return(
			<div className="experience content">
				<div className="leftFlex">
					<h1 className="content_header">Experience</h1>
				</div>

				<div className="experience_content experience_content-left">
					<h4>Employment</h4>
				</div>

				{employtmentItems}

				<div className={`experience_content  experience_content-${ educationsIndexing === 1 ? "left" : "right"}`}>
					<h4>Education</h4>
				</div>

				{educationItems}

				<div className={`experience_content  experience_content-${ projectsIndexing === 1 ? "left" : "right"}`}>
					<h4>Projects</h4>
				</div>

				{projectItems}
			</div>
		);
	};
}