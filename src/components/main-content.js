import { PAGE } from "../helpers/page-constant";
import Experience from "./content/experience";
import Games from "./content/games";
import Introduction from "./content/introduction";
import Misc from "./content/misc";
import React from "react";
import Skills from "./content/skills";

import "./main-content.scss"

export default class MainContent extends React.Component {
	previousPage = null;
	newPage = this.props.currentPage;

	shouldComponentUpdate(newProps) {
		if (newProps.currentPage !== this.props.currentPage) {
			this.previousPage = this.props.currentPage;
			this.newPage = newProps.currentPage;
			return true;
		}

		return false;
	}


	render() {
		return (
			<div className="mainContent">
				<div className="mainContent_edge"></div>

				<div className="mainContent_middle">
					{<div className={ "contentContainer " +
						(this.newPage > PAGE.INTRODUCTION ? "contentContainer-left " : "") +
						(this.newPage < PAGE.INTRODUCTION ? "contentContainer-right " : "") +
						(this.newPage === PAGE.INTRODUCTION ? "contentContainer-current " : "") +
						(this.previousPage > PAGE.INTRODUCTION ? "contentContainer-wasLeft " : "") +
						(this.previousPage < PAGE.INTRODUCTION ? "contentContainer-wasRight " : "")
					}>
						<Introduction currentPage={this.props.currentPage}/>
					</div>}

					{<div className={ "contentContainer " +
						(this.newPage > PAGE.SKILLS ? "contentContainer-left " : "") +
						(this.newPage < PAGE.SKILLS ? "contentContainer-right " : "") +
						(this.newPage === PAGE.SKILLS ? "contentContainer-current " : "") +
						(this.previousPage > PAGE.SKILLS ? "contentContainer-wasLeft " : "") +
						(this.previousPage < PAGE.SKILLS ? "contentContainer-wasRight " : "")
					}>
						<Skills currentPage={this.props.currentPage}/>
					</div>}

					{<div className={ "contentContainer " +
						(this.newPage > PAGE.EXPERIENCE ? "contentContainer-left " : "") +
						(this.newPage < PAGE.EXPERIENCE ? "contentContainer-right " : "") +
						(this.newPage === PAGE.EXPERIENCE ? "contentContainer-current " : "") +
						(this.previousPage > PAGE.EXPERIENCE ? "contentContainer-wasLeft " : "") +
						(this.previousPage < PAGE.EXPERIENCE ? "contentContainer-wasRight " : "")
					}>
						<Experience currentPage={this.props.currentPage}/>
					</div>}

					{<div className={ "contentContainer " +
						(this.newPage > PAGE.GAMES ? "contentContainer-left " : "") +
						(this.newPage < PAGE.GAMES ? "contentContainer-right " : "") +
						(this.newPage === PAGE.GAMES ? "contentContainer-current " : "") +
						(this.previousPage > PAGE.GAMES ? "contentContainer-wasLeft " : "") +
						(this.previousPage < PAGE.GAMES ? "contentContainer-wasRight " : "")
					}>
						<Games currentPage={this.props.currentPage}/>
					</div>}

					{<div className={ "contentContainer " +
						(this.newPage > PAGE.MISC ? "contentContainer-left " : "") +
						(this.newPage < PAGE.MISC ? "contentContainer-right " : "") +
						(this.newPage === PAGE.MISC ? "contentContainer-current " : "") +
						(this.previousPage > PAGE.MISC ? "contentContainer-wasLeft " : "") +
						(this.previousPage < PAGE.MISC ? "contentContainer-wasRight " : "")
					}>
						<Misc currentPage={this.props.currentPage}/>
					</div>}
				</div>


				<div className="mainContent_edge"></div>
			</div>
		);
	}
}