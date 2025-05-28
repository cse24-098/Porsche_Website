function handleSearch(event) {
            event.preventDefault(); //stop form from refeshing page
            const query = document.getElementById("searchInput").value.trim().toLowerCase();

            //define known models
            const validModels = {
                "911": "porsche_911.html",
                "718": "porsche_718.html",
                "cayenne": "porsche_cayenne.html",
                "macan": "porsche_macan.html",
                "panamera": "porsche_panamera.html",
                "taycan": "porsche_taycan.html"
            };

            if (query in validModels) {
                window.location.href = validModels[query]; //redirect to that page
            }else{
                alert("Models not found. Please try another Porsche model.");
            }
        }