var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("adder","1445407139")
.replace("bullet","1332930961")
.replace("cheetah","468058146")
.replace("entityxf","355740376")
.replace("infernus","1241314157")
.replace("osiris","1002199155")
.replace("t20","772834071")
.replace("turismor","1339193518")
.replace("vacca","897912863")
.replace("voltic","114045201")
.replace("zentorno","1975497006")
.replace("othersupers","746820122");

SheetUrl="https://docs.google.com/spreadsheets/d/1YOP9yv9WanTXvwV96llX4sXPUiR8AP2vonoDWw3wzyQ/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;