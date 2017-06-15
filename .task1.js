function deleteDeadli()  {
  let interval = setInterval(function() { 
    if(arr.length > 0) { 
      for(let i = 0; i < arr.length; i++) {
        if (arr[i] >= 39) {
          const x = arr.splice(i,1)
          console.log('deleted', x);
        }
      }
    } else {
     clearInterval(interval);
    }
  },1000)
}



function randomName () {
   var name;
   switch(Math.round(Math.random() * 3)) {
    case 0:
        name = "Bill";
        break;
    case 1:
        name = "John";
        break;
    case 2:
        name = "Vaghinak";
        break;
    case 3:
        name = "Yepraqsia";
        break;   
   }
  return name
}



class Person { 
 constructor(age, name){
  this.age  =age;
        this.name=name;
        this.interval = null;
        this.grow();
 }

    grow() {
      this.interval = setInterval(() => {
        console.log('grow', this);
        if (this.age < 40) {
          this.age++;
        }else {
          clearInterval(this.interval);
        }
      }, 1000);
    }
}

let person1 = new Person(Math.round((Math.random() * 49) +1), randomName());
let person2 = new Person(Math.round((Math.random() * 49) +1), randomName());
let person3 = new Person(Math.round((Math.random() * 49) +1), randomName());
// let person4 = new Person(Math.round((Math.random() * 49) +1), randomName());
let arr = []
arr.push(person1.age,person2.age,person3.age)
console.log(arr)
deleteDeadli();







