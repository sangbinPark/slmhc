import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #364A9C;
  color: #fff;
  flex-direction: column;
  padding: 10px;
  &:nth-child(even) {
    background-color: #f2f2f2;
    color: #000;
  }
  &:hover {
    cursor: pointer;
  }
  position: relative;
  @media (max-width: 1280px) {
    width: 22.5%;
  }
  @media (max-width: 1024px) {
    width: 22.5%;
    height: 225px;
  }
  @media (max-width: 768px) {
    width: 45%;
    &:nth-child(1) {
      background-color: #364A9C;
      color: #fff;
      svg {
        color: #fff !important;
      }
    }
    &:nth-child(2) {
      background-color: #f2f2f2;
      color: #000;
      svg {
        color: #000 !important;
      }
    }
    &:nth-child(3) {
      background-color: #f2f2f2;
      color: #000;
      svg {
        color: #000 !important;
      }
    }
    &:nth-child(4) {
      background-color: #364A9C;
      color: #fff;
      svg {
        color: #fff !important;
      }
    }
  }
`;

export const BGImage = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary1.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

export const BGImage1 = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary2.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

export const BGImage2 = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary3.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

export const BGImage3 = styled.div`
  position: absolute;
  opacity: 0.25;
  background-image: url(/images/summary4.jpg);
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  &:hover {
    opacity: 0.4;
  }
`;

export const Title = styled.div`
  margin-top: 5px;
  text-align: center;
`;