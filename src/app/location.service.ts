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
    Authorization: 'prj_test_sk_f3515427f4bf67830b5090e5acd7a9c363189345'
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
