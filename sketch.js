let piPP;
let piDDA;
let piBH;
let partes,angulo,step,xp,yp,pPP,pDDA,pBH;
let diametro = 200;

let i;


function setup() {
	createCanvas(windowWidth, windowHeight);
	piPP = {x: windowWidth/4, y:400};
	piDDA = {x: (windowWidth/4)*2, y:400};
	piBH = {x: (windowWidth/4)*3, y:400};
	console.log(windowWidth)
	input = createInput();
	input.position(windowWidth/2-150, 65);

	button = createButton('Partir');
	button.position(input.x + input.width, 65);
	button.mousePressed(greet);

	greeting = createElement('h2', 'En cuantas partes?');
	greeting.position(windowWidth/2-150, 0);
	

	/*partes = 0;*/
	/*angulo = 0;*/
	/*step = radians(360/partes);*/
	pPP = {x:0,y:0};
	pDDA = {x:0,y:0};
	pBH = {x:0,y:0};

	circle(piPP.x, piPP.y,diametro);
	circle(piDDA.x, piDDA.y,diametro);
	circle(piBH.x, piBH.y,diametro);
}

function draw() {
	xp = Math.floor(diametro/2 * cos(angulo));
	yp = Math.floor(diametro/2 * sin(angulo));



	if(angulo<radians(360) && partes >=2){
		console.log("xp: "+xp+" AND yp: "+yp)
		console.log("step: "+step)
		console.log(radians(360))
		console.log("angulo: "+angulo)
		console.log("partes: "+ partes)
		line(piPP.x,piPP.y,piPP.x+xp,piPP.y+yp);
		line(piDDA.x,piDDA.y,piDDA.x+xp,piDDA.y+yp);
		line(piBH.x,piBH.y,piBH.x+xp,piBH.y+yp);
		console.log(piPP.x)
		angulo+= step;

	}
	
}

function ecuaPP(p1,p2) {
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;

	point(p1.x, p1.y)

	var m,b;
	let y,x;

	if (dx >dy || dy ==0) {
		m = dy / dx;
		b = p1.y - m * p1.x
		console.log(m+"&"+b)
		if (dx < 0) {
			dx = -1;
		}else{
			dx = 1
		}
		console.log(dx)
		while(p1.x !=  p2.x){
			
			p1.x += dx;
			y = m * p1.x + b;
			point(p1.x, y)
		}
	}else if (dy !=0 ) {
		m= dx / dy;
		b = p1.x - m*p1.y;
		if (p1.y < 0) {
			dy = -1;
		}else{
			dy = 1;
		}
		while(p1.y !=  p2.y){
		p1.y += dy;
		x = m * p1.y + b;
		point(x, p1.y)
		}
	}
}

function ecuaDDA(p1, p2) {
	var p,xi,yi,k;
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;

	point(p1.x, p1.y)

	let y=p1.y,x=p1.x;
	
	if (dx > dy || dy == 0) {
		p = dx;
	} else {
		p = dy;
	}

	xi = dx / p;
    yi = dy / p;

	for(k = 0;k < p;k++){
		x += xi;
		y += yi;
		point(x, y);
	}
}


function ecuaBH(p1, p2){
	var dx = p2.x - p1.x;
	var dy = p2.y - p1.y;

	point(p1.x, p1.y)

	var m,b;
	let y,x,xEnd,stepx,stepy,p,incE,incNE;
	console.log(dx+"&"+dy)

	/* determinar que punto usar para empezar, cual para terminar */
	  if (dy < 0) { 
	    dy = -dy;
	    stepy = -1; 
	  } 
	  else{
	  	stepy = 1;
	  }  
	  if (dx < 0) {  
	    dx = -dx; 
	    stepx = -1; 
	  } 
	  else{
	  	stepx = 1;
	  } 
	    
	  x = p1.x;
	  y = p1.y;
	  point(p1.x, y)


	  if(dx>dy){
	    p = 2*dy - dx;
	    incE = 2*dy;
	    incNE = 2*(dy-dx);
	    while (x != p2.x){
	      x += stepx;
	      if (p < 0){
	        p += incE;
	      }
	      else {
	        y += stepy;
	        p += incNE;
	      }
	      point(x,y)
	    }
	  }else{
	    p = 2*dx - dy;
	    incE = 2*dx;
	    incNE = 2*(dx-dy);
	    while (y != p2.y){
	      y += stepy;
	      if (p < 0){
	        p += incE;
	      }
	      else {
	        x += stepx;
	        p += incNE;
	      }
	      point(x,y);
	    }
	  }
	}


function greet() {
	background('white');
	circle(piPP.x, piPP.y,diametro);
	circle(piDDA.x, piDDA.y,diametro);
	circle(piBH.x, piBH.y,diametro);
	partes = input.value();
	step = radians(360/partes);
	angulo= 0;


}
	
