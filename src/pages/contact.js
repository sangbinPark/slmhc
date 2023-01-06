import * as React from "react";
import PageLayout from '../components/PageLayout/PageLayout';
import Map from '../components/Map/Map';
import Contact from '../components/Contact/Contact';
import { getCurrentPageLanguage } from "../util/translation";

const ContactPage = ({ pageContext }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  let currentLang = getCurrentPageLanguage(currentPath);
  if (currentLang === '') currentLang = 'ko';
  return (
    <PageLayout pageTitle="contact" pageContext={pageContext}>
       <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.0863993249936!2d127.06605173374209!3d36.912198581188335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b25e90a1eb9a3%3A0x676f7dc651fbe475!2zKOyjvCnsoJXsm5DsoITsnpA!5e0!3m2!1sko!2skr!4v1667121180162!5m2!1sko!2skr" />
      <Contact
        call={currentLang === 'ko' ? '041-532-8752' : '+82-41-532-8752'}
        fax="041-532-8751"
        mail="msshim-08@koreacarrier.co.kr"
      />
    </PageLayout>
  );
}

export default ContactPage;
