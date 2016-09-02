var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("bison","1713805497")
.replace("bobcatxl","127713648")
.replace("boxville","2092182658")
.replace("burrito","467552646")
.replace("camper","1342478809")
.replace("journey","1140562571")
.replace("minivan","1153209636")
.replace("pony","1934748262")
.replace("rumpo","512807565")
.replace("speedo","317222698")
.replace("surferrusty","1276526900")
.replace("surfer","1892460313")
.replace("youga","1767049247")

SheetUrl="https://docs.google.com/spreadsheets/d/1FBP3YhEyj8noHBwBBekcvskEaojgPoGaHMKASH5kmwc/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;