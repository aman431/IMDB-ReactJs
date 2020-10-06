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
                 <Carousel className="arrow">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/shazam/JKRY-S2-01598-DigitalROSStatic-ARSDE-970x250-Hero-ADSP-02-POST-e3968c9e-ac56-48a1-a705-2280146f1e05.jpg" alt=""/>
                </Carousel>
            </div>
        </div>
    )
}

export default Home