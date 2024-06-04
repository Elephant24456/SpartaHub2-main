import styled from "styled-components";

export const Full = styled.div`
  height: 100vh;
`;

export const TopBanner = styled.div`
  background-image: url("/top_banner.png");
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 2000px 2000px inset;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 450px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TextContainer = styled.div`
  margin: 0 250px;
  font-size: 1.3rem;
  line-height: 150%;
`;

export const BottomBanner = styled.div`
  background-image: url("/bottom_banner.png");
  background-color: white;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  height: 500px;
`;

export const H1Container = styled.div`
  font-size: 1.9rem;
  font-weight: bold;
  margin: 15px 0px;
`;
