function fizzfn()
{
    var n=document.getElementById("no").value;
    for(var i=1;i<=n;i++)
    {
        
        if(i%3==0)
        {
            document.write("Fizz,");

        }
        else if(i%5==0)
        {
            document.write("Buzz,")
        }
        else if((i%3!=0)&&(i%5!=0))
        {
            alert(i);
            document.write(",");
        }
        else
        {
            document.write("FizzBuzz,");
        }
    }
}