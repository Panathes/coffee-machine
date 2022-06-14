import { DrinkMaker, DrinkOrder, enhanceOrder, Command } from ".";

it("Expected coffee with sugar and stick", function (){
    const drinkOrder: Command = {
        drinkOrder: {drink:'coffee', sugar:1  },
        ammountGiven: 0.6
    }

    const drinkMakerExpect: DrinkMaker = {
        drink: 'coffee',
        sugar: 1,
        stick: 'with_stick'
    }
    expect(enhanceOrder(drinkOrder)).toEqual(drinkMakerExpect)
})

  it("Expected just a coffee", function(){
    const drinkOrder: Command = {
      drinkOrder: {drink:'coffee', sugar : 0},
      ammountGiven: 0.6
    }
  const drinkMakerExpect: DrinkMaker = {
    drink: 'coffee',
    sugar: 0,
    stick: 'without_stick'
  }

  expect(enhanceOrder(drinkOrder)).toEqual(drinkMakerExpect)
})

  it("Expected not enough money", function(){
    const drinkOrder: Command = {
      drinkOrder: {drink:'coffee', sugar : 0},
      ammountGiven: 0.5
    }

  expect(enhanceOrder(drinkOrder)).toEqual('not enough money')
  })