/* eslint-disable import/prefer-default-export */
import ReactGA from 'react-ga4';

export const sendMetrics = (metrics) => {
  if (!window.location.href.includes('localhost')) {
    ReactGA.event(metrics);
  }
};
