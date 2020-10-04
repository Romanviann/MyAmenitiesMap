import {Component, OnInit} from '@angular/core';
import {LocationService} from '../location.service';
import {NbIconConfig, NbToastrService} from '@nebular/theme';
import {Router} from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private locationServices: LocationService, private toastrService: NbToastrService, private router: Router) {
  }

  address = {};
  longitude = 0;
  latitude = 0;
  loading = false;

  ngOnInit(): void {
  }

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

  getLocation() {
    this.infoToastr('pin', 'Getting approximate location', '');
    this.loading = true;
    this.locationServices.getLocation().subscribe((res) => {
      console.log(res);
      if (res.meta.code === 200) {
        this.successToastr('checkmark-circle-2', 'Location found', '');
        localStorage.setItem('address', JSON.stringify(res));
        // this.address = JSON.parse(localStorage.getItem('address'));
        this.router.navigate(['map']);
      } else {
        this.failToastr('alert-circle', 'Failed, please try again', '');
        this.loading = false;
      }
    });
  }


}
