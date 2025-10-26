import styled from "styled-components";

export const ResponsiveImageContainer = styled.div`
  width: 100%;
  height: 100%;

  picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0.5rem;
  }
`;
