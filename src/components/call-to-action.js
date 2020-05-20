import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 100px;
  border: none;
  background: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
`;

const CallToAction = ({ children }) => <StyledButton>{children}</StyledButton>;

export default CallToAction;
