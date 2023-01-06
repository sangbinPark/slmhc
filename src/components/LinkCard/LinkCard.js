import * as React from "react";
import { navigate } from 'gatsby';
import Icon from '../meterial/Icon';
import Language from '../Language/Language';
import { getCurrentPageLanguage } from "../../util/translation";
import {
  Wrapper, Card, Title,
  BGImage, BGImage1, BGImage2, BGImage3,
} from './LinkCardStyled';

const getBGImage = index => {
  if (index === 0) {
    return <BGImage />;
  } else if (index === 1) {
    return <BGImage1 />;
  } else if (index === 2) {
    return <BGImage2/>;
  } else if (index === 3) {
    return <BGImage3 />;
  }
  return null;
}


const LinkCard = ({ data }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentLang = getCurrentPageLanguage(currentPath);
  return (
    <Wrapper>
      {data.map((item, index) => (
        <Card key={`summary-box-${index}`} onClick={() => {
          const url = currentLang !== '' ? `/${currentLang}${item.link}` : item.link;
          navigate(url);
        }}>
          {getBGImage(index)}
          <Icon name={item.icon} size="42" color={index % 2 === 0 ? '#fff' : '#000'} />
          <Title><Language id={item.title} /></Title>
        </Card>
      ))}
    </Wrapper>
  );
}

export default LinkCard;
