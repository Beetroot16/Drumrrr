var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log(numberOfDrumButtons)

for (var i = 0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {

        var buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {

            case "KICK-C":
                var kick = new Audio("Assets/Samples/kit1/kick.wav");
                kick.play();
            break;

            case "SNARE-V":
                var snare = new Audio("Assets/Samples/kit1/snare.wav");
                snare.play();
            break;

            case "HAT-M":
                var hat = new Audio("Assets/Samples/kit1/hat.wav");
                hat.play();
            break;

            case "CRASH-D":
                var crash = new Audio("Assets/Samples/kit1/crash.wav");
                crash.play();
            break;

            case "TOM-F":
                var tom1 = new Audio("Assets/Samples/kit1/tom1.wav");
                tom1.play();
            break;

            case "TOM-G":
                var tom2 = new Audio("Assets/Samples/kit1/tom2.wav");
                tom2.play();
            break;

            case "RIDE-,":
                var ride = new Audio("Assets/Samples/kit1/ride.wav");
                ride.play();
            break;

            case "FLOOR-L":
                var floor = new Audio("Assets/Samples/kit1/floor.wav");
                floor.play();
            break;
            
            default: console.log(buttonInnerHtml);
        }
    });
}

    document.addEventListener("keydown", function(event)
    {
        switch (event.key) {

            case "c":
                var kick = new Audio("Assets/Samples/kit1/kick.wav");
                kick.play();
            break;

            case "v":
                var snare = new Audio("Assets/Samples/kit1/snare.wav");
                snare.play();
            break;

            case "m":
                var hat = new Audio("Assets/Samples/kit1/hat.wav");
                hat.play();
            break;

            case "d":
                var crash = new Audio("Assets/Samples/kit1/crash.wav");
                crash.play();
            break;

            case "f":
                var tom1 = new Audio("Assets/Samples/kit1/tom1.wav");
                tom1.play();
            break;

            case "g":
                var tom2 = new Audio("Assets/Samples/kit1/tom2.wav");
                tom2.play();
            break;

            case ",":
                var ride = new Audio("Assets/Samples/kit1/ride.wav");
                ride.play();
            break;

            case "l":
                var floor = new Audio("Assets/Samples/kit1/floor.wav");
                floor.play();
            break;
            
            default: console.log(event);
        }
    });

$('.carousel').carousel({
    interval: false,
  });