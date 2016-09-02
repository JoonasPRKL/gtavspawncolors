var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("asea","1694024036")
.replace("asterope","490159252")
.replace("cognoscenti","114582481")
.replace("emperorclean","269650969")
.replace("emperorrusty","1182456586")
.replace("fugitive","1369504057")
.replace("glendale","1770206046")
.replace("ingot","1079478726")
.replace("intruder","1245740931")
.replace("premier","905607551")
.replace("primo","733821188")
.replace("regina","1252625929")
.replace("schafter","1376767918")
.replace("stanier","24870810")
.replace("stratum","66296904")
.replace("superdiamond","1890742293")
.replace("surge","182793546")
.replace("tailgater","1478626300")
.replace("warrener","238920141")
.replace("washington","2059647109")
.replace("other","2121806890");

SheetUrl="https://docs.google.com/spreadsheets/d/1Y2MT9NQeRYm4qVgHTJVdxZxJaxCyEo6_CVBhV5uLlZM/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;