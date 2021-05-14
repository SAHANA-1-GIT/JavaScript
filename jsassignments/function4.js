function findSquare(arr,square)
{
    var newarr=[];
    for(i=0;i<arr.length;i++)
    {
        newarr[i]=square(arr[i]);
        
    }
    console.log(newarr);
}
function computeSquare(x)
{
    return x*x;
}
findSquare([1,2,3,4,5],computeSquare);