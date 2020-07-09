import { PAGE } from "../helpers/page-constant"
import { KEY } from "../helpers/keycode-constants"
import MainContent from "./main-content";
import React from "react";
import TopBar from "./top-bar";
import { Swipeable } from 'react-swipeable'

import "./app-container.scss"

const FIRST_PAGE = Object.values(PAGE).sort()[0];
const LAST_PAGE = Object.values(PAGE).sort()[Object.values(PAGE).length - 1];

export default class AppContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: PAGE.INTRODUCTION,
		};
	}

	componentDidMount() {
		document.addEventListener("keyup", this.handleKeyUp);
	}

	componentWillUnmount() {
		document.removeEventListener("keyup", this.handleKeyUp);
	}

	handleKeyUp = event => {
		switch(event.keyCode) {
			case KEY.ARROW_LEFT:
				this.scrollLeft();
				break;
			case KEY.ARROW_RIGHT:
				this.scrollRight()
				break;
			default:
		}
	}

	scrollLeft = () => {
		if (this.state.currentPage - 1 >= FIRST_PAGE) {
			this.setCurrentPage(this.state.currentPage - 1);
		}
	}

	scrollRight = () => {
		if (this.state.currentPage + 1 <= LAST_PAGE) {
			this.setCurrentPage(this.state.currentPage + 1);
		}
	}

	setCurrentPage = page => {
		this.setState({
			currentPage: page,
		});

		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	render() {
		return (
			<Swipeable className="appContainer" style={this.appHeight} onSwipedLeft={ this.scrollRight } onSwipedRight={ this.scrollLeft }>
				<TopBar currentPage={this.state.currentPage} setCurrentPage={this.setCurrentPage} />
				<MainContent currentPage={this.state.currentPage} />
			</Swipeable>
		);
	}
}