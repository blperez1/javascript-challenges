const coffees = [2, 3, 1, 5];

const totalCost = (arr) => {
    let totalCoffees = arr.reduce((acc, coffee) => {
        return acc + coffee;
    }, 0);

    return `Your total bill is ${totalCoffees * 1.25}`
}

console.log(totalCost(coffees))
