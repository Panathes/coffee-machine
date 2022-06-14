import { DrinkMaker } from ".";
import { drinkOrderToMessage } from "./drinkOrderAdapter";

it("Expected format message to machine for a coffee with 1 sugar and stick", function(){
    const drinkMaker: DrinkMaker = {
        drink: 'coffee',
        sugar: 1,
        stick: 'with_stick'
    }

    expect(drinkOrderToMessage(drinkMaker)).toEqual('C:1:0')
})