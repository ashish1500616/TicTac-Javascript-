$("#strt").click(function trig()
{

   $('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').one('click', function (event)
   {

      counter();
      if($(event.target).attr('id') == 'b1')
      {

         if(count % 2 === 0)
         {
            $('#b1').html(ops);
            arr[0][0] = ops;
         }
         else
         {

            $('#b1').html(sym);
            arr[0][0] = sym;
         } //  pass(arr[0][0]);
      }
      else if($(event.target).attr('id') == 'b2')
      {
         if(count % 2 !== 0)
         {
            $('#b2').html(sym);
            arr[0][1] = sym;
         }
         else
         {
            $("#b2").html(ops);
            arr[0][1] = ops;
         }
         //pass(arr[0][1]);
      }
      else if($(event.target).attr('id') == 'b3')
      {
         console.log("bt 3 clicked");
         if(count % 2 !== 0)
         {
            $('#b3').html(sym);
            arr[0][2] = sym;
         }
         else
         {
            $("#b3").html(ops);
            arr[0][2] = ops;
         }
      }
      else if($(event.target).attr('id') == 'b4')
      {
         if(count % 2 !== 0)
         {
            $('#b4').html(sym);
            arr[1][0] = sym;
         }
         else
         {
            $('#b4').html(ops);
            arr[1][0] = ops;
         }
         // pass(arr[1][0]);
      }
      else if($(event.target).attr('id') == 'b5')
      {
         if(count % 2 !== 0)
         {
            $('#b5').html(sym);
            arr[1][1] = sym;
         }
         else
         {
            $('#b5').html(ops);
            arr[1][1] = ops;
         }
         // pass(arr[1][1]);
      }
      else if($(event.target).attr('id') == 'b6')
      {
         if(count % 2 !== 0)
         {
            $('#b6').html(sym);
            arr[1][2] = sym;
         }
         else
         {
            $('#b6').html(ops);
            arr[1][2] = ops;
         }
         // pass(arr[1][2]);
      }
      else if($(event.target).attr('id') == 'b7')
      {
         if(count % 2 !== 0)
         {
            $('#b7').html(sym);
            arr[2][0] = sym;
         }
         else
         {
            $('#b7').html(ops);
            arr[2][0] = ops;
            //console.log(arr[2][0]);
         }
         // pass(arr[2][0]);
      }
      else if($(event.target).attr('id') == 'b8')
      {
         if(count % 2 !== 0)
         {
            $('#b8').html(sym);
            arr[2][1] = sym;
         }
         else
         {
            $('#b8').html(ops);
            arr[2][1] = ops;
         }
         //pass(arr[2][1]);
      }
      else if($(event.target).attr('id') == 'b9')
      {
         if(count % 2 !== 0)
         {
            $('#b9').html(sym);
            arr[2][2] = sym;
         }
         else
         {
            $('#b9').html(ops);
            arr[2][2] = ops;
            // pass(arr[2][2]);
         }

      }
      console.clear();
      display();
      pass();
      console.log(count);

   });
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
   $("#p2").html("Computer");
}
$("#playerOne").keydown(function (event)
{
   var val = $("#playerOne").val();
   $("#p1").html(val);
});
$("#playerOneCom").keydown(function (event)
{
   var val = $("#playerOneCom").val();
   $("#p1").html(val);
});
$("#playerTwo").keydown(function (event)
{
   var val = $("#playerTwo").val();
   $("#p2").html(val);
});
