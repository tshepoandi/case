import React from 'react';
import Cart from "./FeatureImages/cart.jpg";
import Grad from "./FeatureImages/grad.jpg";
import Red from "./FeatureImages/red.jpg";
import Stage from "./FeatureImages/stage.jpg";
import { ImageGrid, Title, Image } from './styleComponents';


const images = [Cart, Grad, Red, Stage];

const FeatureStories = () => {
    return (
        <ImageGrid>
            {images.map((image, index) => (
                <Image key={index} src={image} alt="placeholder" />
            ))}
            <Title>Featured Stories</Title>
        </ImageGrid>
    );
};

export default FeatureStories;


