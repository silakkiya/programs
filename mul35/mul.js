function mulfn()
{
    var n=document.getElementById("no").value;
    var ans=0;
    if(n<0)
    {
        document.write("enter the positive number");
    }
    else
    {
        for(var i=1;i<=n;i++)
        {
            if((i%3==0)||(i%5==0))
            ans=ans+i;
        }
        alert(ans);
    }
}