import React from 'react';
import { Heading, SubtitleText, VideoContainer, VideoElement } from './style';

function Interviews() {
    return (
        <div>
            <Heading>Interviews</Heading>
            <SubtitleText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SubtitleText>
            <VideoContainer>
                <VideoElement src="https://www.youtube.com/watch?v=ABjYbGp9uVg" controls />
            </VideoContainer>
        </div>

    );
}

export default Interviews;
