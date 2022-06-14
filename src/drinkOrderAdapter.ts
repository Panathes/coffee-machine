import { DrinkMaker, Drink, Sugar, Stick } from ".";

type MachineDrink =  'T' | 'H' | 'C'
type MachineSugar = '' | 1 | 2
type MachineStick = '' | 0
type MachineMessage = `${MachineDrink}:${MachineSugar}:${MachineStick}`

export const drinkOrderToMessage = ({drink, sugar, stick}: DrinkMaker): MachineMessage => {
    return `${drinkToMachine(drink)}:${sugarToMessage(sugar)}:${stickToMessage(stick)}`
}

const sugarMapping: Record<Sugar, MachineSugar> = {
    0: '',
    1: 1,
    2:2
}

const sugarToMessage = (sugar: Sugar): MachineSugar => {
    return sugarMapping[sugar]
}

const stickMapping: Record<Stick, MachineStick> = {
    with_stick: 0,
    without_stick: ''
}
const stickToMessage = (stick: Stick): MachineStick => {
   return stickMapping[stick]
}

const drinkMapping: Record<Drink, MachineDrink> = {
    tea: "T",
    coffee: "C",
    chocolate: "H"
}

const drinkToMachine = (drink: Drink): MachineDrink => {
    return drinkMapping[drink]
}