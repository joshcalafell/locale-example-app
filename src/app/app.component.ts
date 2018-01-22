import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Internationalization (i18n) Example';
  now = new Date();

  languages = [
    { locale: 'en', display: 'English', link: 'http://localhost:5280/en/' },
    { locale: 'fr', display: 'Français', link: 'http://localhost:5281/fr/' },
    { locale: 'ch', display: 'Chinese (Traditional)', link: 'http://localhost:5282/ch/' }
  ];

  imgTitle = 'Angular Logo';
  /*tslint:disable*/
  logo = 'https://pbs.twimg.com/media/DSZwnjSW0AA8vU_.jpg';
  /*tslint:enable*/

}
