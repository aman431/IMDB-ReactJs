import React from 'react';
import * as IoIcons from 'react-icons/io';
import './css/fan.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
class fan extends React.Component{
	render(){
		var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true
        };
		return(
			<div className="main1">
				<div class="fan">
					<div className="v_b"></div>
					<div className="ff">
						<a href="#">Fan Favorites<span><IoIcons.IoIosArrowForward /></span><br /></a>		
						<p>This Week's top TV and Movies</p>
					</div>			
				</div>
				<Slider {...settings}>
					<div className="fav1">
						<div className="block">
							<img src="https://www.discountdisplays.co.uk/our-blog/wp-content/uploads/robin-hood-cookie-cutter-691x1024.jpeg" alt="" />
							<div className="star">⭐<p>7.1</p></div>
							<div className="name"><a href="#">ROBIN HOOD</a></div>
							<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
							<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
						</div>
					</div>
					<div className="fav1">
						<div className="block">
							<img src="https://www.bestmovieposters.co.uk/wp-content/uploads/2019/05/captain-marvel-movie-poster.jpg" alt="" />
							<div className="star">⭐<p>6.5</p></div>
							<div className="name"><a href="#">CAPTAIN MARVEL</a></div>
							<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
							<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
						</div>
					</div>
					<div className="fav1">
						<div class="block">
							<img src="https://images-na.ssl-images-amazon.com/images/I/61tM93KYzpL.jpg" alt="" />
							<div className="star">⭐<p>9.1</p></div>
							<div className="name"><a href="#">DOCTOR STRANGE</a></div>
							<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
							<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
						</div>
					</div>
					<div className="fav1">
					<div class="block">
						<img src="https://media1.popsugar-assets.com/files/thumbor/_3gNe3UquxviHgsEhBmqz00h16U/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/08/26/660/n/1922283/54a254d85d63f1da12afe7.18057844_/i/Marvel-Black-Widow-Movie-Poster.jpg" alt="" />
						<div className="star">⭐<p>7.1</p></div>
						<div className="name"><a href="#">BLACK WIDOW</a></div>
						<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
						<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
					</div>
					</div>
					<div className="fav1">
					<div class="block">
						<img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt="" />
						<div className="star">⭐<p>8.9</p></div>
						<div className="name"><a href="#">BLACK PANTHER </a></div>
						<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
						<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
					</div>
					</div>
					<div className="fav1">
						<div class="block">
							<img src="https://www.bestmovieposters.co.uk/wp-content/uploads/2019/01/inCmCRl_.jpeg" alt="" />
							<div className="star">⭐<p>7.5</p></div>
							<div className="name"><a href="#">VENOM</a></div>
							<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
							<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
						</div>
					</div>
					<div className="fav1">
						<div class="block">
							<img src="https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg" alt="" />
							<div className="star">⭐<p>8.6</p></div>
							<div className="name"><a href="#">BLOOD SHOT</a></div>
							<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
							<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
						</div>
					</div>
					<div className="fav1">
						<div class="block">
							<img src="https://i.pinimg.com/originals/c1/00/6d/c1006d50bdb7ab3fa9258019671e2309.jpg" alt="" />
							<div className="star">⭐<p>8.8</p></div>
							<div className="name"><a href="#"> THOR</a></div>
							<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
							<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
						</div>
					</div>
					<div className="fav1">
						<div class="block">
							<img src="https://s3.sky.ch/img/moviecover/ch/images/17d/65386d.jpg" alt="" />
							<div className="star">⭐<p>6.9</p></div>
							<div className="name"><a href="#">THE GREAT WALL</a></div>
							<div className="button"><a href="#"><AddIcon /><span>Watchlist</span></a></div>
							<div className="trailer"><a href="#"><PlayArrowIcon /><span>Trailer</span></a></div>
						</div>
					</div>
				</Slider>
			</div>
		);
	}
}
export default fan;