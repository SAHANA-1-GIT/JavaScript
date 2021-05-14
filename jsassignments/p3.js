function padchar(a,b){
    var newString;
    for(i=1;i<=a;i++)
    {
        newString=String.concat(newString,b)
    }
   console.log(newString)

}
padchar(5,"*");
