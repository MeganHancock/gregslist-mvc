import { generateId } from "../utils/GenerateId.js";

export class House {

    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.ownedOutright = data.ownedOutright
        this.dateListed = new Date()
    }

    get HousesCardHTMLTemplate() {
        return /*html*/`
        <div class="col-12">
            <div class="bg-light rounded shadow-lg d-flex mb-3">
                <img class="w-50 rounded-start house-img"
                    src="${this.imgUrl}"
                    alt="picture of house">

                <div class="py-2 px-5">
                    <p class="fs-4">Year Built: ${this.year}</p>
                    <p class="fs-4">Bedrooms: ${this.bedrooms}</p>
                    <p class="fs-4">Bathrooms: ${this.bathrooms}</p>
                    <p class="fs-4">Square Feet: ${this.sqft} ft.</p>
                    <p class="fs-4">$${this.price}</p>
                    <p class="fs-4">Description: ${this.description}</p>
                    <p class="fs-5">Owner owns house outright: ${this.ownedOutright}</p>
                    <p class="fs-5">${this.dateListed}</p>
                    <button type="button" class="btn btn-danger" id="removeHouseListing" onclick="app.HousesController.removeHouseListing('${this.id}')">Remove Listing</button>
                </div>
            </div>
        `
    }
}