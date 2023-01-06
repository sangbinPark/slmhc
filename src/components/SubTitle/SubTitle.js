import * as React from 'react';
import { navigate } from 'gatsby';
import IconButton from '../meterial/IconButton';
import Menu from '../meterial/Menu';
import Language from '../Language/Language';
import { getCurrentPageLanguage } from "../../util/translation";
import {
  WrapperStyled, NaviWrapperStyled, SpanStyled, MenuItemStyled
} from './SubTitleStyled';

const getMenu = (path, menu) => {
  const currentMenuList = [];
  if (path) {
    const [parent, child] = path.split('/').splice(1, 2);
    const parentMenu = menu.find(menuItem => menuItem.id === parent);
    if (parentMenu) {
      currentMenuList.push(parentMenu);
      if (child) {
        const childMenu = parentMenu.childs.find(menuItem => menuItem.id.split('_')[1] === child);
        currentMenuList.push(childMenu);
      }
    }
  }
  return currentMenuList;
}

const SubTitle = ({ pageTitle, menu }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  let currentLang = getCurrentPageLanguage(currentPath);
  if (currentLang === '') currentLang = 'ko';
  let deletedLangPath = currentPath;
  if (currentLang === 'en') deletedLangPath = currentPath.replace('/en/', '/');
  if (currentLang === 'de') deletedLangPath = currentPath.replace('/de/', '/');
  const currentMenuList = getMenu(deletedLangPath, menu);
  const currentMenu = currentPath.split('/').splice(1, 2).join('_');
  const onClickHome = () => {
    let url = '/';
    if (currentLang === 'en') url = '/en/';
    if (currentLang === 'de') url = '/de/';
    navigate(url);
  }
  return (
    <WrapperStyled>
      <h2><Language id={pageTitle} /></h2>
      <NaviWrapperStyled>
        <IconButton
          name="home"
          color="#555"
          onClick={onClickHome}
        />
        {currentMenuList.map((menu, index) => (
          <React.Fragment key={menu.id}>
            <SpanStyled isFirst={index === 0}>
              {'/'}
            </SpanStyled>
            {(currentMenuList.length === 1 || index === 0) ? (
              <Language id={menu.langKey} />
            ) : (
              <Menu
                id="navigaton-menu"
                Button={(
                  <MenuItemStyled>
                    <Language id={menu.langKey} />
                  </MenuItemStyled>
                )}
                value={currentMenu}
                menus={currentMenuList[0].childs.map(childItem => ({ ...childItem, label: childItem.langKey }))}
                onClick={id => {
                  let url = `/${id.replace('_', '/')}`;
                  if (currentLang === 'en') url = `/en${url}`;
                  else if (currentLang === 'de') url = `/de${url}`;
                  navigate(url);
                }}
              />
            )}
          </React.Fragment>
        ))}
      </NaviWrapperStyled>
    </WrapperStyled>
  );
}

export default SubTitle;