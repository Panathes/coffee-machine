import { DrinkOrder } from "..";
import { drinkOrderToMessage } from "./drinkOrderAdapter";

it("Expected format message to machine for a coffee with 1 sugar and stick", function(){
    const drinkMaker: DrinkOrder = {
        drink: 'coffee',
        sugar: 1,
        stick: 'with_stick'
    }

    expect(drinkOrderToMessage(drinkMaker)).toEqual('C:1:0')
})

it("Expected format message to machine for an orange with no sugar", function(){
    const drinkMaker: DrinkOrder = {
        drink: 'orange',
        sugar: 0,
        stick: 'without_stick'
    }

    expect(drinkOrderToMessage(drinkMaker)).toEqual('O::')
})