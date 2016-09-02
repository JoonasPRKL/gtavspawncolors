var vehicleid = getParameterByName('veh');
sheetnumero = vehicleid.replace("blade","701292758")
.replace("buccaneer","925165391")
.replace("chino","1077042183")
.replace("blackfin","748782366")
.replace("dominator","1088991409")
.replace("dukes","624203494")
.replace("faction","1923781189")
.replace("gauntlet","415425527")
.replace("hotknife","130691661")
.replace("moonbeam","829819890")
.replace("nightshade","2071573549")
.replace("phoenix","922381392")
.replace("picador","620366168")
.replace("ratloader","361297386")
.replace("rattruck","260897419")
.replace("ruiner","800374823")
.replace("sabreturbo","1675583817")
.replace("slamvan","1681353585")
.replace("stallion","1899562119")
.replace("tampa","1383246658")
.replace("vigero","280314739")
.replace("virgo","806331417")
.replace("voodoo","337082919");

SheetUrl="https://docs.google.com/spreadsheets/d/1_dY6xlJG9bL8fa_aBwHiHAIxjEdLuhIrtHaESDK2Q24/pubhtml";
document.getElementById('Freimi').src = SheetUrl + "?gid=" + sheetnumero + "&single=true";;