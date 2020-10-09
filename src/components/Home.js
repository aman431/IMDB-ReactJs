import React from 'react'
import './css/Home.css';
import Carousel from 'react-elastic-carousel';
import {ImageData} from './ImageData';
import Featured from './featured';
import * as IoIcons from 'react-icons/io';
import QueueSharpIcon from '@material-ui/icons/QueueSharp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Fan from './fan';

class Home extends React.Component{

    render(){
        //const {items} = this.state;
        return (
            <div className="home">
                <div className="top">
                    <p>Amazon Original</p>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/MOLV-S1-01137-PMHouse-970x250-POST-Final-en-US-HO-PVD2765-KvObS-a9a98a6b-3fbe-4e11-952b-facb7a425310.jpg" alt=""/>
                </div>
                <div className="header_main">
                    <div className="Carousel">
                        <Carousel>
                            {ImageData.map((items, index) => {
                                return(
                                    <div key={index} className={items.cName}>
                                        <div style={{background:"linear-gradient(to bottom, transparent 0%, transparent 65%, rgba(0,0,0,0.35) 83.5%, rgba(0,0,0,0.75) 100%)"}}className="image">
                                            {items.title}
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    </div>
                    <div className="browser">
                        <h1>Browse Trailer <span><ArrowForwardIosIcon /></span></h1>
                        <iframe className="t_video" width="300" height="400" src="https://www.youtube.com/embed/uYUa4SN29RM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="featured">
                    <Featured />
                </div>
                <div className="watch">
                    <h2 className="what_to_watch">What to watch</h2>
                    <a href="#">Browse our What to Watch Page <span><IoIcons.IoIosArrowForward /></span></a>
                </div>
                <div className="watchlist">
                    <div className="F_Y_W">
                        <div className="h_b"></div>
                        <a href="#">From Your WatchList <span><IoIcons.IoIosArrowForward /></span></a>
                        <div className="center">
                            <div className="icon"><QueueSharpIcon/></div>
                            <p>Sign in to access your Watchlist<br />
                                <span>Save shows and movies to keep track of what you want to watch</span>
                            </p>
                            <div className="sign">
                                <a href="#">Sign in to IMDB</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Fan />
            </div>
        )
    }
}

export default Home