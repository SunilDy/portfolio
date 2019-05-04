import styled from 'styled-components'

const Container = styled.div`
    width: 700px;
    /* min-height: 640px; */
    padding: 45px 30px;
    background: rgb(255, 254, 254);
    border: 1.8px solid rgb(223, 220, 220);
    border-radius: 6px;
    box-shadow: 0 8px 10px 7px rgba(211, 206, 206, .6);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    > #pic {
      max-width: 150px;
      max-height: 150px;
      margin: 15px;
      border-radius: 50%;
      border: grey 3px solid .7;
      object-fit: fill;
      padding-right: 15px;

      > img {
          max-width: 150px;
          max-height: 150px;
          border-radius: 50%;
          border: rgb(228, 225, 225) 4px solid;
      }
    }
    > #content {
        color: #333;
        > h1 {
            font-weight: 500;
            font-size: 35px;
            padding-bottom: 15px;
            color: #555;
        }
        > p {
            font-weight: 300;
            font-size: 17px;
            padding-bottom: 15px;
            line-height: 24px;
            word-spacing: 2px;
        }

        > #buttons {
            display: flex;
            justify-content: space-evenly;
        }
    }

    @media (max-width: 850px) {
        width: 600px;
        padding: 30px 25px;
        > #content {
            > h1 {  
                font-size: 30px;
                padding-bottom: 15px;
                color: #555;
            }
            > p {
                font-size: 16px;
                line-height: 22px;
                word-spacing: 1.5px;
            }
        }
    }
    @media (max-width: 850px) {
        width: 550px;

        > #pic {
            max-width: 120px;
            max-height: 120px;
            padding-right: 5px;
            margin: 0;

            > img {
                max-width: 120px;
                max-height: 120px;
            }
        }
    }
    
    > #content {
        > h1 {
            font-size: 28px;
            font-weight: bold;
        }
    }

    @media (max-width: 660px) {
        box-shadow: none;
        border: none;
        flex-direction: column;
        
        > #pic {
            margin: 0;
            padding: 0;
        }

    }

    @media (max-width: 600px) {
        width: 500px;
    }

    @media (max-width: 530px) {
        width: 450px;
    }

    @media (max-width: 470px) {
        width: 400px;
        > #content {
            > h1 {
                font-size: 24px;
            }
            > p {
                font-size: 15px;
            }
        }
    }
    @media (max-width: 400px) {
        width: 370px;
        > #pic {
            max-width: 120px;
            max-height: 120px;
            margin-bottom: 20px;

            > img {
                max-width: 120px;
                max-height: 120px;
            }
        }
        > #content {
            > h1 {
                font-size: 30px;
            }
    }
    @media (max-width: 370px) {
        width: 300px;
        > #pic {
            max-width: 100px;
            max-height: 100px;
            > img {
                max-width: 100px;
                max-height: 100px;
            }
        }
        > #content {
            > h1 {
                font-size: 28px;
            }
        }
    }

    @media (max-width: 300px) {
        width: 270px;
        > #content {
            > p {
                line-height: 20px;
                color: #555;
            }
        }
    }

`;

const Button = styled.button`
            background: dodgerblue;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 12px 18px;
            cursor: pointer;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 3.5px;
            transition: .2 ease;
    
            &:hover {
                transform: scale(0.9);
            }

            &:focus {
                outline: none;
            }
            
            @media (max-width: 850px) {
                padding: 10px 12px;
            }

            @media (max-width: 470px) {
                padding: 8px 10px;
                font-size: 10px;
            }
            @media (max-width: 470px) {
                padding: 5px 7px;
                font-size: 10px;
                letter-spacing: 1.5px;
            }
`;

export {
    Container, Button
}