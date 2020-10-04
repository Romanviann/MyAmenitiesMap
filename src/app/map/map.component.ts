import { Component, OnInit } from '@angular/core';
import {LocationService} from '../location.service';
import {NbIconConfig, NbToast, NbToastrService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private locationServices: LocationService, private toastrService: NbToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  address = JSON.parse(localStorage.getItem('address'));

  currentAddress = this.address.address.city + ', ' + this.address.address.state + ' - ' + this.address.address.countryCode;

  longitude = 0;
  latitude = 0;
  loading = false;

  failToastr(icon, title, message) {
    const iconConfig: NbIconConfig = {icon, pack: 'eva', status: 'danger'};
    this.toastrService.show(message, title, iconConfig);
  }

  successToastr(icon, title, message) {
    const iconConfig: NbIconConfig = {icon, pack: 'eva', status: 'success'};
    this.toastrService.show(message, title, iconConfig);
  }

  infoToastr(icon, title, message) {
    const iconConfig: NbIconConfig = {icon, pack: 'eva', status: 'info'};
    this.toastrService.show(message, title, iconConfig);
  }

  items = [
    { id: 1,
      categories: 'cafe',
      image: 'cafe.jpg',
      title: 'Cafes',
      desc: "Cafes, bakeries, and similar spots. Franchises include Starbucks, Dunkin' Donuts, and many more"
    },
    { id: 1,
      categories: 'food-baverage',
      image: 'food.jpg',
      title: 'Restaurants & Snacks',
      desc: "fast food places, resturants, and similar spots. Franchises include Chick-fil-A, Wendy's, and many more"
    },
    { id: 1,
      categories: 'public-services-government',
      image: 'library.jpg',
      title: 'Libraries',
      desc: "Book shops, study hubs, and similar spots. This also include govermental libraries, study cafes and the likes"
    },
    { id: 1,
      categories: 'outdoor-places',
      image: 'park.jpg',
      title: 'Outdoor Places',
      desc: "public parks, sports fields, and similar spots. This includes state-parks, playgrounds, and other outdoor places"
    }
  ];

  getAmenities(title, category) {
    this.infoToastr('search', 'Searching for ' + title, '');
    this.longitude = this.address.address.longitude;
    this.latitude = this.address.address.latitude;
    this.locationServices.getAmenities(this.longitude, this.latitude, category).subscribe((res) => {
      this.loading = false;
      console.log(res);
      if (res.meta.code === 200) {
        this.successToastr('checkmark-circle-2', 'Amenities found', '');
        this.loading = false;

      } else {
        this.failToastr('alert-circle', 'Failed, please try again', '');
        this.loading = false;
      }
    });
  }

}
