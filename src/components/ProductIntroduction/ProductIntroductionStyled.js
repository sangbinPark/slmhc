import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  margin-bottom: 15px;
`;

export const ImageArea = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-right: 5px;
`;
