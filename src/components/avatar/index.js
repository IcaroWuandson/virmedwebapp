import React from "react";
import styled from "styled-components";
import { colors } from "../../theme";

const AvatarWrapper = styled.div`
  width: ${(props) => props.size || "6.83vw"};
  height: ${(props) => props.size || "12.13vh"};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${colors.third};
  margin: 10px 0px;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar = ({ src, alt, size }) => {
  return (
    <AvatarWrapper size={size}>
      <AvatarImage src={src} alt={alt} />
    </AvatarWrapper>
  );
};

export default Avatar;
