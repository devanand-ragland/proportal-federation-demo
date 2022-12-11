import React from 'react';
import styled from 'styled-components';


const CameraImage = styled.img`
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
  text-align: center;
`;

const image = ({ children }) => {
  return (
    <CameraImage>
      {children}
      <br />
    </CameraImage>
  );
};

export default CameraImage;
