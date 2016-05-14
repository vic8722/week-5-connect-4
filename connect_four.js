var ConnectFourGame = function(){
  // this.board = ["edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,
  //               "edge", null   ,null   ,null   ,null   ,null   ,null   ,null   ,"edge" ,
  //               "edge", null   ,null   ,null   ,null   ,null   ,null   ,null   ,"edge" ,
  //               "edge", null   ,null   ,null   ,null   ,null   ,null   ,null   ,"edge" ,
  //               "edge", null   ,null   ,null   ,null   ,null   ,null   ,null   ,"edge" ,
  //               "edge", null   ,null   ,null   ,null   ,null   ,null   ,null   ,"edge" ,
  //               "edge", null   ,null   ,null   ,null   ,null   ,null   ,null   ,"edge" ,
  //               "edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge"
  //             ];

this.board = ["edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,
              "edge", "red"  ,"black","black","black","black",null   ,"black","edge" ,
              "edge", "black","red"  ,null   ,"red"  ,null   ,null   ,null   ,"edge" ,
              "edge", null   ,"black","red"  ,null   ,null   ,null   ,null  ,"edge" ,
              "edge", null   ,"red"  ,null   ,"red"  ,null   ,null   ,null   ,"edge" ,
              "edge", null   ,null   ,"red"  ,null   ,null   ,null   ,"red"  ,"edge" ,
              "edge", null   ,null   ,null   ,null   ,"red"   ,null   ,null   ,"edge" ,
              "edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge" ,"edge"
              ];

  this.checkWin = function(){
    _board = this.board;
    var won = false;
    this.board.forEach(function(element, index){
      if(element != null && element != "edge"){
        if(
          (element === _board[index + 9  * 1 ] &&
           element === _board[index + 9  * 2 ] &&
           element === _board[index + 9  * 3 ]) ||
          (element === _board[index + 1  * 1 ] &&
           element === _board[index + 1  * 2 ] &&
           element === _board[index + 1  * 3 ]) ||
          (element === _board[index + 8  * 1 ] &&
           element === _board[index + 8  * 2 ] &&
           element === _board[index + 8  * 3 ]) ||
          (element === _board[index + 10 * 1 ] &&
           element === _board[index + 10 * 2 ] &&
           element === _board[index + 10 * 3 ])
          ){
          won = true;
        }
      }
    })
    return won;
  }

}


















var newGame = new ConnectFourGame();
console.log(newGame.checkWin());
