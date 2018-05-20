console.log('main')

var playerX = new Player("playerX", "x", true);
var playerO = new Player("playerO", "o", false);

var cells = document.querySelectorAll('.cell')
for (var i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", function (e) {
		var output = document.querySelector("output")
		if (!e.target.textContent) {
			if (playerX.turn == true) {
				playerX.markSymbol(e);
				playerX.turn = false
				output.textContent = "PlayerX played now";
				console.log(output.textContent )
				console.log(playerX.marks)


			} else  {
				playerO.markSymbol(e);
				playerX.turn = true;
				output.textContent = "PlayerO played now";
				console.log(output.textContent )
				console.log(playerO.marks)

			} 
			
		}	
	})
}


