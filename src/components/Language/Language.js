import * as React from "react";
import { FormattedMessage } from "react-intl";

const Language = ({ id }) => {
  return (
    <FormattedMessage
      id={id}
      defaultMessage={id}
    />
  )
}

export default Language;