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
const imagess = [{ picture: Cart, Title: "", Subtitle: "" }, { picture: Cart, Title: "", Subtitle: "" }, { picture: Cart, Title: "", Subtitle: "" }, { picture: Cart, Title: "", Subtitle: "" }, { picture: Cart, Title: "", Subtitle: "" }];

const images = [Cart, Grad, Red, Stage];

const FeatureStories = () => {
    return (
        <ImageGrid>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <Image src={image} alt="placeholder" />
                    <ImageOverlay>
                        <ImageTitle>Case The Baddie</ImageTitle>
                        <ImageSubtitle>Top 10 baddies of the month</ImageSubtitle>
                    </ImageOverlay>
                </ImageContainer>
            ))}
            <Title>Featured Stories</Title>
        </ImageGrid>
    );
};


export default FeatureStories;


