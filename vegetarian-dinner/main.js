const menu = [
    {
        item: "Skillet Ravioli Lasagna with Spicy Italian Sausage",
        isVegetarian: false
    },
    {
        item: "Perfect Lasagna",
        isVegetarian: false
    },
    {
        item: "Roast mushroom ragu with pappardelle",
        isVegetarian: true
    },
    {
        item: "Tuscan Tortellini Soup ",
        isVegetarian: false
    },
    {
        item: "Veal Marsala",
        isVegetarian: false
    }, 
    {
        item: "Broccoli and ricotta conchiglioni",
        isVegetarian: true
    },
    {
        item: "Lamb Ragù",
        isVegetarian: false
    },
    {
        item: "Caprese Chicken",
        isVegetarian: false
    },
    {
        item: "Potato and zucchini pizza",
        isVegetarian: true
    },
    {
        item: "Pasta Puttanesca ",
        isVegetarian: false
    },
    {
        item: "Chicken Marsala ",
        isVegetarian: false
    },
    {
        item: "Braised eggplant, tomato and beans",
        isVegetarian: true
    }, 
    {
        item: "Roasted puttanesca sauce with polenta",
        isVegetarian: true
    },
    {
        item: "Spaghetti and Meatballs ",
        isVegetarian: false
    },
    {
        item: "Chicken Parmasian",
        isVegetarian: false
    },
    {
        item: "Summer Spaghetti Salad ",
        isVegetarian: true
    }
]


const vegOptions = document.querySelector('#vegOptions');
const dinner = document.querySelector('#dinner');


const renderDish = ({item}) => `<li>${item}</li>`;

const vegetarian = menu.filter(({isVegetarian}) => isVegetarian)

const renderVegetarian = () => {
    let html = '';
    for(let item of vegetarian) {
        html += renderDish(item);
    }

    vegOptions.innerHTML = html;
}

renderVegetarian();

const nonVegetarian = menu.filter(({isVegetarian}) => !isVegetarian)

const renderNonVegetarian = () => {
    let html = '';
    for(let item of nonVegetarian) {
        html += renderDish(item);
    }

    dinner.innerHTML = html;
}

renderNonVegetarian();

