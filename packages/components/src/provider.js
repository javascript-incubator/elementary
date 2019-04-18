import React from 'react';
import styled from '@emotion/styled';
import { themeTransformer } from '@elementary/standard';
import { ThemeProvider } from 'emotion-theming';
import {
  shape,
  arrayOf,
  oneOfType,
  array,
  object,
  string,
  number,
} from 'prop-types';
import { font } from './constants';

const Base = styled.div([], props => ({
  fontFamily: props.theme.font || font,
}));

const Provider = ({ theme, ...props }) => (
  <ThemeProvider theme={themeTransformer(theme)}>
    <Base {...props} />
  </ThemeProvider>
);

Provider.propTypes = {
  theme: shape({
    breakpoints: arrayOf(string),
    space: arrayOf(number),
    fontSizes: arrayOf(number),
    weights: arrayOf(number),
    colors: oneOfType([object, array]),
    font: string,
    monospace: string,
  }),
};

Provider.defaultProps = {
  theme: {
    breakpoints: [],
  },
};

export default Provider;
