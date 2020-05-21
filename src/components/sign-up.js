import React from "react";
import styled from "styled-components";
import CallToAction from "./call-to-action";

const StyledSignUp = styled.section`
  margin: 0 auto;
  max-width: 860px;
  border-radius: 10px;
  background: hsl(217, 28%, 15%);
  padding: 55px 70px 35px;
  margin-bottom: 110px;
  text-align: center;
  box-shadow: 10px 10px 10px hsla(217, 28%, 5%, 50%);

  h3 {
    font-size: 34px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 35px;
  }

  p {
    max-width: 620px;
    line-height: 1.5em;
    margin: 0 auto 40px;
  }
`;

const StyledForm = styled.form`
  display: flex;

  input {
    flex-grow: 1;
    padding: 0 30px;
    border-radius: 100px;
    border: none;

    &::placeholder {
      font: inherit;
      color: rgba(0, 0, 0, 40%);
    }
  }

  button {
    margin-left: 30px;
  }
`;

const SignUp = () => (
  <StyledSignUp>
    <h3>Get early access today</h3>
    <p>
      It only takes a minute to sign up and our free starter tier is extremely
      generous. If you have any questions, our support team would be happy to
      help you.
    </p>
    <StyledForm>
      <input type="text" placeholder="email@example.com" />
      <CallToAction>Get Started For Free</CallToAction>
    </StyledForm>
  </StyledSignUp>
);

export default SignUp;
