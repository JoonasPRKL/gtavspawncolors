var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("blista","2096666989")
.replace("brioso","228474123")
.replace("dilettante","1825668790")
.replace("issi","1975503404")
.replace("panto","1168876222")
.replace("prairie","1916303457")
.replace("rhapsody","98473085");

SheetUrl="https://docs.google.com/spreadsheets/d/17u9aeAeqj-0ThSDDRcdVowWed0i-SX2KM68RvR7HOXE/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;