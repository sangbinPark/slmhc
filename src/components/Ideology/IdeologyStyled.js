import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 100px 0;
  @media (max-width: 768px) {
    margin: 40px 0;
  } 
`;

export const Title = styled.p`
  font-size: 20px;
  margin: 0;
  margin-bottom: 40px;
  font-weight: 600;
  color: #364A9C;
`

export const IdeologyWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  } 
`;

export const CircleWrapper = styled.div`
  padding-bottom: 20px;
  width: 195px;
  height: 195px;
`;

export const Circle = styled.div`
  width: 195px;
  height: 195px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ededed;
  border-bottom: 1px solid #999;
`;

export const CircleTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-top: 5px;
  color: #555;
`;

export const SubTitle = styled.div`
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 3px solid #364A9C;
  width: 100%;
`;

export const IdeologyCardWrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;