function add1 (num) {
var x = document.getElementById(num);
  if(x.children[2].innerHTML == "-"){
    x.children[2].innerHTML = "1";
    x.children[3].innerHTML = "-3";
  } 
  else {
    let currentScore = x.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    x.children[2].innerHTML = currentScore + 1;
    x.children[3].innerHTML = currentScore - 3;
  }
  
  var count = 1;
  var all = 0;
  var par = 0;
  var score = 0;
  var over = 0;
  var curr = document.getElementById("1");
  while(count <= 18){
    curr = document.getElementById(count);
    if(curr.children[2].innerHTML == "-"){
    }
    else{
        all += 1;
        par = par + Number.parseInt(curr.children[1].innerHTML);
        score = score + Number.parseInt(curr.children[2].innerHTML);
        over = over + Number.parseInt(curr.children[3].innerHTML);
    }
    count++;
  }
  
  var z = document.getElementById("19");
  z.children[0].innerHTML = all;
  z.children[1].innerHTML = par;
  z.children[2].innerHTML = score;
  z.children[3].innerHTML = over;  
}

function subtract1 (num2) {
    var y = document.getElementById(num2)
  if(y.children[2].innerHTML == "-"){
     y.children[2].innerHTML = "-1";
     y.children[3].innerHTML = "-5";
  }
  else {
    let currentScore = y.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    y.children[2].innerHTML = currentScore - 1;
    y.children[3].innerHTML = currentScore - 5;
    }
  
  var count2 = 1;
  var all2 = 0;
  var par2= 0;
  var score2 = 0;
  var over2 = 0;
  var currEl = document.getElementById("1");
  while(count2 <= 18){
    currEl = document.getElementById(count2);
    if(currEl.children[2].innerHTML == "-"){
    }
    else{
        all2 += 1;
        par2 = par2 + Number.parseInt(currEl.children[1].innerHTML);
        score2 = score2 + Number.parseInt(currEl.children[2].innerHTML);
        over2 = over2 + Number.parseInt(currEl.children[3].innerHTML);
    }
    count2++;
  }
  
  var j = document.getElementById("19");
  j.children[0].innerHTML = all2;
  j.children[1].innerHTML = par2;
  j.children[2].innerHTML = score2;
  j.children[3].innerHTML = over2;
  }

function clearHole (num3) {
    console.log("invoked clear");
var elem = document.getElementById(num3);
elem.children[2].innerHTML = "-";
elem.children[3].innerHTML = "-";

  var count3 = 1;
  var all3 = 0;
  var par3= 0;
  var score3 = 0;
  var over3 = 0;
  var currElem = document.getElementById("1");
  while(count3 <= 18){
    currElem = document.getElementById(count3);
    if(currElem.children[2].innerHTML == "-"){

    }
    else{
        all3 += 1;
        par3 = par3 + Number.parseInt(currElem.children[1].innerHTML);
        score3 = score3 + Number.parseInt(currElem.children[2].innerHTML);
        over3 = over3 + Number.parseInt(currElem.children[3].innerHTML);
    }
    count3++;
  }
  var k = document.getElementById("19");
  k.children[0].innerHTML = all3;
  k.children[1].innerHTML = par3;
  k.children[2].innerHTML = score3;
  k.children[3].innerHTML = over3;
}

function newCard(){
      var temp1, temp2, temp3;
      temp1 = document.getElementById("month");
                    temp2 = document.getElementById("day");
                    temp3 = document.getElementById("year");
                    if(temp1.value == "" || temp2.value == "" || temp3.value == ""){
                      temp3.value = "enter a date first"
                    }
                    else{
        var cards = JSON.parse(localStorage.getItem("cards"));       
        if(cards == null){
          var rounds = new Array();
            var cards = new Array();
            for(var i = 0; i <= 18; i++){
              var temp = [0, 0, 0];
                if(i == 0){
                    temp[0] = document.getElementById("month").value;
                    temp[1] = document.getElementById("day").value;
                    temp[2] = document.getElementById("year").value;
                    rounds.push(temp);
                }else{
                  var x = document.getElementById(i);
            temp[0] = Number.parseInt(x.children[1].innerHTML);
            temp[1] = Number.parseInt(x.children[2].innerHTML);
            temp[2] = Number.parseInt(x.children[3].innerHTML);
            rounds.push(temp);
                }
            }
            console.log(rounds);
            cards.push(rounds);
            var str = JSON.stringify(cards)
            localStorage.setItem("cards", str);
            console.log("first instanciation of rounds storage");
      window.location.href = "golfScorecards.html";
        }
        else{
        var rounds = new Array();
        for(var i = 0; i <= 18; i++){
          var temp = [0, 0, 0];
            if(i == 0){
                temp[0] = document.getElementById("month").value;
                temp[1] = document.getElementById("day").value;
                temp[2] = document.getElementById("year").value;
                rounds.push(temp);
            }else{
        var x = document.getElementById(i);
        temp[0] = Number.parseInt(x.children[1].innerHTML);
        temp[1] = Number.parseInt(x.children[2].innerHTML);
        temp[2] = Number.parseInt(x.children[3].innerHTML);
        rounds.push(temp);
            }
        }
        cards.push(rounds);
        var str = JSON.stringify(cards);
localStorage.setItem("cards", str);
console.log("new card created and saved to storage");
        window.location.href = "golfScorecards.html";
        }
      }

    }
    function updatePars(){
    window.location.href = "updatePars.html"
    }
    function populateRounds(){
    
    }
    function changePars(){
        var pars = JSON.parse(localStorage.getItem("pars"));
        if(pars){
        for(var i = 0; i <= 17; i++){
            document.getElementById(i + 1).children[1].innerHTML = pars[i];
        }
    }else{
        pars = [4,5,4,3,4,5,4,3,4, 4,5,4,3,4,5,3,4,4];
        var str = JSON.stringify(pars);
        localStorage.setItem("pars", str);
        changePars();
    }
    }

function submitPars() {
  var pars = new Array(17);
  var x;
  var j;
  for (var i = 0; i < 18; i++) {
    j = i + 1;
    x = document.getElementById("p" + j);
    pars[i] = x.value;
    console.log(pars[i]);
  }
  var str = JSON.stringify(pars);
  localStorage.setItem("pars", str);
  window.location.href = "golfScorecards.html";
}
function add1Par(num) {
  var x = document.getElementById("p" + num);
  var total = x.value;
  total++;
  x.value = total;
}
function subtract1Par(num) {
  var x = document.getElementById("p" + num);
  var total = x.value;
  total--;
  x.value = total;
}
function deleteCards() {
  var str = null;
  localStorage.setItem("cards", str);
  window.location.href = "golfScorecards.html";
}


 
