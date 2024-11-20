// Q-1
class book {
    title;
    author;
    isbn;

    constructor(author,isbn,title) 
    { 
        this.author=author;
        this.isbn=isbn;
        this.title=title;
    }

    checkout()
    {
        console.log(this.title,"bookwastaken")
    }
    return()
    {
        console.log(this.title,"returned")
    }
    updatetitle()
    {
        console.log(this.title,"title was changed")
    }
}
var love=new book("srinivas","2608","howtolove");
console.log(love)
love.checkout();
love.return();
love.updatetitle();

// Q-2

class product
{
    name;
    price;
    category;

    constructor(name,price,category)
    {
        this.name=name;
        this.price=price;
        this.category=category;

    }
    discountofproduct(amount)
    {
        console.log(amount,"discount applied",this.price)
    }
    finalprice(amount)
    {
       console.log("after discount",this.price-amount)
    }
}
var pampers=new product("wipes","690","personal")
console.log(pampers);
pampers.discountofproduct(200);
pampers.finalprice(200);

// Q-3
class bank
{
    name;
    acnumber;
    balance;

    constructor(name,acnumber,balance)
    {
        this.name=name;
        this.acnumber=acnumber;
        this.balance=balance;
    }
    deposit(amount)
    {
        console.log(amount,"amount is credited",)
    }
    withdraw(amount)
    {
        console.log(amount,"amount is deposited")
    }
    balance()
    {
        console.log(amount,"balance ",this.title)
    }
}
var sbi=new bank("srinu","7075347277","30")
console.log(sbi);
sbi.deposit(5);
sbi.withdraw(16);


// Q-4
class vehicle
{
    model;
    licenseplate;
    mileage;
    constructor(model,licenseplate,mileage)
    {
        this.model=model;
        this.licenseplate=licenseplate;
        this.mileage=mileage;
    }
    drive(miles)
    {
        console.log("increases the mileage",this.mileage+miles)
    }
    getmileage(miles)
    {
        console.log("ccurrent mileage",this.mileage)
    }

}
var nano = new vehicle("m3","2608","40");
console.log(nano);
nano.drive(10);
nano.getmileage(50);


// Q-5
class student
{
    name;
    grade;
constructor(name,grade)
{
    this.name=name;
    this.grade=grade;
}
setgrade(newgrade)
{   this.grade=newgrade;
    console.log(this.title,"new grade",this.grade)
}
getgrade()
{
    console.log(this.grade,"current grade",this.title)
}
}
var srinivas=new student("srinivas","A");
console.log(srinivas.name,"grade",srinivas.grade);
console.log(srinivas);
srinivas.setgrade(35);
srinivas.getgrade();
