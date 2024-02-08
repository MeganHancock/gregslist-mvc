import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { House } from "../models/Houses.js"
import { setHTML } from "../utils/Writer.js"
import { Pop } from "../utils/Pop.js"


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
    createHouseListing() {
        try {
            event.preventDefault()
            console.log('form is hooked up')
            const form = event.target

            console.log('targeted event', form)
            console.log('year built', form.year.value)

        } catch (error) {
            console.log('form error')
            Pop.error(error.message)
        }
    }
}