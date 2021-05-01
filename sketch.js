var dog,dogImg,happydogImg1,database,foodS,foodStock;


function preload()
{
  dogImg=loadImage("images/dogImg.png");
  happydogImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value");
  foodStock.set(20);

  dog=createSprite(250,350,10,60);
  dog.addImage(dogImg);
  dog.scale=0.2;
  
}


function draw() {  

  drawSprites();
  //add styles here

}
function readStock(){

}


