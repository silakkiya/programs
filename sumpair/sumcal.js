function calc(){
    var arr=document.getElementById("given").value;
    var n=document.getElementById("nval").value;
    var obj=JSON.parse(arr);
    var finarr=[]
    var ansarr=[]
    for(key in obj){
        finarr.push(obj[key])
    }
    for(var i=0;i<finarr.length;i++){
        for(var j=i+1;j<finarr.length;j++){
            if(finarr[i]+finarr[j]==n ){
                var str=finarr[i]+","+finarr[j]
                ansarr.push(str);
                //console.log(str)
            }
        }
    }
    for(var i=0;i<ansarr.length;i++){
        document.getElementById("output").innerHTML= document.getElementById("output").innerHTML+"<h4>"+ansarr[i]+"</h4>";
    }
    
}