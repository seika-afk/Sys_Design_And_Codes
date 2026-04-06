package gameBoard

import(
	"SnLd/dice"
	"SnLd/player"
	
	

)


type GameBoard struct{
	Dice Dice.Dice
	NextTurn []player.Player{}
	Snakes []jumper.Jumper{}
	ladders []jumper.Jumper{}
	boardSize int
	Map map[string]int 

}
