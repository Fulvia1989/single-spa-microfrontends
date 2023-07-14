import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  window: any = window;

  ngOnInit(): void {
    (window as any)['utils']= {
      //apertura del menù di navigazione a destra nel caso di schermi piccoli
      openSideMenu: () => {
        const event = new CustomEvent('openSideMenu', { detail: `openSideMenu` });
       dispatchEvent(event);
      },

      //comando per il logout
      logOut: () => {
        sessionStorage.removeItem('userRoles');
        const event = new CustomEvent('logOut', { detail: `logOut` });
        dispatchEvent(event);
      }
    };
  }


}
