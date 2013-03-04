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
    </head>
    <body id="contact">
        <div id="wrapper">
            <?php include 'header.php' ?>
            <section id="value-prop">
                <h1 class="fadeInDown">kapcsolat</h1>
                <hr class="fadeInDown" />
                <div class="fadeInDown">
                    <a class="fadeInUp" href="#contact-data">elérhetőség</a>
                    <a class="fadeInUp" href="#quote">árajánlatkérés</a>
                    <a class="fadeInUp" href="#map">térképen</a>
                </div>
            </section>
            <div id="main-content">

                <section id="contact-data">
                    <hgroup>
                        <h1>Elérhetőségek</h1>
                        <hr>
                    </hgroup>
                    <p class="first"><strong>Eco System Hungary Kft.</strong></p>
                    <p><strong>Cégjegyzékszám</strong>01-09-729481</p>
                    <p><strong>Adószám</strong>13325066-2-42</p>                    
                    <p><strong>Telefon</strong><a href="tel:+3614334302">+36-1-433-4302</a></p>
                    <p><strong>Fax</strong>+36-1-433-4303</p>
                    <p><strong>Email</strong><a href="mailto:ecosystemh@ecosystemkft.com">ecosystemh@ecosystemkft.com</a></p>
                    <p><strong>Székhely</strong><a target="_blank" href="http://goo.gl/maps/ETyPg">1107 Budapest, Árpa utca 8.</a></p>
                </section>

                <section id="quote">
                    <hgroup>
                        <h1>Ajánlatkérés</h1>
                        <hr>
                    </hgroup>
                    <form action="thanks.php">
                        <fieldset>
                    
                            <legend>Kapcsolati adatok</legend>
                            <div>
                                <label for="name">Név</label>
                                <input type="text" name="name" id="name">
                            </div>
                            <div>
                                <label for="email">Email cím</label>
                                <input type="email" name="email" id="email">
                            </div>
                            <div>
                                <label for="tel">Telefonszám</label>
                                <input type="tel" name="tel" id="tel">
                            </div>
                        </fieldset>
                        <fieldset id="type-select">
                            <legend>Projekt típusa</legend>
                            <div>
                                <div>
                                    <label for="type-1"><input type="radio" name="type" id="type-1"> Családi ház</label>
                                </div>
                                <div>
                                    <label for="type-2"><input type="radio" name="type" id="type-2"> Irodaépület</label>
                                </div>
                                <div>
                                    <label for="type-3"><input type="radio" name="type" id="type-3"> Áruház</label>
                                </div>
                                <div>
                                    <label for="type-4"><input type="radio" name="type" id="type-4"> Raktárcsarnok</label>
                                </div>
                                <div>
                                    <label for="type-5"><input type="radio" name="type" id="type-5"> Lakópark</label>
                                </div>
                            </div>                            
                        </fieldset>
                        <fieldset>
                            <legend>Projekt adatok</legend>
                            <p>Fogalma sincs ezekről? <a class="s-link" href="#message">Küldjön egyszerű leírást!</a></p>
                            <div>
                                <label for="m2">Össz-szintterület</label>
                                <input type="number" min="0" step="10" name="m2" id="m2"> m<sup>2</sup>
                            </div>
                            <div>
                                <label for="levels">Szintek száma</label>
                                <select name="levels" id="levels">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div>
                                <label for="start">Várható kezdés</label>
                                <select name="start" id="start">
                                    <option value="0">0 hónap múlva</option>
                                    <option value="1">1 hónap múlva</option>
                                    <option value="2">2 hónap múlva</option>
                                    <option value="3">3 hónap múlva</option>
                                    <option value="4">4 hónap múlva</option>
                                    <option value="5">5 hónap múlva</option>
                                </select>
                            </div>
                            <div>
                                <label for="restauration"></label>
                            </div>
                        </fieldset>
                        <fieldset id="extra-select">
                            <legend>Igények</legend>
                            <div>
                                <label for="land"><input type="checkbox" name="land" id="land"> Földmunka</label>
                            </div>
                            <div>
                                <label for="garden"><input type="checkbox" name="garden" id="garden"> Kertépítés</label>                                
                            </div>
                        </fieldset>
                        <fieldset class="submit-row">
                            <input type="submit" value="küldés">
                        </fieldset>
                    </form>
                </section>

                <section id="message">
                    <hgroup>
                        <h1>Üzenetküldés</h1>
                        <hr>
                    </hgroup>
                    <form action="thanks.php">
                        <fieldset>
                            <div>
                                <label for="m-name">Név</label>
                                <input type="text" name="m-name" id="m-name">
                            </div>
                            <div>
                                <label for="m-email">Email cím</label>
                                <input type="email" name="m-email" id="m-email">
                            </div>
                            <div>
                                <label for="m-tel">Telefonszám</label>
                                <input type="tel" name="m-tel" id="m-tel">
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label for="m-message">Üzenet</label>
                                <textarea name="m-message" id="m-message" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <input type="submit" value="Küldés">
                            </div>
                        </fieldset>
                    </form>
                </section>

            </div>
            <section id="map">
                <a href="http://goo.gl/maps/cAuBs">
                    1107 Budapest, Árpa utca 8.
                    <span class="s-link">Mutasd Google térképen &raquo;</span>
                </a>
            </section>            
            <?php include 'footer.php' ?>
        </div>
        
            
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
