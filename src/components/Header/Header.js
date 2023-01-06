import * as React from 'react';
import { navigate } from 'gatsby';
import Icon from '../meterial/Icon';
import IconButton from '../meterial/IconButton';
import Select from '../meterial/Select';
import Menu from '../meterial/Menu';
import Drawer from '../meterial/Drawer';
import List from '../meterial/List';
import Navigation from '../Navigation/Navigation';
import { languageOptions } from '../../constant/language';
import Logo from '../../images/logo.png';
import { getCurrentPageLanguage } from "../../util/translation";
import {
  HeaderStyled, LogoWrapperStyled, LogoStyled, LanguageWrapperStyled, HideMenuStyled,
  BackspaceIconWrapper, TopStyled,
} from './HeaderStyled';


export default function Header({ menu, isHome }) {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  let currentLang = getCurrentPageLanguage(currentPath);
  if (currentLang === '') currentLang = 'ko';
  const onChangeLanguage = target => {
    let url = currentPath;
    if (target === 'ko') {
      if (currentLang === 'en') {
        url = currentPath.replace('/en/', '/');
      } else if (currentLang === 'de') {
        url = currentPath.replace('/de/', '/');
      }
    } else if (target === 'en') {
      if (currentLang === 'ko') {
        url = `/en${currentPath}`;
      } else if (currentLang === 'de') {
        url = url.replace('/de/', '/en/');
      }
    } else if (target === 'de') {
      if (currentLang === 'ko') {
        url = `/de${currentPath}`;
      } else if (currentLang === 'en') {
        url = url.replace('/en/', '/de/');
      }
    }
    navigate(url);
  }
  const onClickHome = () => {
    let url = '/';
    if (currentLang === 'en') url = '/en/';
    if (currentLang === 'de') url = '/de/';
    navigate(url);
  }
  return (
    <HeaderStyled>
      <LogoWrapperStyled>
        <LogoStyled
          onClick={onClickHome}
        >
          <img src={Logo} alt="Logo" height="60px" />
        </LogoStyled>
      </LogoWrapperStyled>
      <Navigation menu={menu} />
      <LanguageWrapperStyled>
        <Icon name="language" color="#555" sx={{ marginRight: '10px' }} />
        <Select
          value={currentLang}
          options={languageOptions}
          onChange={e => onChangeLanguage(e.target.value)}
          sx={{ minWidth: '101px' }}
        />
      </LanguageWrapperStyled>
      <BackspaceIconWrapper isHome={isHome}>
        <IconButton name="backspace" color="#555" onClick={() => navigate(-1)} />
      </BackspaceIconWrapper>
      <HideMenuStyled isHome={isHome}>
        <Menu
          id="language-select"
          Button={<IconButton name="language" color="#555" />}
          value={currentLang}
          menus={languageOptions}
          onClick={onChangeLanguage}
        />
        <Drawer
          anchor="right"
          Button={<IconButton name="menu" color="#555" />}
        >
          <>
            <TopStyled>
              <LogoStyled
                onClick={onClickHome}
              >
                <img src={Logo} alt="Logo" width="120px" />
              </LogoStyled>
              <Menu
                id="mobile-language-select"
                Button={(
                  <IconButton name="language" color="#555" />
                )}
                value={currentLang}
                menus={languageOptions}
                onClick={id => onChangeLanguage(id)}
              />
            </TopStyled>
            <List
              sx={{ width: '250px' }}
              list={menu}
              onClickListItem={id => {
                let url = `/${id.replace('_', '/')}`;
                if (currentLang === 'en') url = `/en${url}`;
                else if (currentLang === 'de') url = `/de${url}`;
                navigate(url);
              }}
            />
          </>
        </Drawer>
      </HideMenuStyled>
    </HeaderStyled>
  );
}