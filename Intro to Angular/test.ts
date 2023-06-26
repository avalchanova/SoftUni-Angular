let isEven:boolean = false
let num: number = 5
let str: string = ""

// we set the type and typescript will catch if there is a missmatch between
// the type it is supposed to be and the type that it is

type User = {
    name: string;
    age: number;
}

const peshoUser = {
    name: "Peshi",
    age: 21
} as User

// peshoUser.age = 1

interface AnotherUser {
    firstName: string, 
    id:number;
    getUserName: ()=> string;
}

class AnotherUserClass implements AnotherUser{
    firstName: string;
    id: number;

    getUserName(){
        return this.firstName
    }
}

// API call
const anotherUserList = [
    {firstName: 'Ivan', id:1}, 
    {firstName: 'Mitko', id:2}, 
    {firstName:'Maria', id:3}
] as AnotherUser[];

anotherUserList.forEach(({firstName, id}) => {
    console.log(`${id}: ${firstName}`)
})

anotherUserList.forEach((user)=> {
    // user.firstName
})

// tsc nameofthefile.ts --> transpiles the code into JavaScript