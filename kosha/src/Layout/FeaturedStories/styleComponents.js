import styled from "styled-components";

export const ImageGrid = styled.div`
    margin-top:5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 1px;
    border-radius: 10px;
    overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
`;

export const Title = styled.h1`
position:absolute;
color:white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 5rem;
text-align: center;
`;

export const ImageContainer = styled.div`
    position: relative;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const ImageTitle = styled.h2`
    font-size: 1.5rem;
    color: #fff;
`;

export const ImageSubtitle = styled.p`
    font-size: 1rem;
    color: #fff;
`;
