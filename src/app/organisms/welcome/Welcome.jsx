import React from 'react';
import './Welcome.scss';

import Text from '../../atoms/text/Text';

import ShireSvg from '../../../../public/res/svg/shire-logo.svg';

function Welcome() {
  return (
    <div className="app-welcome flex--center">
      <div>
        <img className="noselect" src={ShireSvg} width="124" height="24" alt="Shire logo" />
        <Text className="app-welcome__heading" variant="h1" weight="medium" primary>Welcome to Shire</Text>
        <Text className="app-welcome__subheading" variant="s1">Your beloved digital campaign</Text>
      </div>
    </div>
  );
}

export default Welcome;
