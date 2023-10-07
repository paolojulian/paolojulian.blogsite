import LandingWorkArea from '@/app/(main-layout)/_components/landing-work-area';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const LandingPage: FunctionComponent<Props> = async (props) => {
  return <LandingWorkArea />;
};

export default LandingPage;
