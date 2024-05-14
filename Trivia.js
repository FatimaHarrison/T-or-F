<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>34</title>
    <style>
        body{
            display:block;
            margin-left:auto;
            margin-right:auto;
            text-align: center;
            background-color:black;
            color: oldlace;
        }

        .button {
            background-color:lightblue;
            color: black;
            border: 2px solid black;
            padding: 16px 32px;
            text-decoration: none;
            font-size: 16px;
            margin: 4px 2px;
            transition-duration: 0.4s;
            border-radius: 16px;
        }

        .button:hover {
            background-color: lightblue;
            color: rgb(0, 0, 0);
        }

        #tutorial {
            line-height: 2;
            width: 40%;
            padding: 25px 0;
            text-align: center;
            margin-top: 5px;
            margin-left:auto;
            margin-right:auto;
            color: oldlace;
        }
       
        h1{
            font-family: 'Georgia';
            color: oldlace;
            font-size: 21x;
            font-style: italic;
        }
       
        h2{
            font-family: 'Georgia';
            color: oldlace;
            font-size: 18px;
            font-style: italic;
        }
       
        h3{
            font-family: 'Georgia';
            color: oldlace;
            font-size: 18px;
            font-style: italic;
        }
       
        h4{
            font-family: 'arial';
            color: oldlace;
            font-size: 21px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Welcome to the true or false game</h1>
    <h2 id = "score">Current score: 0</h2>
    <h3>Notice:</h3>
    <button id="instructionsButton" class="button" onclick="Reveal instructions()>Put away instructions</button
    <div id="Instructions">
        To play the game
        <br>Press the letters t or f to respond.
    </div>
    <hr style="width:50%;height:3px;border-width:0;color:gray;background-color:gray">
    <h4 id = "question">e</h4>
    <script>
    var count = 0, score = 0;

    var array = [
        { q: "A baby elephant weighs about 2,055 pounds.", a: "f" },
        { q: "Micheal Lawrence was a screenwritter.", a: "t" },
        { q: "The Marine Corps birthday is Nov 10th, 1775.", a: "t" },
        { q: "Chrispother Columbus discovered Egypt.", a: "f" },
        { q: "Canada was the 2nd country to gain their indepence.", a: "f" },
        { q: "Gelato ice cream is the same as regular ice cream.", a: "f" },
        { q: "Moana is the 56th Disney movie.", a: "t" },
        { q: "Everybody hates Chris.", a: "f" },
        { q: "Peter Pan is the 14th Disney moive.", a: "t" },
        { q: "Call of duty is a fun game.", a: "t" },
        { q: "Ruby is a part of coding.", a: "t" },
        { q: "Janet Jackson is a silbing out of 5.", a: "f" },
        { q: "We all have our ups and downs.", a: "t" }
    ];
	
var words = ["eterpan", "disney", "iphone", "missippi", "ruby", "pink",
"orlando", "digital", "train", "quinceanera", "washington", "christmas",
"teammate", "lie", "sabado", "marcales", "yahoo", "watermelon",
"javascript", "ticket", "egg", "internet", "browser", "walmart", "generation",
"patrick", "galaxy", "cat", "kitten", "ice", "bracelet", "incentive", "highschool", "windows", "juno"];

resetGame();
console.log(words[wordIndex]);
document.getElementById("word").innerHTML = displayMysteryWord();
document.onkeyup = function (event) {
    var input = event.key;
    var regExp = new RegExp(input, "gi");
    var placeholder = words[wordIndex];
      if(placeholder.search(/[a-z]|[A-Z]/) != -1){
        if(placeholder.includes(input)){
            duplicate = placeholder.match(regExp);
            for(var i = 0; i < duplicate.length; i++){
                displayWord[placeholder.indexOf(input)] = input;
                placeholder = placeholder.replace(input, " ");
           }
        }
	
	
	document.getElementById("question").innerHTML = array[count].q;

   
    document.onkeyup   = function (event) {
        var input = event.key;
        if(input == "t" || input == "f"){
            if (array[count].a == input) {
                alert("Correct");
                score++;
                document.getElementById("score").innerHTML = "Current score: " + score;
            }
            else{
                alert("Incorrect");
                score--;
                       
            }
            count++;
            if(count < 10){
                document.getElementById("question").innerHTML = array[count].q;
            }
            else{
                alert("You've reached to the end");
            }
        }
        else{
            alert("Remember only the keys t or f");
        }
    }

   
    function displayTutorial() {
            var x = document.getElementById("tutorial");
            var y = document.getElementById("tutorialButton");
            if (x.style.display === "none") {
                x.style.display = "block";
                y.textContent = "Put away instructions";
            } else {
                x.style.display = "none";
                y.textContent = "Reveal instructions";
            }
    }
    </script>
     <div class = "sticky" id = "footer">
    <div class = "sticky" id = "footer2">
        <p>Copyright FatimaHarrison LLC©</p>
    </div>                      
</body>
</html>
