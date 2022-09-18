import styled from 'styled-components';

export const StyledFeedbackButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
`;

export const StyledFeedbackButton = styled.button`
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 255, 0.316);
    border: 1px solid black;
    border-radius: 10px;
    :hover {
        background-color: blue;
        color: white;
        scale: 1.2;
    }
`