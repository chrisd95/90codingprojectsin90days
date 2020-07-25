//Initialize variables
var cnv;
var grid =[];
//Initialize the grid 20x20 with values of 0 (empty spaces)
//Eventually, introducing a hashmap to store the values would will reduce the time complexity
for(var i=0; i<20; i++){
  grid.push([])
  for(var j=0;j<20;j++){
    grid[i].push(0);
  }
}
var snakeDirection = "right";

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  if(y < 100){
    y = 150;
  }

  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowHeight*0.8,windowHeight*0.8);
  centerCanvas();
  background(255, 0, 200);
}

//Function that scans the current state of the grid for empty spots and returns it (Empty:0, Food:1, Snake:2)
function scanEmptyGrid(gridState){
    emptyArr = [];
    for(var i=0; i<grid.length; i++){
      for(var j=0;j<grid[0].length;j++){
        if(gridState[i][j] === 0){
          emptyPosition = [i,j];
          emptyArr.push(emptyPosition);
        }
      }
  }
  return emptyArr;
};

var snake = [];

function populateGridSnake(snake,gridState){
  for(var i=0; i<snake.length;i++){
    gridState[snake[i][0]][snake[i][1]] = 2;
  }
}

function spawnFood(gridState){
  //Scan and return empty spots
  emptyArr = scanEmptyGrid(gridState);
  //Pick a random empty spot
  initialFoodPosition = Math.floor(Math.random() * emptyArr.length);
  //Populate that spot with Food
  grid[emptyArr[initialFoodPosition][0]][emptyArr[initialFoodPosition][1]] = 1;
}

function initialConditions(){
  //Scan grid for empty spots
  emptyArr = scanEmptyGrid(grid);
  //Find a random spot in the empty grid
  initialSnakePosition = Math.floor(Math.random() * emptyArr.length);
  var snakeHead = emptyArr[initialSnakePosition];
  //snake length = 3
  var snakeLength = 3;

  //append the snake body to the snake head (this might be reversed actually)
  for(var s=0; s<snakeLength;s++){
    snake.push([((emptyArr[initialSnakePosition][0]+s)%20),emptyArr[initialSnakePosition][1]]);
  }
  //populate grid with snake;
  populateGridSnake(snake,grid);
  //spawn food;
  spawnFood(grid);
}

function move(direction , gridState, snakeState){
  if(direction==="right"){
    dirX = 1;
    dirY = 0;
  }
  if(direction==="left"){
    dirX = -1;
    dirY = 0;
  }
  if(direction==="down"){
    dirX = 0;
    dirY = 1;
  }
  if(direction==="up"){
    dirX = 0;
    dirY = -1;
  }
  //Add new head to snake
  var snakeHead = snakeState[snakeState.length-1];
  var newsnakeHead = [((snakeHead[0]+(dirX)+20)%20),((snakeHead[1]+(dirY)+20)%20)];
  if(gridState[newsnakeHead[0]][newsnakeHead[1]] === 1){
    snakeState.push(newsnakeHead);
    spawnFood(gridState);
  }
  else{
    snakeState.push(newsnakeHead);
    var snakeTail = snakeState.shift();
    grid[snakeTail[0]][snakeTail[1]] = 0;
  }
}
//Call initial function to populate grid
initialConditions();

setInterval(function(){
  move(snakeDirection,grid,snake)
}, 80);

function draw(){
  //clear the old drawing, every cycle rewrites from scratch
  clear();
  centerCanvas();
  gridSize = windowHeight*0.8;
  unitSize = gridSize/20
  fill(255,255,255);
  populateGridSnake(snake,grid);
  for(var i=0; i<grid.length; i++){
    for(var j=0;j<grid[0].length;j++){
      /*
      textSize(10);
      fill(0,0,0);
      text(i+",",i*unitSize,j*unitSize-4);
      text(j,i*unitSize+10,j*unitSize-4);
      */
      fill(255,255,255);
      if(grid[i][j] === 0){
      //square(unitSize*i,unitSize*j,unitSize);
      }
      else if (grid[i][j] === 1) {
        fill(255,0,0);
        square(unitSize*i,unitSize*j,unitSize,unitSize/3);
        fill(255,255,255);
      }
      else if(grid[i][j] === 2){
        fill(0,0,255);
        if(true){
          square(unitSize*i,unitSize*j,unitSize,unitSize/3);
        }else {
          square(unitSize*i,unitSize*j,unitSize,unitSize/3);
        }
        fill(255,255,255);
      }
      else {
      }
    }
  }
}

function keyPressed() {
    if(keyCode === UP_ARROW){
      snakeDirection = "up";
    }
    if(keyCode === DOWN_ARROW){
      snakeDirection = "down";
    }
    if(keyCode === LEFT_ARROW){
      snakeDirection = "left";
    }
    if(keyCode === RIGHT_ARROW){
      snakeDirection = "right";
    }
}
