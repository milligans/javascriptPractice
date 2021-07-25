var drumset = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"]
var numberOfDrumButtons = document.querySelectorAll(".drum").length;



for (var i = 0; i<numberOfDrumButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    whichButton(buttonInnerHTML);
    //what to do when click selected
});
}
addEventListener("keydown", function(event) {
    console.log(event);
   whichButton(event.key);
});

function whichButton(input){
    switch (input) {
        case "w": 
            var crash = new Audio('sounds/' + 'crash.mp3');
            crash.play();
        break;

        case "a" :
            var kick = new Audio('sounds/' + 'kick-bass.mp3');
            kick.play();
        break;

        case "s" :
            var snare = new Audio('sounds/' + 'snare.mp3');
            snare.play();
        break;

        case "d" :
            var tom1 = new Audio('sounds/' + 'tom-1.mp3');
            tom1.play();
        break;

        case "j" :
            var tom2 = new Audio('sounds/' + 'tom-2.mp3');
            tom2.play();
        break;

        case "k" :
            var tom3 = new Audio('sounds/' + 'tom-3.mp3');
            tom3.play();
        break;

        case "l" :
            var tom4 = new Audio('sounds/' + 'tom-4.mp3');
            tom4.play();
        break;

        default: console.log("wrong");


    }}