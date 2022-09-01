keyEventListener();

var dx, dy,      
        blocks,  
        actions,      
        playing,
        end, 
        current,       
        letter;
const iblocks=[-2,10,-1,10,-2,9,-1,9, -1,10,0,10,-1,9,0,9, 0,10,1,10,0,9,1,9, 1,10,2,10,1,9,2,9],
      jblocks=[-1,10,0,10,-1,9,0,9, 0,10,1,10,0,9,1,9, 1,10,2,10,1,9,2,9, 1,9,2,9,1,8,2,8],
      lblocks=[-1,9,0,9,-1,8,0,8, -1,10,0,10,-1,9,0,9, 0,10,1,10,0,9,1,9, 1,10,2,10,1,9,2,9],
      oblocks=[-1,9,0,9,-1,8,0,8, -1,10,0,10,-1,9,0,9, 0,10,1,10,0,9,1,9, 0,9,1,9,0,8,1,8],
      sblocks=[-1,9,0,9,-1,8,0,8, 0,9,1,9,0,8,1,8, 0,10,1,10,0,9,1,9, 1,10,2,10,1,9,2,9], 
      tblocks=[ 0,9,1,9,0,8,1,8, -1,10,0,10,-1,9,0,9, 0,10,1,10,0,9,1,9, 1,10,2,10,1,9,2,9], 
      zblocks=[-1,10,0,10,-1,9,0,9, 0,10,1,10,0,9,1,9,  0,9,1,9,0,8,1,8, 1,9,2,9,1,8,2,8];

const grid=[-5,10,5,10,5,9,-5,9,  -5,8,5,8,5,7,-5,7,  -5,6,5,6,5,5,-5,5,  -5,4,5,4,5,3,-5,3, -5,2,5,2,5,1,-5,1, 
            -5,0,5,0,5,-1,-5,-1,  -5,-2,5,-2,5,-3,-5,-3,  -5,-4,5,-4,5,-5,-5,-5,  -5,-6,5,-6,5,-7,-5,-7,  -5,-8,5,-8,5,-9,-5,-9,
            -5,10,-5,-10,-4,-10,-4,10,  -3,10,-3,-10,-2,-10,-2,10,  -1,10,-1,-10,0,-10,0,10,  1,10,1,-10,2,-10,2,10,  3,10,3,-10,4,-10,4,10,  
            -5,10,-5,-10,5,-10,5,10
];

const grey=[0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1, 
            0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1, 
            0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1, 
            0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1, 
            0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1, 
            0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1, 
            0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1, 
            0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1,  0.7, 0.7, 0.7, 1
];

console.log(grid.length);
console.log(grey.length);

const idx=0.5,
      idy=9.5,
      jdx=0.5,
      jdy=9.5,
      ldx=0.5,
      ldy=9.5,
      odx=0.0,
      ody=9.0,
      sdx=0.5,
      sdy=9.5,
      tdx=0.5,
      tdy=9.5,
      zdx=0.5,
      zdy=9.5;

var emptyBox= [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
                  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

var box=emptyBox;



playing=false;
actions=true;
end=false;

var pieces = [];
function randomPiece() {
    var i = { letter:'i', blocks: iblocks, colorV: [0,1,1,1, 0,1,1,1, 0,1,1,1, 0,1,1,1,  0,1,1,1, 0,1,1,1, 0,1,1,1, 0,1,1,1,  0,1,1,1, 0,1,1,1, 0,1,1,1, 0,1,1,1,  0,1,1,1, 0,1,1,1, 0,1,1,1, 0,1,1,1],   dx: idx, dy: idy};
    var j = { letter:'j', blocks: jblocks, colorV: [0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1,  0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1,  0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1,  0,0,1,1, 0,0,1,1, 0,0,1,1, 0,0,1,1],   dx: jdx, dy: jdy};
    var l = { letter:'l', blocks: lblocks, colorV: [1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1,  1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1,  1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1,  1,0,1,1, 1,0,1,1, 1,0,1,1, 1,0,1,1],   dx: ldx, dy: ldy};
    var o = { letter:'o', blocks: oblocks, colorV: [1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1,  1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1,  1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1,  1,1,0,1, 1,1,0,1, 1,1,0,1, 1,1,0,1],   dx: odx, dy: ody};
    var s = { letter:'s', blocks: sblocks, colorV: [0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1,  0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1,  0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1,  0,1,0,1, 0,1,0,1, 0,1,0,1, 0,1,0,1],   dx: sdx, dy: sdy};
    var t = { letter:'t', blocks: tblocks, colorV: [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1,  1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1],   dx: tdx, dy: tdy};
    var z = { letter:'z', blocks: zblocks, colorV: [1,0,0,1, 1,0,0,1, 1,0,0,1, 1,0,0,1,  1,0,0,1, 1,0,0,1, 1,0,0,1, 1,0,0,1,  1,0,0,1, 1,0,0,1, 1,0,0,1, 1,0,0,1,  1,0,0,1, 1,0,0,1, 1,0,0,1, 1,0,0,1],   dx: zdx, dy: zdy};
      if (pieces.length == 0)
        pieces = [i,j,l,o,s,t,z];
      return pieces[Math.floor(Math.random() * (pieces.length))];
    }

var positions= [];
var colors= [];
var tiles= [];
var col=[];
var shapes=0;
var type = [];
var x = 0.5;
var y = 9.5;
var on = true;

main();



function getXPosition(id){
  square_pos = 8*id;
  var minX=9;
  var leftX=minX;
  for(a=0;a<4;a++){
    square_pos = 2*(id*4+a);
    leftX=positions[square_pos]+5;
    if(leftX<minX){
      minX=leftX;
    }
    //console.log(square_pos);
    //console.log(minX);
  }
  leftX=minX;
  minX=9;
  return leftX;
}

function getYPosition(id){
  square_pos = 8*id;
  var minY=19;
  var topY=minY;
  for(b=0;b<4;b++){
    square_pos = 2*(id*4+b);
    topY=(positions[square_pos+1]-10)*-1;
    if(topY<minY){
      minY=topY;
    }
  }
  //console.log(id+': '+minY);
  topY=minY;
  return topY;
}

function createBox() {
  //console.log(positions);
  for(i=0;i<shapes;i++) {
     xBox=getXPosition(i);
     yBox=getYPosition(i);
     box[yBox*10+xBox]=i;
  }
}

function removeLine(row) {
  for (n = 0; n < 10; n++) {
    id=box[row*10+n];
    //yIndex=getYPosition(id);
    //console.log(yIndex);
    square_pos = 8*id;
    for(s = id+1;s<shapes;s++) {
      xIndex=getXPosition(s);
      yIndex=getYPosition(s);
      box[yIndex*10+xIndex]=s-1;
      for(t = 0; t < 8; t++) {
        positions[(s-1)*8+t]=positions[s*8+t];
        colors[(s-1)*16+t]=colors[s*16+t];
        colors[(s-1)*16+t+8]=colors[s*16+t+8];
        positions[s*8+t]=[];

      }
    }
    positions.length-=8;
    colors.length-=16;
    shapes-=1;
  }
  //console.log('removed');
  
  for(u=row-1;u>-1;u--){
    for(v=0;v<10;v++) {
      id=box[u*10+v];
      //if(id!=-1) {
        //translateSquare(id,0.0,-1);
      //}

      for (k = 0; k<4;k++) {
        square_pos = 2*(id*4 +k);
        positions[square_pos+1]--;
      }
      box[(u+1)*10+v]=box[u*10+v];
    }
  }
  
  //console.log('descended');
}

function checkBox(){
  createBox();
  //console.log(box);
  tally=0;
  for(i=0;i<20;i++) {
    for(j=0;j<10;j++) {
      if(box[i*10+j]!=-1){
        tally+=1;
        //console.log('tally ++');
      }
    }
    if(tally==10) {
      //console.log('tally 10'+i);
      removeLine(i);
    }
    tally=0;
  }
}
function checkEnd(){
  createBox();
  //console.log(box);
  /*
  tally=0;
  for(j=0;j<10;j++) {
    for(i=0;i<20;i++) {
      if(box[i*10+j]!=-1){
        tally+=1;
        //console.log('tally ++');
      }
    }
    if(tally==20) {
      //console.log('tally 10'+i);
      end=true;
    }
    tally=0;
  }
  */
  for(j=0;j<10;j++) {
    if(box[j]!=-1){
      end=true;
    }
  }
}




function dropRectangle() {
  if(end==false){
    var track = positions;
    translateSquare(0,0.0,-2);
    translateSquare(1,0.0,-2);
    translateSquare(2,0.0,-2);
    translateSquare(3,0.0,-2);
    if(actions==false){
      translateSquare(0,0.0,2);
      translateSquare(1,0.0,2);
      translateSquare(2,0.0,2);
      translateSquare(3,0.0,2);
      actions=true;
    }
    else{
      current.dy-=2;
    }
  }
  main();

}

function dropRectangleTime() {
  if(end==false){
    var track = positions;
    translateSquare(0,0.0,-1);
    translateSquare(1,0.0,-1);
    translateSquare(2,0.0,-1);
    translateSquare(3,0.0,-1);
    if(actions==false){
      translateSquare(0,0.0,1);
      translateSquare(1,0.0,1);
      translateSquare(2,0.0,1);
      translateSquare(3,0.0,1);
      //console.log(tiles);
      actions=true;
      playing=false;
    }
    else{
      current.dy-=1;
    }
  }
  main();
}

function leftRectangle() {
  if(end==false){
    var track = positions;
    translateSquare(0,-1,0);
    translateSquare(1,-1,0);
    translateSquare(2,-1,0);
    translateSquare(3,-1,0);
    if(actions==false){
      translateSquare(0,1,0);
      translateSquare(1,1,0);
      translateSquare(2,1,0);
      translateSquare(3,1,0);
      actions=true;
    }
    else{
      current.dx-=1;
    }
  }
  main();
}

function rightRectangle() {
  if(end==false){
    var track = positions;
    translateSquare(0,1,0);
    translateSquare(1,1,0);
    translateSquare(2,1,0);
    translateSquare(3,1,0);
    if(actions==false){
      translateSquare(0,-1,0);
      translateSquare(1,-1,0);
      translateSquare(2,-1,0);
      translateSquare(3,-1,0);
      actions=true;
    }
    else{
      current.dx+=1;
    }
  }
  main();
}

setInterval(dropRectangleTime, 1000);

function translateSquare(id, x, y) {
  //consolg.log(positions);
  for (i = 0; i<4;i++) {
    square_pos = 2*(id*4 +i);
    positions[square_pos]+= x;
    positions[square_pos+1]+=y;
    if((positions[square_pos]<-5) || (positions[square_pos]>5) || (positions[square_pos+1]<-10)) {
      //console.log("translate action");
      actions = false;
    }
  }
  if(shapes>4) {
    if(bounderror(id, square_pos)) {
      actions = false;
    }
  }

  //consolg.log(positions);
}


function rotateRectangles() {  
  var track = positions;
  //console.log(current.dx);
  //console.log(current.dy);
  rotateSquare(0, current.dx, current.dy, Math.PI/2);
  rotateSquare(1, current.dx, current.dy, Math.PI/2);
  rotateSquare(2, current.dx, current.dy, Math.PI/2);
  rotateSquare(3, current.dx, current.dy, Math.PI/2);
  if(actions==false){
    rotateSquare(0, current.dx, current.dy, -Math.PI/2);
    rotateSquare(1, current.dx, current.dy, -Math.PI/2);
    rotateSquare(2, current.dx, current.dy, -Math.PI/2);
    rotateSquare(3, current.dx, current.dy, -Math.PI/2);
    actions=true;
  }
  main();
}




function rotateSquare(id, cx, cy, angle) {
  //console.log(positions);
  for ( i = 0; i < 4; i++){
    square_pos = 2*(id*4 + i);
    var newpoint = rotatePoint(cx, cy, angle, positions[square_pos], positions[square_pos+1]);
    positions[square_pos] = newpoint.px;
    positions[square_pos+1] = newpoint.py;
    if((positions[square_pos]<-5) || (positions[square_pos]>5) || (positions[square_pos+1]<-10)){
      //console.log("rotate action");
      actions = false;
    }
  }
  //console.log(positions);
}

function rotatePoint(cx,cy,angle, px, py)
{
  var s = Math.sin(angle);
  var c = Math.cos(angle);

  // translate point back to origin:
  px -= cx;
  py -= cy;

  // rotate point
  var xnew = px * c - py * s;
  var ynew = px * s + py * c;

  // translate point back:
  px = Math.round(xnew + cx);
  py = Math.round(ynew + cy);
  return {px: px,
          py: py,
  };
}


function bounderror(id, square_pos) {
  for (n = 16; n<(shapes*4);n++) {
    index = 2*n;
    if(positions[square_pos]==positions[index]&&positions[square_pos+1]==positions[index+1])
    {
      cd=Math.floor(n/4);
      if(blockcheck(cd,id)) {
        //console.log("its working bound");
        return true;
      }
    }
  }
  return false;
}

function blockcheck(a,b) {
  var tally=0;
  for (i=0;i<4;i++) {
    newblock = 2*(b*4 +i);
    for (j=0;j<4;j++) {
      oldtile = 2*(a*4 +j);
      if(positions[newblock]==positions[oldtile]&&positions[newblock+1]==positions[oldtile+1]){
        tally+=1;
      }
    }
  }
  if(tally==4){
    return true;
  }
  else{
    return false;
  }
}
var randomStart = [];
var rand;
var ori;
function randomize() {
  switch(current.letter) {
          case 'i':   randomStart=[-3,-2,-1,0,1,2,3];  ori=Math.floor(Math.random()*2); break;
          case 'j':   randomStart=[-4,-3,-2,-1,0,1,2,3];  ori=Math.floor(Math.random()*4); break;
          case 'l':   randomStart=[-4,-3,-2,-1,0,1,2,3];  ori=Math.floor(Math.random()*4); break;
          case 'o':   randomStart=[-4,-3,-2,-1,0,1,2,3,4]; ori=0;  break;
          case 's':   randomStart=[-4,-3,-2,-1,0,1,2,3];  ori=Math.floor(Math.random()*4); break;
          case 't':   randomStart=[-4,-3,-2,-1,0,1,2,3];  ori=Math.floor(Math.random()*4); break;
          case 'z':   randomStart=[-4,-3,-2,-1,0,1,2,3];  ori=Math.floor(Math.random()*4); break;
        }
  console.log(current.letter);
  
  rand=randomStart[Math.floor(Math.random() * randomStart.length)];
  translateSquare(0,rand,0);
  translateSquare(1,rand,0);
  translateSquare(2,rand,0);
  translateSquare(3,rand,0);
  if(actions==false){
    translateSquare(0,-rand,0);
    translateSquare(1,-rand,0);
    translateSquare(2,-rand,0);
    translateSquare(3,-rand,0);
    actions=true;
  }
  else{
    current.dx+=rand;
  }
  if(ori!=0){
    translateSquare(0,0,-1);
    translateSquare(1,0,-1);
    translateSquare(2,0,-1);
    translateSquare(3,0,-1);
    current.dy-=1;
    rotateSquare(0, current.dx, current.dy, ori*Math.PI/2);
    rotateSquare(1, current.dx, current.dy, ori*Math.PI/2);
    rotateSquare(2, current.dx, current.dy, ori*Math.PI/2);
    rotateSquare(3, current.dx, current.dy, ori*Math.PI/2);
    if(actions==false){
      rotateSquare(0, current.dx, current.dy, -ori*Math.PI/2);
      rotateSquare(1, current.dx, current.dy, -ori*Math.PI/2);
      rotateSquare(2, current.dx, current.dy, -ori*Math.PI/2);
      rotateSquare(3, current.dx, current.dy, -ori*Math.PI/2);
      current.dy+=1;
      translateSquare(0,0,1);
      translateSquare(1,0,1);
      translateSquare(2,0,1);
      translateSquare(3,0,1);
      actions=true;
    }
  }

}

function close_window() {
  window.close();
}



//
// Start here
//
function main() {
  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl');

  // If we don't have a GL context, give up now

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Vertex shader program GLSL code

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;

  // Fragment shader program

  const fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aVevrtexColor and also
  // look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.


  const buffers = initBuffers(gl);


  //IDEA
  //const buffers2 = initBuffers2(g;);

  // Draw the scene
  drawScene(gl, programInfo, buffers);
}

//
// initBuffers
//
// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple two-dimensional square.
//
function initBuffers(gl) {

  // Create a buffer for the square's positions.
  if(playing==true&&end==false) {
    current=type;
  }
  else if(end==true) {
    current=null
  }
  else {
    if(shapes>0){
      positions.length-=128;
      colors.length-=256;
    }
    checkBox();
    checkEnd();
    if(end==false){
      tiles=tiles.concat(positions);
      col=col.concat(colors);
      positions = [];
      current = [];
      colors = [];
      pieces = [];
      box=[];
      box=emptyBox;
      type=randomPiece();
      current=type;
      shapes+=4;
      positions = type.blocks;
      colors = type.colorV;
      positions=positions.concat(tiles);
      colors=colors.concat(col);
      tiles=[];
      col=[];
      positions=positions.concat(grid);
      colors=colors.concat(grey);
      //console.log(positions);
      randomize();
      playing=true;
    }
  }




  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the square.


  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Now set up the colors for the vertices



  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    color: colorBuffer,
  };
}



//
// Draw the scene.
//
function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 117.7 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [-0.0, 0.0, -6.0]);  // amount to translate

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute
  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL how to pull out the colors from the color buffer
  // into the vertexColor attribute.
  {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexColor);
  }

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);

  {
    const offset = 0;
    const vertexCount = 4;
    for (i = 0; i<shapes;i++) {
      gl.drawArrays(gl.TRIANGLE_STRIP, offset+4*i, vertexCount);
    }
    for (j = 0; j<16;j++) {
      gl.drawArrays(gl.LINE_STRIP, offset+4*(j+shapes), vertexCount);
    }
    /*
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
    gl.drawArrays(gl.TRIANGLE_STRIP, offset+4, vertexCount);
    gl.drawArrays(gl.TRIANGLE_STRIP, offset+8, vertexCount);
    gl.drawArrays(gl.TRIANGLE_STRIP, offset+12, vertexCount);
    */
  }
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}
