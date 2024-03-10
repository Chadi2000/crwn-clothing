import styled from "styled-components";


export const ProductCartContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

img{
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
}

button{
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    visibility: hidden;
}

&:hover{
    img{
        opacity: 0.8;
    }
    button{
        visibility: visible;
    }
}



`

export const Footer = styled.div`
width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
    font: 18px Arial, Helvetica, sans-serif;
`




