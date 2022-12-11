import React from 'react';
import styled from 'styled-components';

const MainCell = styled.div`
  text-align: left;
  width: 100%;
  span {
    color: $disableControlTextAN;
    clear: both;
    &::before {
      content: '\200b';
    }
  }
  sup {
    font-size: xx-small;
    padding-right: 3px;
  }

  h5 {
    font-size: 14px;
    color: $inputDropdownTextColorAN;
    padding-top: 3px;
    font-weight: bold;

    &::before {
      content: '\200b';
    }
  }
`;

const cell = ({ children }) => {
  return <MainCell>{children}</MainCell>;
};

export default MainCell;
