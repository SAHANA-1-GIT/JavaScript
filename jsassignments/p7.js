function findPrime(a)
{
    
    var num=1;
    while(num==a)
    {
        var count=0;
        for(i=1;i<=num;i++)
        {
            if(num%i==0)
            {
                count++;
            }
        }
        if(count==2)
        {
            console.log(num);
            num++;
        }
        else{
            num++;
        }
    }
}
findPrime(5);