import * as React from "react";
import Language from '../Language/Language';
import { Wrapper, ParagraphStyle } from './ParagraphStyled';

const Paragraph = ({ sentences }) => {
  return (
    <Wrapper>
      <ParagraphStyle>
          {sentences.map((sentence, index) => (
            <React.Fragment key={`Paragraph_${index}`}>
              <Language id={sentence} />
              <br />
            </React.Fragment>
          ))}
      </ParagraphStyle>
    </Wrapper>
  );
}

export default Paragraph;
