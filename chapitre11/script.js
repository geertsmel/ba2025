todo.addEventListener("input", function(){
    if(todo.value.length < 4){
        error.innerText = "Le texte doit avoir min 4 caractères";
        
    }
    else {
        error.innerText = "";
        todo.style.border="3px solid green";
    }
})

function hello(){
    console.log(todo.value);
    ici.innerHTML += "<li>"+todo.value+"</li>";
}