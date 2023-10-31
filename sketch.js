let cor;
let posicaoHorizontal;//x
let posicaoVertical;//y

function setup()l {
  createCanvas(400, 400);
  background("#d8bfd8");
  cor=color(random(0,255), random(0,255), random(0,255));
  
   posicaoHorizontal=200;
   posicaoVertical=200;
      
}

function draw() {
  fill(cor);
  circle (posicaoHorizontal,posicaoVertical,50);
  
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal--;
    }

 if(mouseX > posicaoVertical){
   posicaoHorizontal++;
 
 }
  if (mouseY< posicaoVertical){
    posicaoVertical--;
  }
  if (mouseY >posicaoVertical){
    posicaoVertical++;
  }
  if (mouseIsPressed){
    cor= color (random(0,255), random(0,255), random(0,255), random(0,100));
  }
}
 