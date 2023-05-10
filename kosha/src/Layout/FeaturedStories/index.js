import React from 'react';
import Cart from "./FeatureImages/cart.jpg";
import Grad from "./FeatureImages/grad.jpg";
import Red from "./FeatureImages/red.jpg";
import Stage from "./FeatureImages/stage.jpg";
import { ImageGrid, Title, Image, ImageContainer, ImageOverlay, ImageSubtitle, ImageTitle } from './styleComponents';


// const images = [Cart, Grad, Red, Stage];

// const FeatureStories = () => {
//     return (
//         <ImageGrid>
//             {images.map((image, index) => (
//                 <Image key={index} src={image} alt="placeholder" />
//             ))}
//             <Title>Featured Stories</Title>
//         </ImageGrid>
//     );
// };
const images = [{ picture: Cart, Title: "Case The Studios", Subtitle: "Producers of the month" },
{ picture: Grad, Title: "Case The Fashion", Subtitle: "Fashion brands of the month" },
{ picture: Red, Title: "Case The Baddie", Subtitle: "Baddies Of The Month" },
{ picture: Stage, Title: "Case The Staff", Subtitle: "Meet The Team" }];

// const images = [Cart, Grad, Red, Stage];

const FeatureStories = () => {
    return (
        <ImageGrid>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <Image src={image.picture} alt="placeholder" />
                    <ImageOverlay>
                        <ImageTitle>{image.Title}</ImageTitle>
                        <ImageSubtitle>{image.Subtitle}</ImageSubtitle>
                    </ImageOverlay>
                </ImageContainer>
            ))}
            <Title>Featured Stories</Title>
        </ImageGrid>
    );
};


export default FeatureStories;


