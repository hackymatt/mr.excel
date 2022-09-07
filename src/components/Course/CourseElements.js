import styled from 'styled-components'

export const CourseContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000;

    @media screen and (max-width: 1080px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 1370px;
    }
    
    @media screen and (max-width: 480px) {
        height: 1450px;
    }
`;

export const CourseWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;

    @media screen and (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const CourseCard = styled.a`
    text-decoration: none;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 380px;
    max-width: 300px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }

`

export const CourseImage = styled.img`
    max-height: 175px;
    width: 280px;
    margin-bottom: 10px;
    border-radius: 10px;
`

export const CourseTitle = styled.h1`
    font-size: 1rem;
    color: #000;
    margin-bottom: 20px;
    min-height: 25px;
    text-align: center;

    @media screen and (max-width:480px){
        font-size: 1rem;
    }
`
export const CourseDescription = styled.h1`
    color: #000;
    font-size: 0.9rem;
    margin-bottom: 10px;
    min-height: 50px;
    text-align: justify;
    font-weight: 500;
`

export const CoursePrice = styled.h1`
    font-size: 2rem;
    color: #000;
    padding: 10px;

    @media screen and (max-width:480px){
        font-size: 1.5rem;
    }
`

export const TopLine = styled.p`
    color: rgb(2, 116, 56);
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    color: #fff;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width:480px){
        font-size: 32px; 
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;