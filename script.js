$(document).on("click", "#Calculate", function (e) {
    e.preventDefault();
    $("#result").text("");
    var weight = $("#weight").val();
    var height = $("#height").val();
    var BMI = (weight / (height * height)) * 10000;
    let roundedBMI = BMI.toFixed(2);
    console.log(roundedBMI);


    if (BMI < 18.5) {
        $("#result").text(roundedBMI).css("background","#ffc107");
        $("#weightrange").text("You are Underweight").css("background", "#ffc107"); // Yellow
    } else if (BMI >= 18.5 && BMI < 25) {
        $("#result").text(roundedBMI).css("background","#ffc107");
        $("#weightrange").text("You are Normal").css("background", "#198754").css("color", "#fff"); // Green
    } else if (BMI >= 25 && BMI < 30) {
        $("#result").text(roundedBMI).css("background","#ffc107");
        $("#weightrange").text("You are Overweight").css("background", "#fd7e14"); // Orange
    } else {
        $("#result").text(roundedBMI).css("background","#ffc107");
        $("#weightrange").text("You are Obese").css("background", "#dc3545").css("color", "#fff"); // Red
    }
});

$('#reset').click(function () {
    $('#result').text('');
    $('#weightrange').text('').removeAttr('style');

});
