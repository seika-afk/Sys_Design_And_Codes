package jumper


type Jumper struct{
	startPoint   int
	endPoint     int

}



func (j *Jumper) NewJumper(st int, ed int){	
	return &Jumper{
		startPoint : st,
		endPoint   : ed  

	}



}
