//Készítsetek el minnél több függvényt és eljárást a korábban tanult kódokból!

/*1. plusz feladat: Páratlan szám generátor. A páros után pár percben megcsináltam ezt is. :)*/ 

function ParatlanGenerator (also, felso)
{let generaltParatlanSzam=Math.round(Math.random()*(felso-also))+also;
if(generaltParatlanSzam%2==1){
	document.write(`Generált páratlan szám a(z) ${also}-${felso} intervallumban: ${generaltParatlanSzam}`);
}
else if(generaltParatlanSzam!=felso)
{
	document.write(`Generált páratlan szám a(z) ${also}-${felso} intervallumban: ${generaltParatlanSzam+1}`);
}
else{
	document.write(`Generált páratlan szám a(z) ${also}-${felso} intervallumban: ${generaltParatlanSzam-1}`);
}

}

ParatlanGenerator (1, 1000);

/*2. plusz feladat: Osztható-e hárommal? Ebben a feladatban simán a hárommal való oszthatóságra voltam kíváncsi.*/

function oszthatoHarommal (szam)
{let oszto=3;
let oszthatoe=szam/oszto

if(szam%oszto==0){
	document.write(`<br> <br> A szám maradék nélkül osztható 3-mal, mivel ${szam} / ${oszto} = ${oszthatoe}, maradéka:` +szam%oszto);
}

else{
	document.write(`<br> <br> A szám maradék nélkül nem osztható 3-mal, mivel ${szam} / ${oszto} = ${oszthatoe}, maradéka:` +szam%oszto);
}

}

oszthatoHarommal (9);
oszthatoHarommal (5);
oszthatoHarommal (4);
oszthatoHarommal (12);
oszthatoHarommal (21);
oszthatoHarommal (31);

/*3. feladat: Milyen háromszögről beszélünk? A feladatban a háromszögek fajtáit igyekeztem kiszűrni. 
Lehet kicsit "magyar narancs" lett, de igyekeztem. :D */

function milyenHaromSzog (aOldal, bOldal, cOldal)
{if (cOldal*cOldal==aOldal*aOldal+bOldal*bOldal)
{document.write(`<br>A háromszög derékszögű, mert ${cOldal*cOldal} = ${aOldal*aOldal} + ${bOldal*bOldal}`);}

else if (aOldal*aOldal==cOldal*cOldal+bOldal*bOldal)
{document.write(`<br>A háromszög derékszögű, mert ${aOldal*aOldal} = ${cOldal*cOldal} + ${bOldal*bOldal}`);}

else if (bOldal*bOldal==aOldal*aOldal+cOldal*cOldal)
{document.write(`<br>A háromszög derékszögű, mert ${bOldal*bOldal} = ${aOldal*aOldal} + ${cOldal*cOldal}`);}

else if (aOldal==bOldal && cOldal==bOldal)
{document.write(`<br>A háromszög egyenlő oldalú!`);}

else if (cOldal==aOldal && aOldal!==bOldal || aOldal==bOldal && bOldal!==cOldal || bOldal==cOldal && cOldal!==aOldal)
{document.write(`<br>A háromszög egyenlő szárú!`);}

else {document.write(`<br>A háromszög nem derékszögű, nem egyenlő szárú és nem egyenlő oldalú!`);}
}

milyenHaromSzog(3,4,5);
milyenHaromSzog(5,7,8);
milyenHaromSzog(8,8,8);
milyenHaromSzog(13,12,5);
milyenHaromSzog(12,11,17);
milyenHaromSzog(24,25,7);
milyenHaromSzog(5,5,6);
milyenHaromSzog(7,6,7);
milyenHaromSzog(6,8,9);
milyenHaromSzog(7,7,4);