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
							I am currently employed as a full stack developer where my assignments include everything from developing the front- and back-end of our web application as well as our native student clients. The front-end technologies are mainly comprised of JavaScript using AngularJS (we are currently in the process of moving to the latest version of Angular), the back-end of Go using app engine and GCP as our host. The back-end work also includes maintaining and developing new REST APIs. Developing the native student clients includes working with C++, Objective-C++, Electron and chromeOS since we support Mac, PC, Chromebook and iOS. Though, the main bulk of work in the client is AngularJS just like the web application.
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
							Employed as an IT consultant where my main assignment was located at Telia. At Telia my work included automated test framework development and management for browser and smartphone testing, development of test PoC’s, automated test maintenance for the Telia Play+ service, etc. Outside of the Telia assignment I also worked on in house projects such as maintenanc eof a patient management system for dental care built with ASP.NET and assisting in R&D for VR/AR applications.
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
							Orientation game development – construction. The focus of the education was primarily system development during game development. The majority of the courses had a focus on programming in Java and C++ as well as system science but also modeling through use case- and UML diagrams and SQL database management. The university education also provided experience of data structure- and algorithm analysis as well as test-driven development using Java, it consisted of unit-, integration- and systemtesting.
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
							This digital portfolio/cv is my first react project where I've mainly worked with AngularJS and Angular before. I wanted to try something new and decided use react to rebuild my online portofilo, the development took a few days without any major hickups. In the end I did like the process of working with react, especially for a small perosnal project it was pretty great!
						</div>
					</div>
				</div>
			</div>
		);
	};
}