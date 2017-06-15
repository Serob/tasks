function deleteDeadli()  {
  let interval = setInterval(function() { 
    if(arr.length > 0) { 
      for(let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 40) {
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
let arr = []
function createPeople() {
  setInterval(function() {
    let person = new Person(Math.round((Math.random() * 49) +1), randomName());
    arr.push(person);
  }, 2000)
}


createPeople();
deleteDeadli();
