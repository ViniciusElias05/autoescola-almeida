import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Container from "components/atoms/Container";

const Content = styled.div`
  margin: 40px 0;
`

const section = ({ children }) => (
  <Container>
    <Content>
      {children}
    </Content>
  </Container>
);

section.defaultProps = {
  children: undefined,
};

section.propTypes = {
  children: PropTypes.node,
};

export default section;
