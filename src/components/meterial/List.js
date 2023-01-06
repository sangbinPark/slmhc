import * as React from "react";
import { default as MeterialList} from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Language from '../Language/Language';

export default function List({ list, onClickListItem, ...rest }) {
  const [state, setState] = React.useState({});
  const handleClick = id => {
    setState({
      ...state,
      [id]: !state[id]
    });
  };
  return (
    <MeterialList {...rest}>
      {list.map(item => (
        <React.Fragment key={`list-${item.id}`}>
          <ListItem disablePadding>
            <ListItemButton onClick={item.childs ? () => handleClick(item.id) : () => onClickListItem(item.id)}>
              <ListItemText primary={item.langKey ? <Language id={item.langKey} /> : item.label} />
              {item.childs && (
              <>
                {state[item.id] ? <ExpandLess /> : <ExpandMore />}
              </>
              )}
            </ListItemButton>
          </ListItem>
          {item.childs && (
            <Collapse in={state[item.id]} timeout="auto" unmountOnExit>
              <MeterialList component="div" disablePadding>
              {item.childs.map(childItem => (
              <ListItem key={`child-list-${childItem.id}`} disablePadding sx={{ pl: 2}}>
                <ListItemButton onClick={() => onClickListItem(childItem.id)}>
                  <ListItemText primary={childItem.langKey ? <Language id={childItem.langKey} /> : childItem.label} />
                </ListItemButton>
              </ListItem>
              ))}
              </MeterialList>
            </Collapse>
          )}
          <Divider />
        </React.Fragment>
      ))}
    </MeterialList>
  );
}