import styled, {css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';


const shrinkLabelStyles = css
`
top: -14px;
font-size: 12px;
color:${mainColor} ;
`

export const FormInputLabel = styled.label`
color: ${subColor};
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: all 300ms ease 0s;
    line-height: 1;

    ${({shrink})=> shrink && shrinkLabelStyles};
`

export const Input = styled.input`
background-color: white;
        color:${subColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${subColor};
        border-top: none;
        border-right: none;
        border-left: none;
        margin: 25px 0;

        &:focus{
            outline: none;
        }
        &:focus ~ ${FormInputLabel}{
            ${shrinkLabelStyles};
        }
`

export const Group = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password']{
        letter-spacing: 0.3em;
    }
`

