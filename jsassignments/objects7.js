function personDetails(fname,lname,age,skills,address,dob,married,profession)
{ 
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.address=address;
    this.dob=dob;
    this.married=married;
    this.profession=profession;
}
var person1=new personDetails("nikhil","gowda",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"573339"},"false","sr analyst");
var person2=new personDetails("harish","gowda",21,["HTML"],"08/06/1997",{city:"amarpet",pincode:"577321"},"false","jr analyst");


console.log(person1);
console.log(person2);
