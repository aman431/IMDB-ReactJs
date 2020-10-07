import React from 'react'
import './css/Home.css';
import Carousel from 'react-elastic-carousel';

function Home() {
    return (
        <div>
            <div className="top">
                <p>Amazon Original</p>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/MOLV-S1-01137-PMHouse-970x250-POST-Final-en-US-HO-PVD2765-KvObS-a9a98a6b-3fbe-4e11-952b-facb7a425310.jpg" alt=""/>
            </div>
            <div className="Carousel">
                 <Carousel>
                        <img src="https://i.ytimg.com/vi/Dywhn6BXauo/maxresdefault.jpg" alt=""/>
                    <img src="https://i.ytimg.com/vi/A_osxwXirGI/hqdefault.jpg" alt=""/>
                    <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/07/05/870575-dilbechara.jpg" alt="" />
                    <img src="https://i.ytimg.com/vi/Qapq4FB6mBg/maxresdefault.jpg" alt=""/>
                </Carousel>
            </div>
        </div>
    )
}


export default Home