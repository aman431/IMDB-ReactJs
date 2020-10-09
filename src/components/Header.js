import React from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import QueueSharpIcon from '@material-ui/icons/QueueSharp';

function Header() {

	return (
		<nav className="header">
			<Link to='/'>
				<img
					className="header_logo"
					src="data:image/png;base64,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"
					alt=""
				/>
			</Link>
			<div className='header_Search'>
				<input type='text' className='header_searchInput' placeholder="Search IMDB"/>
				<SearchIcon className="header_searchIcon" />
			</div>
			<div className="imdb_pro">
				<Link to="login" className="header_link">
					<div className='header_option'>
						<span className="header_optionLineOne"><b>IMDbPro</b></span>
					</div>
				</Link>
			</div>
			<div className="boder">
			</div>

			<div className="watchlist">
				<Link to="/watchlist" className="header_link">
					<div className='watchlist'>
						<p><span><QueueSharpIcon /></span> Watchlist </p>
					</div>
				</Link>
			</div>
			<div className="header_nav">
				<Link to="signin" className="header_link">
					<div className='header_option'>
						<span className="signin">Sign In</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}
export default Header;
