import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import CarrierTable from '../../components/table/CarrierTable';

const CarrierPage = ({ pageContext }) => {
  return (
    <PageLayout pageTitle="carrier_developer" type="Table" pageContext={pageContext}>
      <CarrierTable />
    </PageLayout>
  );
}

export default CarrierPage;
