import * as React from 'react';
import Language from '../Language/Language';
import { getCurrentPageLanguage } from "../../util/translation";
import {
  FooterStyled, WrapperStyled, NameStyled, ContactStyled, CopyrightStyled
} from './FooterStyled';

export default function Footer({ type }) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  let currentLang = getCurrentPageLanguage(currentPath);
  if (currentLang === '') currentLang = 'ko';
  const call = currentLang === 'ko' ? '041-532-8752' : '+82-41-532-8752';
  return (
    <FooterStyled>
      <WrapperStyled type={type}>
        <NameStyled>JUNGWON ELECTRONICS</NameStyled>
        <ContactStyled><Language id="address_detail" /> / <a href={`tel:${call}`}>{call}</a></ContactStyled>
        <CopyrightStyled>Copyright 2022 Jungwon Electronics co.,Ltd. All rights reserved.</CopyrightStyled>
      </WrapperStyled>
    </FooterStyled>
  );
}