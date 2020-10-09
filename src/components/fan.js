import React from 'react';
import * as IoIcons from 'react-icons/io';
import './css/fan.css';

function fan(){
	return(
		<div className="main1">
			<div class="fan">
				<div className="v_b"></div>
				<div className="ff">
					<a href="#">Fan Favorites<span><IoIcons.IoIosArrowForward /></span><br /></a>		
					<p>This Week's top TV and Movies</p>
				</div>			
			</div>
		</div>
	);
}
export default fan;