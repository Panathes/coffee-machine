import { DrinkMaker, DrinkOrder, enhanceOrder } from ".";

it("Expected coffee with sugar and stick", function (){
    const drinkOrder: DrinkOrder = {
        drink: 'coffee',
        sugar: 1
    }

    const drinkMakerExpect: DrinkMaker = {
        drink: 'coffee',
        sugar: 1,
        stick: 'with_stick'
    }
    expect(enhanceOrder(drinkOrder)).toEqual(drinkMakerExpect)
})

  it("Expected just a coffee", function(){
    const drinkOrder: DrinkOrder = {
      drink: 'coffee',
      sugar: 0
  }
  const drinkMakerExpect: DrinkMaker = {
    drink: 'coffee',
    sugar: 0,
    stick: 'without_stick'
  }

  expect(enhanceOrder(drinkOrder)).toEqual(drinkMakerExpect)
})