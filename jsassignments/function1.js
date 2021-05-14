function double(x)
{
    var res1;
    res1=x*2;
    return res1;
}
function square(x)
{
     var res2;
     res2=x*x;
     return res2;
}
function composedFunction(m)
{
    var finalRes1;
    finalRes1=double(m);
    var finalRes2=square(finalRes1);
    console.log(finalRes2);
}
composedFunction(5);