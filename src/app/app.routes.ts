import { Routes } from '@angular/router';
import { TrackerComponent } from './page/tracker/tracker.component';

export const routes: Routes = [
  {
    path: '',
    component: TrackerComponent,
    pathMatch: 'full',
  },
];
