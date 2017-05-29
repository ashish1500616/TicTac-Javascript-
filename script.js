var arr = [
     [null, null, null],
     [null, null, null],
     [null, null, null],
];
console.log("Script called");
display();
var op = "person",
   ops = "O",
   sym = "X",
   c = 0,
   r = 0,
   tr = 0,
   tl = 0,
   temp = 2,
   count = 0,
   p1 = "",
   p2 = "";

function display()
{
   for(var i = 0; i < 3; i++)
   {
      for(var j = 0; j < 3; j++)
      {
         console.log("value at ", i, j, ':', arr[i][j]);
      }
   }
}

function getSymbol(data)
{
   sym = data;
   $("#turn").html(sym);
   if(sym === 'X')
      ops = 'O';
   else
      ops = 'X';
   console.log("you selected and ops:", sym, ops);
}

function getOpponent(data = 'person')
{
   op = data;
   if(op === "person")
   {
      showDiv();
   }
   else
   {
      showDivCom();
   }
}

function checkRows()
{
   for(var i = 0; i < 3; i++)
   {
      if(arr[i][0] == arr[i][1] &&
         arr[i][1] == arr[i][2] &&
         arr[i][0] !== null)
      {
         dispWins(i, 0);
         stpbtn();
         dispRest();
         initNewGame();
         return(true);
      }
   }
   return(false);
}

function checkCol()
{
   for(var i = 0; i < 3; i++)
   {
      console.log("in colum", i);
      if(arr[0][i] === arr[1][i] &&
         arr[1][i] === arr[2][i] &&
         arr[0][i] !== null)
      {
         dispWins(0, i);
         stpbtn();
         dispRest();
         initNewGame();
         return(true);
      }
   }
   return(false);
}

function diagonal()
{
   if(arr[0][0] == arr[1][1] &&
      arr[1][1] == arr[2][2] &&
      arr[0][0] !== null)
   {
      dispWins(0, 0);
      stpbtn();
      dispRest();
      initNewGame();
      return(true);
   }
   if(arr[0][2] == arr[1][1] &&
      arr[1][1] == arr[2][0] &&
      arr[0][2] !== null)
   {
      dispWins(0, 2);
      stpbtn();
      dispRest();
      initNewGame();
      return(true);
   }
   return(false);
}

function counter()
{
   count++;
}

function pass()
{
   if(count >= 5)
   {
      if(!checkRows() && !checkCol() && !diagonal())
      {
         if(count === 9)
         {
            $("#result").html("Its A Draw.");
            $("#result").css(
            {
               "background-color": "beige"
            });
            stpbtn();
            dispRest();
            initNewGame();
         }
      }
   }
}

function fill(data, x, y)
{
   if(arr[x][y] === null)
   {
      counter();
      if(count % 2 !== 0)
      {
         $('#' + data).html(sym);
         arr[x][y] = sym;
         $("#turn").html(p2);
      }
      else
      {
         $('#' + data).html(ops);
         arr[x][y] = ops;
         $("#turn").html(p1);
      }
   }
   else
   {
      alert('Please click on empty Box');
   }
}

function fillCom()
{
   var x = getRandom();
   var y = getRandom();
   if(arr[x][y] === null)
   {
      fill(getBox(x, y), x, y);
      return;
   }
   else fillCom();
}

function stpbtn()
{
   $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').off('click');
}

function startbtn()
{
   $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').bind('click');
}

function dispWins(x, y)
{

   if(arr[x][y] === sym)
   {
      $("#result").html(p1 + ",Wins The Game.");
   }
   else
   {
      $("#result").html(p2 + ",Wins The Game.");
   }
   if(arr[x][y] === 'X')
      $("#result").css(
      {
         "background-color": "tomato"
      });
   else
      $("#result").css(
      {
         "background-color": "cornsilk"
      });
}

function getRandom()
{
   return Math.floor(Math.random() * 3);
}

function getBox(x, y)
{
   if(x === 0 && y === 0)
   {
      return('b1');
   }
   else if(x == 0 && y == 1)
   {
      return 'b2';
   }
   else if(x == 0 && y === 2)
   {
      return 'b3';
   }
   else if(x == 1 && y === 0)
   {
      return 'b4';
   }
   else if(x == 1 && y === 1)
   {
      return 'b5';
   }
   else if(x == 1 && y === 2)
   {
      return 'b6';
   }
   else if(x == 2 && y === 0)
   {
      return 'b7';
   }
   else if(x == 2 && y === 1)
   {
      return 'b8';
   }
   else if(x == 2 && y === 2)
   {
      return 'b9';
   }
}

function playerName()
{
   if($('#playerOne').val() !== '')
      p1 = $('#playerOne').val();
   else
   {
      p1 = sym;
   }
   if($('#playerTwo').val() !== '')
      p2 = $('#playerTwo').val();
   else
   {
      p2 = ops;
   }

}

function newGame()
{
   count = 0;
   $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').html('');
   $("#result").css(
   {
      "background-color": "#f5f5f5"
   });
   for(var i = 0; i < 3; i++)
   {
      for(var j = 0; j < 3; j++)
      {
         arr[i][j] = null;
      }
   }
   startbtn();
}

function dispRest()
{
   setTimeout(function ()
   {
      $("#result").css(
      {
         "background-color": "azure"
      });
      $('#result').html('Restarting Game...');
   }, 1000);
}

function initNewGame()
{
   setTimeout(function ()
   {
      $('#result').html('Who\'s Turn    :<span id="turn" style="font-size:30px;">X</span>');
      newGame();
      $('#strt').trigger('click');
   }, 2000);
}
