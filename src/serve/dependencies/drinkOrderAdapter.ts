import { DrinkOrder, Drink,  Stick, EnhancedOrder } from "..";

type MachineDrink =  'T' | 'H' | 'C' | 'O'
type HeatDrink = "cold" | "hot" | "extra_hot"
type HeatMachine = "" | "h"
type MachineSugar = '' | 1 | 2
type MachineStick = '' | 0
type Sugar = 0 | 1 | 2
type MachineMessage = `${MachineDrink}${HeatMachine}:${MachineSugar}:${MachineStick}`

export const drinkOrderToMessage = ({drink, sugar, stick, heat}: EnhancedOrder): MachineMessage => {
    return `${drinkToMachine(drink)}${extraHotToMessage(heat)}:${sugarToMessage(sugar)}:${stickToMessage(stick)}`
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

const extraHotMapping: Record<HeatDrink, HeatMachine> = {
    cold: "",
    hot: "",
    extra_hot: "h",
}

const extraHotToMessage = (heat: HeatDrink): HeatMachine => {
    return extraHotMapping[heat]
}

const drinkMapping: Record<Drink, MachineDrink> = {
    tea: "T",
    coffee: "C",
    chocolate: "H",
    orange: "O"
}

const drinkToMachine = (drink: Drink): MachineDrink => {
    return drinkMapping[drink]
}