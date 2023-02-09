/*1.keszito()–Bemeneti paraméterek száma: 0Készíts egy függvényt mely kiírja az adott file készítőjének 
•Nevét
•Csoportjának típusát (Junior Frontend vagy Webfejlesztő) 
•Csoportjának azonosítóját (melyik #Teamtagja)
Visszatérési érték: nincs*/

function keszito()
{document.write("Név: Hajdu Zoltán János <br> Típus: Junior Frontend Fejlesztő <br> Azonosító: Team#12");}

keszito();

/*2.feladat: hatvanyozo()–Bemeneti paraméterek száma: 2(szam és hatvány)
Készíts egy függvényt, mely paraméterként bekér egy számot és a hatványozás mértékét, 
és visszaadja annak hatványát.Kipróbálásra:hatvanyozo(2,3) esetleg hatvanyozo(5,3)Visszatérési érték:8, 
illetve a második esetében 125*/

function hatvanyozo(szam, hatvany){let eredmeny=szam**hatvany;
    document.write("<br> A kapott szám:"+eredmeny);}
    
    hatvanyozo(2,3);
    hatvanyozo(5,3);
    

/*3.feladat: parosLetrehoz()–Bemeneti paraméterek száma:2(alsó és felső határ)Készíts egy függvényt, 
ami egy adott intervallumban generál ki páros számot, és ad vissza értéknek. 
Kipróbálásra:parosLetrehoz(1,100);Visszatérési érték:2-100-ig bármely páros szám*/


function parosLetrehoz (alsoHatar, felsoHatar)
{
let generaltParosSzam=Math.round(Math.random()*(felsoHatar-alsoHatar))+alsoHatar;

if(generaltParosSzam%2==0){
	document.write(generaltParosSzam);
}
else if(generaltParosSzam!=felsoHatar)
{
	document.write(generaltParosSzam+1);
}
else{
	document.write(generaltParosSzam-1);
}
}

parosLetrehoz(1,100);

/*4.feladat: testTomegIndex()–Bemeneti paraméterek száma: 2(suly és magasság)Készíts elegy függvényt,
amelynek meg kell adnod a magasságodat méterben és a súlyodat kilogrammban,  
és  ezek  után  visszaadja  a jelenlegi  testtömeg  indexedrövid  szöveges értékelését.
A testtömegindex kiszámítására, a mellékelt linken találhatsz forrást:Forrás:https://hu.wikipedia.org/wiki/Testt%C3%B6megindex
Visszatérési értékek lehetőségei (ügyelj a kis-nagybetű érzékenységre!):
•sulyosSovanysag
•mersekeltSovanysag
•enyheSovanysag
•normalisTestsuly
•tulsulyos
•IfokuElhizas
•IIfokuElhizas
•IIIfokuSulyosElhizas
Kipróbálásra:testTomegIndex(200,2) esetleg testTomegIndex(45,1.5), testTomegIndex(25,1.2)
Visszatérési érték:IIIfokuSulyosElhizasilletve normalisTestsulyvalamintenyheSovanysag*/

function testTomegIndex(suly, magassag)

{let BMI=suly/(magassag*magassag);
if (16>=BMI<0)
{document.write("<br> Súlyos soványság:"+BMI);}

else if (16.99>=BMI)
{document.write("<br> Mérsékelt soványság:"+BMI);}

else if (18.49>=BMI)
{document.write("<br> Enyhe soványság:"+BMI);}

else if (24.99>=BMI)
{document.write("<br> Normális testsúly:"+BMI);}

else if (29.99>=BMI)
{document.write("<br> Túlsúlyos:"+BMI);}

else if (34.99>=BMI)
{document.write("<br> I. fokú elhízás:"+BMI);}

else if (40>=BMI)
{document.write("<br> II. fokú elhízás:"+BMI);}

else if (BMI>=40)
{document.write("<br> III. fokú, súlyos elhízás:"+BMI);}

else
{document.write("<br> Az adat hibás:"+BMI);}
}

testTomegIndex (200,2);
testTomegIndex (45,1.5);
testTomegIndex (25,1.2);


/*5.feladat: egeszOsztoE()–Bemeneti paraméterek száma: 2(szam és osztó)Készíts egy függvényt, 
mely paraméterként bekér egy számot és egy osztót és vissza adja(true vagy false), 
hogy az adott osztó, osztja-e az egész számot, úgy, hogy a maradék nulla.
Kipróbálásra:egeszOsztoE(25,5) esetleg egeszOsztoE(1050,7)
valamint egeszOsztoE(2048,3)Visszatérési érték:true, illetve a második esetében szintén true, 
harmadik esetén pedig false*/


function egeszOsztoE (szam, oszto)
{
if (szam%oszto==0)
{document.write("<br> A maradék nulla, a válasz true");}

else
{document.write("<br>  A maradék nem nulla, a válasz false");}
}

egeszOsztoE(25,5);
egeszOsztoE(1050,7);
egeszOsztoE(2048,3);
