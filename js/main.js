let input = '';
let result = '';
let finishedCalculation = 0;
$(".digit, .operation, .AC").click(function () {
    $(this).toggleClass("clicked");
    setTimeout(() => { $(this).toggleClass("clicked") }
        , 100);
});

$(".digit").click(function () {
    isNewCalculation();
    let digit = $(this).text();
    if (operationSymbolExisting()) {
        input = '';
    }
    if (!(digit === "." && result.indexOf(".") !== -1)) {
        result += digit;
        input += digit;
    }
    $(".calculation").text(input);
    $(".result").text(result);
});
$(".operation").click(function () {
    isNewCalculation();
    let symbol = $(this).text();
    if (symbol !== "=") {
        input = symbol;
        result += symbol;
    }
    $(".calculation").text(input);
    $(".result").text(result);
})

$(".AC").click(cleanEverything)
function operationSymbolExisting() {
    if (input.indexOf("+") != -1 ||
        input.indexOf("-") != -1 ||
        input.indexOf("*") != -1 ||
        input.indexOf("//") != -1) {
        return true;
    }
    else {
        return false;
    }
}

$(".equal").click(function () {
    input = '';
    let finalResult = eval(result);
    result+= "= " + +finalResult ;
    input=finalResult;
    $(".calculation").text(input);
    $(".result").text(result);
    finishedCalculation = 1;
})
function cleanEverything(){
    result = '';
    input = '';
    $(".calculation").text("0");
    $(".result").text("0");
}
function isNewCalculation(){
if(finishedCalculation ===1)
cleanEverything();
finishedCalculation = 0;
}