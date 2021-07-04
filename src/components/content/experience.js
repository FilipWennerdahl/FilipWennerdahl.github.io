import { PAGE } from "../../helpers/page-constant";
import React from "react";

import "./experience.scss";

class Exp {
	constructor(location, date, description) {
		this.key = Math.random();
		this.location = location
		this.date = date
		this.description = description
	}
}

const pageHeader = "Experience";

const employmentsHeader = "Employment";
const employments = [
	new Exp(
		"DigiExam, Stockholm",
		"Jan 2019 - Present",
		[
			{
				key: Math.random(),
				paragraph: "I am currently employed as a full stack developer where my assignments include everything from developing the front- and back-end of our web application as well as our native client applications."
			},
			{
				key: Math.random(),
				paragraph: "The front-end technologies are mainly comprised of JavaScript using a hybrid AngularJS/Angular app (we are currently in the process of moving to the latest version of Angular), the back-end of Go using App Engine and GCP as our host. The back-end work also includes maintaining and developing new REST APIs."
			},
			{
				key: Math.random(),
				paragraph: "Developing the native client applications includes working with C++, Objective-C++, Electron and chromeOS since we support Mac, PC, Chromebook and iOS. The latest addition is an Android app using Kotlin and several WebViews, this is a project where I lead research and specification."
			}
		]
	),
	new Exp(
		"Kentor / Sopra Steria, Stockholm",
		"Jun 2017 – Dec 2018",
		[
			{
				key: Math.random(),
				paragraph: "Employed as an IT consultant where my main assignment was located at Telia. At Telia my work included automated test framework development and management for browser and smartphone testing, development of test PoC’s, automated test maintenance for the Telia Play+ service, etc."
			},
			{
				key: Math.random(),
				paragraph: "Outside of the Telia assignment I also worked on in house projects such as maintenance of a patient management system for dental care built with ASP.NET and assisting in R&D for VR/AR applications."
			}
		]
	)
];

const educationsHeader = "Education";
const educations = [
	new Exp(
		"Bachelor’s degree in Computer Science (180p), Stockholm University",
		"Aug 2014 – Jun 2017",
		[
			{
				key: Math.random(),
				paragraph: "A 3 year program with focus on game development to learn the full process of creating a game from the design to release to end users."
			},
			{
				key: Math.random(),
				paragraph: "The majority of the courses had a focus on programming in Java and C++ as well as system science but also modeling through use case- and UML diagrams and SQL database management."
			},
			{
				key: Math.random(),
				paragraph: "The university education also provided experience of data structure- and algorithm analysis as well as test-driven development using Java, it consisted of unit-, integration- and systemtesting."
			}
		]
	)
];
const educationsIndexing = employments.length % 2 === 0 ? 1 : 0;

const projectsHeader = "Projects";
const projects = [
	new Exp(
		"Portfolio, React",
		"Jul 2020 - Ongoing project",
		[
			{
				key: Math.random(),
				paragraph: "This portfolio was an experiment by me to take on React, both to see it's potential but also to expand my toolbox. The backend is built using Golang and is hosted on GCP using App Engine and Firestore."
			},
			{
				key: Math.random(),
				paragraph: "If you are curious and want to check out the source you can find <a href='https://github.com/FilipWennerdahl/FilipWennerdahl.github.io' target='_blank'>the repository on my GitHub profile</a>. I try to keep it updated when I get a spark of inspiration or when there is new information to add."
			}
		]
	)
];
const projectsIndexing = educations.length % 2 === 0 ? 1 : 0;

export default class Experience extends React.Component {
	render() {
		const employtmentItems = employments.map((employment, index) => {
			return(
				<div key={employment.key} className={`experience_content experienceSection experience_content-${index % 2 === 0 ? "left" : "right"}`}>
					<div className="experienceSection_header">
						<h5>
							{employment.location}
						</h5>
					
						<h5>
							{employment.date}
						</h5>
					</div>

					<div className="experienceSection_content containerBGDown">
						<div className={"textContainer "  + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							{employment.description.map((descriptionItem) =>
								<p key={descriptionItem.key}>{descriptionItem.paragraph}</p>
							)}
						</div>
					</div>
				</div>
			);
		});

		const educationItems = educations.map((education, index) => {
			return(
				<div key={education.key} className={`experience_content experienceSection experience_content-${index % educationsIndexing === 0 ? "left" : "right"}`}>
					<div className="experienceSection_header">
						<h5>
							{education.location}
						</h5>
					
						<h5>
							{education.date}
						</h5>
					</div>

					<div className="experienceSection_content containerBGDown">
						<div className={"textContainer "  + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							{education.description.map((descriptionItem) =>
								<p key={descriptionItem.key}>{descriptionItem.paragraph}</p>
							)}
						</div>
					</div>
				</div>
			);
		});

		const projectItems = projects.map((project, index) => {
			return(
				<div key={project.key} className={`experience_content experienceSection experience_content-${index % projectsIndexing === 0 ? "left" : "right"}`}>
					<div className="experienceSection_header">
						<h5>
							{project.location}
						</h5>
					
						<h5>
							{project.date}
						</h5>
					</div>

					<div className="experienceSection_content containerBGDown">
						<div className={"textContainer "  + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							{project.description.map((descriptionItem) =>
								<p key={descriptionItem.key} dangerouslySetInnerHTML={{__html: descriptionItem.paragraph}}></p>
							)}
						</div>
					</div>
				</div>
			);
		});

		return(
			<div className="experience content">
				<div className="leftFlex">
					<h1 className="content_header">
						{pageHeader}
					</h1>
				</div>

				<div className="experience_content experience_content-left">
					<h4>
						{employmentsHeader}
					</h4>
				</div>

				{employtmentItems}

				<div className={`experience_content  experience_content-${ educationsIndexing === 1 ? "left" : "right"}`}>
					<h4>
						{educationsHeader}
					</h4>
				</div>

				{educationItems}

				<div className={`experience_content  experience_content-${ projectsIndexing === 1 ? "left" : "right"}`}>
					<h4>
						{projectsHeader}
					</h4>
				</div>

				{projectItems}
			</div>
		);
	};
}