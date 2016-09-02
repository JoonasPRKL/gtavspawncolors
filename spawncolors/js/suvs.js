var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("ballerle","1291805616")
.replace("baller2","1348055008")
.replace("baller","1872494945")
.replace("beejayxl","152537959")
.replace("cavalcade","805180013")
.replace("contender","1664876946")
.replace("dubsta","925271784")
.replace("fq2","1293625831")
.replace("granger","1189433176")
.replace("gresley","1408929880")
.replace("habanero","1215694246")
.replace("huntleys","590594381")
.replace("landstalker","1711745726")
.replace("mesa","599116445")
.replace("patriot","975096197")
.replace("radius","1913975695")
.replace("rocoto","505132155")
.replace("seminole","832969528")
.replace("serrano","191248029")
.replace("xls","86364764");

SheetUrl="https://docs.google.com/spreadsheets/d/11c1wJ87JPmlSiBh3mj2h-jtni65kGseyGHdf7oYtF28/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;