import { Component, OnInit } from '@angular/core';
import {NbSidebarService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['start']);
  }

}
