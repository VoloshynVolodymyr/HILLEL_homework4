var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    isValidPrice: function(currentPrice) {
        return !currentPrice.toLowerCase().includes("price") &&
               typeof this[currentPrice] === "string" &&
               this[currentPrice].includes("грн");
    },

    get price() {
        let totalPrice = 0;
        for (let currentPrice in this) {
            if (this.isValidPrice(currentPrice)) {
                totalPrice += parseInt(this[currentPrice]);
            }
        }
        return "Загальна сума послуг: " + totalPrice + " грн";
    },

    get minPrice() {
        let arrayPrice = [];
        for (let currentPrice in this) {
            if (this.isValidPrice(currentPrice)) {
                arrayPrice.push(parseInt(this[currentPrice]));
            }
        }
        let minPrice = Math.min(...arrayPrice);
        return "Мінімальна ціна послуги: " + minPrice + " грн";
    },

    get maxPrice() {
        let arrayPrice = [];
        for (let currentPrice in this) {
            if (this.isValidPrice(currentPrice)) {
                arrayPrice.push(parseInt(this[currentPrice]));
            }
        }
        let maxPrice = Math.max(...arrayPrice);
        return "Максимальна ціна послуги: " + maxPrice + " грн";
    }
};

console.log(services.price);  
console.log(services.minPrice);  
console.log(services.maxPrice); 
