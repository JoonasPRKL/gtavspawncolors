var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("bmx","523159157")
.replace("cruiser","928922292")
.replace("fixter","1689374752")
.replace("scorcher","1205260936")
.replace("racebikes","122978690");

SheetUrl="https://docs.google.com/spreadsheets/d/1zLw7ss4hbWxDBGsd6WMgnRB7LPPjCUiC49lKH0N7YyI/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;