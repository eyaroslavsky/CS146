window.onload = () => {
    var button1 = document.getElementById("bt1");
    button1.addEventListener("click", function(){
       var postDiv = document.createElement("div");
        postDiv.className = "post";
        var userSpan = document.createElement("span");
        userSpan.appendChild(document.createTextNode("SHAMCoin is a completely decentralized cryptocurrency with remarkable stability. It is easy to use and widely accepted across the internet."));
        postDiv.appendChild(userSpan);
        let newTex = document.getElementById("newText");
        newTex.appendChild(postDiv);
    });
    var button2 = document.getElementById("bt2");
    button2.addEventListener("click", function(){
       var pDiv = document.createElement("div");
        pDiv.className = "post";
        var uSpan = document.createElement("span");
        uSpan.appendChild(document.createTextNode("SHAMCoin consistently outperforms other types of cryptocurrency, including Bitcoin, in terms of stability and its rising price."));
        pDiv.appendChild(uSpan);
        let newTex1 = document.getElementById("newText2");
        newTex1.appendChild(pDiv);
    });
}
