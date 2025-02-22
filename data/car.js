export class Car{
  #brand;
  #model;
  speed=0;
  trunk;
  constructor(carBrand,carModel){
    this.#brand = carBrand;
    this.#model = carModel;
  }
   go(){
    if(this.speed<20){
      this.speed+=5;
      if(this.trunk===true){
        this.speed=0
      }

    }
    else{
      
        console.log('max spedd reached');
      
    }
    
  };
  brake(){
    this.speed-=5;
  };
  openTrunk(){
     this.trunk=true;
  };
  closeTrunk(){
     this.trunk=false;
  };
  displayInfo(){
    console.log('Brand:',this.#brand);
    console.log('Model:',this.#model);
    console.log(`speed:${this.speed} km/h`);
    console.log(`Trunk:${this.trunk===true?'open':'close'}`)
  };
};


class RaceCar extends Car{
  acceleration=0;
  constructor(raceBrand,raceModel){
    super(raceBrand,raceModel);

  }
  displayInfo(){
    console.log(`${this.brand},${this.model},${this.acceleration} km/h`)
  }
  go(){
    this.acceleration+=20;
  }
  

}
const obj1 = new Car('Toyota','Corolla');
const obj2 = new Car('Tesla','Model 3');
const raceObj = new RaceCar('Mclaren','f1');

raceObj.go();

obj1.displayInfo()
raceObj.displayInfo();

