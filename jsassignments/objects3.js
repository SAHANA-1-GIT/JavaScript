function Rectangle(width,height)
{
    this.width=width;
    this.height=height;
    this.area=function(width,height){
         var res=this.width*this.height;
         return res;
    }
}
var r1=new Rectangle(4,5);
// r1.height=50;
console.log(r1.area());
