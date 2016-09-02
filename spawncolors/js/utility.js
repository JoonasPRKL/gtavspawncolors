var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("caddy1","2046685848")
.replace("caddy2","896089065")
.replace("fieldmaster","1938863327")
.replace("forklift","326664525")
.replace("lawnmower","1793563512")
.replace("sadler","2100896426")
.replace("scraptruck","1914051596")
.replace("towtruck1","1375146719")
.replace("towtruck2","2093551098")
.replace("others","1195573624")

SheetUrl="https://docs.google.com/spreadsheets/d/1nURvtQB_fVf_NpxT7GeSWVNSXXIk8_2V8T3lzvtojNc/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;