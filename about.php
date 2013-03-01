<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Eco System Hungary Kft.</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/main.css">
        <link rel="stylesheet" href="css/about.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    </head>
    <body id="about">
        <div id="wrapper">
            <?php include 'header.php' ?>
            <section id="value-prop">
                <h1 class="fadeInDown">Rólunk</h1>
                <hr class="fadeInDown" />
                <div class="fadeInDown">
                    <a class="fadeInUp" href="#vision">vízió</a>
                    <a class="fadeInUp" href="#values">értékek</a>
                    <a class="fadeInUp" href="#collegues">munkatársak</a>
                </div>
            </section>
            <div id="main-content">

            <section id="history">
                <hgroup>
                    <h1>Történetünk</h1>
                    <hr>
                </hgroup>
                <div id="timeline-embed"></div>
              <script type="text/javascript">
                var timeline_config = {
                 width: "100%",
                 height: "600",
                 source: 'https://docs.google.com/spreadsheet/pub?key=0AvCE7JTaZ_8ndFhxeE9BQzdxR0kwM1lSYUtDZnl6Nmc&output=html'
                }
              </script>
              <script type="text/javascript" src="js/storyjs-embed.js"></script>
            </section>

            <section id="vision">
                <hgroup>
                    <h1>Víziónk</h1>
                    <hr>
                </hgroup>
                <div class="shadow">
                    <img src="img/1.jpeg" class="media-shadow" alt="">
                </div>

            </section>

            <section id="values">
                <hgroup>
                    <h1>Értékeink</h1>
                    <hr>
                </hgroup>
                <div class="shadow">
                    <img src="img/1.jpeg" class="media-shadow ponty" alt="">
                </div>
            </section>

            <section id="collegues">
                <hgroup>
                    <h1>Munkatársak</h1>
                    <hr>
                </hgroup>
            </section>

            </div>
            <?php include 'footer.php' ?>
        </div>
        
            
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
        <script src="js/main.js"></script>
        <script src="js/about.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
