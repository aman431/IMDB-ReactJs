import React from 'react';
import * as IoIcons from 'react-icons/io';
import './css/fan.css';

function fan(){
	return(
		<div className="main">
			<div class="center">
				<div className="h_b"></div>
					<a href="#">Fan Favorite <span><IoIcons.IoIosArrowForward /></span></a>
			</div>
		</div>
	);
}
export default fan;