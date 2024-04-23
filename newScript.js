var buttonlength = document.querySelectorAll(".drum").length;

for(i = 0 ; i < buttonlength ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var clickedButton = this.innerText;
        makeSound(clickedButton);
        // animation(clickedButton)
        
    } );
}
document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    
})

function makeSound(key){
    switch(key){
        case "w": 
         var tom_1 = new Audio("sounds/tom-1.mp3");
         tom_1.play();
         animation("w")
   
         break;
        case "a": 
         var tom_1 = new Audio("sounds/tom-2.mp3");
         tom_1.play();
         animation("a")
         break;
        case "s": 
         var tom_1 = new Audio("sounds/tom-3.mp3");
         tom_1.play();
         animation("s")
         break;
        case "d": 
         var tom_1 = new Audio("sounds/tom-4.mp3");
         tom_1.play();
         animation("d")
         break;
        case "j": 
         var tom_1 = new Audio("sounds/snare.mp3");
         tom_1.play();
         animation("j")
         break;
        case "k": 
         var tom_1 = new Audio("sounds/crash.mp3");
         tom_1.play();
         animation("k")
         break;
        case "l": 
         var tom_1 = new Audio("sounds/kick-bass.mp3");
         tom_1.play();
         animation("l")
         break;
    }
}

function animation(key){

    var clickedButon = document.querySelector("." + key)
    clickedButon.classList.add("pressed")

    setTimeout(function (){
        var clickedButon = document.querySelector("." + key)
        clickedButon.classList.remove("pressed")
    } , 100)



}