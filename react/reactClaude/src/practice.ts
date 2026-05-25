// Do these in a new file src/practice.ts (not .tsx — no JSX needed here, pure TS):

// Create a type called Car with properties: brand (string), year (number), isElectric (boolean), 
// color (optional string). Create two Car objects using it.
// Write a function getFullName(firstName: string, lastName: string): string that returns the combined name.
// Create a string[] array of 3 city names. Try pushing a number into it — see the error, then undo it.
// Create a union type ID = string | number. Assign it a string, then reassign it a number — both should work fine.







type Car = {
    brand: string
    year: number
    isElectric: boolean
    color?: string
}

const teslaV1: Car ={
    brand: "Tesla",
    year:2019,
    isElectric: true,
    color: "black"
}

const nano: Car ={
    brand: "Tata",
    year:2015,
    isElectric: false,
    color:"red"
}

console.log(nano.brand)
console.log(teslaV1.brand)



function getFullName(firstName:string, lastName: string): string {
    return firstName+" "+lastName;
}

console.log(getFullName("Abu","Qais"));




const cityName: string[] = ['Nottingahm','Delhi','bangalore'];
cityName.push("7")
console.log(cityName)




let ID: string | number ="khan"
console.log("1",ID)
ID = 77
console.log("2",ID)
ID = "dominance"
console.log("3",ID)