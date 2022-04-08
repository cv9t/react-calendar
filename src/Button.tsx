import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const Button: FC = () => {
  return <StyledButton>button</StyledButton>;
};

export { Button };
