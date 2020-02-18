import { Component, OnInit } from '@angular/core';
import { faSearch, faPlusSquare, faBell, faCog, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // TODO: Need to find a way to better fontawesome init
  faSearch = faSearch;
  faPlusSquare = faPlusSquare;
  faBell = faBell;
  faCog = faCog;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;


  constructor() { }

  ngOnInit() {
  }

}
