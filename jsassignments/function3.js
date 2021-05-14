function find(arr,isEven)
{
    for(i=0;i<arr.length;i++)
    {
        if(isEven(arr[i]))
        {
            console.log(arr[i]);
        }

    }
}
function isEven(x)
{
    if(x%2==0)
    {
        return true;
    }
    else{
        return false;
    }
}
find([1,3,4,5],isEven);