//Load boards manually
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

  //Create Variables
  var selectedNum;
  var selectedTile;
  var disableSelect;
  var ans=0;
  var whichCheck;

  window.onload = function() {
      id("easybtn").addEventListener("click",startEasy);
      id("mediumbtn").addEventListener("click",startMedium);
      id("hardbtn").addEventListener("click",startHard);
  }

  function startEasy(){
     // console.log("clicked");
      let board;
      if(id("easybtn").click) board = easy[0];

      /*if(id("easybtn").click) board = easy[0];
      else if(id("mediumbtn").click) board = medium[0];
      else if(id("hardbtn").click) board = hard[0];*/
     
     whichCheck=1;
     // console.log(board);

      //selecting numbers and tiles
      disableSelect = false;

      //creates board based on difficulty
      generateBoard(board);
  }

  function startMedium(){
    // console.log("clicked");
     let board;
     if(id("mediumbtn").click) board = medium[0];

     /*if(id("easybtn").click) board = easy[0];
     else if(id("mediumbtn").click) board = medium[0];
     else if(id("hardbtn").click) board = hard[0];*/
    
    whichCheck=2;
    // console.log(board);

     //selecting numbers and tiles
     disableSelect = false;

     //creates board based on difficulty
     generateBoard(board);
 }

 function startHard(){
    // console.log("clicked");
     let board;
     if(id("hardbtn").click) board = hard[0];

     /*if(id("easybtn").click) board = easy[0];
     else if(id("mediumbtn").click) board = medium[0];
     else if(id("hardbtn").click) board = hard[0];*/
    
    whichCheck=3;
    // console.log(board);

     //selecting numbers and tiles
     disableSelect = false;

     //creates board based on difficulty
     generateBoard(board);
 }

  function generateBoard(board){
      //clear previous boards
      clearPrevious();
      //increment tile ids
      let idCount = 0;
      //create 81 tiles
      for(let i=0;i<81;i++){
          let tile = document.createElement("input");
          tile.setAttribute('maxLength',1);
          
          tile.onkeypress = KeyPressHandler;
          function KeyPressHandler(evt)
          {
             evt = (evt) ? evt : window.event
             var charCode = (evt.which) ? evt.which : evt.keyCode
             if (charCode > 31 && (charCode < 49 || charCode > 57)) {
                status = "This field accepts numbers only."
                return false;
             }
             status = ""
             return true;
          }


          if(board.charAt(i) != "-"){
              //set tile to correct number
              tile.value = board.charAt(i);
              tile.classList.add("fixed");
              tile.setAttribute('disabled',true);
          }
          else{
            tile.classList.add("answerfield");
              //add click event listner to tile
              tile.addEventListener("click", function(){
                  //if selecting is not disabled
                  if(!disableSelect){
                      //if the tile is already selected
                      if(tile.classList.contains("selected")){
                          //then remove selection
                          tile.classList.remove("selected");
                          selectedTile=null;
                      } else {
                          //deselect all other tiles
                          for(let i=0;i<81;i++){
                              qsa(".tile")[i].classList.remove("selected");
                          }
                          //Add selection and update variable
                          tile.classList.add("selected");
                          selectedTile = tile;
                          updateMove();
                      }
                  }
              });
          }
          //assign tile id
          tile.id = idCount;
          //increment for next line
          idCount++;
          //add tile class to all tiles
          tile.classList.add("tile");
          if((tile.id>17 && tile.id<27) || (tile.id>44 && tile.id<54) || (tile.id>71 && tile.id<81)) {
              tile.classList.add("bottomBorder");
          }
          if((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6 || tile.id==8 || tile.id==17 || tile.id==26 || tile.id==35 || tile.id==44 || tile.id==53 || tile.id==62 || tile.id==71 || tile.id==80){
              tile.classList.add("rightBorder");
          }
          if(tile.id>=0 && tile.id<=8){
              tile.classList.add("topBorder");
          }
          if(tile.id==0 || tile.id==9 || tile.id==18 || tile.id==27 || tile.id==36 || tile.id==45 || tile.id==54 || tile.id==63 || tile.id==72){
              tile.classList.add("leftBorder");
          }
          //add tile to board
          id("board").appendChild(tile);
      }
    }

    function checkEasy(tile){
        let solution;
        if(id("easybtn").click) solution = easy[1];
        //console.log(solution);

        //if tile number is equal to solition number
       // if(solution.charAt(tile.id) === tile.textContent) console.log("correct");
        //else console.log("incorrect");
    
    if((solution.charAt(0) == document.getElementById("0").value)&&(solution.charAt(1) == document.getElementById("1").value)&&(solution.charAt(2) == document.getElementById("2").value)&&(solution.charAt(3) == document.getElementById("3").value)&&(solution.charAt(4) == document.getElementById("4").value)&&(solution.charAt(5) == document.getElementById("5").value)&&(solution.charAt(6) == document.getElementById("6").value)&&(solution.charAt(7) == document.getElementById("7").value)&&(solution.charAt(8) == document.getElementById("8").value)&&(solution.charAt(9) == document.getElementById("9").value)&&(solution.charAt(10) == document.getElementById("10").value)&&(solution.charAt(11) == document.getElementById("11").value)&&(solution.charAt(12) == document.getElementById("12").value)&&(solution.charAt(13) == document.getElementById("13").value)&&(solution.charAt(14) == document.getElementById("14").value)&&(solution.charAt(15) == document.getElementById("15").value)&&(solution.charAt(16) == document.getElementById("16").value)&&(solution.charAt(17) == document.getElementById("17").value)&&(solution.charAt(18) == document.getElementById("18").value)&&(solution.charAt(19) == document.getElementById("19").value)&&(solution.charAt(20) == document.getElementById("20").value)&&(solution.charAt(21) == document.getElementById("21").value)&&(solution.charAt(22) == document.getElementById("22").value)&&(solution.charAt(23) == document.getElementById("23").value)&&(solution.charAt(24) == document.getElementById("24").value)&&(solution.charAt(25) == document.getElementById("25").value)&&(solution.charAt(26) == document.getElementById("26").value)&&(solution.charAt(27) == document.getElementById("27").value)&&(solution.charAt(28) == document.getElementById("28").value)&&(solution.charAt(29) == document.getElementById("29").value)&&(solution.charAt(30) == document.getElementById("30").value)&&(solution.charAt(31) == document.getElementById("31").value)&&(solution.charAt(32) == document.getElementById("32").value)&&(solution.charAt(33) == document.getElementById("33").value)&&(solution.charAt(34) == document.getElementById("34").value)&&(solution.charAt(35) == document.getElementById("35").value)&&(solution.charAt(36) == document.getElementById("36").value)&&(solution.charAt(37) == document.getElementById("37").value)&&(solution.charAt(38) == document.getElementById("38").value)&&(solution.charAt(39) == document.getElementById("39").value)&&(solution.charAt(40) == document.getElementById("40").value)&&(solution.charAt(41) == document.getElementById("41").value)&&(solution.charAt(42) == document.getElementById("42").value)&&(solution.charAt(43) == document.getElementById("43").value)&&(solution.charAt(44) == document.getElementById("44").value)&&(solution.charAt(45) == document.getElementById("45").value)&&(solution.charAt(46) == document.getElementById("46").value)&&(solution.charAt(47) == document.getElementById("47").value)&&(solution.charAt(48) == document.getElementById("48").value)&&(solution.charAt(49) == document.getElementById("49").value)&&(solution.charAt(50) == document.getElementById("50").value)&&(solution.charAt(51) == document.getElementById("51").value)&&(solution.charAt(52) == document.getElementById("52").value)&&(solution.charAt(53) == document.getElementById("53").value)&&(solution.charAt(54) == document.getElementById("54").value)&&(solution.charAt(55) == document.getElementById("55").value)&&(solution.charAt(56) == document.getElementById("56").value)&&(solution.charAt(57) == document.getElementById("57").value)&&(solution.charAt(58) == document.getElementById("58").value)&&(solution.charAt(59) == document.getElementById("59").value)&&(solution.charAt(60) == document.getElementById("60").value)&&(solution.charAt(61) == document.getElementById("61").value)&&(solution.charAt(62) == document.getElementById("62").value)&&(solution.charAt(63) == document.getElementById("63").value)&&(solution.charAt(64) == document.getElementById("64").value)&&(solution.charAt(65) == document.getElementById("65").value)&&(solution.charAt(66) == document.getElementById("66").value)&&(solution.charAt(67) == document.getElementById("67").value)&&(solution.charAt(68) == document.getElementById("68").value)&&(solution.charAt(69) == document.getElementById("69").value)&&(solution.charAt(70) == document.getElementById("70").value)&&(solution.charAt(71) == document.getElementById("71").value)&&(solution.charAt(72) == document.getElementById("72").value)&&(solution.charAt(73) == document.getElementById("73").value)&&(solution.charAt(74) == document.getElementById("74").value)&&(solution.charAt(75) == document.getElementById("75").value)&&(solution.charAt(76) == document.getElementById("76").value)&&(solution.charAt(77) == document.getElementById("77").value)&&(solution.charAt(78) == document.getElementById("78").value)&&(solution.charAt(79) == document.getElementById("79").value)&&(solution.charAt(80) == document.getElementById("80").value)){
        ans=1;
    }
    else{
        ans=0;
    }
    return ans;
    }







    function checkMedium(tile){
        let solution;
        if(id("mediumbtn").click) solution = medium[1];
        //console.log(solution);

        //if tile number is equal to solition number
    
    if((solution.charAt(0) == document.getElementById("0").value)&&(solution.charAt(1) == document.getElementById("1").value)&&(solution.charAt(2) == document.getElementById("2").value)&&(solution.charAt(3) == document.getElementById("3").value)&&(solution.charAt(4) == document.getElementById("4").value)&&(solution.charAt(5) == document.getElementById("5").value)&&(solution.charAt(6) == document.getElementById("6").value)&&(solution.charAt(7) == document.getElementById("7").value)&&(solution.charAt(8) == document.getElementById("8").value)&&(solution.charAt(9) == document.getElementById("9").value)&&(solution.charAt(10) == document.getElementById("10").value)&&(solution.charAt(11) == document.getElementById("11").value)&&(solution.charAt(12) == document.getElementById("12").value)&&(solution.charAt(13) == document.getElementById("13").value)&&(solution.charAt(14) == document.getElementById("14").value)&&(solution.charAt(15) == document.getElementById("15").value)&&(solution.charAt(16) == document.getElementById("16").value)&&(solution.charAt(17) == document.getElementById("17").value)&&(solution.charAt(18) == document.getElementById("18").value)&&(solution.charAt(19) == document.getElementById("19").value)&&(solution.charAt(20) == document.getElementById("20").value)&&(solution.charAt(21) == document.getElementById("21").value)&&(solution.charAt(22) == document.getElementById("22").value)&&(solution.charAt(23) == document.getElementById("23").value)&&(solution.charAt(24) == document.getElementById("24").value)&&(solution.charAt(25) == document.getElementById("25").value)&&(solution.charAt(26) == document.getElementById("26").value)&&(solution.charAt(27) == document.getElementById("27").value)&&(solution.charAt(28) == document.getElementById("28").value)&&(solution.charAt(29) == document.getElementById("29").value)&&(solution.charAt(30) == document.getElementById("30").value)&&(solution.charAt(31) == document.getElementById("31").value)&&(solution.charAt(32) == document.getElementById("32").value)&&(solution.charAt(33) == document.getElementById("33").value)&&(solution.charAt(34) == document.getElementById("34").value)&&(solution.charAt(35) == document.getElementById("35").value)&&(solution.charAt(36) == document.getElementById("36").value)&&(solution.charAt(37) == document.getElementById("37").value)&&(solution.charAt(38) == document.getElementById("38").value)&&(solution.charAt(39) == document.getElementById("39").value)&&(solution.charAt(40) == document.getElementById("40").value)&&(solution.charAt(41) == document.getElementById("41").value)&&(solution.charAt(42) == document.getElementById("42").value)&&(solution.charAt(43) == document.getElementById("43").value)&&(solution.charAt(44) == document.getElementById("44").value)&&(solution.charAt(45) == document.getElementById("45").value)&&(solution.charAt(46) == document.getElementById("46").value)&&(solution.charAt(47) == document.getElementById("47").value)&&(solution.charAt(48) == document.getElementById("48").value)&&(solution.charAt(49) == document.getElementById("49").value)&&(solution.charAt(50) == document.getElementById("50").value)&&(solution.charAt(51) == document.getElementById("51").value)&&(solution.charAt(52) == document.getElementById("52").value)&&(solution.charAt(53) == document.getElementById("53").value)&&(solution.charAt(54) == document.getElementById("54").value)&&(solution.charAt(55) == document.getElementById("55").value)&&(solution.charAt(56) == document.getElementById("56").value)&&(solution.charAt(57) == document.getElementById("57").value)&&(solution.charAt(58) == document.getElementById("58").value)&&(solution.charAt(59) == document.getElementById("59").value)&&(solution.charAt(60) == document.getElementById("60").value)&&(solution.charAt(61) == document.getElementById("61").value)&&(solution.charAt(62) == document.getElementById("62").value)&&(solution.charAt(63) == document.getElementById("63").value)&&(solution.charAt(64) == document.getElementById("64").value)&&(solution.charAt(65) == document.getElementById("65").value)&&(solution.charAt(66) == document.getElementById("66").value)&&(solution.charAt(67) == document.getElementById("67").value)&&(solution.charAt(68) == document.getElementById("68").value)&&(solution.charAt(69) == document.getElementById("69").value)&&(solution.charAt(70) == document.getElementById("70").value)&&(solution.charAt(71) == document.getElementById("71").value)&&(solution.charAt(72) == document.getElementById("72").value)&&(solution.charAt(73) == document.getElementById("73").value)&&(solution.charAt(74) == document.getElementById("74").value)&&(solution.charAt(75) == document.getElementById("75").value)&&(solution.charAt(76) == document.getElementById("76").value)&&(solution.charAt(77) == document.getElementById("77").value)&&(solution.charAt(78) == document.getElementById("78").value)&&(solution.charAt(79) == document.getElementById("79").value)&&(solution.charAt(80) == document.getElementById("80").value)){
        ans=1;
    }
    else{
        ans=0;
    }
    return ans;
    }
   




    function checkHard(tile){
        let solution;
        if(id("hardbtn").click) solution = hard[1];
        //console.log(solution);

        //if tile number is equal to solition number
    
    if((solution.charAt(0) == document.getElementById("0").value)&&(solution.charAt(1) == document.getElementById("1").value)&&(solution.charAt(2) == document.getElementById("2").value)&&(solution.charAt(3) == document.getElementById("3").value)&&(solution.charAt(4) == document.getElementById("4").value)&&(solution.charAt(5) == document.getElementById("5").value)&&(solution.charAt(6) == document.getElementById("6").value)&&(solution.charAt(7) == document.getElementById("7").value)&&(solution.charAt(8) == document.getElementById("8").value)&&(solution.charAt(9) == document.getElementById("9").value)&&(solution.charAt(10) == document.getElementById("10").value)&&(solution.charAt(11) == document.getElementById("11").value)&&(solution.charAt(12) == document.getElementById("12").value)&&(solution.charAt(13) == document.getElementById("13").value)&&(solution.charAt(14) == document.getElementById("14").value)&&(solution.charAt(15) == document.getElementById("15").value)&&(solution.charAt(16) == document.getElementById("16").value)&&(solution.charAt(17) == document.getElementById("17").value)&&(solution.charAt(18) == document.getElementById("18").value)&&(solution.charAt(19) == document.getElementById("19").value)&&(solution.charAt(20) == document.getElementById("20").value)&&(solution.charAt(21) == document.getElementById("21").value)&&(solution.charAt(22) == document.getElementById("22").value)&&(solution.charAt(23) == document.getElementById("23").value)&&(solution.charAt(24) == document.getElementById("24").value)&&(solution.charAt(25) == document.getElementById("25").value)&&(solution.charAt(26) == document.getElementById("26").value)&&(solution.charAt(27) == document.getElementById("27").value)&&(solution.charAt(28) == document.getElementById("28").value)&&(solution.charAt(29) == document.getElementById("29").value)&&(solution.charAt(30) == document.getElementById("30").value)&&(solution.charAt(31) == document.getElementById("31").value)&&(solution.charAt(32) == document.getElementById("32").value)&&(solution.charAt(33) == document.getElementById("33").value)&&(solution.charAt(34) == document.getElementById("34").value)&&(solution.charAt(35) == document.getElementById("35").value)&&(solution.charAt(36) == document.getElementById("36").value)&&(solution.charAt(37) == document.getElementById("37").value)&&(solution.charAt(38) == document.getElementById("38").value)&&(solution.charAt(39) == document.getElementById("39").value)&&(solution.charAt(40) == document.getElementById("40").value)&&(solution.charAt(41) == document.getElementById("41").value)&&(solution.charAt(42) == document.getElementById("42").value)&&(solution.charAt(43) == document.getElementById("43").value)&&(solution.charAt(44) == document.getElementById("44").value)&&(solution.charAt(45) == document.getElementById("45").value)&&(solution.charAt(46) == document.getElementById("46").value)&&(solution.charAt(47) == document.getElementById("47").value)&&(solution.charAt(48) == document.getElementById("48").value)&&(solution.charAt(49) == document.getElementById("49").value)&&(solution.charAt(50) == document.getElementById("50").value)&&(solution.charAt(51) == document.getElementById("51").value)&&(solution.charAt(52) == document.getElementById("52").value)&&(solution.charAt(53) == document.getElementById("53").value)&&(solution.charAt(54) == document.getElementById("54").value)&&(solution.charAt(55) == document.getElementById("55").value)&&(solution.charAt(56) == document.getElementById("56").value)&&(solution.charAt(57) == document.getElementById("57").value)&&(solution.charAt(58) == document.getElementById("58").value)&&(solution.charAt(59) == document.getElementById("59").value)&&(solution.charAt(60) == document.getElementById("60").value)&&(solution.charAt(61) == document.getElementById("61").value)&&(solution.charAt(62) == document.getElementById("62").value)&&(solution.charAt(63) == document.getElementById("63").value)&&(solution.charAt(64) == document.getElementById("64").value)&&(solution.charAt(65) == document.getElementById("65").value)&&(solution.charAt(66) == document.getElementById("66").value)&&(solution.charAt(67) == document.getElementById("67").value)&&(solution.charAt(68) == document.getElementById("68").value)&&(solution.charAt(69) == document.getElementById("69").value)&&(solution.charAt(70) == document.getElementById("70").value)&&(solution.charAt(71) == document.getElementById("71").value)&&(solution.charAt(72) == document.getElementById("72").value)&&(solution.charAt(73) == document.getElementById("73").value)&&(solution.charAt(74) == document.getElementById("74").value)&&(solution.charAt(75) == document.getElementById("75").value)&&(solution.charAt(76) == document.getElementById("76").value)&&(solution.charAt(77) == document.getElementById("77").value)&&(solution.charAt(78) == document.getElementById("78").value)&&(solution.charAt(79) == document.getElementById("79").value)&&(solution.charAt(80) == document.getElementById("80").value)){
        ans=1;
    }
    else{
        ans=0;
    }
    return ans;
    }







function check(){
    if(whichCheck==1){
        var x = checkEasy();
        if(x==1){
            alert("Correct");
        }
        else{
            alert("Incorrect");
        }
    }
    else if(whichCheck==2){
        var x = checkMedium();
        if(x==1){
            alert("Correct");
        }
        else{
            alert("Incorrect");
        }
    }
    else{
        var x = checkHard();
        if(x==1){
            alert("Correct");
        }
        else{
            alert("Incorrect");
        }
    }
}
    

  

  function clearPrevious(){
      //access all of the tiles
      let tiles = qsa(".tile");
      //remove each tile
      for(let i=0;i<tiles.length;i++){
          tiles[i].remove();
      }
      //clear selected variables
      selectedTile=null;
      selectedNum=null;
  }




 
// Helper Functions
  function id(id) {
      return document.getElementById(id);
  }

  function qs(selector){
      return document.querySelector(selector);
  }

  function qsa(selector){
      return document.querySelectorAll(selector);
  }