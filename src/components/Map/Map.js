import * as React from "react";
import { Wrapper } from './MapStyled';

const Map = ({ src }) => {
  return (
    <Wrapper>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: '1px solid #d2d2d2' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      />
    </Wrapper>
  );
}

export default Map;
