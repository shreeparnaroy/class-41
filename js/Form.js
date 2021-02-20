class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    //reset button to change playerCount to 0 and gameState to 0
    this.reset = createButton('refresh')
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h1')
    title.html("Car Racing Game");
    title.position(displayWidth/2, 0);

    this.input.position(displayWidth/2,displayHeight/4 );
    this.reset.position(50,100)
    this.button.position(displayWidth/2,displayHeight/3);
    this.button.size(100,60);
  
    //on pressing playerCount=0 and gameState= 0
   this.reset.mousePressed (()=>{
    player.updateCount(0)
    game.update(0)
   })

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2, 100);
    });
  }
}
