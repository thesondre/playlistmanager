import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Settings } from "./settings/settings";
import { Mp3display } from "./mp3display/mp3display";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Settings, Mp3display],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('playlistManager');
}
