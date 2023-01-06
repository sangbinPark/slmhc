import * as React from "react";
import PropTypes from 'prop-types';
import Menu from '@mui/icons-material/Menu';
import Language from '@mui/icons-material/Language';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FaxIcon from '@mui/icons-material/Fax';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FactoryOutlinedIcon from '@mui/icons-material/FactoryOutlined';
import Manufacturing from '@mui/icons-material/PrecisionManufacturingOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import TimelineIcon from '@mui/icons-material/Timeline';
import Map from '@mui/icons-material/MapOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const ICON_LIST = {
  menu: Menu,
  language: Language,
  call: CallIcon,
  mail: MailIcon,
  home: HomeIcon,
  location: LocationOnIcon,
  fax: FaxIcon,
  copy: ContentCopyIcon,
  backspace: KeyboardBackspaceIcon,
  factory: FactoryOutlinedIcon,
  manufacture: Manufacturing,
  list: ListAltOutlinedIcon,
  timeline: TimelineIcon,
  map: Map,
  handShake: HandshakeOutlinedIcon,
  eco: LocalFloristOutlinedIcon,
  add: AddCircleOutlineOutlinedIcon,
}

export default function Icon({ name, size, color, margin, ...rest }) {
  const IconComponent = ICON_LIST[name];
  return (
    <IconComponent
      style={{
        color,
        fontSize: `${size}px`,
        margin,
      }}
      {...rest}
    />
  );
}

Icon.prototype = {
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 24,
}