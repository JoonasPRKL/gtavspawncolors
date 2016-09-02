var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("bifta","143198639")
.replace("blazer","510040801")
.replace("bodhi","200024642")
.replace("brawler","406038560")
.replace("dubsta6x6","251400626")
.replace("insurgent","62181721")
.replace("dunebuggy","1004205057")
.replace("duneloader","1049451337")
.replace("bfinjection","1381643334")
.replace("kalahari","818824153")
.replace("monstertrucks","1452080201")
.replace("merryweathermesa","1650485395")
.replace("rancherxl","150778531")
.replace("rustyrebel","1138779661")
.replace("rebel","2129396048")
.replace("sandking","1634544971")
.replace("trophytrucks","1593035687");

SheetUrl="https://docs.google.com/spreadsheets/d/1SVYgit87mYbavldf8cb-NzOHNgU74ybOlAbx9syHZGY/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;