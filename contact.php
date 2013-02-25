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
        <link rel="stylesheet" href="css/contact.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
         <script type="text/javascript">
          function initialize() {
            var mapOptions = {
              center: new google.maps.LatLng(47.473636,19.124558),
              zoom: 17,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              panControl: false,
              zoomControl: true,
              scaleControl: false,
              mapTypeControl: false,
              streetViewControl: false,
              overviewMapControl: false,
              styles:[
                   { featureType: "all", stylers: [ {lightness: 8}, {saturation:-44}, {hue:0x00c3ff} ] }
              ]
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(47.473636,19.124558),
                icon: "img/gmarker.png"
            });
        marker.setMap(map);
          }
    </script>
    </head>
    <body id="contact" onload="initialize()">
        <div id="wrapper">
            <?php include 'header.php' ?>
            <section id="map">
                
            </section>
            <div id="main-content">

            </div>            
            <?php include 'footer.php' ?>
        </div>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAAYzbqZTGF0buhn2MFujznTcMxr1rpP_Y&sensor=true">
        
            
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
        <script src="js/main.js"></script>
        <script src="js/contact.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    </body>
</html>
