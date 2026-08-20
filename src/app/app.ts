import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  ngAfterViewInit(): void {

    const script = document.createElement('script');

    script.src = '/script.js';

    script.onload = () => {

      console.log('Portfolio script loaded successfully.');

      const initPortfolio =
        (window as any).initPortfolio;

      if (typeof initPortfolio === 'function') {

        console.log('Calling initPortfolio...');

        initPortfolio();

      } else {

        console.error(
          'initPortfolio() was not found.'
        );

      }

    };

    script.onerror = () => {

      console.error(
        'Portfolio script failed to load.'
      );

    };

    document.body.appendChild(script);
  }

}
