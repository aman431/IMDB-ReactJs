import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './css/featured.css';

export default class featured extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true
          };
        return (
            <div className="main">
                <h1>Featured Today</h1>
                <div className="img1">
                    <Slider {...settings}>
                            <div className="featured_image1">
                                <img src="https://nofilmschool.com/sites/default/files/styles/facebook/public/movies_1.jpg?itok=9UGyDX11" alt="" />
                            </div>
                            <div className="featured_image2">
                                <img src="https://sofy.tv/blog/wp-content/uploads/2017/12/upcoming-hollywood-movies-you-shouldnt-miss-1400x653-1505901970_1100x513.jpg" alt=""/>
                            </div>
                            <div className="featured_image3">
                                <img src="https://img.cinemablend.com/filter:scale/quill/6/9/d/c/2/9/69dc2909cae3078a07451575ebc551d7578ff876.jpg?mw=600" alt="" />
                            </div>
                            <div className="featured_image4">
                                <img src="https://3.bp.blogspot.com/-nPg8OKwl77Q/WVx2F4Mb5KI/AAAAAAAAAnA/iB7GID_yxNgQeGdjwSHr7eXyv7ggmvpgQCLcBGAs/s640/2017%2BList%2Bof%2BUpcoming%2BHollywood%2BMovies.jpg" alt="" />
                            </div>
                            <div className="featured_image5">
                                <img src="https://www.filmibeat.com/img/2015/11/25-1448432861-7.jpg" alt="" />
                            </div>
                    </Slider>
                </div>
            </div>
        )
    }
}
