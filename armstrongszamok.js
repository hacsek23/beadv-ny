
function ArmstrongSzamok (szam)
{

let harmasok=szam%10; 
let kettesek=((szam-harmasok)/10)%10;
let egyesek=(szam-kettesek*10-harmasok)/100;

if(szam>99 && szam<1000 && Math.pow(egyesek,3)+Math.pow(kettesek,3)+Math.pow(harmasok,3)==szam)
{return `A ${szam} Armstrong szám!`;}

else if(szam>99 && szam<1000 && Math.pow(egyesek,3)+Math.pow(kettesek,3)+Math.pow(harmasok,3)!==szam)
{return `A ${szam} nem Armstrong szám!`;}


else (szam<100 && szam>999)
{
return "Hibás adat!";
}

}


document.write(ArmstrongSzamok(370));
document.write(ArmstrongSzamok(153));
document.write(ArmstrongSzamok(3370));
document.write(ArmstrongSzamok(337));