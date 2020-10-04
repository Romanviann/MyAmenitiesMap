import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  category = this.route.snapshot.paramMap.get('categories');

  ngOnInit(): void {
  }


}
