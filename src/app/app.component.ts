import {Component} from '@angular/core';

@Component({
    // selector: 'div#root',
    selector: 'app-root',
    // template: `<h1>Hello</h1>`,
    templateUrl: './app.component.html',
    // styles: [`h1 {color: red; font-size: 48px}`],
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Angular-learnjs-130624';
    // logoPath = '../favicon.ico';
    logoPath =
        'https://postila.ru/data/ca/1f/4c/ea/ca1f4cea8433c43d54096b312ca214d0575f7b2b8e745259f93843cd625edc8d.jpg';

    getObject(): string {
        return JSON.stringify({name: 'Egor'});
    }

    onClick(event: MouseEvent) {
        // eslint-disable-next-line no-console
        console.log('Button clicked', event);
    }

    onInput(event: Event) {
        // eslint-disable-next-line no-console
        console.log('Input', (event.target as HTMLInputElement).value);
    }
}
