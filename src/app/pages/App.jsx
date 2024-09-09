import React from 'react';

import { isAuthenticated } from '../../client/state/auth';

import Auth from '../templates/auth/Auth';
import Client from '../templates/client/Client';

import { CrossSigningEventHandler, MessagesBackupEventHandler } from '../../shire/EventsChannel';

function App() {
  // TODO turn back cross-signing encryption based on shire settings
  CrossSigningEventHandler();
  MessagesBackupEventHandler();
  return isAuthenticated() ? <Client /> : <Auth />;
}

export default App;
