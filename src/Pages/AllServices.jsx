import React from 'react';
import { ScrollRestoration } from 'react-router-dom';

import Metting from '../Components/Metting/Metting';
import Pricing from '../Components/Pricing/Pricing';
import Services from '../Components/Services/Services';
import PageHeader from '../Components/Shared/PageHeader/PageHeader';
import WorkeProcess from '../Components/WorkProcess/WorkProcess';

const AllServices = () => {
  return (
    <>
      <PageHeader heading={'Services All'} page={'Services All'} />
      <Services isHeading={false} />
      <Metting />
      <Pricing />
      <WorkeProcess />
      <ScrollRestoration />
    </>
  );
};

export default AllServices;
