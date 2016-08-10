export class Map {
  id: number;
  name: string;
  layout: MapCell[][];

  constructor(xSize:number,ySize:number){
        console.log('generating Map Object with' + xSize + ',' + ySize);
        this.layout = [];
        for(var i = 0;i < xSize;i++){
        	this.layout[i] = []
        	for(var j = 0;j < ySize;j++){
        		this.layout[i][j] = new MapCell();
        	}
        }
  }
};

export class MapCell{
	constructor(){
		this.terrain = 0;
	}
	terrain: number;
	special: number;
}

/* terrain number
0 = ::
1 = top
2 = right
3 = bottom 
4 = left
5 = topleft
6 = top right
7 = bottom right
8 = bottom left
9 = top bottom
10 = left right
11 = top right bottom
12 = right bottom left
13 = top left bottom
14 = top left right
15 = square
*/