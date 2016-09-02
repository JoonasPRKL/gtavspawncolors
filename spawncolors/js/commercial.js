var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("benson","2043508276")
.replace("biff","259520183")
.replace("hauler","1956235619")
.replace("mule1","350937233")
.replace("mule2","1403363760")
.replace("mule3","366212869")
.replace("packer","1550985151")
.replace("phantom","88043868")
.replace("pounder","604190077")
.replace("stockade","1923712235");

SheetUrl="https://docs.google.com/spreadsheets/d/1Z5ZdPGIl1e9NXecYkgz1JnPOpU6RTmpawtKWsPj2tT4/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;