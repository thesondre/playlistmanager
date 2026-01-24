import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Settings } from "./settings/settings";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Settings],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('playlistManager');
}
