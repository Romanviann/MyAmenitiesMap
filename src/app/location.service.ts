import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getLocationEndpointUrl = 'https://api.radar.io/v1/geocode/ip';
  getAmenitiesEndpointUrl = 'https://api.radar.io/v1/search/places?';

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'prj_live_pk_434a3a7489e0d2a3517edf0044b3af4a0ff8c8ab'
  });

  getLocation(){
    return this.httpClient.get(this.getLocationEndpointUrl,
      {headers: this.httpHeaders});
  }

  near = '';

  getAmenities(longitude, latitude, category){
    this.near = longitude + ',' + latitude;
    return this.httpClient.get(this.getAmenitiesEndpointUrl + 'near=' + this.near + '&categories=' + category,
      {headers: this.httpHeaders});
  }


}
