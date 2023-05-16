import React from 'react';
import { Heading, VideoContainer, VideoElement } from './style';

function Interviews() {
    return (
        <div>
            <Heading>Interviews</Heading>
            <VideoContainer>
                <VideoElement src="https://www.youtube.com/watch?v=ABjYbGp9uVg" controls />
            </VideoContainer>
        </div>

    );
}

export default Interviews;
