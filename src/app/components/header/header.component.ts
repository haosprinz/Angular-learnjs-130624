import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    readonly title = 'Angular-learnjs-130624';
    readonly logoPath = '../../../favicon.ico';
    // readonly logoPath =
    //     'https://postila.ru/data/ca/1f/4c/ea/ca1f4cea8433c43d54096b312ca214d0575f7b2b8e745259f93843cd625edc8d.jpg';
}
