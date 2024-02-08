import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { House } from "../models/Houses.js"
import { setHTML } from "../utils/Writer.js"
import { Pop } from "../utils/Pop.js"
import { getFormData } from "../utils/FormHandler.js"


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
        AppState.on('houses', _drawHouses)
    }
    createHouseListing() {
        try {
            event.preventDefault()
            console.log('form is hooked up')
            const form = event.target
            // console.log('targeted event', form)
            // console.log('year built', form.year.value)
            const houseFormData = getFormData(form)
            // NOTE to self: getFormData() is a built in function that connects the form inputs with the matching names and creates a POJO
            console.log('here is my new house form POJO', houseFormData)

            housesService.createHouseListing(houseFormData)
            // @ts-ignore
            form.reset()

        } catch (error) {
            console.log('form error')
            Pop.error(error.message)
        }
    }
}