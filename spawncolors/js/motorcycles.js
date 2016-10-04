var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("akuma","1910725838")
.replace("bagger","678295221")
.replace("bati801","2003466298")
.replace("daemon","747745039")
.replace("doublet","42570611")
.replace("enduro","1017092926")
.replace("faggio","345610081")
.replace("hakuchou","1619270106")
.replace("hexer","463186667")
.replace("innovation","202275867")
.replace("lectro","1578095696")
.replace("nemesis","1297273283")
.replace("pcj600","1041919465")
.replace("ruffian","274471587")
.replace("sanchez","975415002")
.replace("thrust","1630634943")
.replace("vindicator","1596867053")
.replace("vader","27915049")
.replace("zombie","29783314")
.replace("othermotorcycles","456212978");

SheetUrl="https://docs.google.com/spreadsheets/d/1ZdHboYqenQtQzsnGcWYzzzu3vSxL3CLdAPVDGBcJfw4/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;