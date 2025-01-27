let coffee,juice,milk,softdrink,water;
let selectMenu;
let table;
let drink = 'coffee';

function preload(){
  table = loadTable('drinks.csv', 'csv', 'header');
  coffee = loadImage('images/coffee.png')
  juice = loadImage('images/juice.png');
  milk = loadImage('images/milk.png');
  softdrink = loadImage('images/softdrink.png');
  water = loadImage('images/water.png');

  
}

function setup() {
  createCanvas(400, 600);
  imageMode(CENTER);

  selectMenu = createSelect();
  selectMenu.position(430, height/2);
  selectMenu.option('coffee');
  selectMenu.option('juice');
  selectMenu.option('milk');
  selectMenu.option('softdrink');
  selectMenu.option('water');
}

/*function allMyFruit() {
  let xpos =30;
  for (x=0; x<table.getRowCount(); x++) {
    let row = table.getRow(x);
    let countApples = row.get("Apples");
    if (countApples > 0) {
      for (y=0;y<countApples; y++) {
        image(countApples,xpos,50,40,40);
        xPos +=20;
      }
    }
  }
  }
  */

function weekLabels(){
  for (let x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let week = row.get("week");
    fill(0);
    text(week, 30 + x * 60, 550);

  }
}

function showCoffee(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countCoffee = row.get("coffee");
    for (y = 0; y< countCoffee; y++){
      image(coffee, 30 + x * 60, 500 - y * 50, 40, 40);
    }
  }
}
function showJuice(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countJuice = row.get("juice");
    for (y = 0; y< countJuice; y++){
      image(juice, 30 + x * 60, 500 - y * 50, 40, 40);
    }
  }
}
function showMilk(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countMilk = row.get("milk");
    for (y = 0; y< countMilk; y++){
      image(milk, 30 + x * 60, 500 - y * 50, 40, 40);
    }
  }
}
function showSoftdrink(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countSoftdrink = row.get("softdrink");
    for (y = 0; y< countSoftdrink; y++){
      image(softdrink, 30 + x * 60, 500 - y * 50, 40, 40);
    }
  }
}
function showWater(){
  for (x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let countWater = row.get("water");
    for (y = 0; y< countWater; y++){
      image(water, 30 + x * 60, 500 - y * 50, 40, 40);
    }
  }
}

function draw(){
  background(220);
  weekLabels();
  
  drink = selectMenu.value();
  if (drink == 'coffee') {
    showCoffee();
  } else if (drink == 'juice'){
    showJuice();
  } else if (drink == 'milk'){
    showMilk();
  }else if (drink == 'softdrink'){
    showSoftdrink();
  } else {
    showWater();
  } 

  //showSoftdrink();
  text('week', 300, 550)
}
