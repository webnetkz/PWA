<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?=$title?></title>

        <meta charset="UTF-8">
        <meta name="theme-color" content="rgb(0, 0, 0)">
        <meta name="author" content="TOO WebNet">
        <meta name="description" content="RetactorPhoto by WebNet">
        <meta name="keywords" content="RedactorPhoto">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">

        <link rel="shortcut icon" href="/public/img/miniLogoWebnet.png" type="image/png">
        <link rel="stylesheet" href="/public/css/style.css">
        <link rel="stylesheet" href="/public/css/mobileStyle.css">
        <link rel="manifest" href="/manifest.json">
        
    </head>

    <body style="background: blue;">
        
        <?php

            echo $content;

        ?>

        

        <script>
             // Проверка браузера на поддержку service worker
            if('serviceWorker' in navigator) {
                navigator.serviceWorker
                    .register('/sw.js')
                    .then(function() { console.log("Service Worker Registered"); });
            }
        </script>
        <script src="/public/js/main.js" type="module"></script>
    </body>
</html>