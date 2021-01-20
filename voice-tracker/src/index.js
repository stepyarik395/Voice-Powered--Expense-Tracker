import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
ReactDOM.render(
  <SpeechProvider appId="3928dff1-af60-4a3e-a1b8-b0ae112ee48f" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
