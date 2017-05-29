$("#strt").click(function trig()
{
   playerName();
   console.log('trig cal');
   if(op === 'person')
   {
      $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').on('click', function (event)
      {
         if($(event.target).attr('id') == 'b1')
         {
            console.log(this.id);
            fill(this.id, 0, 0);
         }
         else if($(event.target).attr('id') == 'b2')
         {
            fill(this.id, 0, 1);
         }
         else if($(event.target).attr('id') == 'b3')
         {
            console.log("bt 3 clicked");
            fill(this.id, 0, 2);
         }
         else if($(event.target).attr('id') == 'b4')
         {
            fill(this.id, 1, 0);
         }
         else if($(event.target).attr('id') == 'b5')
         {
            fill(this.id, 1, 1);
         }
         else if($(event.target).attr('id') == 'b6')
         {
            fill(this.id, 1, 2);
         }
         else if($(event.target).attr('id') == 'b7')
         {
            fill(this.id, 2, 0);
         }
         else if($(event.target).attr('id') == 'b8')
         {
            fill(this.id, 2, 1);
         }
         else if($(event.target).attr('id') == 'b9')
         {
            fill(this.id, 2, 2);
         }
         console.clear();
         display();
         pass();
         console.log(count);
      });
   }
   else if (op==='computer')
   {
   	alert("I am not ready for now you can continue with human ,My developers are working on me.");
   }
});

function showDiv()
{
   //console.log("showDiv called/");
   document.getElementById("nameDiv").style.display = "block";
   document.getElementById("nameDivCom").style.display = "none";
}

function showDivCom()
{
   //console.log("showDiv called/");
   document.getElementById("nameDivCom").style.display = "block";
   document.getElementById("nameDiv").style.display = "none";
   $('#' + this.id).html("Computer");
}
$("#playerOne").keydown(function (event)
{
   var val = $("#playerOne").val();
   $('#' + this.id).html(val);
});
$("#playerOneCom").keydown(function (event)
{
   var val = $("#playerOneCom").val();
   $('#' + this.id).html(val);
});
$("#playerTwo").keydown(function (event)
{
   var val = $("#playerTwo").val();
   $('#' + this.id).html(val);
});
$('#restart').click(function(){
	console.log('new game initiated');
	newGame();	
});
