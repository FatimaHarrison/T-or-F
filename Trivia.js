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
