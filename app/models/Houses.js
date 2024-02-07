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

    get housesCardHTMLTemplate() {
        return `
        <div class="col-10">
            <div class="bg-light rounded shadow-lg d-flex">
                <img class="w-50 rounded-start house-img"
                    src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="picture of house">

                <div class="py-2 px-5">
                    <p class="fs-4">year built: 1999</p>
                    <p class="fs-4">bedrooms: 2</p>
                    <p class="fs-4">bathrooms: 2</p>
                    <p class="fs-4">1000 square feet</p>
                    <p class="fs-4">$325000</p>
                    <p class="fs-4">description: Welcome to your new home!</p>
                    <p class="fs-5">This property is owned outright.</p>
                    <p class="fs-5">'date listed'</p>
                </div>
            </div>
        `
    }
}