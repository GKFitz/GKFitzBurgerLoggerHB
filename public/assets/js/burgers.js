const [undevouredList, devouredList]= document.querySelectorAll("ul");

async function getBurgers(){
    const res = await fetch("/burgers");
    const json = await res.json();
    undevouredList.innerHTML= "";
    devouredList.innerHTML= "";
    for(let burger of json) {
        if(burger.devoured){
            addDevouredBurger(burger);
        }else{
            addUndevouredBurger(burger);

        }
    }
}


function addUndevouredBurger(burger){

};

function addDevouredBurger(burger){
    const li = document.createElement("li");
    li.textcontent= burger.burger_name;
    devouredList.appendChild(li);

}

