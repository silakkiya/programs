function factfn()
{
    var n=document.getElementById("no").value;
    var fact=1;
    if(n<0)
    {
        document.write("enter the positive number");
    }
    else
    {
    for(var i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    alert(fact);
    }
    
}