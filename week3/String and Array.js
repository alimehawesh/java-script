//Q 1 
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
myString = myString.replace(/,/g, ' ');
console.log(myString);
//Q 2 
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
favoriteAnimals.splice(1,0,'meerkats');
console.log( 'The new item in clouds meerkats :' + favoriteAnimals);
console.log('The array has a length of:' + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
favoriteAnimals.splice(favoriteAnimals.indexOf('meerkat'), 1);
console.log('The item you are looking for is at index :' + favoriteAnimals.indexOf('mmerkat'));


