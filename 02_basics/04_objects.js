// const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "astha",
            lastname: "jaiswal"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 ={obj1 , obj2} -> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3 = Object.assign({}, obj1, obj2)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "c@gmail.com"
    },

    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
 
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); //[ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true



//+++ destrcucture 


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {


// }

//navbar(company = "hitesh")


//++++ apis ----> jason

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

