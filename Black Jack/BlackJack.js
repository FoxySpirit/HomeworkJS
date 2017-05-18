'use strict';
function card()
{
  this.value= 0;
  this.namer = 'zero';
  this.type= 'zero';
  this.used= false;
}


var cards = [];

for(var i=0;i<=53;i++)
cards[i] = new card;

function game()
{
  var ingame = false;
  var Ace = false;
  var AceD = false;
  var points = 0;
  var Dealerpoints = 0;
  var PlayerCards = ' ';
  var DealerCards = ' ';

    function createCards()
  {
    for( i=0; i<4; i++)
    for(var j=1; j<14; j++)
    {
      switch(i){
        case 0: {cards[i*13+j].type='Diamonds'; break;}
        case 1: {cards[i*13+j].type='Spades'; break;}
        case 2: {cards[i*13+j].type='Clubs'; break;}
        case 3: {cards[i*13+j].type='Hearts'; break;}
      }
      switch(j){
        case 1: {cards[i*13+j].name='Two'; break;}
        case 2: {cards[i*13+j].name='Three'; break;}
        case 3: {cards[i*13+j].name='Four'; break;}
        case 4: {cards[i*13+j].name='Five'; break;}
        case 5: {cards[i*13+j].name='Six'; break;}
        case 6: {cards[i*13+j].name='Seven'; break;}
        case 7: {cards[i*13+j].name='Eight'; break;}
        case 8: {cards[i*13+j].name='Nine'; break;}
        case 9: {cards[i*13+j].name='Ten'; break;}
        case 10: {cards[i*13+j].name='Jack'; break;}
        case 11: {cards[i*13+j].name='Queen'; break;}
        case 12: {cards[i*13+j].name='King'; break;}
        case 13: {cards[i*13+j].name='Ace'; break;}
      }

        if(j==13)
        {  cards[i*13+j].value=11;}
        else {
            cards[i*13+j].value=j+1;
        }
          cards[i*13+j].used=false;
    }

  };

function Acetest()
{
  if((Ace)&&(points > 21))
  {
    points -=10;
    Ace = false;
  }
  if((AceD)&&(Dealerpoints > 21))
  {
    Dealerpoints -=10;
AceD = false;
  }

}

  this.GetResult = function()
  {
      DealertakeCard();
    if(points < 21)
    {
          if(Dealerpoints == points)
              {
                    document.getElementById("res").innerHTML = "WITHDRAW"
                    document.getElementById("res").style.backgroundColor = "yellow";
                  }
                  else if((Dealerpoints < points)||(Dealerpoints > 21))
                  {
                    document.getElementById("res").innerHTML = "You win!"
                    document.getElementById("res").style.backgroundColor = "green";
                  }
                  else
                  {
                    document.getElementById("res").innerHTML = "You loose"
                    document.getElementById("res").style.backgroundColor = "red";
                  }
}else
  {
            if(Dealerpoints == points)
            {
              document.getElementById("res").innerHTML = "WITHDRAW"
              document.getElementById("res").style.backgroundColor = "yellow";
            }
          else  if((Dealerpoints > points)||(points == 21))
            {
              document.getElementById("res").innerHTML = "You win!"
              document.getElementById("res").style.backgroundColor = "green";
            }
            else
            {
              document.getElementById("res").innerHTML = "You loose"
              document.getElementById("res").style.backgroundColor = "red";
            }
  }
ingame = false;
  };


   function PlayertakeCard()
  {
    var rand;
    do{
      rand = Math.floor(Math.random() * 52);
    }while(cards[rand].used)
    points+=cards[rand].value;
    cards[rand].used = true;
    if(cards[rand].name == 'Ace')
    Ace = true;
    Acetest();
     PlayerCards += cards[rand].name + cards[rand].type + '; ';
    document.getElementById("yc").innerHTML = PlayerCards;
  //  document.getElementById("yc").innerHTML = cards[rand].name + cards[rand].type;
    document.getElementById("yp").innerHTML = points;
  //  alert(points +  cards[rand].name + cards[rand].type);
  }


   function DealertakeCard()
 {
   var rand;
   do{
     rand = Math.floor(Math.random() * 52);
   }while(cards[rand].used)
   Dealerpoints+=cards[rand].value;
   cards[rand].used = true;
   if(cards[rand].name == 'Ace')
   AceD = true;
   Acetest();
   DealerCards += cards[rand].name + cards[rand].type + '; ';
   document.getElementById("dc").innerHTML = DealerCards;
  // document.getElementById("dc").innerHTML = cards[rand].name + cards[rand].type;
   document.getElementById("dp").innerHTML = Dealerpoints;
  // alert(Dealerpoints +  cards[rand].name + cards[rand].type);
 }


  this.Getmore = function()
  {
    if(!ingame)
    {
    this.NG();
    return;
  }
    PlayertakeCard();
  //  DealertakeCard();
    if(points > 20)
    this.GetResult();
  };


  this.NG = function()
  {
     points = 0;
     Dealerpoints = 0;
     PlayerCards = ' ';
     DealerCards = ' ';
     document.getElementById("res").innerHTML = " "
document.getElementById("res").style.backgroundColor = "white";

    createCards();
    ingame = true;

  //  alert("Start");
    PlayertakeCard();
    PlayertakeCard();
    DealertakeCard();
    if(points > 20)
    this.GetResult();
  };


}


var PlayIt = new game;

//PlayIt.NG();
