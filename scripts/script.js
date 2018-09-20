/* if (snake collapse with vegetable) {
    add 1 blockSize to snake};

    if (snake collapse with meat) {
    remove 1blockSize from the snake
    };

=================================================

if (snake have < 2 blockSize) {
    gameOver
};

if (snake have > 8 blockSize) {
    change difficulty level
};

var difficulty level = [1,2,3,4,5];

if (difficulty level[i]) {
    set speed to smth;
}

requestAnimation

=================================================

if (snake collapse with drawBorder) {
    gameOver
};

buttons {
    up: code;
    down: code;
    left: code;
    right;
};


*/































//creating a canvas and its size, set context to 2D (400x400px), parameters inside HTML

var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var width = canvas.width;

var height = canvas.height;

//creating an invisible grid of 10px size, so we have our canvas 40 blocks for both height and wide

var blockSize = 15;

// 40px for width
var widthInBlocks = width / blockSize;

// 40px for height
var heightInBlock = height / blockSize;

// creating score, with default value 0

var score = 0;



var imageApple = new Image();
imageApple.src = "images/appl2.png"

var imageBrok = new Image();
imageBrok.src = "images/brok2.png"

var imageStk = new Image();
imageStk.src = "images/steak2.png"

var imageGrass = new Image();
imageGrass.src = "images/grass2.png"

var imageFence = new Image();
imageFence.src = "images/fence.png"

var imageHead = new Image();
imageHead.src = "images/snakeHead.png"

var imageTail = new Image();
imageTail.src = "images/snakeTail.png"

var imageBody = new Image();
imageBody.src = "images/snakeSkin.png"

// creating a variable(), which later can be assign to button, which start the game. All attempts to chain every
// difficulty level to one function (start game) with several if statements fail, game keep doing stupid things
var pole = document.getElementById("canvas")

var a = function() {
pole.style.visibility = "visible";
a = setInterval(startGame, 100);
};

var b = function() {
pole.style.visibility = "visible";
b = setInterval(startGame, 75);
};

var c = function() {
pole.style.visibility = "visible";
c = setInterval(startGame, 60);
};

var startGame = function() {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    checkScore();
    snake.move();
    snake.draw();
    apple.draw();
    brokkoli.draw();
    meat.draw();
    meat1.draw();
    meat2.draw();






 //   for (i = 0; i < 3; i++) {
 //      meat.draw();
 //    };

 //   meat.draw();
 //   setTimeout(meat.draw(), 100);


    drawBorder();
};


/*
var startGame3 = function() {
    ctx.clearRect(0, 0, width, height);
    drawScore();
    snake.move();
    snake.draw();
    apple.draw();
    drawBorder();
    if (score >= 6) {
        clearInterval(a);
        clearInterval(startGame2);
        clearInterval(startGame3);
        setInterval(startGame3, 40)
        }
};

*/

// creating borders for our canvas use rectangles
var drawBorder = function () {
    var pat = ctx.createPattern(imageGrass, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);

    ctx.fillRect(width - blockSize + 4, 0, blockSize + 4, height);
    var pat = ctx.createPattern(imageFence, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(0, height - blockSize + 4, width, blockSize + 4);



};


// creating score table
var drawScore = function () {
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + score, blockSize, blockSize)

};

// creating text for game over
var gameOver = function () {
    clearInterval(a) || clearInterval(b) || clearInterval(c) || clearInterval(d);
    ctx.font = "60px Courier";
    ctx.fillStyle = "Red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("GAME OVER", width / 2, height / 2);
};

// creating function to draw block (10on10) with selected (x,y) coordinates
var Block = function(col, row) {
    this.col = col;
    this.row = row;
};

// link to .PROTOTYPE GUIDE https://code.tutsplus.com/tutorials/prototypes-in-javascript--net-24949
Block.prototype.drawSquareApl = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    var pat = ctx.createPattern(imageApple, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(x,y, blockSize, blockSize)
};

Block.prototype.drawSquareBrok = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    var pat = ctx.createPattern(imageBrok, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(x,y, blockSize, blockSize)
};

Block.prototype.drawSquareStk = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    var pat = ctx.createPattern(imageStk, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(x,y, blockSize, blockSize)
};

Block.prototype.drawSquareHead = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    var pat = ctx.createPattern(imageHead, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(x,y, blockSize, blockSize)
};

Block.prototype.drawSquareTail = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    var pat = ctx.createPattern(imageTail, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(x,y, blockSize, blockSize)
};

Block.prototype.drawSquare = function (color) {
    var x = this.col * blockSize;
    var y = this.row * blockSize;
    var pat = ctx.createPattern(imageBody, "repeat");
    ctx.fillStyle = pat;
    ctx.fillRect(x,y, blockSize, blockSize)
};


// creating the same function, but draw a circle, indicating the vegetable || meat. Creating variable circle
// with possibility to draw circles using (x, y, radius, 0, Math.PI * 2 formula)
/*
var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0 , Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    }else {
        ctx.stroke()
    }
};

Block.prototype.drawCircle = function(color) {
    var centerX = this.col * blockSize + blockSize / 2;
    var centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);

};
*/

// creating a function checking if 2 blocks collide with each other, later will use for checking if snake collide
// with itself or the border

Block.prototype.equal = function(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
};

// creating snake. Snake is an array of blocks. Inside the blocks is a coordinates (x,y) which sets the location
// of snake. Below is a snake represented by 3 blocks on line 5(y) and moving the right.

var Snake = function() {
    this.segments = [
        new Block(7,5), // head
        new Block(6,5),
        new Block(5,5),
    ];


    this.direction = "right";
    this.nextDirection = "right";
};

// drawing snake using drawSquare method we've created before

Snake.prototype.draw = function () {
    for (var i = 1; i < this.segments.length -1; i++) {
        this.segments[i].drawSquare("Blue");

    };
        var u = this.segments.length - 1;
        this.segments[u].drawSquareTail();
        this.segments[0].drawSquareHead();


};

// creating the movement. Very important part here to set the head of snake, which will be always the 1st
// element of this.segments -  [0].

Snake.prototype.move = function () {
    var head = this.segments[0];
    var newHead;


this.direction = this.nextDirection;

if (this.direction === "right") {
    newHead = new Block(head.col + 1, head.row);
} else if (this.direction === "down") {
    newHead = new Block(head.col, head.row + 1);
} else if (this.direction === "left") {
    newHead = new Block(head.col - 1, head.row);
} else if (this.direction === 'up') {
    newHead = new Block(head.col, head.row - 1);
}

if (this.checkCollision(newHead)) {
    gameOver();
    return
}

this.segments.unshift(newHead);

if (newHead.equal(apple.position)) {
    score++;
    apple.move();
    brokkoli.move();
    meat.move();
    meat1.move();
    meat2.move();
} else if (newHead.equal(brokkoli.position)) {
    score+=2;
    apple.move();
    brokkoli.move();
    meat.move();
    meat1.move();
    meat2.move();
} else {
    this.segments.pop();
}
};

// creating checkCollision function.

Snake.prototype.checkCollision = function (head) {
    // checking collision with wall
    var leftCollision = (head.col === 0);
    var topCollision = (head.row === 0);
    var rightCollision = (head.col === 27 - 1);
    var bottomCollision = (head.row === 27 - 1);

    var wallCollision = leftCollision || topCollision || bottomCollision || rightCollision;

    // checking collision with snake body
    var selfCollision = false;

    for (var i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }

    var meatCollision = false;

    if (head.equal(meat.position)) {
        meatCollision = true;
    } else if (head.equal(meat1.position)) {
        meatCollision = true;
    } else if (head.equal(meat2.position)) {
        meatCollision = true;
    }
if (wallCollision || selfCollision || meatCollision) {
    gameover = true;
}
return wallCollision || selfCollision || meatCollision
};

// setting the directions using JQuery
var directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};

$("body").keydown(function(event) {
    var newDirection = directions[event.keyCode];
    if (newDirection !== undefined) {
        snake.setDirection(newDirection);
    }
});

// creating a function identifying the wrong directions
Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection ==="up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    }
this.nextDirection = newDirection;
};

// creating apple
var Apple = function () {
    this.position = new Block(10, 10);
};

// creating brokkoli

var Brokkoli = function () {
    this.position = new Block(12, 12);
};

// creating meat

var Meat = function () {
    this.position = new Block(8,8);


};


Apple.prototype.draw = function () {
    this.position.drawSquareApl();

};

Brokkoli.prototype.draw = function () {
    this.position.drawSquareBrok();
};

Meat.prototype.draw = function () {
    this.position.drawSquareStk();
};

// random positioning for apple

Apple.prototype.move = function () {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlock - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};

Brokkoli.prototype.move = function () {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlock - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};

Meat.prototype.move = function () {
    var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1 || Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    var randomRow = Math.floor(Math.random() * (heightInBlock - 2)) + 1 || Math.floor(Math.random() * (heightInBlock - 2)) + 1;
    this.position = new Block(randomCol, randomRow);

};







// random apple and snake appearing (coordinates(3,4))

var snake = new Snake();
var apple = new Apple();
var brokkoli = new Brokkoli();
var meat = new Meat();
var meat1 = new Meat();
var meat2 = new Meat();
var meat3 = new Meat();







