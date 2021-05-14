function printLeapYear()
{
    var year=2021;
    var y;
    var count=20;
    for(i=1;i<=count;i++)
    {
       if(year%400==0)
       {
           console.log(year);
       }  
       else if(year%100==0)
       {
           console.log(year);
       }
       else if(year%4==0)
       {
           console.log(year);
       }
       year++;
    }

}
printLeapYear();