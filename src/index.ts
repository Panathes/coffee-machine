export type Drink  = 'tea' | 'coffee' | 'chocolate'

type Tea = {
    name: 'tea',
    price: 0.4
}

type Coffee = {
    name: 'coffee',
    price: 0.6
}

type Chocolate = {
    name: 'chocolate',
    price: 0.5
}

export type Sugar = 0 | 1 | 2

export type Stick = "with_stick" | "without_stick"

export type DrinkOrder = {
    drink: Tea | Coffee | Chocolate
    sugar: Sugar
}

type Command = {
    drinkOrder: DrinkOrder
    AmmountGiven: number,
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

export type DrinkMaker = NoSugarDrinkMaker | WithSugarDrinkMaker 

export const enhanceOrder = ({drinkOrder, AmmountGiven}: Command): DrinkMaker => {

    if(AmmountGiven < drinkOrder.drink.price){
        throw new Exception
    }
    if (drinkOrder.sugar > 0) {
        return {
            drink: drinkOrder.drink.name,
            sugar: drinkOrder.sugar,
            stick: 'with_stick'
        }
    }
    return {
        drink: drinkOrder.drink.name,
        sugar: drinkOrder.sugar,
        stick: "without_stick"
    }

}
