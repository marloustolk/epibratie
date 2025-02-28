import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { Drawer } from 'primeng/drawer';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'app-root',
    imports: [ButtonModule, DialogModule, Drawer, ProgressSpinnerModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  menuVisible = false;
  dialogVisible = false;
  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Epibratie")
  }
}
