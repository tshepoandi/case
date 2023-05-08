import styled from "styled-components";

export const ImageGrid = styled.div `
    margin-top:5em;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    gap: 0px;
    border-radius: 10px;
    overflow: hidden;
`;

export const Image = styled.img `
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
`;

export const Title = styled.h1 `
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 2rem;
text-align: center;
`;