import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import Timeline from '../../components/meterial/Timeline';
import { getCurrentPageLanguage } from "../../util/translation";

const HistoryPage = ({ pageContext }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  let currentLang = getCurrentPageLanguage(currentPath);
  if (currentLang === '') currentLang = 'ko';
  return (
    <PageLayout pageTitle="history" pageContext={pageContext}>
      <div style={{ width: '100%' }}>
        <Timeline
          timelines={[
            { date: currentLang === 'en' ? '04.2022' : '2022.04', desc: 'history_10' },
            { date: currentLang === 'en' ? '03.2022' : '2022.03', desc: 'history_9' },
            { date: currentLang === 'en' ? '01.2022' : '2022.01', desc: 'history_8' },
            { date: currentLang === 'en' ? '09.2021' : '2021.09', desc: 'history_7' },
            { date: currentLang === 'en' ? '08.2021' : '2021.08', desc: 'history_6' },
            { date: currentLang === 'en' ? '07.2021' : '2021.07', desc: 'history_5' },
            { date: currentLang === 'en' ? '03.2015' : '2015.03', desc: 'history_4' },
            { date: currentLang === 'en' ? '12.2012' : '2012.12', desc: 'history_3' },
            { date: currentLang === 'en' ? '01.2011' : '2011.01', descs: ['history_2', 'history_1', 'history_0'] },
          ]}
        />
      </div>
    </PageLayout>
  );
}

export default HistoryPage;
