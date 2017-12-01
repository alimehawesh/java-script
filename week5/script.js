/*let numbers = [1, 2, 3, 4];
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}
console.log("The doubled numbers are", newNumbers); // [2, 6]*/

//-1
let numbers = [1, 2, 3, 4];

let newNumbers = numbers.filter(n => n % 2 !== 0)

newNumbers = newNumbers.map(m => m * 2)

console.log(newNumbers)


//-2
let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
tasks.map(convert => {
    return convert.duration /= 60
})
console.log("-2", tasks)


//-3
let lessThenTwoHours = tasks.filter(compare => {
    return (compare.duration < 2) ? true : false
})
console.log("-3", lessThenTwoHours)


//-4
let billOfMaartje = 0
let MaartjeTakePerHour = 18
tasks.map(bill => {
    billOfMaartje += MaartjeTakePerHour * bill.duration
})
console.log("-4", billOfMaartje, "€")