import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Icon from '../meterial/Icon';
import Language from '../Language/Language';
import {
  Wrapper, Title, IdeologyWrapper, CircleWrapper, Circle, CircleTitle, SubTitle,
  IdeologyCardWrapper, Card,
} from './IdeologyStyled';

const Ideology = ({ data }) => {
  const theme = useTheme();
  return (
    <Wrapper>
      <Title theme={theme}><Language id="philosophy_of_management" /></Title>
      <IdeologyWrapper>
        {data.map((item, index) => (
          <React.Fragment key={`ideology-circle-${index}`}>
            {index !== 0 && (
              <Icon
                name="add"
                size="42"
                color="#364A9C"
                margin="0 20px"
              />
            )}
             <CircleWrapper theme={theme}>
              <Circle>
                <Icon name={item.icon} size="42" color="#000" />
                <CircleTitle><Language id={item.title} /></CircleTitle>
              </Circle>
              <SubTitle><Language id={item.subTitle} /></SubTitle>
            </CircleWrapper>
          </React.Fragment>
        ))}
      </IdeologyWrapper>
      <IdeologyCardWrapper>
        {data.map((item, index) => (
          <React.Fragment key={`ideology-card-${index}`}>
            {index !== 0 && (
              <Icon
                name="add"
                size="42"
                color="#364A9C"
                margin="20px"
              />
            )}
            <Card key={`ideology-card-${index}`}>
              <Circle>
                <Icon name={item.icon} size="42" color="#000" />
                <CircleTitle><Language id={item.title} /></CircleTitle>
              </Circle>
              <SubTitle><Language id={item.subTitle} /></SubTitle>
            </Card>
          </React.Fragment>
          ))}
      </IdeologyCardWrapper>
    </Wrapper>
  );
}

export default Ideology;
