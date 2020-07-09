import { PAGE } from "../../helpers/page-constant";
import React from "react";

import "./experience.scss";

export default class Experience extends React.Component {
	render() {
		return(
			<div className="experience content">
				<h1 className="content_header">Experience</h1>

				<div className="experience_content experience_content-left">
					<h5>Employment</h5>
				</div>

				<div className="experience_content experience_content-left experienceSection">
					<div className="experienceSection_header">
						<div>
							DigiExam, Stockholm
						</div>
					
						<div>
							Jan 2019 - Present
						</div>
					</div>

					<div className="experienceSection_content">
						<div className={"textContainer "  + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							I am currently employed as a full stack developer where my workincludes everything from developing the front- and back-end of our web application as well as our native student clients. The front-endtechnologies are mainly comprised of JavaScript using AngularJS (we are currently in the process of moving to Angular 9), the back-end of Go using app engine and GCP as our host. The back-end work also includes maintaining and developing new REST APIs. Developing the native student clients includes working with C++, Objective-C++, Electron and chromeOS since we support Mac, PC, Chromebook and iOS. Though, the main bulk of work in the client is AngularJS just like the web application.
						</div>
					</div>
				</div>

				<div className="experience_content experience_content-right experienceSection">
					<div className="experienceSection_header">
						<div>
							Kentor / Sopra Steria, Stockholm
						</div>
					
						<div>
							Jun 2017 – Dec 2018
						</div>
					</div>

					<div className="experienceSection_content">
						<div className={"textContainer " + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							Employed as an IT consultant where my main assignment waslocated at Telia. At Telia my work included automated testframework development and management for browser and smartphone testing, development of test PoC’s, automated testmaintenance for the Telia Play+ service, etc. Outside of the Teliaassignment I also worked on in house projects such as maintenanceof a patient management system for dental care built with ASP.NETand assisting in R&D for VR/AR applications.
						</div>
					</div>
				</div>

				<div className="experience_content experience_content-left">
					<h5>Education</h5>
				</div>

				<div className="experience_content experience_content-left experienceSection">
					<div className="experienceSection_header">
						<div>
							Bachelor’s degree in Computer Science (180p), Stockholm University
						</div>
					
						<div>
							Aug 2014 – Jun 2017
						</div>
					</div>

					<div className="experienceSection_content">
						<div className={"textContainer " + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							Orientation game development – construction. The focus of the education was primarily system development duringgame development. The majority of the courses had a focus onprogramming in Java and C++ as well as system science but also modeling through use case- and UML diagrams and SQL databasemanagement. The university education also provided experience of data structure- and algorithm analysis as well as test-driven development using Java, it consisted of unit-, integration- and systemtesting.
						</div>
					</div>
				</div>

				<div className="experience_content experience_content-right">
					<h5>Projects</h5>
				</div>

				<div className="experience_content experience_content-right experienceSection">
					<div className="experienceSection_header">
						<div>
							Digital portfolio/cv, react
						</div>
					
						<div>
							Jul 2020
						</div>
					</div>

					<div className="experienceSection_content">
						<div className={"textContainer " + (this.props.currentPage === PAGE.EXPERIENCE ? "textContainer-visible" : "")}>
							This digital portfolio/cv was the first react project I ever worked on (besides some very small scale dabbling in react). I wanted to try something new and decided to rebuild my online portofilo in using react, the process took a few days without any major hickups. In the end I did like the process of working with react, for smaller perosnal projects it was a great experience!
						</div>
					</div>
				</div>
			</div>
		);
	};
}