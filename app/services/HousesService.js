import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"

class HousesService {

    constructor() {
        console.log('service loaded and linked')
    }
    createHouseListing(houseFormData) {
        const newHouseModel = new House(houseFormData)
        console.log('pojo from brought frm controller to services', houseFormData)
        console.log('new house', newHouseModel)

        AppState.houses.push(newHouseModel)
    }


}

export const housesService = new HousesService()