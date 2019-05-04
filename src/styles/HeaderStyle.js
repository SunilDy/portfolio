import styled from 'styled-components';
import { Link } from 'gatsby'

const HeaderDiv = styled.header`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 150px;
    text-align: center;
    
    > #links {
        display: flex;
        justify-content: space-around;
        text-transform: uppercase;
    }

`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #777;

    > h1 {
        font-family: 'Roboto Slab';
        font-size: 40px;
        margin-bottom: 10px;
        font-weight: bolder;
        
        background: rgb(9, 120, 231);
        color: transparent;
        text-shadow: rgba(245, 245, 245, 0.4) 3px 5px 8px;
        -webkit-background-clip: text;

    }

    @media (max-width: 600px) {
        width: 120px;
        margin: 0 auto;
        > h1 {
            font-size: 30px;
        }
    }

`

export {
    HeaderDiv, StyledLink
}