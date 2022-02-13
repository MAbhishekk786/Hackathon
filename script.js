var Nationalize = document.querySelector("#region Nation");
var output = document.querySelector("#endregionresult");
Nationalize.addEvenlistener("Search",Nation);
functions Nationalize() {
    fetch("https://content.guardianapis.com/search?page=2&q=debate&api-key=test")
    .then(data => {
        var res = data.json()
        console.log(res);
        return res;
    })
    .then(res => {
        var url = res.message;
        output.innerHTML = "<nation src=" + url + "height=750 widhth=600"
    })
}
