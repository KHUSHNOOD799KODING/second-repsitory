        document.addEventListener("DOMContentLoaded", function () {
            var colorBar = document.querySelector('.color-bar');
            var navbarHeight = document.querySelector('.nav').offsetHeight;

            window.addEventListener('scroll', function () {
                var scrollPosition = window.scrollY;
                var windowHeight = window.innerHeight;
                var documentHeight = document.body.clientHeight;

                // Calculate the percentage scrolled
                var scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

                // Update the width of the color bar
                colorBar.style.width = scrollPercentage + '%';
            });
        });

        window.addEventListener('click', function () {

            let a = document.getElementById('a');

            if (a.innerHTML != "&#10006;") {
                a.innerHTML = "&#10006;"
            }
            else {
                a.innerHTML = "&#10009;";
            }

        })
        window.addEventListener('click', function () {

            let b = document.getElementById('b');

            if (b.innerHTML != "&#10006;") {
                b.innerHTML = "&#10006;"
            }
            else {
                b.innerHTML = "&#10009;";
            }

        })
        window.addEventListener('click', function () {

            let c = document.getElementById('c');

            if (c.innerHTML != "&#10006;") {
                c.innerHTML = "&#10006;"
            }
            else {
                c.innerHTML = "&#10009;";
            }

        })
        window.addEventListener('click', function () {

            let d = document.getElementById('d');

            if (d.innerHTML != "&#10006;") {
                d.innerHTML = "&#10006;"
            }
            else {
                d.innerHTML = "&#10009;";
            }

        })

        window.addEventListener('click', function () {

            let e = document.getElementById('e');

            if (e.innerHTML != "&#10006;") {
                e.innerHTML = "&#10006;"
            }
            else {
                e.innerHTML = "&#10009;";
            }

        })

        window.addEventListener('click', function () {

            let f = document.getElementById('f');

            if (f.innerHTML != "&#10006;") {
                f.innerHTML = "&#10006;"
            }
            else {
                f.innerHTML = "&#10009;";
            }

        })
