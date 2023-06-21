import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import Container from "components/atoms/Container";

const Content = styled.div`
  padding: 40px 0;
  ${props => props.inverse && css`
  background-color: #f7f7f7;
  `}

  h2{
    margin-top: 0;
  }
`

const section = ({ inverse, children }) => (
  <Content inverse={inverse}>
    <Container>
      {children}
    </Container>
  </Content>
);

section.defaultProps = {
  children: undefined,
  inverse: false
};

section.propTypes = {
  children: PropTypes.node,
  inverse: PropTypes.bool
};

export default section;