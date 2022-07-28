import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

function LandingPage() {
  const fadeInAnimation = keyframes`${fadeIn}`;
  const FadeInDiv = styled.div`
    animation: 3s ${fadeInAnimation};
  `;

  return (
    <FadeInDiv>
      <p id="landing-page-title">DARK SOULS BOSS HELPER</p>
    </FadeInDiv>
  );
}

export default LandingPage;
