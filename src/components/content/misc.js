import { PAGE } from "../../helpers/page-constant";
import { SwatchesPicker } from "react-color";
import Cookies from "universal-cookie";
import React from "react"

import "./misc.scss"

const cookies = new Cookies();

export default class Misc extends React.Component {
	constructor(props) {
		super(props);

		let appThemeCookie = cookies.get("app-theme");

		this.state={
			currentColour: appThemeCookie ? appThemeCookie : { r: 100, g: 181, b: 246, hex: "#64b5f6" }
		}

		if(appThemeCookie) {
			cookies.set("app-theme", this.state.currentColour,  { path: "/", maxAge: 2600000, sameSite: true });
		}

		this.updateAppTheme(this.state.currentColour.r, this.state.currentColour.g, this.state.currentColour.b);
	}

	updateAppTheme = (r, g, b) => {
		let rgb = r + "," + g + "," + b;

		document.documentElement.style.setProperty("--app-theme", "rgba(" + rgb + ", 0.3)");
		document.documentElement.style.setProperty("--app-theme-button", "rgba(" + rgb + ", 0.15)");
		document.documentElement.style.setProperty("--app-theme-button-hover", "rgba(" + rgb + ", 0.27)");
		document.documentElement.style.setProperty("--app-theme-border", "rgba(" + rgb + ", 1)");
	}

	handleChangeColourComplete = (colour) => {
		this.setState({
			currentColour: { r: colour.rgb.r, g: colour.rgb.g, b: colour.rgb.b, hex: colour.hex}
		});

		this.updateAppTheme(colour.rgb.r, colour.rgb.g, colour.rgb.b);

		cookies.set("app-theme", this.state.currentColour,  { path: "/", maxAge: 2600000, sameSite: true });
	}

	render() {
		return(
			<div className="misc content">
				<h1 className="content_header">Contact and settings</h1>

				<div className="misc_content">
					<div className="miscContainer">
						<div className="miscContainer_header">
							<h5>Contact Information</h5>
						</div>

						<div id="contactInfoContainer">
							<div className={"miscContainer_content miscContainer_text " + 
							(this.props.currentPage === PAGE.MISC ? "miscContainer_text-visible" : "")
							}>
								Currently I'm mainly interested in full stack work but I'd also like to expand my app development skills. I am NOT interested in test automation or pure java development at this moment.
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-envelope-o" aria-hidden="true"></i>
									Email:
								</div>

								<a href="mailto:filipwennerdahl@hotmail.com">filipwennerdahl@hotmail.com</a>
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-linkedin-square" aria-hidden="true"></i>
									LinkedIn:
								</div>

								<a href="https://www.linkedin.com/in/filip-wennerdahl/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/filip-wennerdahl/</a>
							</div>

							<div className={"miscContainer_contactInfo " +
							(this.props.currentPage === PAGE.MISC ? "miscContainer_contactInfo-visible" : "")
							}>
								<div>
									<i className="fa fa-github-square" aria-hidden="true"></i>
									GitHub:
								</div>

								<a href="https://github.com/filipwennerdahl" target="_blank" rel="noopener noreferrer">https://github.com/filipwennerdahl</a>
							</div>
						</div>
					</div>

					<div className="miscContainer">
						<div className="miscContainer_header miscContainer_header">
							<h5>Colour Theme Picker</h5>
						</div>

						<div className="miscContainer_content miscContainer_content-center miscContainer_content-disclaimer">
								In choosing a colour you accept to store a cookie with the app theme information.
						</div>

						<SwatchesPicker 
								className="miscContainer_content-center"
								width="auto"
								height="auto"
								color={ this.state.currentColour.hex }
								onChangeComplete={ this.handleChangeColourComplete } />
					</div>

				</div>
			</div>
		);
	};
}