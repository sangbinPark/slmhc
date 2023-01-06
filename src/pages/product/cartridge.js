import * as React from "react";
import PageLayout from '../../components/PageLayout/PageLayout';
import CartridgeTable from '../../components/table/CartridgeTable';

const CartridgePage = ({ pageContext }) => {
  return (
    <PageLayout pageTitle="cartridge" type="Table" pageContext={pageContext}>
      <CartridgeTable />
    </PageLayout>
  );
}

export default CartridgePage;
