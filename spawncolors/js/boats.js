var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("dinghy","1124793654")
.replace("jetmax","1001767208")
.replace("marquis","1444125237")
.replace("predator","1692219656")
.replace("seashark","20363855")
.replace("speeder","1535754048")
.replace("squalo","1748783134")
.replace("submersibles","250498638")
.replace("suntrap","1430915903")
.replace("toro","1354727361")
.replace("tropic","1685437237")
.replace("tug","1048685133");

SheetUrl="https://docs.google.com/spreadsheets/d/1RarorHx4hzb-VyF-ysrtYBfkzyj6Tq01RLtRR4rmdyo/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;