var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("cutter","2121934225")
.replace("dockhandler","266857946")
.replace("dozer","973593764")
.replace("dump","923464911")
.replace("flatbed","171874395")
.replace("guardian","1085835437")
.replace("mixer1","60094074")
.replace("mixer2","509563174")
.replace("brutetipper","1489376845")
.replace("tipper","765586226");

SheetUrl="https://docs.google.com/spreadsheets/d/1-Ok9vmiKMs5EStC4XG5ziY68eXnfD_5I70LX4yxzqZY/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;