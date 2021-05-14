function findLargest(a)
{
    a.sort();
    var index=a.length;
    console.log(a[index-1]);
}
findLargest([1,5,2,4]);