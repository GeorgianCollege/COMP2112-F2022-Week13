// IIFE
(function(){

    function start()
    {
        console.log("App Started...");

        $("#aboutUsButton").on("click", ()=>{
            location.href = "/about";
        });
    }

    window.addEventListener("load", start);

})();