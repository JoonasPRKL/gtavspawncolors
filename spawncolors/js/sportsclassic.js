var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("casco","854376873")
.replace("coquetteclassic","2087131810")
.replace("infernusclassic","688066768")
.replace("manana","1284511629")
.replace("monroe","188641701")
.replace("peyote","784278058")
.replace("pigalle","762902062")
.replace("roosevelt","1933595358")
.replace("stingergt","1196543090")
.replace("stinger","1055838877")
.replace("stirlinggt","1354365137")
.replace("tornadorusty","2060411515")
.replace("tornado","2047262493")
.replace("turismoclassic","872713285")
.replace("ztype","1927781370")
.replace("other","531237562");

SheetUrl="https://docs.google.com/spreadsheets/d/1sCm9qvxjqU3CiRRtbxhmeCJd_w7t0DxF5gYhhx3PNo4/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;