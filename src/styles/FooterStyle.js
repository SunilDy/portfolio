import styled from 'styled-components';

const FooterStyle = styled.footer`
    > p {
        color: #555;
        font-weight: light;
        text-align: center;
    }
    > #social {
        width: 50%;
        margin: 0 auto 10px auto;
        font-size: 30px;

        display: flex;
        justify-content: space-evenly;
        
        > * {
            color: #444;
            transform: .2s ease;
            cursor: pointer;
        }
    }
    @media (max-width: 850px) {
        > p {
            font-size: 14px;
        }
        > #social {
            font-size: 25px;
        }
    }
    @media (max-width: 400px) {
        > p {
            font-size: 12px;
        }
        > #social {
            font-size: 20px;
        }
    }
`;

export {
    FooterStyle
}