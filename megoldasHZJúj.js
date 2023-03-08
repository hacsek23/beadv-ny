const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]

/*1. feladat: hosszEllenor()–Bemeneti paraméterek száma: 1(szöveg) Készítsen egy függvényt, amely ellenőrzi egy bemeneti karakterlánc hosszát, és amennyiben az nem megfelelő (nincs legalább 8 karakter) úgy a függvény hamis értékkel tér vissza, ellenkező esetben az függvény visszatérési értéke természetesen igaz lesz.Kipróbálásra: „teszt”esetleg „feladatteszt”Visszatérési érték: false illetvetrue */

function hosszEllenor(szoveg)
{let karakterHossz=true;
    
    for (i=0; i<szoveg.length; i++)
    {if(szoveg.length<[8])
    {karakterHossz=false}
    }
return karakterHossz
}

document.write("<br>"+hosszEllenor("teszt"));
document.write("<br>"+hosszEllenor("feladatteszt"));

/*2.feladat: tajSzamEllenor()–Bemeneti paraméterek száma: 1(számsor szövegként) 
Készítsen  egy  függvényt  mely  szöveges  bemeneti  paraméterrel  dolgozik,  
mely  számok sorozata, összesen 9 karakter hosszú.Ellenőrzés folyamata:
Ellenőrizni kell a karaktermennyiségét
(a)Majd összeadni a páros helyen lévő elemeket(4db), 
ezt megszorozni héttel
(b)Ezután összeadni a páratlan helyen lévő elemeket(4db), 
ezt megszorozni hárommalMegjegyzés: a számsor utolsó elemét csak akövetkező lépésnél használjukfel.
A feltétel igaz, ha a páros és páratlan számok véreredménye 10-zel való maradékos osztás után 
a tajszám utolsó elemének értékét adja vissza!Azaz:(a+b)%10==tajszam[8]
Ellenkező esetben nemKipróbálásra:tajSzamEllenor(040655330) 
esetleg tajSzamEllenor(111111111)Visszatérési érték:true illetvefalse
További igaz visszatérésű elemek:037687210, 019536646*/



function tajSzamEllenor(taj)

{
let megfelel=false;
let tajSzam= [9];
let a=(tajSzam[1]+tajSzam[3]+tajSzam[5]+tajSzam[7])*7;
let b=(tajSzam[0]+tajSzam[2]+tajSzam[4]+tajSzam[6])*3;
while(megfelel!==true)
{
document.write("Add meg a tajszámot!");

if(taj.length==9)
{
for(i=0; i<taj.length; i++)
{
tajSzam[i]=taj.substring(i,1);
}
{
megfelel=true;
}
}
else
{
document.write("Nem megfelelő érték, a hossz 9 karakter kellene legyen!")
megfelel=false;
}
}
document.write("A vizsgálandó szám:");
for(let i=0; i<tajSzam.length; i++)
{
tajSzam[i];
}
if(tajSzam[8]==(a+b)%10)
{
document.write("A tajszám érvényes!");
}
{
document.write("A tajszám NEM érvényes!");
}

{return tajSzam;}
}

document.write(+tajSzamEllenor(040655330));

/*3.feladat: tombTerjedelem() –Bemeneti paraméterek száma:1(tömb)Határozza meg egy vagy több függvény segítségével, egy adott tömb elemeinek terjedelmét.Terjedelem: a tömb legkisebb és a legnagyobb eleme közötti különbség.A függvényt úgy készítse el, hogy bármilyen tömb paraméter esetén helyes megoldás adjon.Kipróbálásra:let vizsgaltTomb=[3, 5, 10, 16, 9];tombTerjedelem(vizsgaltTomb);Visszatérési érték:13*/

/*3.feladat: tombTerjedelem() –Bemeneti paraméterek száma:1(tömb)
Határozza meg egy vagy több függvény segítségével, egy adott tömb elemeinek terjedelmét.
Terjedelem: a tömb legkisebb és a legnagyobb eleme közötti különbség.
A függvényt úgy készítse el, hogy bármilyen tömb paraméter esetén helyes megoldás adjon.
Kipróbálásra:let vizsgaltTomb=[3, 5, 10, 16, 9];tombTerjedelem(vizsgaltTomb);Visszatérési érték:13*/

function tombTerjedelem(vizsgaltTomb)

{
let minErtek=vizsgaltTomb[0];
let maxErtek=vizsgaltTomb[0];
let terjedelem=maxErtek-minErtek;
for(i=0; i<vizsgaltTomb.length; i++)
{
if(vizsgaltTomb[i]>maxErtek)
{
maxErtek=vizsgaltTomb[i];
}
return maxErtek;
if(vizsgaltTomb[i]<minErtek)
{
minErtek=vizsgaltTomb[i];
}
return minErtek;
}
return terjedelem==maxErtek-minErtek;
}

let vizsgaltTomb=[3, 5, 10, 16, 9];
document.write("A vizsgált tömb terjedelme:"+tombTerjedelem(vizsgaltTomb));

/*4.feladat: legidosebbDolgozo()–Bemeneti paraméterek száma:1(objektum)Készíts elegy függvényt,
amelynek megadsz  egy objektumot, melyben  biztosan tartozik egy[kor]  tulajdonság minden elemhez, 
abból kikeresse a „legidősebb”elemet, és visszaadja  az objektumban található elemnek az indexét.
A függvényt úgy készítse el, hogy bármilyen [kor] attribútummalrendelkezőparaméter esetén helyes megoldás adjon.
Kipróbálásra:A feladathoz mellékelt objektum
Visszatérési érték:A legidősebbobjektumelem indexe(jelenleg:3)*/

function legidosebbDolgozo()

{
let maxKorIndex=0;
for(let i=0; i<Dolgozok.length; i++)
{if(Dolgozok[i].kor>Dolgozok[maxKorIndex].kor)
{
maxKorIndex=i;
}
}
return maxKorIndex;
}

document.write("<br> A legidősebb dolgozó indexe:"+legidosebbDolgozo());
