$(document).ready(function(){
	var newGame = new ConnectFourGame();

	$('.board-container div div').on('click', function(){
		if (!newGame.checkWin()){
			var column = $(this).attr('class').slice(-1);
			var cell = newGame.playTurn(Number(column))
			var row = Math.floor(cell/9)
			$('#row'+row + ' .col' + column).css('background-color', newGame.playerColor )
		} else {
			$("#winner-status").html(newGame.playerColor.toUpperCase() + " WINS");
		}
	}
	)
})





