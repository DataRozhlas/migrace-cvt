title: "Interaktivní grafika ke století republiky: žádná lidská činnost neformovala naši zemi víc než migrace"
perex: "„Migrační krize” je – ve srovnání s mohutnými přesuny obyvatel od vzniku Československa po současnost – nepodstatná epizoda, ukazuje interaktivní mapa, kterou iROZHLAS.cz vytvořil ve spolupráci s organizací Člověk v tísni."
published: "26. října 2018"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/demo_danelova06_180409-220516_pj.jpg?itok=O5PxbP5c
coverimg_note: "Foto <a href='https://www.irozhlas.cz/michaela-danelova-5270376'>Michaela Danelová</a>"
styles: []
libraries: [highcharts] #jquery, d3, d3v5, d3csv, highcharts, datatables
options: [] #wide, noheader (, nopic)
---
Žádná lidská činnost neformovala naši zemi víc než migrace, říká sociální geografka [Tereza Freidingerová](https://www.varianty.cz/kontakty/28). 

**Proč jste se rozhodli sestavit zrovna mapu, která ukazuje historii migrace v českých zemích?**  
Slavíme sto let od založení Československa a je dobré si uvědomit, že se klíčové části naší moderní historie psaly i v zahraničí. Stát by nemohl vzniknout bez exilových aktivit mužů 28. října. A kdyby na to byli v zahraničí sami, nikdy by myšlenku samostatného státu nedokázali prosadit. Museli se opřít o odhodlání a obrovské množství českých a slovenských krajanů.

Druhý důvod je, že téma migrace v posledních letech prostoupilo do všeobecné debaty naprosto o všem. Vidíme ho na všech úrovních politiky včetně komunální. A od roku 2015 se o migraci mluví, jako kdyby to bylo něco bezprecedentního, co tady nikdy dřív nebylo. Jenže historie dost jasně ukazuje, že to tak není, že tahle země si za posledních sto let prožila migračních vln víc než dost.

_Emigrační a imigrační trendy na našem území za posledních sto let můžete prozkoumat v následující aplikaci. Vyberte příslušný rok v grafu._

<wide>
<div id="toprow">
<div id="mapdiv">
        <svg id="mapa" version="1.1" viewBox="-250 0 1400 300" preserveAspectRatio="xMinYMin meet">
                <path id="sud" d="
                    M135.2,0.3c-2.3,0-4.4,1.9-6.1,6.7c-1.4,3.6,11.5,6.5,8.6,8.6c-8.6,7.1-20.8,7.8-29.4,12.8c-1.4,0.7,0,4.3-1.5,5
                    c-5.7,2.8-13.6-1.5-17.9,2.1c-3.6,2.8-2.2,8.6-5.8,11.4c-1.4,1.4-2.9-3.6-5-2.9c-6.5,1.4-7.2,9.9-11.5,12.8
                    c-2.2,2.1-6.5-1.4-8.7,0.7c-2.2,1.4,0,5.7-2.1,7.8c-2.9,3.6-10.8-2.8-12.9-2.8c-18,2.8-20.9,16.3-26.6,27.7
                    c-1.4,2.8-1.5-7.1-4.3-9.2c-2.2-2.8-6.4-3.5-10-4.2c-6.5-1.4,7.1,21.3,21.5,30.5c1.4,0.7,6.5,1.4,7.2,5.7c2.2,10-7.2,6.4-8.6,14.2
                    c-0.7,2.1,15,28.4,17.2,30.5c12.2,12.1,15.1,3.6,23,11.4c5,5,5.7,12.8,10.8,17.1c10.1,7.1,35.2,16.4,40.2,30.6h0.7
                    c11.5,5.7,20.2,20.6,35.3,14.9c2.9-0.7,2.1-6.4,5-6.4c5,0,10,6.4,15.1,5c0,0,5.8-18.4,5.8-18.4c2.9-2.1,7.9,2.8,9.3,0.7
                    c1.4-1.4,0-22.1,0.7-23.5c2.2-2.1,6.5-0.6,9.3,0.8c1.4,0.7,0,4.2,1.5,5c3.6,0,6.4-4.3,10-4.3c3.5,0,6.7,0.9,10,1.6
                    c0,0,0.1,0,0.2,0.1c9.6,2.2,18.8,6.2,27.5,10.3c4.1,1.5,4.6,3.2,9.1,3.2c3.3,1.1,6.6,2.2,10,2.6c2.9,0,6.5,1.5,9.3,0.7
                    c4.3-2.1,5.8-7.8,9.3-9.2c3.4-0.9,7.3,2.3,10.9,5.1c2.9,3.1,4.7,5.4,7.8,1.9c1.5-1.1,6.3,1.4,7.5,2.3c1.8,1.3,1.7,1.3,1.6,0.6
                    c-1.4-2.2-5.5-9.2-5.8-11.4c-0.4-3.4-2-1.5-10.2-7.9c-4.1-3.2-5.4-5-5.3-7.3c0.2-3.3-0.9-3.6-4.4-1.2c-3.4,2.4-7.1,0.4-8.8-4.6
                    c-1.3-4-1.7-4.2-6.3-3.6c-2.8,0.4-5.4,1.5-6.2,2.7c-2.7,4.2-14.7,14.9-17,15.2c-1.3,0.2-4.6-1.4-7.3-3.4c-3.3-2.4-7.6-4-12.7-4.7
                    c-8.5-1.2-28.9-7.8-37.2-12.1c-2.9-1.5-6.2-4.3-7.3-6.1c-1.7-2.9-2-3-2.5-1c-0.3,1.3,0.3,4.5,1.5,7.2c2,4.6,1.9,5-1.1,8
                    c-2.6,2.6-3,4-2.3,8c0.9,5.5-0.2,7.1-6.1,9.2c-2.3,0.8-6.3,2.8-9,4.4c-5.3,3.2-18.6,5.6-22.1,3.9c-1.1-0.5-3.9-4.2-6.2-8.2
                    c-3.8-6.6-4.7-7.4-9.7-8.5c-5.4-1.2-17-6.6-25.7-12c-2.5-1.5-7.9-3.6-11.9-4.5c-6.2-1.4-9.2-3.2-18.3-10.9
                    c-6.7-5.7-11.1-10.3-11.3-12c-0.4-3.4,2.2-8.6,4.6-8.9c1-0.1,2.7-2,3.9-4.1c1.2-2.2,3.8-4.5,5.8-5.2c4.8-1.7,5.3-3.1,2.2-6.6
                    c-2.4-2.7-2.5-3.4-1.3-8.9c0.7-3.3,1.3-8.6,1.3-11.8c0-8.3,3.6-12.2,11-12.1l5.6,0.1l2.4-7.5c2.7-8.5,13.9-26.1,19.2-30.4
                    c5.3-4.3,19.6-5.3,25.9-1.8c4.2,2.3,4.8,2.3,8.4,0.3c2.1-1.2,5.9-2.5,8.4-2.9c2.5-0.4,5.5-1.7,6.7-3c1.1-1.3,3.3-2.9,4.8-3.5
                    c1.5-0.7,2.7-1.6,2.6-2.2c-0.1-0.5,1.1-2.6,2.6-4.7c2.4-3.3,3.3-3.7,8.3-3.6c4.4,0.1,6.7-0.6,10.7-3.3c4.1-2.7,6.3-3.4,11.4-3.4
                    c8.1,0,12.1,1.3,14.1,4.4C223.6,44,227,48.6,228,48.5c0.7-0.1,2.6-1.8,4.3-3.9c3.9-4.8,15.5-7.9,15.9-4.3c0.2,1.2-0.6,2.9-1.6,3.9
                    c-1.7,1.6-1.2,4.3,1.8,8.6c1.8,2.6,3.2,3.7,3.3,5.1c0.2,1.3,1.3,5.3,2.6,8.7c2.9,8.1,7.3,11.4,13.8,10.6c2.7-0.3,4.6-0.3,5.9,0.5
                    c-4.7-4.4-7.1-13.3-8.5-15.2c0,0-16.5-10-16.5-10c-1.4-9.2,25.9-12.8,6.5-22c-3.6-2.1-19.5,6.4-19.5,6.4c-2.2-2.1,0-5.7-2.1-7.8
                    c-0.7-1.4-2.9,0-5,0.7c-0.7,0-1.5,2.2-2.9,1.4c-1.4-2.1-0.7-5.7-3.6-7.8c-9.3-5.7-18.7,0.7-30.2-8.6c-7.9-5.7,2.8-11.3-10.1-12.8
                    c-20.1-3.6,2.9,12.1-16.5,15c-1.4,2.8-2.2,5-4.3,5c-7,1.6-17.2-20-25.2-21.6C135.8,0.3,135.5,0.2,135.2,0.3z M289.2,47.6
                    c-3.8,1.1,11.6,16.3,10.9,17.7c-0.6,1.2-1.6,1.9-2.8,2.4c-0.1,0.1-0.1,0.2-0.3,0.3c-0.1,0-0.1-0.1-0.2-0.1c-3.1,1.2-7.1,1.2-9.6,3.1
                    c-0.4,0.4-0.5,1.2-0.8,1.8c-1,2.4-1.3,5.6-3.6,6.7c-3,1.2-5.6,0.6-7.7-0.9c1,1.2,1.6,3,2,5.8c0.8,6.3-1.7,8.7-8.6,8.3
                    c-3.8-0.2-4.5,0.1-4.2,1.9c0.4,2.9-2.4,12.1-3.8,12.3c-1.5,0.2-0.1,8.5,1.5,9.2c0.8,0.4,1.6-0.6,1.8-2c0.4-2.8,2.5-4,2.8-1.5
                    c0.1,0.8,1.6,2.6,3.4,4c2.6,2.1,2.9,2.8,1.6,3.8c-1.7,1.4-0.3,5.1,1.8,4.8c0.7-0.1,1.6-1.2,1.8-2.4c0.3-1.2,1.1-3.2,1.9-4.3
                    c0.8-1.1,1.2-4.6,1.1-7.6c-0.3-5.5-0.2-5.6,1.7-2.4c1.1,1.8,2.6,3.1,3.5,3c0.8-0.1,2.7,0.6,4.1,1.6c2.4,1.6,2.5,1.6,2.3-0.3
                    c-0.1-1.1-1.8-2.7-3.7-3.6c-4-1.9-4.8-4.2-1.2-3.5c1.4,0.2,2.8-0.2,3.2-0.9c1.2-2.6,6.6-2.3,7.9,0.5c0.7,1.5,2.4,3.8,3.8,5.2
                    c2.6,2.5,2.6,2.5,1.3-2.4c-1.1-3.9-0.9-4.9,0.6-5.1c1.1-0.1,2.8,1.5,4,3.9c1.8,3.7,4.6,5.5,4.2,2.7c-0.1-0.6,1-1.5,2.3-2
                    c1.5-0.6,2.3-2,2.1-3.5c-0.2-1.4,0.2-2.6,0.9-2.7c0.7-0.1,1.5,1.4,1.7,3.2c0.7,4.9,2.6,6.7,5.6,5.3c2.3-1,2.6-0.7,3.1,3.3
                    c0.5,4,0.9,4.3,3.3,3.3c5.1-2.3,15.8-2.8,22.2-0.9c3.5,1,7.3,1.4,8.5,0.8c3.5-1.6,7.5-8.7,7.7-13.8c0.3-7,2.9-13.4,6.7-17
                    c0.1-0.1,0.7,1.6,0.3,0c-0.5,0.7-0.4,1.9-7.2,1.8c-1.1,0.1-1.7-4.8-1.9-5.7c-0.2-1.2-4.5-4.6-4.9-3.9c-0.4,2,0.9,3,2,4.1
                    c-0.3,0.6-1.3,1-2.8,0.9c-1.8-0.1-2.8,0.3-4.1,1.7c-0.7,0.8-1.3,1.2-1.8,1.4c-0.5,0.2-1,0.1-1.9-0.2c-1.6-0.6-3.4-1.8-5.2-3.3
                    c-1.7-1.6-3.4-3.4-4.4-5.2c-1.1-1.9-2.4-3.4-2.9-3.4c-0.6,0.1-2.4-1-4.1-2.3c-1.7-1.3-3.3-2.8-3.4-3.5c-0.2-0.8,1-1.9,3.4-3.1
                    c1.9-1,3.2-1.9,3.6-2.7c0.5-0.8,0.2-1.5-0.8-2.1c-0.8-0.5-1.3-0.9-1.4-1.5c0-0.1,0.1-0.2,0.1-0.3c-2.8,1.1-6.1-0.1-8.9-0.1
                    c-0.1,0-0.2,0.1-0.3,0.1c-2.9,0.4-4.5,1.1-5.3,2.2c-0.7,1-1.4,1.5-2,1.6c-0.6,0.1-1.1-0.4-1.5-1.3c-0.5-0.9-1-1.3-1.4-1.2
                    c-0.4,0.1-0.6,0.6-0.7,1.6c-0.1,1.2-0.6,1.7-1.9,1.7c-1.1,0-1.9-0.8-2.3-1.8c-0.4-1-0.4-2.3,0.3-3.1c0.7-0.8,0.7-1.3,0.5-1.7
                    c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4-0.2-0.9-0.3-2.1-0.2c-1.1,0.2-1.8,0.2-2.4-0.2c-0.7-0.3-1.3-1-2.3-2.1c-1-1.1-1.7-1.8-2.5-2.2
                    c-0.8-0.4-1.6-0.5-3.1-0.5c-1.8,0-4.6-0.6-6-1.4c-1.5-0.8-3.3-1.4-4.2-1.3C290.3,48.3,289.8,47.9,289.2,47.6z"/>
                <path id="prot" d="M399.5,128.1c-1,0.6-2,1.6-3,2.7c-6.4,4.3-12,9.3-15.1,14.8c0,0.7-5.7,22.8-5.7,22.8
                    c-2.2,2.8-7.2,1.4-9.3,4.3c-1.4,2.1,0.7,5.7-0.7,7.8c-20.8,25.3-43.5-6-54.1,29c-0.5,0.5-1,1-1.4,1.5c-0.3-1.6-3.6-4.1-4-5.1
                    c-1.4-2.2-2.2-5.6-2.5-7.8c-0.4-3.4-2-1.5-10.2-7.9c-4.1-3.2-5.4-5-5.3-7.3c0.2-3.3-0.9-3.6-4.4-1.2c-3.4,2.4-7.1,0.4-8.8-4.6
                    c-1.3-4-1.7-4.2-6.3-3.6c-2.8,0.4-5.4,1.5-6.2,2.7c-2.7,4.2-14.7,14.9-17,15.2c-1.3,0.2-4.6-1.4-7.3-3.4c-3.3-2.4-7.6-4-12.7-4.7
                    c-8.5-1.2-28.9-7.8-37.2-12.1c-2.9-1.5-6.2-4.3-7.3-6.1c-1.7-2.9-2-3-2.5-1c-0.3,1.3,0.3,4.5,1.5,7.2c2,4.6,1.9,5-1.1,8
                    c-2.6,2.6-3,4-2.3,8c0.9,5.5-0.2,7.1-6.1,9.2c-2.3,0.8-6.3,2.8-9,4.4c-5.3,3.2-18.6,5.6-22.1,3.9c-1.1-0.5-3.9-4.2-6.2-8.2
                    c-3.8-6.6-4.7-7.4-9.7-8.5c-5.4-1.2-17-6.6-25.7-12c-2.5-1.5-7.9-3.6-11.9-4.5c-6.2-1.4-9.2-3.2-18.3-10.9
                    c-6.7-5.7-11.1-10.3-11.3-12c-0.4-3.4,2.2-8.6,4.6-8.9c1-0.1,2.7-2,3.9-4.1c1.2-2.2,3.8-4.5,5.8-5.2c4.8-1.7,5.3-3.1,2.2-6.6
                    c-2.4-2.7-2.5-3.4-1.3-8.9c0.7-3.3,1.3-8.6,1.3-11.8c0-8.3,3.6-12.2,11-12.1l5.6,0.1l2.4-7.5c2.7-8.5,13.9-26.1,19.2-30.4
                    c5.3-4.3,19.6-5.3,25.9-1.8c4.2,2.3,4.8,2.3,8.4,0.3c2.1-1.2,5.9-2.5,8.4-2.9c2.5-0.4,5.5-1.7,6.7-3c1.1-1.3,3.3-2.9,4.8-3.5
                    c1.5-0.7,2.7-1.6,2.6-2.2c-0.1-0.5,1.1-2.6,2.6-4.7c2.4-3.3,3.3-3.7,8.3-3.6c4.4,0.1,6.7-0.6,10.7-3.3c4.1-2.7,6.3-3.4,11.4-3.4
                    c8.1,0,12.1,1.3,14.1,4.4c9.2,14.6,12.6,19.2,13.6,19.1c0.7-0.1,2.6-1.8,4.3-3.9c3.9-4.8,15.5-7.9,15.9-4.3c0.2,1.2-0.6,2.9-1.6,3.9
                    c-1.7,1.6-1.2,4.3,1.8,8.6c1.8,2.6,3.2,3.7,3.3,5.1c0.2,1.3,1.3,5.3,2.6,8.7c2.9,8.1,7.3,11.4,13.8,10.6c6.2-0.8,8.1,0.7,9,7.2
                    c0.8,6.3-1.7,8.7-8.6,8.3c-3.8-0.2-4.5,0.1-4.2,1.9c0.4,2.9-2.4,12.1-3.8,12.3c-1.5,0.2-0.1,8.5,1.5,9.2c0.8,0.4,1.6-0.6,1.8-2
                    c0.4-2.8,2.5-4,2.8-1.5c0.1,0.8,1.6,2.6,3.4,4c2.6,2.1,2.9,2.8,1.6,3.8c-1.7,1.4-0.3,5.1,1.8,4.8c0.7-0.1,1.6-1.2,1.8-2.4
                    c0.3-1.2,1.1-3.2,1.9-4.3c0.8-1.1,1.2-4.6,1.1-7.6c-0.3-5.5-0.2-5.6,1.7-2.4c1.1,1.8,2.6,3.1,3.5,3c0.8-0.1,2.7,0.6,4.1,1.6
                    c2.4,1.6,2.5,1.6,2.3-0.3c-0.1-1.1-1.8-2.7-3.7-3.6c-4-1.9-4.8-4.2-1.2-3.5c1.4,0.2,2.8-0.2,3.2-0.9c1.2-2.6,6.6-2.3,7.9,0.5
                    c0.7,1.5,2.4,3.8,3.8,5.2c2.6,2.5,2.6,2.5,1.3-2.4c-1.1-3.9-0.9-4.9,0.6-5.1c1.1-0.1,2.8,1.5,4,3.9c1.8,3.7,4.6,5.5,4.2,2.7
                    c-0.1-0.6,1-1.5,2.3-2c1.5-0.6,2.3-2,2.1-3.5c-0.2-1.4,0.2-2.6,0.9-2.7c0.7-0.1,1.5,1.4,1.7,3.2c0.7,4.9,2.6,6.7,5.6,5.3
                    c2.3-1,2.6-0.7,3.1,3.3c0.5,4,0.9,4.3,3.3,3.3c5.1-2.3,15.8-2.8,22.2-0.9c3.5,1,7.3,1.4,8.5,0.8c3.5-1.6,7.5-8.7,7.7-13.8
                    c0.3-7,1.7-11.7,4.1-13.4c2.2-1.5,2.3-4.7,3.3-3.9l0.6,0.3c1.6,0.6,3.2,1.2,4,1.6c0.7,0.4,1.1,0.6,1.4,0.5c0.4-0.1,0.6-0.4,1.1-1
                    c0.8-1.1,2.2-1.8,3.6-2c1.4-0.2,2.7,0,3.4,0.8c0.8,1,1.4,1.6,2.1,1.9c0.7,0.3,1.6,0.1,2.8-0.2l1.5-0.3c0.4,0.9,0.8,1.9,1.4,3.4
                    l0.9,4.7c0.8,3.9,1.2,6,1.8,7.4c0.6,1.4,1.2,2.3,2.5,3.6c1.4,1.5,2.4,2.3,3.3,2.5c0.9,0.2,1.7-0.2,2.7-1c0.5-0.4,0.8-0.5,1.3-0.3
                    s0.9,0.6,1.5,1.4c0.9,1.1,1.7,2.5,1.8,3c0.1,0.5,1.6,2.3,3.1,4.1c0.2,1.2,0.6,2.4,1.4,3.3c-2.1,1-4.5,2.6-6.8,3.7
                    c-11,4.7-10.9,4.8-10.9,5"/>
                <path id="slov" d="M620.6,121.6c1.1,0.4,0.9-0.6-5.7-2.9c-2.9-1.4-2.2-6.4-4.3-8.5c-7-5.3-22.5-7.1-34.4-6.4
                    c-4,0.2-7.5,0.7-10.2,1.4c-2.2,0-2.2,4.3-4.3,5c-2.9,1.4-7.2-8.5-9.3,1.4c0,1.4,4.3,1.4,3.6,2.9c-2.2,3.6-5.8,7.8-10.1,7.8
                    c-5.7,0-9.3-7.8-15.1-8.5c-2.9-0.7-4.3,3.6-7.2,4.3c-2.9,0-5.7-2.8-8.6-2.1c-10.1,2.1-18.7,24.2-19.4,24.9c-2.9,1.4-5.7-4.3-8.6-3.6
                    c-3.6,0.7-10.1,6.4-10.1,2.9c0-1.4,4.3-14.9-0.7-17.1c-2.9-1.4-6.5,2.1-10.1,1.4c-1.4-0.7,1.4-3.6,0.7-5c-0.7-0.7-3.6,1.4-4.3,0.7
                    c-3.6-3.6-3.6-9.9-7.9-12.8c-7.2-5-16.5,31.3-28,22c-2.2-2.1,1.4-7.1-0.7-9.2c-2.2-2.1-7.2,1.4-8.6-0.7
                    c-12.2,5.7-29.5,14.9-35.9,26.3c0,0.7-5.7,22.8-5.7,22.8c-2.2,2.8-7.2,1.4-9.3,4.3c-1.4,2.1,0.7,5.7-0.7,7.8
                    c-21.6,26.3-45.3-8.6-55.3,33.4c0.7,9.2-10.1,19.2-5.8,26.3c3.9,6.4,8.2,12.3,12.8,18.1c3,3.7,6,7.4,9.4,11.1
                    c1.4-0.7,3.6-1.4,6.5-0.7c12.9,1.4,23,19.9,36.7,22.8c8.3,1.4,65.6-8.6,66.7-13.7c-0.7-1.1-1.9-2.4-3-4c-1.2-1.6-2.4-3.4-3.3-5.3
                    c-0.4-0.9-0.7-1.9-0.9-2.8c-0.2-0.9-0.2-1.9-0.1-2.8c0,0,0-0.1,0-0.1c0.2-2,1.2-3.9,3.8-5.4c10.1-7.1,32.3-2.1,40.2-10
                    c0.7-0.7,1-1.5,1.1-2.5c0-1,0-2-0.1-3c-0.1-1.2-0.3-2.4-0.3-3.6c0-0.1,0.1-0.3,0.1-0.4c0-1.2,0.1-2.3,0.7-3.3
                    c5.7-10,18.7,5.7,24.4,5c6.6-1,8.5-2.4,8.9-4c0-0.4,0.1-0.8,0-1.3c-0.1-0.6-0.3-1.3-0.3-2c0-0.2,0-0.4,0-0.6c-0.1-0.5,0-1.1,0-1.6
                    c0.2-1.7,1.1-3.5,4.4-5.5c2.9-1.4,7.2,1.4,10.1,0.7c7.9-3.6,5-22.7,9.3-28.4c10.8-13.5,26.6-0.7,38.8-2.9
                    c7.2-0.7,11.5-10.7,18.7-10.7c1.3,0.1,2.4,0.2,3.4,0.3l-0.1-5.5c-0.2,0-0.3,0-0.5,0c2.2-0.1,4.5-0.2,5.9-0.3c1.5,0,2.5-0.3,3.2-0.7
                    c0.4-0.2,0.7-0.5,0.9-0.9c0.2-0.4,0.4-0.8,0.6-1.4c0.3-1.1,0.7-1.8,1.3-2.2c0.3-0.2,0.6-0.3,1-0.3c0.4,0,0.8,0,1.3,0.1
                    c2.4,0.4,4.6,0.6,6.4,0.6s3.4-0.3,4.5-0.8c0.6-0.2,1.1-0.6,1.5-0.9c0.4-0.4,0.8-0.8,1-1.2s0.4-1,0.5-1.6c0.1-0.6,0.1-1.2,0-1.9
                    c-0.1-0.9-0.4-1.9-0.8-2.7c-0.4-0.8-0.8-1.4-1.2-1.8c-0.3-0.2-0.5-0.5-0.6-0.9s-0.1-0.9-0.1-1.5c0.1-1.2,0.4-2.9,1.1-5.3
                    c0.5-1.8,0.9-3.7,1.1-5.4c0.2-1.6,0.1-3-0.2-3.7c-0.3-0.7-0.4-1.7-0.4-2.8c0-1.1,0.3-2.2,0.6-3.1c0.4-1,0.7-2.4,1-4s0.5-3.4,0.6-5.2
                    s0.2-3.5,0.2-5C621.4,123.8,620.9,122.4,620.6,121.6z"/>
                <path id="ukr" d="M799.5,201.4c0.4-1,0.5-1.6,0.2-2.2c-0.3-0.6-1-1.2-2.4-2.3c-1.6-1.3-3.3-2.3-3.7-2.2
                    c-0.4,0.1-1.9-0.5-3.2-1.4c-1-0.6-1.7-1.1-2-1.7c-0.4-0.6-0.4-1.2-0.4-2.1c0-1.2,0.4-3.1,1-4.2c0.7-1.3,1.1-2.3,0.7-3.2
                    c-0.4-0.9-1.4-1.8-3.1-3.1c-1.7-1.2-3.2-2.7-3.3-3.2c-0.1-0.5-1.4-1.2-2.8-1.6c-1.6-0.4-2.8-1.4-3.1-2.4c-0.3-1-1.2-2.1-1.8-2.5
                    c-0.5-0.3-0.8-0.3-1-0.2c-0.2,0.2-0.4,0.6-0.6,1.4c-0.3,1.3-1.5,2.1-3.1,2.4c-1.6,0.3-3.7,0.1-5.5-0.8c-1.3-0.6-2-1-2.6-1.8
                    c-0.5-0.8-0.9-1.8-1.3-3.6c-1.6-6.1-2.9-9.4-3.6-8.7c-0.3,0.3-0.5,1.3-0.3,2.2c0.1,0.6,0.1,1-0.1,1.4c-0.3,0.3-0.8,0.5-1.5,0.7
                    c-1.1,0.2-1.9,0.7-2.4,1.4s-0.7,1.8-0.6,3.1c0.1,1.2-0.3,1.9-1.1,2.1c-0.8,0.2-1.9,0-3.2-0.8c-0.9-0.5-1.5-1.1-2-1.8
                    c-0.5-0.7-0.8-1.6-1.1-3c-0.4-1.7-0.6-2.5-1.1-3.1c-0.5-0.6-1.4-0.9-3-1.4c-1.7-0.5-2.7-0.9-3.6-1.7c-0.9-0.7-1.6-1.8-2.6-3.6
                    c-0.5-0.9-0.9-1.4-1.5-1.6c-0.5-0.2-1.2-0.2-2.2,0c-1.3,0.3-2,0.4-3.1-0.3s-2.7-1.9-5.6-4.5c-0.8-0.7-1.4-1-2.4-1.1
                    c-1-0.1-2.5,0.2-4.9,0.7c-2.3,0.5-3.7,0.7-4.7,0.7c-1.1,0-1.7-0.4-2.5-0.9c-0.7-0.5-1.2-0.8-1.7-0.8c-0.5,0-0.8,0.2-1.3,0.7
                    c-0.7,0.6-2.7,1.4-4.4,1.8c-1.4,0.3-2.3,0.4-3.1,0.2c-0.8-0.2-1.5-0.8-2.5-1.9c-1.3-1.3-2.5-2.6-2.6-2.9c-0.1-0.3-1.1-1.4-2.3-2.4
                    l-2.2-1.8l-0.9,2c-0.5,1.1-1.6,2.2-2.5,2.4c-0.8,0.2-1.4,0.2-2.1-0.3c-0.7-0.4-1.7-1.3-3.4-3c-1.1-1-2.6-1.9-3.5-1.8
                    c-0.6,0-1.1-0.3-1.6-0.8c-0.5-0.5-0.9-1.2-1.1-2c-0.5-1.6-0.4-3.4,0.6-4.3c0.7-0.7,1-1.5,0.7-1.9c-0.4-0.5-1.9-0.4-1.4,0.4
                    c0.3,0.5-2.5-0.6-5.8-2.6c-3.2-2-9.3,0.3-10.4,0.5c-0.5,0.1-6.9-2.8-7.4-1.2c-0.5-0.1-2.3-0.7-2.9-0.5c-3.2-0.4-3.9,0.1-7.1-0.4
                    c-3.2-0.5-6.5-1.2-9.7-2.3c-2.8-0.8-5.6-1.2-8.3-1.8c0.2,0.8,0.4,2.1,0.4,3.6c0,1.5-0.1,3.3-0.2,5s-0.4,3.6-0.6,5.2s-0.6,3-1,4
                    c-0.4,0.9-0.6,2-0.6,3.1c0,1.1,0.1,2.1,0.4,2.8c0.3,0.7,0.4,2.1,0.2,3.7c-0.2,1.6-0.5,3.5-1.1,5.4c-0.7,2.3-1.1,4-1.1,5.3
                    c0,0.6,0,1.1,0.1,1.5s0.3,0.7,0.6,0.9c0.4,0.3,0.9,0.9,1.2,1.8c0.4,0.8,0.6,1.8,0.8,2.7c0.1,0.7,0.1,1.3,0,1.9
                    c-0.1,0.6-0.3,1.1-0.5,1.6s-0.6,0.9-1,1.2c-0.4,0.4-0.9,0.7-1.5,0.9c-1.2,0.5-2.7,0.8-4.5,0.8s-4-0.1-6.4-0.6
                    c-0.5-0.1-0.9-0.1-1.3-0.1c-0.4,0-0.7,0.2-1,0.3c-0.6,0.4-1,1.1-1.3,2.2c-0.2,0.6-0.4,1-0.6,1.4c-0.2,0.4-0.5,0.7-0.9,0.9
                    c-0.7,0.5-1.7,0.7-3.2,0.7c-1.3,0-3.3,0.1-5.4,0.2l0.1,5.5c13.2,2.2,4.7,14.2,17.4,18.2c2.2,1.4,5-2.1,7.9-2.9
                    c5.7-1.4,16.5-1.4,16.5-7.1c11.7,1.4,7.9,1.4,9.6,3.8c0.3,0.6,0.9,1,1.1,1.7c0.2,0,0.5-0.1,0.5,0.2c-0.1,0.8,3,10,6.8,6.9
                    c2-0.1,4.5-2.4,6.4-1.2c2,1.3,3.2,3.6,4.4,6c0.3,1,3,7.9,4.9,5.6c0.2-0.2,0.3,0.7,0.4,1.1c2.6,0.3,4.8-2.7,7.5-3.4
                    c2.1,0,4.2,1.3,5.6,2l1.1,6.9c4.7-0.1,0.1,5.3,3.8,4.2c2.8,4.7,6.4-1.8,6.5-1c2-2.2,4.2-6.2,6.7-12.8c0.7-1.4,0.8-3.6,2.2-3.6
                    c1,0,5.6,1.9,10.1,3.9c0.4,0.1,0.6,0,1.1,0.2c1,0.3,1.5,0.8,2.2,1.2c3.9,1.6,8,3.4,8.9,3.4c1.4,0,2.1-3.6,3.6-4.3
                    c9.3-3.6,33.1,5.7,44.6,2.9c6.5-2.1,10.8-7.9,17.3-8.6c2.9-0.2,5.5,0.7,8,2c0.1,0,0.3-0.1,0.3-0.1c0.8,0,1.2-0.1,1.4-0.4
                    c0.2-0.4,0.2-1-0.1-2.2C799,204.7,799.1,202.6,799.5,201.4z"/>
                </svg>           
</div>
<div id="narods"></div>
</div>

<div id="tline"></div>

<div id="info">
    <div id="narat_in" class="narat">Vyberte rok z grafu.</div>
    <div id="narat_out" class="narat"></div>
</div>
</wide>

Naše území je totiž migrací formované dlouhodobě. Jestli znáte film Doba ledová, kde zvířátka migrují koridorem mezi pevninským a horským ledovcem, tak ten koridor, to jsme my.  Už tenkrát přes nás všichni migrovali a od té doby je tohle území  s migrací spojené, ať chceme, nebo ne. Naše mapa tak aspoň na krátkém úseku naší moderní historie  ukazuje, že – troufnu si říct – není lidské činnosti, která by naši zemi formovala víc, než je právě pohyb lidí přes hranice.

**Myslíte si tedy, že nedávný příchod většího počtu migrantů do Evropy není pro Česko tak podstatný, jak to vypadá z jeho prezentace v médiích nebo v politice?**  
Je podstatný v tom, co s námi dělá v našich hlavách, jak najednou vnímáme sami sebe v kontextu světa: s pocity ztráty bezpečí a ztráty identity. Každý významnější pohyb lidí v posledních sto letech byl u nás spojený s nějakou křivdou, bolestí, nedobrovolností, se vzdorem vůči něčemu, s identitou. Myslím, že do našich reakcí na takzvanou migrační krizi se propisují pozapomenuté zkušenosti z kolektivní paměti – především strach z pohybu. Momentálně tvoří většinu naší populace etničtí Češi. Ale nebylo tomu tak vždy.

<right>
    <p><img src="https://www.irozhlas.cz/sites/default/files/styles/zpravy_otvirak_velky/public/uploader/dsc4492-1626x1080_180716-183425_haf.jpg?itok=3m5MtWJK" style="width: 100%;"></p>
    <p>
	<a href="https://www.irozhlas.cz/zpravy-domov/prijeti-450-migrantu-stredozemni-more-migrace-andrej-babis-italie-prijimani_1807181200_haf">V centrech pro migranty je 620 volných míst. Politici nikoho přijmout nechtějí</a>
	</p>
</right>

**Jaké největší migrační pohyby mapa ukazuje?**  
Vysídlení německy mluvících obyvatel po roce 1945 je naprosto bezprecedentní. Musíme si uvědomit, že neodešli jen Němci, ale i Židé mluvící německy, kteří se často vrátili z koncentračních táborů a vzápětí byli „odsunuti”. Zároveň došlo k rozsáhlé dosídlovací akci na území po odsunutých Němcích. Během ní přišlo až 1,7 milionu lidí z jiných koutů Československa i ze zahraničí. Například přišlo okolo 220 000 českých a slovenských krajanů, kteří opustili zemi ještě v devatenáctém století za Rakouska-Uherska. Navíc tyto dva pohyby neprobíhaly jeden po druhém, ale zároveň. Takže se běžně stávalo, že v jedné domácnosti ještě po několik měsíců žili Němci, kteří měli být odsunuti, společně s novými uživateli jejich už bývalého majetku.

**Když všechna dostupná čísla zakreslíme do časové osy, ukážou se i nějaké méně známé a přitom srovnatelně mohutné pohyby lidí?**  
Velmi zásadní je uvědomit si obrovské pohyby českých a slovenských občanů ještě před první světovou válkou a těsně po vzniku Československé republiky. Na jednu stranu přišla spousta krajanů doslova z celé planety - od Argentiny po Kamčatku. Hodně jich přicházelo ze zemědělských oblastí Rakouska-Uherska jako je rumunské pohraničí nebo Moldavsko. Ale i z carského Ruska, z oblasti dnešního Kazachstánu. Hodně z nich se vracelo, aby budovali novou vlast a také proto, že Československo, a hlavně české země slibovaly lepší životní podmínky.

## Německý živel

**Na druhou stranu je z grafu vidět, že po celou dobu trvání první republiky z českých zemí víc lidí odcházelo, než přicházelo.**  
Ano, ve stejné době spousta lidí odcházela, hlavně do Spojených států amerických. A nejspíš by odcházeli dál, kdyby USA nezavedly daleko přísnější imigrační pravidla. Pak začala přitvrzovat i Argentina, Kanada… Postupně se začaly zavádět moderní nástroje pro regulaci imigrace: kvóty, víza, pasy.

**Tedy nástroje pro výběr lidí, kteří mohou přijít. Bránila se nějak Československá republika odchodu svých obyvatel do zámoří?**  
Už i Rakousko-Uhersko si regulovalo odchod svých vlastních lidí. Možnost odejít nebyla samozřejmá. Nestačilo se sebrat, prodat chalupu a koupit lodní lístek. Když jste byl pro tu ekonomiku důležitý, tak jste jen tak odcestovat nemohl. Každý stát si už tehdy hlídal své klíčové lidi.

Totéž se dělo při vystěhování německy hovořícího obyvatelstva po druhé světové válce. Odsunu se nevyhnuli ani přívrženci sociální demokracie nebo komunistické strany, antifašističtí Němci i Rakušané, kteří byli za protektorátu perzekvováni. Podle oficiální rétoriky šlo tehdy o to, „odsunout německý živel”, prezident Beneš doslova říkal, že „je nutno vylikvidovat německý živel”. Nijak se to neliší od rétoriky, kterou před tím v opačném gardu používalo nacistické Německo. 

Poválečné Československo tedy používalo takto silnou rétoriku, ale zároveň nedovolilo odchod Němců nepostradatelných pro národní hospodářství. Zejména sklářský průmysl by bez německých mistrů pravděpodobně zkolaboval. Nakonec jich tady v zájmu národního hospodářství zůstalo 160 tisíc. Spousta z nich byla ochotná za možnost zůstat přijmout i horší postavení. Přišli o nemovitosti, o občanství… V 50. letech ho pak získali zpět, také možnost stát se členy odborů. Režim už se na ně díval jako na ostatní zaměstnance.

**Mapa také ukazuje, že – s výjimkou emigračních vln po roce 1948 a 1968 – do českých přicházelo zemí víc imigrantů, než kolik z nich odcházelo migrantů. Není to chyba v datech?**  
V datech od roku 1950 jsou zahrnuty i pohyby mezi Slovenskem a českými zeměmi. Ten zdánlivě silný a trvalý přísun nových obyvatel je způsoben z největší části právě Slováky, kteří se stěhovali do západní části Československa.

Další faktor je, že v ročenkách ČSÚ, odkud jsme v tomto období čerpali oficiální data o migraci, jsou jen regulérní pohyby. Ale těch neregulérních bylo daleko víc. Kolik lidí nelegálně překročilo československou státní hranici a odešlo do zahraničí, o tom máme pořád k dispozici jenom odhady.

**Jak velkou roli hrály za vlády komunistů příchody zahraničních dělníků a studentů ze spřátelených zemí?**  
V roce 1989 bylo na území Československa kolem 46 tisíc zahraničních pracovníků ze spřátelených zemí. Jejich počty tedy byly poměrně vysoké, ale statistiky je nezachytily jako usídlené imigranty – obvykle šlo právě o studenty nebo smluvní dělníky přicházející na předem stanovenou dobu několika málo let, nejčastěji z Vietnamu, Angoly, Mongolska a Kuby Přišlo k nám ovšem ze stejných důvodů také mnoho Poláků, Maďarů nebo i Severokorejců.

Detailní data bohužel zatím nemáme k dispozici. Každá skupina se evidovala zvlášť a archivy zatím nikdo nezpracoval, ale i tato hrubá čísla krásně ukazují, jak iluzorní je představa, že za vlády komunistů u nás žádní cizinci nebyli. Není to pravda. Cizinci přicházeli, ale jejich imigrace byla přísně kontrolovaná, byla jasně nastavená pravidla toho, jak se smí pohybovat na československém území. Bydleli v ubytovnách pro zahraniční pracovníky a až do uvolnění pravidel v půlce osmdesátých let například nesměli navazovat partnerské vztahy, z počátku dokonce ani mezi sebou.

**Navazování partnerských vztahů přece nemohli zakázat ani komunisti.**  
Uplatňovaly se velmi kapitalistické, až vykořisťovatelské metody vůči námezdní pracovní síle, rámované do internacionalizace spolupráce. Například otěhotnění bylo tehdy považováno za porušení pracovněprávního vztahu a porušení podmínek internacionální spolupráce. Kdo z cizinců čekal dítě, mohl si vybrat: buď interrupce, nebo návrat.

Zajímavé je, že když v osmdesátých letech začala vietnamská perestrojka, poměry se hodně uvolnily a promítlo se to i do československých poměrů: Vietnamci začali vyjednávat socialistickou rétorikou zlepšení svého postavení a skutečně ho dosáhli. Takže se k nim začalo přistupovat více jako k soudruhům a k soudružkám a méně jako k námezdní síle.

<left>
    <p><img src="https://www.irozhlas.cz/sites/default/files/styles/zpravy_rubrikovy_nahled/public/images/03681407.jpeg?itok=3ljgZCC4" style="width: 100%;"></p>
    <p>
	<a href="https://extra.rozhlas.cz/yusra-mardini#58704">Yusra plave o život: cesta syrské plavkyně z rozbombardovaného Damašku až na olympiádu do Ria</a>
	</p>
</left>

**Jak je to s migrací na našem území po roce 1989? Máme k dispozici kvalitnější data?**  
O imigraci máme docela přesné záznamy, údaje o odchodu Čechů po roce 1989 jsou naopak snad nejbídnější z celé té dlouhé časové řady.

**Proč?**  
Chybí přesná evidence. Kdo odchází z České republiky na víc než šest měsíců, měl by se odhlásit z registru obyvatel – ale málokoho, kdo jde pracovat nebo studovat do zahraničí, to napadne. Lidé to většinou dělají, až když se chtějí například odhlásit od zdravotního pojištění.

Protože tedy nemáme žádný registr Čechů žijících v zahraničí, data se rekonstruují obráceně: ze statistik cílových států se vytahuje, kolik Čechů na jejich území podle tamějších úřadů žije.

Takže červená čísla, která v mapě ukazují vystěhovalectví včetně občanů České republiky, jsou po roce 1989 strašně podhodnocená. Češi se prostě neodregistrují, pracují třeba pár let v cizině, pak se vrátí, ale naše úřady o tom nevědí.

**Kolika lidí se to týká?**  
Odhadem jde od roku 1989 o čtvrt milionu Čechů, kteří mají české státní občanství, to znamená, že se buď narodili v ČR, nebo Čechům v cizině a jiné státy, z jejichž statistik se tento údaj rekonstruuje, je mají ve své evidenci.

A je zajímavé, že Česká republika nevnímá svoji zahraniční diasporu jako něco, o co  se může opřít. Když se podíváme na rok 1918, česká diaspora byla klíčový hybatel. Dnes téměř žádné spojení s krajany nemáme. Skoro to vypadá, jako by se Česká republika od svých emigrantů snažila úplně odstřihnout. Tedy ovšem s výjimkou zájmu o krajanské komunity, které se formovaly ještě před více než 100 lety.

**V jiných zemích to tak není?**  
Například Poláci nebo i již zmiňovaní Vietnamci své diaspory nepoužívají jen k budování diplomatických vazeb, ale také k pěstování ekonomických vazeb. Státy spojené diasporickým mostem mezi sebou mívají také čilé obchodní vztahy. Česká republika toho skoro vůbec nevyužívá.

Velmi dlouhou dobu, až do roku 2014, například nemohli Češi v zahraničí – až na pár velmi taxativně daných výjimek – mít dvojí občanství. V momentě, kdy přijali cizí státní občanství, pozbyli české.  Debatu ovládala představa, že člověk nemůže být loajální k více než jednomu státu: nemůžeme mít v pohraničí Němce, protože se nemůžeme spolehnout, že budou loajální vůči Československu…Tenhle přístup – buď pořádný Čech, nebo si v té cizině zůstaň a už s námi neměj nic společného – ale není pro Českou republiku zrovna výhodný.

**Platí pořád, že po všech historických přesunech patří Česká republika národnostně k nejvíce homogenním státům?**  
Teď se začíná redefinovat, kdo je vlastně Čech. Pět procent naší populace nejsou občané České republiky. A každým rokem roste počet cizinců, kteří státní občanství získávají, nejvíce mezi Vietnamci. My ale nejsme schopní rekonstruovat, kolik lidí v ČR není původem z České republiky. V momentě, kdy získají státní občanství, se už v datech neobjeví jako někdo, kdo má imigrační background.

**Podílela jste se i na publikaci Dvacet let české imigrační politiky: Liberální, restriktivní, nebo ještě jiná. Jaká je tedy z vašeho pohledu současná česká imigrační politika?**  
Musíme oddělit azylovou politiku od aktuální imigrační politiky. Azylová  politika je kapitola sama pro sebe, v drtivé většině není formována politickými rozhodnutími v Česku. Propisují se do ní mezinárodní úmluvy, nařízení a směrnice EU. Ten zlomek, o kterém rozhoduje česká politika, je minimální. 

Pak tu máme imigrační politiku, ta má dvě velké složky: jedna je pohyb obyvatel v rámci EU, který se také řídí unijním právem, které Česká republiky spoluutváří, ale přímo netvoří. Imigrace ze zemí mimo unii se zase dělí: Na ty, kdo tady už mají trvalý pobyt nebo jsou rodinnými příslušníky těch, kdo mají trvalý pobyt a zbytek. První skupina opět spadá pod pravidla EU. Zbývá menší část imigrantů, jsou to studenti, lidé s dlouhodobým pobytem za účelem zaměstnání a podnikání a velmi omezeně slučování rodin a částečně diplomatické mise.

A jenom tuhle velmi malou část přímo ovlivňuje česká politika. A její hlavní tendence je silný tlak, aby se předcházelo udělení trvalého pobytu.

**Kde ten tlak vzniká?**  
Vychází z potřeb pracovního trhu. Imigrační politika je u nás nastavovaná tak, aby flexibilně reagovala na potřeby pracovního trhu. Ale není tak flexibilní, jak by si představovali zaměstnavatelé.

Ministerstvo vnitra už z podstaty resortu vychází při nastavování imigrační politiky z bezpečnostní perspektivy. Proto nastavuje obrovské množství pravidel, která mají předcházet nějakému riziku.

Ale když se rozběhne ekonomika, v ten moment do toho vstoupí ministerstvo průmyslu a obchodu a začne tlačit na to, aby se začaly dělat výjimky z výjimek: režim Ukrajina, režim Filipíny…  Ano, můžete ve zkrácené lhůtě získat pracovní povolení nebo zaměstnaneckou kartu, ale ta se pak třeba už nedá prodloužit. Tím pádem imigrant nikdy nedosáhne na povinných pět let pro získání trvalého pobytu a zůstane v kategorii cizinců, kteří jsou „snadno odstěhovatelní“. 

Ve skutečnosti to tak ale nefunguje. Když někomu seberete pobyt, ještě to neznamená, že se odstěhuje: Spíš spadne do ilegality.

**Takže je naše imigrační politika příliš restriktivní?**  
Byla liberální, teď je restriktivnější. V devadesátých letech bylo snadnější přijít, získat pobyt, ale nebylo možné se usadit. Neexistoval institut trvalého pobytu. Kdo dnes splní všechny podmínky – nesmí mít například dluhy vůči českému státu – může trvalého pobytu dosáhnout. To dává příchozím obrovskou jistotu, kterou v devadesátých letech neměli, a to je velký posun.

Migrační politika se začíná měnit také v tom, že víc tlačí i na soukromé subjekty, aby přejímaly odpovědnost za to, když sem přivezou hodně pracovníků. Například je vyvíjen tlak, aby zaměstnanci byli kmenoví, nikoliv agenturní, a tím měli nějakou pracovněprávní ochranu. Nemůže se stát, že je ze dne na den vyhodí z agentury, stanou se bezprizornými a „státe, starej se“.

<right>
    <p><img src="https://www.irozhlas.cz/sites/default/files/styles/zpravy_rubrikovy_nahled/public/uploader/babis_2_180918-173212_mda.jpg?itok=Q3s0vkm9" style="width: 100%;"></p>
    <p>
	<a href="https://www.irozhlas.cz/zpravy-domov/babis-sirotci-sojdrova-prijeti-sirotku-syrie_1809202032_dbr">Udělali ze mě zrůdu. Pochybuji, že ty děti existují‚ řekl Babiš o návrhu Šojdrové. Podle něj je ,pomatená‘</a>
	</p>
</right>

Problém je v tom, že se český stát na migraci dívá velmi pragmaticky a předpokládá, že i samotní migranti se na ni dívají pragmaticky. Že si spočítají, že jedna a jedna jsou dvě – a když je náhodou hůř, jedna minus jedna je nula, tak to radši odejdu. Jenže takhle migrace skoro nikdy nefunguje. Z minulosti vidíme,  že když přišla krize po roce 2008, migranti neodešli, ani když jedna minus jedna byla nula. Zůstali,  propadli většinou do nelegality a pak s tím byly problémy.

Průšvih je, že stát vůbec nepočítá s tím, že člověk je lidská bytost, která se tady třeba zamiluje. Nedejbože do Čecha. Mají spolu dítě. A pak trvá tři nebo čtyři roky, než se taková rodina ustálí, protože musí neustále tančit mezi úředníky, přitom neví, jestli tady táta nakonec zůstane, nebo nezůstane, nemůže úplně pracovat…

**Napsala jste také vědeckou práci na téma mýty o mezinárodní migraci. Jaké jsou ty nejrozšířenější?**  
Jeden z největších mýtů, které se pořád drží, je, že Evropu zaplaví horda chudých nevzdělanců. My ale máme dvě stě let detailně zmapovaných obřích migračních pohybů a všechny ukazují stejný vzorec: ti nejchudší nikdy nemigrují, protože na to jednoduše nemají. Migrace je strašně náročná na finanční zdroje, na psychiku, na sociální kapitál. Potřebujete nemalé kompetence na to, abyste odchod ze země zvládli. 

I když ti nejchudší utíkají před bezprostředním ohrožením života, odcházejí jen do nejbližší možné bezpečné destinace. Představa, že nás zavalí nejchudší z nejchudších, je opravdu jenom iluze. Nejčastěji migruje střední třída. Dostat se třeba z Vietnamu do Česka stojí dvanáct až čtrnáct tisíc dolarů. Migrant na to musí mít, jinak by to splácel celý život v zemi s průměrnou mzdou mezi třemi a čtyřmi tisíci korunami měsíčně.

Druhý mýtus je, že migranti migrují proto, aby někoho přesvědčili o své víře. Jenže když migrant přijde na nové místo, řídí se obvykle [Maslowovou pyramidou potřeb](https://cs.wikipedia.org/wiki/Maslowova_pyramida). Je úplně jedno, jestli migruje z Horní Dolní do Prahy nebo z Vietnamu do Chebu, ale první měsíce je sražen na dno této pyramidy a řeší jenom, kde bude bydlet, co bude jíst, kde bude pracovat, jak to tady funguje. Horní patra pyramidy, seberealizace, to určitě při příchodu neřeší. To je obrovská iluze. 

Když se podívám na výzkumy o krajanech, tak to, co dnešní Češi nejvíc obdivují na krajanech, kteří odešli v devatenáctém století, je, jak odolávají asimilaci. Jak například rumunští Češi v Banátu pořád mluví česky, zpívají české písničky, uchovali si lidové zvyky. Zároveň ale, když se někdo odjinud chová stejně tady, odsuzujeme ho za neochotu přizpůsobit se nám.