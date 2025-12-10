function arvutus(){
    let ben100 = document.getElementById("100km").value;
    let hind = document.getElementById("hind").value;
    let vahemaa = document.getElementById("vahemaa").value;
    let vastus = ben100/100*vahemaa*hind;
    document.getElementById("vastus").innerHTML = vastus;
}