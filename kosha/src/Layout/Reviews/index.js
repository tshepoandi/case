import React from 'react'
import { Image, ImagesDiv, ReviewText, ReviewsDiv, Text } from './styled'

const Reviews = () => {
  return (
    <ReviewsDiv>
        <Text>Reviews</Text>
        <ReviewText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ReviewText>
        <ImagesDiv>
            <Image src={ process.env.PUBLIC_URL + '/grad.jpg'}/>
            <Image src={ process.env.PUBLIC_URL + '/grad.jpg'}/>
            <Image src={ process.env.PUBLIC_URL + '/grad.jpg'}/>
        </ImagesDiv>
    </ReviewsDiv>
    
  )
}

export default Reviews