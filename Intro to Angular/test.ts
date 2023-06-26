let isEven:boolean = false

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