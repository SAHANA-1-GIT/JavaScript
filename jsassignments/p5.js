function getSum(a)
{
    var sum=0;
    for(i=1;i<=a;i++)
    {
        if(i%3==0 || i%5==0)
        {
            sum=sum+i;
        }
        else{

        }
    }
    console.log(sum);
}
getSum(17);