function calc()
{
    var text=document.getElementById("tstring").value;
    var sum=0;
    var obj=JSON.parse(text,function(key,value)
{
    sum+=value;})
    alert("total amnt="+parseInt(sum));
}