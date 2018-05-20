class Player 
{
	constructor (name, mark, turn)
	{
		this.name = name;
		this.mark = mark;
		this.turn = turn;
		this.marks = [];

	}

	markSymbol (e) 
	{
	    var mark =  document.createElement("span");
	    mark.className = "mark";
	    mark.textContent = this.mark;
		e.target.appendChild(mark);
		this.pushToMarks(e);

		var board = new Board()
		board.insert(this.marks)
    }
    
    pushToMarks (e)
    {
		this.marks.push(
			{ 
			    x: e.target.getAttribute("data-xpos"),
				y: e.target.getAttribute("data-Ypos")
			}
		) 
	}
	
}
