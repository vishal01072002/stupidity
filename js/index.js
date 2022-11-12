

for (let i = 0; i <= 9; i++) {
    var btn_num = ".btn-num-" + i;
    var btns = document.querySelector(btn_num);
    btns.addEventListener("click", handleclick);
    if (i != 6 && i != 0 && i != 9) {
        btns.classList.toggle("toggled");
    }
}

var testerName = "";
var nameDone = false;

function randomNum() {
    var num = Math.floor(Math.random() * 8) + 1;
    return num;
}

function handleclick() {
    // console.log(nameDone);

    var buttonName = this.querySelector("span").innerText;
    // ------------------------- logic for take name ----------------------------
    if (!nameDone || buttonName == "Submit") {
        if (!nameDone) {
            testerName = document.querySelector("input").value;
            if (testerName.length > 0)
                nameDone = true;
        }
        if (nameDone) {
            document.querySelector("h2").innerHTML = "let's take test to know";
        }

        // console.log(buttonName); // ---------------------

        if (buttonName == "Submit" && nameDone) {
            document.querySelector("h1").innerHTML = "Hello, " + testerName;
            document.querySelector(".enter-name").classList.toggle("visiblity");
            document.querySelector(".btn-num-9").classList.toggle("visiblity");

        }
        else {
            if (!nameDone)
                document.querySelector("h2").innerHTML = "Please first enter your name";
        }
    }

    // ------------------------------- logic for hide button -----------------
    else {
        // console.log(buttonName);
        if (testerName == "vishal") {
            // congratulation ! vishal you pass test, you are not stupid
            document.querySelector("h2").innerHTML = "congratulation ! vishal you pass test, you are not stupid";
        }
        else {
            if (buttonName == "YES") {
                document.querySelector("h2").innerHTML = "So you confirm that you are stupid";
            }

            else { // num
                currNum = buttonName;
                randomNumber = (currNum);
                // console.log(randomNumber);
                while (true) {
                    if (randomNumber == buttonName)
                        randomNumber = randomNum();
                    else
                        break;
                }
                // console.log(document.querySelector(".btn-num-" + buttonName));
                document.querySelector(".btn-num-" + currNum).classList.toggle("toggled");
                document.querySelector(".btn-num-" + randomNumber).classList.toggle("toggled");
                currNum = randomNum;
            }
        }
    }
}
