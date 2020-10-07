import React from 'react'
import './css/Home.css';
import Carousel from 'react-elastic-carousel';
import {ImageData} from './ImageData';
import Featured from './featured';

class Home extends React.Component{

    render(){
        //const {items} = this.state;
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
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className="featured">
                    <Featured />
                </div>
            </div>
        )
    }
}

export default Home