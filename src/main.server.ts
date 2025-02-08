import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

if (typeof window === 'undefined') {
  (global as any).firebase = null;
}

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
