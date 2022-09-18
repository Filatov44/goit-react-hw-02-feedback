import React from 'react';
import {
  StyledFeedbackButtonWrapper,
  StyledFeedbackButton,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeavFeedback }) {
  return (
    <StyledFeedbackButtonWrapper>
      {options.map(option => {
        return (
          <StyledFeedbackButton
            type="button"
            key={option}
            onClick={() => onLeavFeedback(option.toLowerCase())}
          >
            {option}
          </StyledFeedbackButton>
        );
      })}
    </StyledFeedbackButtonWrapper>
  );
}
