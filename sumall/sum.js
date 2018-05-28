function sumfn()
{
    var no=document.getElementById("n").value;
    var sum=0;
    if(no<0)
    {
        document.write("enter the positive number");
    }
    else
    {
    for(var i=0;i<=no;i++)
    {
        sum=sum+i;
    }
    alert(sum);
    }
}