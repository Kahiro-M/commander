function makeOutTxt(){
    const inTxt1 = document.getElementById("inTxt1");
    const inTxt2 = document.getElementById("inTxt2");
    const inTxt3 = document.getElementById("inTxt3");
    var outTxt = document.getElementById("outTxt");

    outTxt.value = inTxt1.value+" "+inTxt2.value+" "+inTxt3.value;
}