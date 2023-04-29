let ujTomb=[3,9,81,243,729];

function MaxErtekFuggveny(vizsgaltTomb)
{
let maxErtek=vizsgaltTomb[0];
let i=0;
while(i<vizsgaltTomb.length)
{
if(vizsgaltTomb[i]>maxErtek)
{maxErtek=vizsgaltTomb[i];}
i++;
}
return maxErtek;

}

document.write("<br>"+MaxErtekFuggveny(ujTomb));

function MinErtekFuggveny(vizsgaltTomb)
{
let minErtek=vizsgaltTomb[0];
let i=0;
while(i<vizsgaltTomb.length)
{
if(vizsgaltTomb[i]<minErtek)
{minErtek=vizsgaltTomb[i];}
i++;
}
return minErtek;

}

document.write("<br>"+MinErtekFuggveny(ujTomb));


function MaxIndexFuggveny(vizsgaltTomb)
{
let maxIndex=0;
let i=0;
while(i<vizsgaltTomb.length)
{
if(vizsgaltTomb[i]>vizsgaltTomb[maxIndex])
{maxIndex=i;}
i++;
}
return maxIndex;

}

document.write("<br>"+MaxIndexFuggveny(ujTomb));

function MinIndexFuggveny(vizsgaltTomb)
{
let minIndex=0;
let i=0;
while(i<vizsgaltTomb.length)
{
if(vizsgaltTomb[i]<vizsgaltTomb[minIndex])
{minIndex=i;}
i++;
}
return minIndex;

}

document.write("<br>"+MinIndexFuggveny(ujTomb));


function AtlagSzamitasFuggveny(vizsgaltTomb)
{
let osszeg=0;
let i=0;
while(i<vizsgaltTomb.length)
{osszeg+=vizsgaltTomb[i];
i++;}
return osszeg/vizsgaltTomb.length;

}

document.write("<br>"+AtlagSzamitasFuggveny(ujTomb));


function OsszegzesFuggveny(vizsgaltTomb)
{
let osszeg=0;
let i=0;
while(i<vizsgaltTomb.length)
{osszeg+=vizsgaltTomb[i];
i++;}
return osszeg;

}

document.write("<br>"+OsszegzesFuggveny(ujTomb));

function MegSzamlalasFuggveny(vizsgaltTomb)
{
let db=0;
let i=0;
while(i<vizsgaltTomb.length)
{db++;
i++;}
return db;

}

document.write("<br>"+MegSzamlalasFuggveny(ujTomb));

function KivalogatasFuggveny(vizsgaltTomb)
{
let osszeg=0;
let i=0;
while(i<vizsgaltTomb.length)
{
if(vizsgaltTomb[i]%81==0)
{osszeg++;}
i++;}

return osszeg;

}

document.write("<br>"+KivalogatasFuggveny(ujTomb));