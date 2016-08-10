import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
  provideForms(),
  disableDeprecatedForms()
]).catch((err: any) => console.error(err));
