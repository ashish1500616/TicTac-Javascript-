console.log("Script called");
var sym = "";
var op = "";
var c = 0,
    r = 0,
    tr = 0,
    tl = 0,
    temp = 2;

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