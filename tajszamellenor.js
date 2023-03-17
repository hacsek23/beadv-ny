function tajSzamEllenor(tajszam)

{

let a=(Number(tajszam[1])+Number(tajszam[3])+Number(tajszam[5])+Number(tajszam[7]))*7;
let b=(Number(tajszam[0])+Number(tajszam[2])+Number(tajszam[4])+Number(tajszam[6]))*3;
{
if(tajszam.length==9 && (a+b)%10==Number(tajszam[8]))
{return true;
}
else (tajszam.length!==9 || (a+b)%10!==Number(tajszam[8]))
{
return false;
}
}

}

document.write("<br>"+tajSzamEllenor("040655330"));
document.write("<br>"+tajSzamEllenor("111111111"));
document.write("<br>"+tajSzamEllenor("019536646"));
document.write("<br>"+tajSzamEllenor("037687210"));