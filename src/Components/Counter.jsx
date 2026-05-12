import React, { useState } from 'react';

function Counter(){

const [arr, setArr] = useState([]);
function addPlus(){
setArr((prevArr => [...prevArr, "+"]))
}

function addMinus(){

setArr((prevArr => [...prevArr, "-"]))
}

return(
    <div> 

<button onClick= {addPlus}>-</button>

<button onClick= {addMinus}>-</button>
{arr.toString()}
    </div>
);
}

export default Counter;