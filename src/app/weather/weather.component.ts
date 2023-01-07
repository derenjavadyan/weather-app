import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/interface/weather';
import { ServiceWeatherService } from 'src/service/service-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather?: Weather;

  constructor(private weatherService: ServiceWeatherService) {}

  ngOnInit(): void {}

  search(city: string) {
    this.weatherService
      .getWeather(city)
      .subscribe((weather) => (this.weather = weather));
  }
}
