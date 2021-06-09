import { Component } from '@angular/core';
import { Service } from './service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end app';
  input: string = "";
  data = [];
  loading: boolean = false;
  errorMessage = "";
  constructor(private service: Service) {
  }
  public getData() {
    this.loading = true;
    this.errorMessage = "";
    this.service.getData(this.input).subscribe(
      (response) => {                           //next() callback
        console.log('response received: ', response.result);
        this.data = response.result;
        this.loading = false;

      },
      (error) => {                              //error() callback
        console.error('Request failed with error: ', error.error.message);
        this.errorMessage = error.error.message;
        this.data = [];
        this.loading = false;
      })
  }
}
