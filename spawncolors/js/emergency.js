var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("unmarkedcruiser","1777619012")
.replace("otheremergency","1513610037");

SheetUrl="https://docs.google.com/spreadsheets/d/1XzXZDmxF22VQrw73kl0OqvhKVyEiNnPEXcPBn_C-vR4/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;