import styled from "styled-components";

export const cartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

export const emptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;

.cart-dropdown-container{
    

    .empty-message{
        
    }

    .cart-items{
        height: 240px;
        display: flex;
        flex-direction: column;
        overflow: scroll;
    }

    button{
        margin-top: auto;
    }
}