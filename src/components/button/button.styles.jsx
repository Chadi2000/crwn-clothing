
import styled from "styled-components";

export const BaseButton = styled.button`
min-width: 165px;
width: auto;
min-height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
//padding: 0px 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: "Open Sans Condensed", serif;
font-weight: bolder;
border: 1px solid;
cursor: pointer;
display: flex;
justify-content: center;
transition: all 0.25s ease 0s;
&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
}
`;

export const GoogleSignInButton = styled(BaseButton)`
background-color: #4285f4;
color:white;
&:hover{
    background-color: #357ae8;
    border: none;
}
`;

export const InvertedButton = styled(BaseButton)`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
    background-color: black;
    color: white;
    border:none;
}
`;