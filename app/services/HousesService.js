import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"

class HousesService {

    constructor() {
        console.log('service loaded and linked')
    }
}

export const housesService = new HousesService()