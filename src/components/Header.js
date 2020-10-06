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
					src="https://pmcvariety.files.wordpress.com/2017/02/imdb1.png"
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
				<Link to="login" className="header_link">
					<div className='watchlist'>
						<p><span><QueueSharpIcon /></span> Watchlist </p>
					</div>
				</Link>
			</div>
			<div className="header_nav">
				<Link to="login" className="header_link">
					<div className='header_option'>
						<span className="signin">Sign In</span>
					</div>
				</Link>
			</div>
		</nav>
	);
}
export default Header;
