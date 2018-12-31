var score = 0;


function startGame() {	
	var gamr = document.getElementById("game");
	
	var mainGame = document.createElement("canvas");
	mainGame.id = "mycan";
	mainGame.width = 720;
	mainGame.height = 480;
	
	gamr.appendChild(mainGame);
	
	var drawMe = mainGame.getContext("2d");
	
	var x = 360;
	var y = 380;
	var chanx = -1;
	var chany = -1;
	var boardh = 10;
	var boardw = 100;
	var boardx = 310;
	var bardri = 3;
	var bardlf = -3;
	var riarrow = false;
	var lfarrow = false;
	
	
	var brickh = 45;
	var brickl = 30;
	
	
	
	var brick1 = true;
	var brick2 = true;
	var brick3 = true;
	
	var brick4 = true;
	var brick5 = true;
	var brick6 = true;
	
	document.addEventListener("keydown", isdownboi, false);
	document.addEventListener("keyup", isupboi, false);
	
	
	function createBricks() {
		createMainBrick();
		
		if (brick1 == true) {
			createOtherBricks();
		}
		if (brick2 == true) {
			brickl += 230;
			createOtherBricks();
		}
		if (brick3 == true) {
			brickl += 230;
			createOtherBricks();
		}
		
		brickl = 30;
		brickh = 105;
		
		if (brick4 == true) {
			createOtherBricks();
		}
		if (brick5 == true) {
			brickl += 230;
			createOtherBricks();
		}
		if (brick6 == true) {
			brickl += 230;
			createOtherBricks();
		}
		
		brickh = 45;
		brickl = 30;
	}
	function createMainBrick() {
		drawMe.beginPath();
		drawMe.rect(10, 10, 700, 25);
		drawMe.fillStyle = "yellow";
		drawMe.fill();
		drawMe.closePath();
	}
	function createOtherBricks() {
		drawMe.beginPath();
		drawMe.rect(brickl, brickh, 200, 50);
		drawMe.fillStyle = "blue";
		drawMe.fill();
		drawMe.closePath();
	}
	
	
	
	
	
	function isdownboi(g) {
		if(g.keyCode == 39) {
			riarrow = true;
		}
		else if(g.keyCode == 37) {
			lfarrow = true;
		}
	}
	function isupboi(g) {
		if(g.keyCode == 39) {
			riarrow = false;
		}
		else if(g.keyCode == 37) {
			lfarrow = false;
		}
	}
	
	
	function moveIt() {
		clearIt();
		drawIt();
		drawPlayer();
		drawPoints();
		y += chany;
		x += chanx;
		if (riarrow && boardx < 620) {
			boardx += bardri;
		}
		if (lfarrow && boardx > 0) {
			boardx += bardlf;
		}
		
	}
	function clearIt() {
		drawMe.clearRect(0, 0, 720, 480);
	}
	function drawIt() {
		createBricks();
		
		if (y + chany < 15) {
			chany = chany * -1;
		}
		if (y + chany < 50) {
			score += 1;
			x = 360;
			y = 380;
			chanx = -1;
			chany = -1;
			boardh = 10;
			boardw = 100;
			boardx = 310;
			bardri = 3;
			bardlf = -3;
			riarrow = false;
			lfarrow = false;
			brickh = 45;
			brickl = 30;
			brick1 = true;
			brick2 = true;
			brick3 = true;
			brick4 = true;
			brick5 = true;
			brick6 = true;
		}
		
		if (y + chany < 110 && brick1 == true) {
			if(x > 30 && x < 230) {
				chany = chany * -1;
				brick1 = false;
			}
		}
		if (y + chany < 110 && brick2 == true) {
			if(x > 260 && x < 460) {
				chany = chany * -1;
				brick2 = false;
			}
		}
		if (y + chany < 110 && brick3 == true) {
			if(x > 490 && x < 690) {
				chany = chany * -1;
				brick3 = false;
			}
		}
		if (y + chany < 170 && brick4 == true) {
			if(x > 30 && x < 230) {
				chany = chany * -1;
				brick4 = false;
			}
		}
		if (y + chany < 170 && brick5 == true) {
			if(x > 260 && x < 460) {
				chany = chany * -1;
				brick5 = false;
			}
		}
		if (y + chany < 170 && brick6 == true) {
			if(x > 490 && x < 690) {
				chany = chany * -1;
				brick6 = false;
			}
		}
		
		
		
		if(y + chany > 465) {
			if(x > boardx && x < boardx + 100) {
				chany = chany * -1;
				
				if (chanx > 0){
					chanx = (Math.floor(Math.random() * 2) + 1);
				}
				else {
					chanx = -1 * (Math.floor(Math.random() * 2) + 1);
				}
				chany = -1 * (Math.floor(Math.random() * 2) + 1);
			}
			else {
				x = 360;
				y = 380;
				chanx = -1;
				chany = -1;
				boardh = 10;
				boardw = 100;
				boardx = 310;
				bardri = 3;
				bardlf = -3;
				riarrow = false;
				lfarrow = false;
				brickh = 45;
				brickl = 30;
				brick1 = true;
				brick2 = true;
				brick3 = true;
				brick4 = true;
				brick5 = true;
				brick6 = true;
			}
		}
		if (x + chanx < 15) {
			chanx = chanx * -1;
		}
		if (x + chanx > 705) {
			chanx = chanx * -1;
		}
		
		drawMe.beginPath();
		drawMe.arc(x, y, 15, 0, Math.PI*2);
		drawMe.fillStyle = "green";
		drawMe.fill();
		drawMe.closePath();
	}
	function drawPlayer() {
		drawMe.beginPath();
		drawMe.rect(boardx, 470, boardw, boardh);
		drawMe.fillStyle = "red";
		drawMe.fill();
		drawMe.closePath();
	}
	function drawPoints() {
		drawMe.font = "12px Arial";
		drawMe.fillStyle = "black";
		drawMe.fillText("SHAMcoin: " + score, 10, 460);
	}

	
		setInterval(moveIt, 5);

}
window.onload = () => {
	startGame();
};