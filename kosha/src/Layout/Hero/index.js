import React from 'react';
import { HeroContainer, HeroImage } from './styleComponents';
import Carti from "./HeroPhoto/cart.jpg";
function Hero() {
    return (
        <HeroContainer>
            <HeroImage src={Carti} />
        </HeroContainer>
    );
}

export default Hero;
