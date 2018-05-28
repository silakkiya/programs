var as=prompt("Enter an array of Strings:");
var x=as.split(",");
var result=new Array();
var s=x[0].slice(1,-1).toLowerCase();
if(checkpal(s)==1)
    document.write(x[0]+",");
for(k=1,s=x[k];k<x.length;k++,s=x[k])
{
    s=s.slice(2,-1).toLowerCase();
    if(checkpal(s)==1)
        document.write(x[k]+",");
}
function checkpal(p)
{
    var y=p.split("");
    p=p.split("");
    for(var i=0,j=y.length-1;i<=j;i++,j--){
        var temp=y[i];
        y[i]=y[j];
        y[j]=temp;
    }
    if(p==y.join())
        return 1;
    else
        return 0;
}