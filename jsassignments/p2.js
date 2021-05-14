function maxOfThree(a,b,c){
    if(a>b && a>c)
    {
        console.log(a);
    }
    else if(b>a && b>c)
    {
        console.log(b);
    }
    else
    {
        console.log(c);

    }
}
maxOfThree(1,2,3);
maxOfThree(1,3,2);
maxOfThree(3,2,1);
