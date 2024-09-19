const fruits = [`Apple, Orange, Melon, Mango, Banana, Kiwi`];
const veggies = [`Onion, Carrot, Garlic, Broccoli`];
const produce = [...fruits, ...veggies];

const meat = [`Beef`, `Pork`, `Lamb`];
const seaFood = [`Salmon`, `Cod`, `Halibutt`, `Sardine`, `Red Snapper`];
const poultry = [`Duck`, `Chicken`, `Egg`, `Fowl`];
const protein = [...meat, ...seaFood, ...poultry];

const storeProducts = [... produce, ... protein];

console.log(storeProducts);

const personalFavFoods = {
    firstFav: {
        dishName: `Chicken with Mixed Vegetable`,
        restaurantName: `Wind Taste`,
        cityLocation: `RussellVille`,
        driveThrough: true,
        foodTakeOut: true,
        foodDeliveryService: false,
        datesOpen: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Sunday`],
        dishPrice: 8.25
    },
    secondFav: {
        dishName: `Carne Asada Burrito`,
        restaurantName: `El Faro Tacos`,
        cityLocation: `San Fernando`,
        driveThrough: false,
        foodTakeOut: true,
        dineIn: true,
        foodDeliveryService: [`Door Dash`, `PostMates`],
        datesOpen: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`],
        dishPrice: 5
    },
    thirdFav: {
        dishName: `Grilled Chicken Club`,
        restaurantName: `McAlister's`,
        cityLocation: `RussellVille`,
        driveThrough: false,
        foodTakeOut: true,
        dineIn: true,
        foodDeliveryService: [`Door Dash`, `PostMates`, `Uber Foods`],
        datesOpen: [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`],
        dishPrice: 11
    }
}

console.log(`My top three favorite dishes are: ${personalFavFoods.firstFav.dishName}, ${personalFavFoods.secondFav.dishName}, and lastly ${personalFavFoods.thirdFav.dishName}.`);

const teamFavFoods = {
    favFoodsByJason: {
        firstFav: `Taco Bell`, 
        secondFav: `Domino's`, 
        thirdFav: `Big burger`,
    },
    favFoodsByMolly: {
        firstFav: `Pizza begal`, 
        secondFav: "Sushi", 
        thirdFav: `Hot wings`
    },
    favFoodsByPatrick: {
        firstFav: `Ribeye steak`, 
        secondFav: "Sushi", 
        thirdFav: `Carnde asade tacos`
    },
    favFoodsByAline: {
        firstFav: `Suhsi`, 
        secondFav: "Lassanga", 
        thirdFav: `Steak`
    },
    favFoodsByDeaundre: {
        firstFav: `Sushi`, 
        secondFav: "Tacos", 
        thirdFav: `Pizza`
    },
}

const allFoods = {...personalFavFoods, ...teamFavFoods}
console.log(allFoods);

const myInfo = {
    myName: `Pedro Oswaldo Cruz`,
    myAge: 19,
    hometown: `Pacomia`
}

const petInfo = {
    catAge: 4,
    catBreed: `Calico`,
    catName: `Minami`
}

const { catName, catAge, catBreed } = petInfo;
const { myName, myAge, hometown } = myInfo;
console.log(`Hello my name is ${myName}. I am ${myAge} years old! My hometown where I grew up in is caled ${hometown}. I also am a proud owner of a pretty kitty! Her name is ${catName}!`);