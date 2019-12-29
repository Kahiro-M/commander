function makeOutTxt(){
    const inTxt1 = document.getElementById("inTxt1");
    const inTxt2 = document.getElementById("inTxt2");
    const inTxt3 = document.getElementById("inTxt3");
    var outTxt = document.getElementById("outTxt");

    outTxt.value = "";
    const aryInTxt2 = inTxt2.value.split(/\r\n|\r|\n/);
    const aryInTxt3 = inTxt3.value.split(/\r\n|\r|\n/);
    if(aryInTxt2.length<aryInTxt3.length){
        for (let i = 0; i <= aryInTxt3.length-aryInTxt2.length; i++) {
            aryInTxt2.push("");
        }
    }
    else if(aryInTxt3.length<aryInTxt2.length){
        for (let i = 0; i <= aryInTxt2.length-aryInTxt3.length; i++) {
            aryInTxt3.push("");
        }
    }
    else {
    }

    for(var i=0;i<Math.max(aryInTxt2.length,aryInTxt3.length);i++){
        outTxt.value += inTxt1.value+" "+aryInTxt2[i]+" "+aryInTxt3[i]+"\n";
    }
}