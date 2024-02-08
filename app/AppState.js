import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { House } from './models/Houses.js'

class ObservableAppState extends EventEmitter {
  // /** * @type {House[]} */
  houses = [
    new House({
      year: '1999',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1000,
      price: 325000,
      description: 'Welcome to your new home!',
      imgUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D',
      ownedOutright: true,
      dateListed: new Date()
    }),
    new House({
      year: '1980',
      bedrooms: 1,
      bathrooms: 1,
      sqft: 600,
      price: 95000,
      description: "She's got good bones I swear.",
      imgUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D',
      ownedOutright: true,
      dateListed: new Date()
    })
  ]




  /** * @type {Car[]} */
  _cars = [
    // NOTE bringing cars in from local storage
    // new Car({
    //   make: 'Mazda',
    //   model: 'Miata',
    //   year: 2005,
    //   price: 6000,
    //   color: '#610007',
    //   mileage: 100000,
    //   description: 'This listing is for Jeremy only, no one else conatct me',
    //   hasSalvagedTitle: false,
    //   imgUrl: 'https://images.unsplash.com/photo-1610884447640-42b8ec61a933?q=80&w=2226&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // }),
    // new Car({
    //   make: 'Pontiac',
    //   model: 'Firebird',
    //   year: 1982,
    //   price: 10000,
    //   color: '#2d0913',
    //   mileage: 14,
    //   description: 'This listing is for Sam only, no one else conatct me',
    //   hasSalvagedTitle: false,
    //   imgUrl: 'https://images.unsplash.com/photo-1625658281581-2da46feb5d1d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // }),
    // new Car({
    //   make: 'Ford',
    //   model: 'Mustang',
    //   year: 2007,
    //   price: 9000,
    //   color: '#97002b',
    //   mileage: 240000,
    //   description: 'This listing is for Joaquin only, no one else conatct me',
    //   hasSalvagedTitle: true,
    //   imgUrl: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // }),
  ]
  get cars() {
    return this._cars
  }
  set cars(value) {
    this._cars = value
  }
}

export const AppState = createObservableProxy(new ObservableAppState())