import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { House } from "../models/Houses.js"
import { setHTML } from "../utils/Writer.js"


function _drawHouses() {
    const houses = AppState.houses
    let htmlString = ''
    houses.forEach(house => htmlString += house.HousesCardHTMLTemplate)

    setHTML('houseListings', htmlString)
}

export class HousesController {

    constructor() {
        console.log('houses controller loaded')
        _drawHouses()
    }
}