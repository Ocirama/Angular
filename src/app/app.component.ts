import {Component} from '@angular/core';
import {CarModel} from './models/car.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'The worst';
  // newCar: { carMake: string | null, carModel: String, carYear: Number, carColor: String } = {};
  newCar: CarModel = {
    carMake: '',
    carYear: null,
    carPrice: null
  };
  cars: CarModel[] = [{
    carMake: '',
    carYear: null,
    carPrice: null
  }];

  profit = 0;

  deleteCar() {
    this.cars.pop();
    const newCar = Object.assign({}, this.newCar);

    const profit3 = this.profit + newCar.carPrice;
    this.profit = profit3;

  }

  addSpecificCar() {
    const newCar = Object.assign({}, this.newCar);
    const price = newCar.carPrice;
    if (price > 2000) {
      this.newCar.carPrice = price * 0.80;
      const newCar2 = Object.assign({}, this.newCar);
      this.cars.push(newCar2);
    } else {
      this.cars.push(newCar);
      console.log(this.cars);


    }
  }
}

