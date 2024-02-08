import { AppState } from "../AppState.js"
import { House } from "../models/Houses.js"
import { loadState, saveState } from "../utils/Store.js"

function _saveHousesInLocalStorage() {
    saveState('houses', AppState.houses)
}

function _loadCarsFromLocalStorage() {

}

class HousesService {

    constructor() {
        console.log('service loaded and linked')
    }
    createHouseListing(houseFormData) {
        const newHouseModel = new House(houseFormData)
        console.log('pojo from brought frm controller to services', houseFormData)
        console.log('new house', newHouseModel)

        AppState.houses.push(newHouseModel)
        _saveHousesInLocalStorage()
    }

    loadHousesFromLocalStorage() {
        const housesFromLocalStorage = loadState('houses', [House])
        AppState.houses = housesFromLocalStorage
    }

    removeHouseListing(houseId) {
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        // console.log('found house indez', houseIndex)
        if (houseIndex == -1) {
            throw new Error('whoopsie -1 index')
        }
        AppState.houses.splice(houseIndex, 1)
        _saveHousesInLocalStorage()
    }


}

export const housesService = new HousesService()