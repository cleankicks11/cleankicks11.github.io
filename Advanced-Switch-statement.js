//switch statement and apply case for the condtional statement outcome
//good for multiple outcomes instead of if else statement
//var whatHappens is set for switch statement with parameter of direction

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
	    whatHappens = "you ran in to a monster";
	    break;
	case "backward":
	    whatHappens = "you fell off a cliff";
	    break;
	case "right":
	     whatHappens = "you hit a tree";
	     break;
	case "left":
	     whatHappens = "you found a river";
	     break;
	default:
	     whatHappens = "Please enter a valid to move character";
    }
    return whatHappens;
}

function paint(color) {
    var paintWall;
    switch (color) {
	case "white":
	    paintWall = "Lets in sunlight";
	    break;
	case "red":
	    paintWall = "Passionate";
	    break;
	case "tan":
	    paintWall = "Desert Natural";
	    break;
	case "green":
	    paintWall = "gross!";
	    break;
	default:
	    paintWall = "You have to cover the drywall";
    }
    return paintWall;
}
