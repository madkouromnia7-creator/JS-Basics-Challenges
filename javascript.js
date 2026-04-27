let pricePerDay=0;
let total=0;
let car=prompt("ادخل نوع السيارة");
let age=Number(prompt("ادخل عمرك"));
let days=Number(prompt("ادخل عدد الايام"));
switch(car)
{
    case "Economy":
pricePerDay=100;
break;
case "Sedan":
    pricePerDay=200;
break;
    case "SUV":
        pricePerDay=300;
        break;
        default:
            pricePerDay=0;
     document.write("غير متوفر")
}
if(age<18)
{
    document.write("اركن على جنب يا بطل")
}
else
{
    total=pricePerDay*days

if(days>7)

{
    total=total*0.80
}
if(age<21)
{
    total=total+50
}
console.log(`سعرك النهائي هو${total}`)
}

