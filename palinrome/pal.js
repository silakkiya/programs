function CheckPal(){
    var s=document.getElementById("pstring").value;
    var x=s.split("");
    s=s.split("");
    for(var i=0,j=x.length-1;i<=j;i++,j--){
        var temp=x[i];
        x[i]=x[j];
        x[j]=temp;
    }
    if(s==x.join())
        alert("true");
    else
        alert("false");
}