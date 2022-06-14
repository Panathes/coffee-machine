export type Drink  = 'tea' | 'coffee' | 'chocolate' | 'orange'
export type ExtraHotDrink = "tea" | "coffee" | "chocolate"

export type Pricing = 0.4 | 0.5 | 0.6 

export type Stick = "with_stick" | "without_stick"

export type NoSugarDrinkMaker = {
    drink: Drink,
    sugar: 0,
    stick: 'without_stick',
}

export type WithSugarDrinkMaker = {
    drink: Drink,
    sugar: 1 | 2
    stick: 'with_stick'
}

export type ColdDrinkOrder = {
    drink: "orange_juice"
    heat: "cold"
}

export type HotDrinkOrder = {
    drink : "tea" | "coffe" | "chocolate"
    heat: "hot" | "extra_hot"
}

export type WithSugarDimensionOrder<T> = T & (NoSugarDrinkMaker | WithSugarDrinkMaker);

export type WithHeatDimensionOrder<T> = T & (ColdDrinkOrder | HotDrinkOrder)

export type DrinkMaker = WithSugarDimensionOrder<WithHeatDimensionOrder<Drink>>


const pricingMapping: Record<Drink, Pricing> = {
    tea: 0.4,
    coffee: 0.6,
    chocolate: 0.5,
    orange: 0.6
}

export type DrinkOrder = NoSugarDrinkMaker | WithSugarDrinkMaker

type Order = {
    drink: Drink;
  };

export type EnhancedOrder = WithSugarDimensionOrder<WithHeatDimensionOrder<Order>>;

type Command = WithHeatDimensionOrder<Order> & { sugar: 0 | 1 | 2; }

export const enhanceOrder = (order: Command, ammountGiven: number): EnhancedOrder | string=> {
    const price = pricingMapping[order.drink]
    if(ammountGiven < price){
        return 'not enough money'
    }
        
    if ( order.sugar === 0) {
        return {
            ...order,
            sugar: 0,
            stick: "without_stick",
        }
    }
    return {
        ...order,
        sugar: order.sugar,
        stick: "with_stick"
    }

}
