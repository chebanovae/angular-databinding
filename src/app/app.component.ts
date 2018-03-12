import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name: 'Testserver1', content: 'Just a test1!'},
    {type: 'server', name: 'Testserver2', content: 'Just a test2!'}];

  onServerAdded(serverData:  {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bblueprintData:  {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bblueprintData.serverName,
      content: bblueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

}
