import React from 'react'
import styled from 'styled-components';  
function StyledComponent() {
    const Title = styled.h1`  
            font-family: Arial;  
            font-size: 35px;  
            text-align: center;  
            color: palevioletred;  
            `;
    return (
        <>
            <Title>My name is Mohammad Mateen</Title>
        </>
    )
}
export default StyledComponent