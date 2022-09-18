import React from "react";
import {
  StyledStatisticWrapper,
  StyledStatistic,
  StyledStatisticPercent,
} from 'components/Statistics/Statistic.styled';
export default function Statistics({
  state,
  total,
  positivePercentage,
}) {
    return (
      <StyledStatisticWrapper>
        <StyledStatistic>Good: {state.good}</StyledStatistic>
        <StyledStatistic>Neutral: {state.neutral}</StyledStatistic>
        <StyledStatistic>Bad: {state.bad}</StyledStatistic>
        <StyledStatistic>Total: {total}</StyledStatistic>
        <StyledStatisticPercent>
          Positive feedback: {positivePercentage} %
        </StyledStatisticPercent>
      </StyledStatisticWrapper>
    );
}