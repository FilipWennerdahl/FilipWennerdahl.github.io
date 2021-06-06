import { PAGE } from "../helpers/page-constant"
import React from "react";

import "./top-bar.scss"

export default class TopBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topOfPage: true,
		};
	}


	componentDidMount() {
		window.onscroll = () => {
		  if(window.pageYOffset < 10) {
			this.setState({
				topOfPage: true,
			});
		  } else {
			this.setState({
				topOfPage: false,
			});
		  };
		};
	  }
	  
	  componentWillUnmount() {
		window.onscroll = null;
	  }

	render() {
		return (
			<div className={"topBar " + (!this.state.topOfPage ? "topBar-floating" : "")}>
				<div className="topBar_container">
					<div className={"icon " + (this.props.currentPage === PAGE.INTRODUCTION? "icon-selected" : "")} onClick={() => this.props.setCurrentPage(PAGE.INTRODUCTION)} title="Introcution">
						<i className="fa fa-user-circle-o icon_small" aria-hidden="true"></i> 
					</div>

					<div className={"icon " + (this.props.currentPage === PAGE.SKILLS ? "icon-selected" : "")} onClick={() => this.props.setCurrentPage(PAGE.SKILLS)} title="Skills">
						<i className="fa fa-check-square icon_small" aria-hidden="true"></i>
					</div>

					<div className={"icon " + (this.props.currentPage === PAGE.EXPERIENCE ? "icon-selected" : "")} onClick={() => this.props.setCurrentPage(PAGE.EXPERIENCE)}>
						<i className="fa fa-list icon_small" aria-hidden="true"></i>
					</div>

					<div className={"icon " + (this.props.currentPage === PAGE.GAMES ? "icon-selected" : "")} onClick={() => this.props.setCurrentPage(PAGE.GAMES)}>
						<i className="fa fa-gamepad icon_gamepad" aria-hidden="true"></i>
					</div>

					<div className={"icon " + (this.props.currentPage === PAGE.MISC ? "icon-selected" : "")} onClick={() => this.props.setCurrentPage(PAGE.MISC)}>
						<i className="fa fa-circle-thin icon_circle" aria-hidden="true"></i>
						<i className="fa fa-ellipsis-h icon_small" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		);
	}
}