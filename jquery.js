$(document).ready(function(){
    var newGame = new ConnectFourGame();
    // console.log("heyyyy");

    var connection = new WebSocket('ws:172.16.51.254:8001');
       connection.onmessage = function(event){
                    if (!newGame.checkWin()){
               var column = event.data;
                        // var column = $(this).attr('class').slice(-1);
                        var cell = newGame.playTurn(Number(column))
                        // connection.send(column);
                        var row = Math.floor(cell/9)
                        $('#row'+row + ' .col' + column).css('background-color', newGame.playerColor )
                    } else {
                        $("#winner-status").html(newGame.playerColor.toUpperCase() + " WINS");

                    }


       }

    $('.board-container div div').on('click', function(){

        // if (!newGame.checkWin()){
            var column = $(this).attr('class').slice(-1);
            // var cell = newGame.playTurn(Number(column))
            connection.send(column);
        //     var row = Math.floor(cell/9)
        //     $('#row'+row + ' .col' + column).css('background-color', newGame.playerColor )
        // } else {
        //     $("#winner-status").html(newGame.playerColor.toUpperCase() + " WINS");

        // }
    }
    )

    $('#new-game-button').click(function() {
                    location.reload();
                });
})