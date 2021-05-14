function Rectangle(width,height)
{
    this.width=width;
    this.height=height;
    this.area=function(width,height){
         var res=this.width*this.height;
         return res;
    }
}
var r1=new Rectangle(50,50);
console.log(r1.area());
