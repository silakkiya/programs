function powerfn()
{
    var n=document.getElementById("no").value;
    var ans=0;
    for(var i=1;i<=n;i++)
    {
        ans=Math.pow(2,i);
        if(ans>n)
        {
            i=i-1;
            alert(i);
            break;
        }
    }
}