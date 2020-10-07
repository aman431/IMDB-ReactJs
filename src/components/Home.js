import React from 'react'
import './css/Home.css';
import Carousel from 'react-elastic-carousel';
import {ImageData} from './ImageData';

class Home extends React.Component{
    state={
        items:[
            {
                id: 2,
                title: <img src="https://i.ytimg.com/vi/Qapq4FB6mBg/maxresdefault.jpg" alt=""/>
            },
            {
                id: 3,
                title: <img src="https://m.media-amazon.com/images/M/MV5BMjUyMTFiMTMtMmNkMy00NzU2LWI4NjQtYTU2OGM2Zjc3ZTNmXkEyXkFqcGdeQWRvb2xpbmhk._V1_UX477_CR0,0,477,268_AL_.jpg" alt=""/>
            },
            {
                id: 4,
                title: <img src="https://i.pinimg.com/originals/e3/32/34/e332345715162cbbeeee9f29a495d3fe.jpg" alt=""/>
            },
            {
                id: 5,
                title: <img src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/07/05/870575-dilbechara.jpg" alt="" />
            }
        ]
    }

    render(){
        const {items} = this.state;
        return (
            <div>
                <div className="top">
                    <p>Amazon Original</p>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/MOLV-S1-01137-PMHouse-970x250-POST-Final-en-US-HO-PVD2765-KvObS-a9a98a6b-3fbe-4e11-952b-facb7a425310.jpg" alt=""/>
                </div>
                <div className="Carousel">
                    <Carousel>
                        {ImageData.map((items, index) => {
                            return(
                                <div key={index} className={items.cName}>
                                    <div style={{background:"linear-gradient(to bottom, transparent 0%, transparent 65%, rgba(0,0,0,0.35) 83.5%, rgba(0,0,0,0.75) 100%)"}}className="image">
                                        {items.title}
                                    </div>
                                    <div className="poster">
                                        {items.poster}
                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Home