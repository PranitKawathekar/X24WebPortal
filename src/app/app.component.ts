/// <reference types="@types/googlemaps" />
import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
// import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'X24WebPortal';
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  latitude:number;
  longitude:number;

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }
  setCenter(e:any){
    console.log('e ', e, this.latitude, this.longitude);
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }

  // ngOnInit() {
  //   var mapProp = {
  //   center: new google.maps.LatLng(28.4595, 77.0266),
  //   zoom: 14,
  //   // mapTypeId: google.maps.MapTypeId.ROADMAP
  //   // mapTypeId: google.maps.MapTypeId.HYBRID
  //   // mapTypeId: google.maps.MapTypeId.SATELLITE
  //   // mapTypeId: google.maps.MapTypeId.TERRAIN
  //   };
    
  //   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  //   var marker = new google.maps.Marker({ position: mapProp.center });
  //   marker.setMap(this.map);
    
  //   var infowindow = new google.maps.InfoWindow({
  //   content: 'Hey, We are here'
  //   });
}
