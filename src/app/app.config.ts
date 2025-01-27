import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};

export const settings = {
  title: 'splimo',
  version: '0.1.0',
  apiUrl: 'https://ini-tracker.de/splimo',
  navigation: {
    staticMenu: [
      { label: 'Home', path: '' },
      { label: 'New Scene', action: () => console.log('New Scene') },
    ]
  }
}
