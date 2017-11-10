
 //question1
function sumarguments(){
    let a = 0;
    
    for (let i = 0; i < arguments.length; i++) {
        a += arguments[i];
}
return a; 
}
console.log(sumarguments(5 , 2, 3));
//question2
function colorcar(color) {
    console.log( 'A ' + 'your color car '+ color );
  }
  colorcar('red');
  // question3
  function car() {
    const carInfo = [
      { name: 'BMW', color:'red' },
      { name: 'KIA', color:'black' },
      { name: 'HONDA', color:'blue' },
    ];
  
    for (let i = 0; i < carInfo.length; i++) {
      console.log('Type of car :', carInfo[i].name, '      The color is : ', carInfo[i].color);
    }
  }
  car();
//question4
function vehicleType(color, code) {
    if (code === 1) {
        console.log("a" + color + " Car");
    } else if (code === 2) {
        console.log("a" + color + " motorbike");
    } else {
        console.log("Wrong Code");
    }
}

vehicleType("blue", 2);
//question5
let a = 3;
let b = 3;
console.log(a == b);
//question 6
var vehicle = function (age) {
    
        if (age == "blue", 1, 5) {
            console.log("a blue used Car");
    //question 9
        } else if (age == "green", 3, 1) {
    //question 7

            console.log("a green new caravan");
    
        } else {
            console.log("Wrong Code");
        }
        return;
    }
    
    vehicle("blue", 1, 5);
    //question 8

    var vehicles = ["car", "motorbike", "caravan", "bike"];
    var i;
    i = 2;
    console.log(vehicles[i]);
    //question 9
    vehicle("green", 3, 1);
    //question 10
    function advertisement() {
        
            for (i = 0; i < vehicles.length; i++) {
                console.log("Amazing Joe's Garage, we service " + vehicles[i]);
            }
        }
        advertisement();
        //question 11
        vehicles.push("Audi");
        
        advertisement();
        //question 12
        let emptyObject = {};
       //question 13
       var myTeachers = {
        firstteacher: "Philip",
        secondteacher : "Jim",
        thirdteacher: "Ivana",
      };
      console.log(myTeachers); 
      //question 14
      var myTeachers = {
        ['Philip']: 'HTML',
        ['Jim']: 'Javascript',
        ['Ivana']: 'CSS'
      };
      console.log(myTeachers);
      //question 15
      function foo(func) {
        bar(func)
    }
    
    function bar() {
        console.log('Hello, I am bar!');
    }
    
    foo(bar);
     //question 16
     
     let x = [1,2,3];
     let y = [1,2,3];
     let z = y;
     console.log(x == y);
     console.log(x === y);
     console.log(z == x);
     console.log(z == y);
     
     //question 17
     let o1 = {
        foo: 'bar'
      };
      console.log(o1);
      let o2 = {
        foo: 'bar'
      };
      console.log(o2);
      let o3 = o2 ;
      console.log(o3);
     //question 18
     bar = 42; 
     console.log(typeof typeof bar);
    
    
    

