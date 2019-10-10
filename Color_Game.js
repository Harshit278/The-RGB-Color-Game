var colors = [];
var pickedColor;
var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

main();

function main()
{
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons()
{
    for(var i = 0; i < modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset(); 
        });
    }
}


function reset()
{
    resetButton.textContent = "New Colors";
    message.textContent = "";
    h1.style.backgroundColor = "steelblue";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
            squares[i].style.display = "none";
    }
}


resetButton.addEventListener("click", function(){
    reset();
});


function setUpSquares()
{
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor)
            {
                message.textContent = "Correct!";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?";
            }
            else
            {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        });
    }
}


function changeColor(color)
{
    for(var i =0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}


function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num)
{
    var arr = [];
    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}


function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}





// easyBtn.addEventListener("click", function(){
//     h1.style.backgroundColor = "steelblue";
//     numSquares = 3;
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++)
//     {
//         if(colors[i])
//         squares[i].style.backgroundColor = colors[i];
//         else
//         squares[i].style.display = "none";
//     }
// });

// hardBtn.addEventListener("click", function(){
//     h1.style.backgroundColor = "steelblue";
//     numSquares = 6;
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i < squares.length; i++)
//     {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });