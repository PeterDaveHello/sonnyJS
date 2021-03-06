(function() {

    SONNY.PAGEPATH = "view/";

	SONNY.CONFIGPATH = "./config.json";

    var instance = new SONNY.Instance(function() {
        var renderer = new SONNY.Renderer(instance);
            renderer.render("public/index.html");

        var diashowPages = ["public/page1.html", 
                            "public/page2.html", 
                            "public/page3.html"];

        // Show next page by pressing a key
        window.addEventListener('keypress', function() {
            if (diashowPages.length) {
                renderer.render(diashowPages.shift());
            }
        });
        
            
    });

})();