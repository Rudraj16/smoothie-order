// Smoothie class
class Smoothie {
    constructor(flavor, size, extras) {
        this.flavor = flavor;
        this.size = size;
        this.extras = extras;
    }

    // Add a method to calculate the total price of the smoothie
    calculateTotalPrice() {
        // Assign prices to ingredients
        const flavorPrices = {
            strawberry: 2.50,
            banana: 2.00,
            mango: 2.75,
        };

        const sizePrices = {
            small: 0,
            medium: 1.50,
            large: 2.50,
        };

        const extraPrices = {
            protein: 1.00,
            spinach: 0.75,
            almondMilk: 1.25,
        };

        // Calculate total price based on selections
        const flavorPrice = flavorPrices[this.flavor];
        const sizePrice = sizePrices[this.size];
        const extraPrice = this.extras.reduce((total, extra) => total + extraPrices[extra], 0);

        return flavorPrice + sizePrice + extraPrice;
    }

    // Modify getDescription method to include pricing information
    getDescription() {
        const total = this.calculateTotalPrice().toFixed(2);
        return `You've ordered a ${this.size} ${this.flavor} smoothie with ${this.extras.join(', ')}. The total cost is $${total}. Enjoy!`;
    }
}

// Function to capture form values and create a Smoothie object
function orderSmoothie() {
    const flavor = document.getElementById('flavor').value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const extras = Array.from(document.getElementById('extras').selectedOptions, option => option.value);

    const smoothie = new Smoothie(flavor, size, extras);
    displaySmoothie(smoothie);
}

// Function to display the Smoothie description and bill on the HTML page
function displaySmoothie(smoothie) {
    const outputDiv = document.getElementById('output');
    const billDiv = document.getElementById('bill');
    const smoothieImageDiv = document.getElementById('smoothieImage');

    // Display smoothie description
    outputDiv.innerHTML = `<p>${smoothie.getDescription()}</p>`;

    // Display bill
    const totalBill = smoothie.calculateTotalPrice().toFixed(2);
    billDiv.innerHTML = `<p>Total Bill: $${totalBill}</p>`;

    // Add a fun smoothie image based on flavor
   // Add a fun smoothie image based on flavor
const smoothieImages = {
    strawberry: 'strawberry-smoothie.jpg',
    banana: 'banana-smoothie.jpg',
    mango: 'mango-smoothie.jpg',
};

const smoothieImage = smoothieImages[smoothie.flavor.toLowerCase()]; // Make sure to handle case sensitivity
if (smoothieImage) {
    smoothieImageDiv.innerHTML = `<img src="images/${smoothieImage}" alt="${smoothie.flavor} smoothie" id="smoothieImage">`;
}
}
