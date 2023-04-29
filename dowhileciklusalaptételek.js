let ujTomb=[33,7,18,342,927];

function MaxErtekFuggveny(vizsgaltTomb)
{
let maxErtek=vizsgaltTomb[0];
let i=0;
do{
if(vizsgaltTomb[i]>maxErtek)
{
maxErtek=vizsgaltTomb[i];
}

i++;}
while(i<vizsgaltTomb.length)
{


}
return maxErtek;

}


document.write("<br>"+MaxErtekFuggveny(ujTomb));


function MinErtekFuggveny(vizsgaltTomb)
{
let minErtek=vizsgaltTomb[0];
let i=0;
do{
if(vizsgaltTomb[i]<minErtek)
{
minErtek=vizsgaltTomb[i];
}

i++;}
while(i<vizsgaltTomb.length)
{


}
return minErtek;

}


document.write("<br>"+MinErtekFuggveny(ujTomb));


function MaxIndexFuggveny(vizsgaltTomb)
{
let maxIndex=0;
let i=0;
do{
if(vizsgaltTomb[i]>vizsgaltTomb[maxIndex])
{maxIndex=i;}
i++;
}

while(i<vizsgaltTomb.length)

return maxIndex;

}

document.write("<br>"+MaxIndexFuggveny(ujTomb));


function MinIndexFuggveny(vizsgaltTomb)
{
let minIndex=0;
let i=0;
do{
if(vizsgaltTomb[i]<vizsgaltTomb[minIndex])
{minIndex=i;}
i++;
}

while(i<vizsgaltTomb.length)

return minIndex;

}

document.write("<br>"+MinIndexFuggveny(ujTomb));


function AtlagSzamitasFuggveny(vizsgaltTomb)
{
let osszeg=0;
let i=0;
do{osszeg+=vizsgaltTomb[i];
i++;}
while(i<vizsgaltTomb.length)

return osszeg/vizsgaltTomb.length;

}

document.write("<br>"+AtlagSzamitasFuggveny(ujTomb));


function OsszegzesFuggveny(vizsgaltTomb)
{
let osszeg=0;
let i=0;
do{osszeg+=vizsgaltTomb[i];
i++;}

while(i<vizsgaltTomb.length)

return osszeg;

}

document.write("<br>"+OsszegzesFuggveny(ujTomb));



function MegSzamlalasFuggveny(vizsgaltTomb)
{
let db=0;
let i=0;

do{db++;
i++;}

while(i<vizsgaltTomb.length)

return db;

}

document.write("<br>"+MegSzamlalasFuggveny(ujTomb));


function KivalogatasFuggveny(vizsgaltTomb)
{
let osszeg=0;
let i=0;

do{
if(vizsgaltTomb[i]%3==0)
{osszeg++;}
i++;}

while(i<vizsgaltTomb.length)



return osszeg;

}

document.write("<br>"+KivalogatasFuggveny(ujTomb));