import { Component, OnInit } from '@angular/core';
import { EventService } from '@parvathyg/services';
import { NavToolComponent } from './nav-tool/nav-tool.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'child-app';
  public notification: string;
  public navTools: any;
  public constructor(private eventService: EventService) { }

  public ngOnInit() {
    this.navTools = [{ "name": "App1", "component": NavToolComponent, icon: "notifications.svg" }, { "name": "App2", "component": NavToolComponent, icon: "help.svg" }];
    this.eventService.on('show_notification', (data => this.filterNotification(data)));
    this.eventService.on('nav_action', (data => this.externalAction(data)));
  }

  public onNavAction(action) {
    console.log("Received event from nav-component - " + action);
  }

  filterNotification(data) {
    console.log('filter notifications for : ' + data.name);
  }

  externalAction(data) {
    console.log('event from external component : ' + data);
    this.notification = data;
  }
}
