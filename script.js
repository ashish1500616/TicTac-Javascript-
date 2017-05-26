console.log("Script called");
var sym = "";
var op = "";
var c = 0,
    r = 0,
    tr = 0,
    tl = 0,
    temp = 2,
    count = 0;

var array = [
    []
];

function getD() {

}

function getSymbol(data) {
    var sym = data;
    console.log("you selected", sym);
}

function getOpponent(data) {
    var op = data;
    if (op === "person") {
        //console.log("Calling showDiv");
        showDiv();
    } else {
        showDivCom();
    }
    console.log("you selected", op);
}

function scores(data) {

}

function check(data) {

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            // to check row.
            if (array[i][j] === data) {
                r++;
            } else if (array[j][i] === data) {
                c++;
            } else if (i === j && array[i][j] === data) {
                tr++;
            } else if (array[i][temp] === data) {
                tl++;
                --temp;
            }
        }
        if (c == 3 || r === 3 || tr === 3 || tl === 3) {
            return 1;
        }

    }
}

function showDiv() {
    //console.log("showDiv called/");
    document.getElementById("nameDiv").style.display = "block";
    document.getElementById("nameDivCom").style.display = "none";

}

function showDivCom() {
    //console.log("showDiv called/");
    document.getElementById("nameDivCom").style.display = "block";
    document.getElementById("nameDiv").style.display = "none";
    $("#p2").html("Computer");

}

$("#playerOne").keydown(function(event) {
    var val = $("#playerOne").val();
    $("#p1").html(val);
});

$("#playerOneCom").keydown(function(event) {
    var val = $("#playerOneCom").val();
    $("#p1").html(val);
});

$("#playerTwo").keydown(function(event) {
    var val = $("#playerTwo").val();
    $("#p2").html(val);
});

function counter() {
    count++;
}

$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').one('click',function(event) {
    counter();
    if ($(event.target).attr('id') == 'b1') {
        if (count % 2 === 0)
            $('#b1').html('O');
        else
            $('#b1').html('x');
    } else if ($(event.target).attr('id') == 'b2') {
        if (count % 2 !== 0)
            $('#b2').html('X');
        else
            $("#b2").html('O');
    } else if ($(event.target).attr('id') == 'b3') {
        if (count % 2 !== 0)
        $('#b3').html('X');
        else
            $('#b3').html('O');
    } else if ($(event.target).attr('id') == 'b4') {
        if (count % 2 !== 0)
            $('#b4').html('X');
        else
            $('#b4').html('O');
    } else if ($(event.target).attr('id') == 'b5') {
        if (count % 2 !== 0)
            $('#b5').html('X');
        else
            $('#b5').html('O');
    } else if ($(event.target).attr('id') == 'b6') {
        if (count % 2 !== 0)
            $('#b6').html('X');
        else
            $('#b6').html('O');
    } else if ($(event.target).attr('id') == 'b7') {
        if (count % 2 !== 0)
            $('#b7').html('X');
        else
            $('#b7').html('O');
    } else if ($(event.target).attr('id') == 'b8') {
        if (count % 2 !== 0)
            $('#b8').html('X');
        else
            $('#b8').html('O');
    } else if ($(event.target).attr('id') == 'b9') {
        if (count % 2 !== 0)
            $('#b9').html('X');
        else
            $('#b9').html('O');
    }
});
