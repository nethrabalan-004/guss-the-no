
c=Math.random()
    d=Math.floor(c*100);
    var count=0
function mani()
{
    var a=document.getElementById("val");
    var b=document.getElementById("re");
    console.log(d)
    
    
    if(Number(a.value)==d)
    {
        b.textContent="Yah you got it right in "+count+" Count ";
        
    }
    else if(Number(a.value)>d && Number(a.value)<100)
    {
        b.textContent="GUSS LOWER"
        count=count+1

    }
    else if(Number(a.value)>100)
    {
        b.textContent="Guss between 1-100"
    }
    else if(Number(a.value)<100 && Number(a.value)<d){
            b.textContent="GUSS HIGHER"
            count=count+1
    }
}