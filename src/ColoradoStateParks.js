import React from "react";
import howManyParks from "./parks/howManyParks"; 
// import aDifferentName from "./parks/howManyParks";
import MesaVerde from ".parks/MesaVerde";
import * as RMFunctions from ".parks/RockyMountain";

// import MesaVerde from "./parks/MesaVerde";

import { trees, wildlife } from "./parks/RockyMountain"

console.log(trees)
// "Aspen and Pine"

wildlife()
// => "Elk, BighornSheep, Moose"

import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/rockyMountain";

console.log(parkTrees)
// > "Aspen and Pine"

parkWildlife();
// "Elk, Bighorn Sheep, Moose"

import * as RMFunctions from "./parks/RockyMountain";

console.log(RMFunctions.trees);
// => "Aspen and Pine"

RMFunctions.wildlife();
// => "Elk, BighornSheep, Moose"

RMFunctions.elevation();
// Attempted import error

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
  // return (
  //   <div>
  //     <MesaVerde />
  //   </div>
  // )
}

// export default ColoradoStateParks;

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerde />
    </div>
  );
}