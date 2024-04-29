// Задача 1:
// Написати об'єкт Train
// в нього будуть наступні властивості:
// -name
// -speed
// -passenger
// methods:
//   -go -> поїзд {name} везе {к-ть пасажирів} зі швидкістю {spped}
//   -stop -> поїзд {name} зупинився. Швидкість {speed}
//   -newPassenger -> збільшили к-ть пасажирів на {x}



 function Train(name, speed, passenger){
   this.name = name;
   this.speed = speed;
   this.passenger = passenger;
}

Train.prototype.go = function (){
    console.log(`поїзд ${this.name} везе ${this.passenger} зі швидкістю ${this.speed}`)
}
Train.prototype.stop = function() {
    console.log(`поїзд ${this.name} зупинився. Швидкість ${this.speed}`)
}

Train.prototype.newPassenger =  function(x) {
    console.log(`збільшили к-ть пасажирів на ${x}`)
}


