const [undevouredList, devouredList]= document.querySelectorAll("ul");
const input = document.querySelector("input");

input.addEventListener("keyup", addBurger);

getBurgers();

//Refreshes the view
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

// working on the view
function addUndevouredBurger(burger){
    const li = document.createElement("li");
    li.innerHTML= burger.burger_name + ` <button data-id="${burger.id}">Devour</button>` ;
    undevouredList.appendChild(li);
    li.querySelector("button").addEventListener("click", devourBurger);
};

// working on the view
function addDevouredBurger(burger){
    const li = document.createElement("li");
    li.textcontent= burger.burger_name;
    devouredList.appendChild(li);

}

// changes the model; api call
async function devourBurger(event){
    const id = event.target.dataset.id;
    const res = await fetch("/burger/devour", { 
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
    });
    const json = await res.json();
    console.log(json)
    

};

async function addBurger(event){
    if(event.key !== "Enter"){
        return;
    
    }
    const burger_name= input.value;
    if (!burger_name){
        return;
    }
    input.value ="";
    const res = await fetch("/burger", { 
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({burger_name})
    });
    const json = await res.json();
    console.log(json);
    console.log(event);
}



