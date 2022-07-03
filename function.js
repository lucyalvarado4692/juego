const gameMap = crearMap();
const actions = defineVerbs();
const button = document.getElementById("do");
button.onclick = bottomAction;

let player= { position:[1,2] };
let initialPosition = gameMap[player.position[0]][player.position[1]].description;
document.getElementById("description").innerHTML=initialPosition;

function crearMap(){
    const nuevoArray=new Array(3)
    nuevoArray[0]=new Array(3);
    nuevoArray[1]=new Array(3);
    nuevoArray[2]=new Array(3);
    nuevoArray[0][0]={ description:"hola", exit:"NAO" };
    nuevoArray[0][1]= { description:"bienvenido", exit:"N" };
    nuevoArray[0][2]= { description:"hay una caja", exit:["norte", "sur", "este"] };
    nuevoArray[1][0]= { description:"que tal", exit:"SA" };
    nuevoArray[1][1]= { description:"move", exit:"E" };
    nuevoArray[1][2]= { description:"coge esto", exit:"O" };
    nuevoArray[2][0]= { description:"esta un linterna", exit:"E" };
    nuevoArray[2][1]= { description:"que es esto?", exit:"N" };
    nuevoArray[2][2]= { description:"la vida es una sola", exit:"N" };
    console.log(nuevoArray[0][0].exit.includes("N"));
    console.log(nuevoArray[0][2].exit.includes("norte"));
    console.log(nuevoArray[0][0].description);
    return nuevoArray;
}
console.log(initialPosition);

function defineVerbs(){
    const verbos = new Map();
    verbos.set ("ir", {do:movePlayer});
    verbos.set ("coger", true);
    verbos.set ("mirar", true);
    verbos.set ("usar", true);
    verbos.set ("hablar", true);
    console.log(verbos.get("ir"))
    return verbos;
  
    function movePlayer(x){
        let validDirections=["n","s","e","o"]
        x=x.toLowerCase();
        if (!validDirections.includes(x)){
            console.log("no puedes ir a esa direccion")
        }
    }
}

function bottomAction(){
    let commandos=document.getElementById("commands").value;
    commandos = commandos.toLowerCase();
    let comando = commandos.split (' ');
    let primerComando = comando[0];
    let secondComando= comando[1];
    console.log(actions.get("ir").do)
    if (actions.has(primerComando)){
        let message ="Excelente";
        document.getElementById ("description").innerHTML=message;
        return message;
    }
    /*if (actions.get("ir").direccion.includes(secondComando)){
        let message2="hecho"
        console.log(message2)
        return message2;  
    }*/
    else{
        let description=document.getElementById ("description")
        let message ="Invalido. Prueba con ir, coger, usar, mirar, hablar";
        description.innerHTML= message;
        return message;
    }
   
}


