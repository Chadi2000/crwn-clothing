import styled, {css} from "styled-components";

const subColor = 'grey';
const mainColor = 'black';


const shrinkLabelStyles = css
`
top: -14px;
font-size: 12px;
color:${mainColor} ;
`

const FormInputLabel = styled.label`
color: $sub-color;
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

.group{
    position: relative;
    margin: 45px 0;
    .form-input{
        background: none;
        background-color: white;
        color:$sub-color;
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid $sub-color;
        border-top: none;
        border-right: none;
        border-left: none;
        margin: 25px 0;

        &:focus{
            outline: none;
        }
        &:focus ~ .form-input-label{
            @include shrinkLabel();
        }
    }

    input[type='password']{
        letter-spacing: 0.3em;
    }

    


}