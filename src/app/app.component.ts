import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first-component/first.component';
import { FirstModule } from './modules/first.module';
import { viewContentComponent } from './components/viewChild/viewchild.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent,FirstModule,viewContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interview_prac';
}
