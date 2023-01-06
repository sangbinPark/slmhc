import * as React from "react";
import { navigate } from 'gatsby';
import { useTheme } from '@mui/material/styles';
import Menu from '../meterial/Menu';
import Language from '../Language/Language';
import { getCurrentPageLanguage } from "../../util/translation";
import {
  NavStyled, NavMenuStyled, NavMenuItemStyled,
} from './NavigationStyled';

const Navigation = ({ menu }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const currentMenu = currentPath.split('/').splice(1, 2).join('_');
  let currentLang = getCurrentPageLanguage(currentPath);
  const theme = useTheme();
  return (
    <NavStyled>
        <NavMenuStyled>
          {menu.map(item => item.childs ? (
            <Menu
              key={item.id}
              id="submenu-select"
              Button={(
                <NavMenuItemStyled theme={theme}>
                  <Language id={item.langKey} />
                </NavMenuItemStyled>
              )}
              value={currentMenu}
              menus={item.childs.map(childItem => ({ ...childItem, label: childItem.langKey }))}
              onClick={id => {
                const url = currentLang !== '' ? `/${currentLang}/${id.replace('_', '/')}` : `/${id.replace('_', '/')}`;
                navigate(url);
              }}
              useHover
            />
          ) : (
            <NavMenuItemStyled
              key={item.id}
              theme={theme}
              onClick={() => {
                const url = currentLang !== '' ? `/${currentLang}/${item.id}` : `/${item.id}`;
                navigate(url);
              }}
            >
              <Language id={item.langKey} />
            </NavMenuItemStyled>
          ))}
        </NavMenuStyled>
      </NavStyled>
  );
};

export default Navigation;