function square(x)
{
    var res;
    res=x*x;
    return res;
}
function double(x)
{
    var res1;
    res1=2*x;
    return res1;
}
function f1(x)
{
     var res2=double(x);
     var res3=square(res2);
     return res3;
}
function f2(x)
{
    var res4=square(x);
    var res5=double(res4);
    return res5;
}
function compose(x)
{
    var res6;
    res6=f1(x);
    var finalRes=f2(res6);
    console.log(finalRes);
}
compose(5);

