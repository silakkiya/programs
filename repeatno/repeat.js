function calc(){
    var arr=document.getElementById("given").value;
    var obj=JSON.parse(arr);
    var finarr=[]
    var set1=new Set();
    for(key in obj){
        finarr.push(obj[key])
    }
    finarr.sort();
    for(var i=0;i<finarr.length-1;i++){
        for(var j=i+1;j<finarr.length;j++){
            if(finarr[i]==finarr[j]){
                set1.add(finarr[i]);
            }
        }
    }
    function printOne(values)
    {
         document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"<h4>"+values+"</h4>";
    }
 
    // It prints value of all the element 
    // of the set
    set1.forEach(printOne);
    //console.log(set1.size)
   
}