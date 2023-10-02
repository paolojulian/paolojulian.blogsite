import Workarea from '@/app/custom-components/application-ui/landing-pages/with-fixed-menu/components/workarea';
import React, { FunctionComponent } from 'react';

interface Props {
  // no props
}

const LandingPageWithFixedMenuPage: FunctionComponent<Props> = async (
  props
) => {
  return <Workarea />;
};

export default LandingPageWithFixedMenuPage;
