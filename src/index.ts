export type Drink  = 'tea' | 'coffee' | 'chocolate'

export type Pricing = 0.4 | 0.5 | 0.6

export type Sugar = 0 | 1 | 2

export type Stick = "with_stick" | "without_stick"

export type DrinkOrder = {
    drink: Drink
    sugar: Sugar
}

export type Command = {
    drinkOrder: DrinkOrder
    ammountGiven: number,
}

export type NoSugarDrinkMaker = {
    drink: Drink
    sugar: Sugar
    stick: 'without_stick'
}

export type WithSugarDrinkMaker = {
    drink: Drink
    sugar: Sugar
    stick: 'with_stick'
}

const pricingMapping: Record<Drink, Pricing> = {
    tea: 0.4,
    coffee: 0.6,
    chocolate: 0.5
}


export type DrinkMaker = NoSugarDrinkMaker | WithSugarDrinkMaker 

export const enhanceOrder = ({drinkOrder, ammountGiven}: Command): DrinkMaker | string=> {
    const price = pricingMapping[drinkOrder.drink]
    if(ammountGiven < price){
        return 'not enough money'
    }
    if (drinkOrder.sugar > 0) {
        return {
            drink: drinkOrder.drink,
            sugar: drinkOrder.sugar,
            stick: 'with_stick'
        }
    }
    return {
        drink: drinkOrder.drink,
        sugar: drinkOrder.sugar,
        stick: "without_stick"
    }

}
