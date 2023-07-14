import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/// @ts-ignore
require('src/styles.scss?ngGlobalStyle');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
