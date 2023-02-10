/*4. feladat: Milyen háromszögről beszélünk? A feladatban a háromszögek közül a tompaszögűeket, a derékszögűeket és a hegyesszöbűeket igyekeztem kiszűrni. 
*/

function milyenHaromSzog (aOldal, bOldal, cOldal)
{if (cOldal*cOldal==aOldal*aOldal+bOldal*bOldal)
{document.write(`<br>A háromszög derékszögű, mert ${cOldal*cOldal} = ${aOldal*aOldal} + ${bOldal*bOldal}`);}

else if (aOldal*aOldal==cOldal*cOldal+bOldal*bOldal)
{document.write(`<br>A háromszög derékszögű, mert ${aOldal*aOldal} = ${cOldal*cOldal} + ${bOldal*bOldal}`);}

else if (bOldal*bOldal==aOldal*aOldal+cOldal*cOldal)
{document.write(`<br>A háromszög derékszögű, mert ${bOldal*bOldal} = ${aOldal*aOldal} + ${cOldal*cOldal}`);}

else if (aOldal*aOldal+bOldal*bOldal<cOldal*cOldal)
{document.write(`<br>A háromszög tompaszögű, mert ${cOldal*cOldal} nagyobb, mint ${aOldal*aOldal} + ${bOldal*bOldal}.`);}

else if (cOldal*cOldal+bOldal*bOldal<aOldal*aOldal)
{document.write(`<br>A háromszög tompaszögű, mert ${aOldal*aOldal} nagyobb, mint ${cOldal*cOldal} + ${bOldal*bOldal}.`);}

else if(aOldal*aOldal+cOldal*cOldal<bOldal*bOldal)
{document.write(`<br>A háromszög tompaszögű, mert ${bOldal*bOldal} nagyobb, mint ${aOldal*aOldal} + ${cOldal*cOldal}.`);}

else if (cOldal*cOldal<aOldal*aOldal+bOldal*bOldal)
{document.write(`<br>A háromszög hegyesszögű, mert ${cOldal*cOldal} kisebb, mint ${aOldal*aOldal} + ${bOldal*bOldal}.`);}

else if (aOldal*aOldal<cOldal*cOldal+bOldal*bOldal)
{document.write(`<br>A háromszög hegyesszögű, mert ${aOldal*aOldal} kisebb, mint ${cOldal*cOldal} + ${bOldal*bOldal}.`);}

else if (bOldal*bOldal<aOldal*aOldal+cOldal*cOldal)
{document.write(`<br>A háromszög hegyesszögű, mert ${bOldal*bOldal} kisebb, mint ${aOldal*aOldal} + ${cOldal*cOldal}.`);}


else {document.write(`<br>A háromszög nem derékszögű, nem egyenlő szárú és nem egyenlő oldalú!`);}
}
milyenHaromSzog(3,4,5);
milyenHaromSzog(13,12,5);
milyenHaromSzog(24,25,7);
milyenHaromSzog(6,7,12);
milyenHaromSzog(8,15,9);
milyenHaromSzog(17,6,11);
milyenHaromSzog(5,5,6);
milyenHaromSzog(7,6,7);
milyenHaromSzog(6,8,9);