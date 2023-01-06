import * as React from 'react';
import { default as MeterialTimeline } from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Language from '../Language/Language';

const DateContent = styled.div`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const Content = styled.div`
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;


export default function Timeline({ timelines }) {
  const theme = useTheme();
  return (
    <MeterialTimeline position="alternate">
      {timelines.map((timeline, index) => (
        <TimelineItem key={`timeline_${index}`}>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <DateContent theme={theme}>{timeline.date}</DateContent>
            <Content>
              {timeline.descs
              ? timeline.descs.map((desc, index) => <div key={`desc_${index}`}><Language id={desc} /></div>)
              : <Language id={timeline.desc} />
              }
            </Content>
          </TimelineContent>
        </TimelineItem>
      ))}
    </MeterialTimeline>
  );
}
