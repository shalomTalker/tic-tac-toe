class Board {
	constructor (node) 
	{
		this.tmp = []
		this.numWins = [66, 36, 63, 96, 69];
	}
// insert marks to board instance
	insert (marks) 
	{
		for (var i = 0; i < marks.length; i++) {
					this.tmp.push(marks[i].x + marks[i].y)
				}
		this.checkStats([...new Set(this.tmp)])
		console.log([...new Set(this.tmp)])
	}

// check if sum of template board exist in winnums array
	checkStats (Tmpl) 
	{
		switch (Tmpl.length) {
			case 3:
				var	sum = Tmpl.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
				if (this.numWins.includes(sum)) {
					console.log('won')
					break;
				}
			case  4   :
			for (var i = 0; i <= 3; i++) {
				Tmpl.splice(i, 1)
				var	sum = Tmpl.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
				console.log(Tmpl)
				console.log(sum)
				
				if (this.numWins.includes(sum)) {
					console.log('won')
					break;
					
				}
				return
			}
				 
		 	case 5:
		console.log(Tmpl.length)
		 	for (var i = 0; i < 3; i++) {
				Tmpl.splice(i, 2)
				console.log(Tmpl.length)
				console.log(Tmpl)
				this.checkStats(Tmpl)
				break;
		 	}

		 	
		}
	}

}