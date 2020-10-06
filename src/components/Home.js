import React from 'react'
import './css/Home.css';
import Carousel from 'react-elastic-carousel';

function Home() {
    return (
        <div>
            <div className="top">
                <p>Amazon Original</p>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
            </div>
            <div className="Carousel">
                 <Carousel >
                    <img src="https://www.imdb.com/list/ls053181649/videoplayer/vi1887486233?ref_=hm_hp_i_8" alt=""/>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
                </Carousel>
            </div>
        </div>
    )
}

export default Home