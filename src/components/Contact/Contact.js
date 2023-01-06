import * as React from "react";
import IconButton from '@mui/material/IconButton';
import Tooltip from '../meterial/Tooltip';
import Icon from '../meterial/Icon';
import Language from '../Language/Language';
import {
  Wrapper, Row, Cell, CellWrapper,
  LinkMail, LinkCall,
} from './ContactStyled';

const Contact = (props) => {
  const [open, setOpen] = React.useState({
    address: false,
    call: false,
    fax: false,
    mail: false,
  });
  const handleTooltipClose = () => () => {
    setOpen({
      address: false,
      call: false,
      fax: false,
      mail: false,
    });
  };
  const handleTooltipOpen = type => {
    setOpen({
      ...open,
      [type]: true,
    });
  };
  const onClick = type => () => {
    navigator.clipboard.writeText(props[type]);
    handleTooltipOpen(type);
    setTimeout(handleTooltipClose(type), 700);
  };
  const {  call, fax, mail } = props;
  return (
    <Wrapper>
      <Row>
        <Cell>
          <CellWrapper isTitle>
            <Icon name="location" color="#364A9C" size="18" sx={{ marginRight: '5px' }} />
            <span><Language id="address" /></span>
          </CellWrapper>
        </Cell>
        <Cell>
          <CellWrapper>
            <span><Language id="address_detail" /></span>
            <Tooltip
              title="copied to clipboard"
              useClick
              handleTooltipClose={handleTooltipClose('address')}
              open={open.address}
            >
              <IconButton onClick={onClick('address')}>
                <Icon name="copy" color="#555" size="18" sx={{ marginLeft: '5px' }} />
              </IconButton>
            </Tooltip>
          </CellWrapper>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <CellWrapper isTitle>
            <Icon name="call" color="#364A9C" size="18" sx={{ marginRight: '5px' }} />
            <span><Language id="tel" /></span>
          </CellWrapper>
        </Cell>
        <Cell>
          <CellWrapper>
            <LinkCall href={`tel:${call}`}>{call}</LinkCall>
            <Tooltip
              title="copied to clipboard"
              useClick
              handleTooltipClose={handleTooltipClose('call')}
              open={open.call}
            >
              <IconButton onClick={onClick('call')}>
                <Icon name="copy" color="#555" size="18" sx={{ marginLeft: '5px' }} />
              </IconButton>
            </Tooltip>
          </CellWrapper>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <CellWrapper isTitle>
            <Icon name="fax" color="#364A9C" size="18" sx={{ marginRight: '5px' }} />
            <span><Language id="fax" /></span>
          </CellWrapper>
        </Cell>
        <Cell>
          <CellWrapper>
            <span>{fax}</span>
            <Tooltip
              title="copied to clipboard"
              useClick
              handleTooltipClose={handleTooltipClose('fax')}
              open={open.fax}
            >
              <IconButton onClick={onClick('fax')}>
                <Icon name="copy" color="#555" size="18" sx={{ marginLeft: '5px' }} />
              </IconButton>
            </Tooltip>
          </CellWrapper>
        </Cell>
      </Row>
      <Row>
        <Cell>
          <CellWrapper isTitle>
            <Icon name="mail" color="#364A9C" size="18" sx={{ marginRight: '5px' }} />
            <span><Language id="email" /></span>
          </CellWrapper>
        </Cell>
        <Cell>
          <CellWrapper>
            <LinkMail onClick={() => { window.open(`mailto:${mail}`); }}>{mail}</LinkMail>
            <Tooltip
              title="copied to clipboard"
              useClick
              handleTooltipClose={handleTooltipClose('mail')}
              open={open.mail}
            >
              <IconButton onClick={onClick('mail')}>
                <Icon name="copy" color="#555" size="18" sx={{ marginLeft: '5px' }} />
              </IconButton>
            </Tooltip>
          </CellWrapper>
        </Cell>
      </Row>
    </Wrapper>
  );
}

export default Contact;
