const coffees = [2, 3, 1, 5];

const totalCost = (arr) => {
    let totalCoffees = arr.reduce((acc, coffee) => {
        return acc + coffee;
    }, 0);

    return totalCoffees * 1.25; 
}

console.log(totalCost(coffees))
