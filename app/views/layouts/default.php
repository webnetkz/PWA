<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?=$title?></title>

        <meta charset="UTF-8">
        <meta name="theme-color" content="rgb(0, 0, 0)">
        <meta name="author" content="TOO WebNet">
        <meta name="description" content="Made in WebNet">
        <meta name="keywords" content="WebNet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">

        <link rel="shortcut icon" href="/public/img/miniLogo.png" type="image/png">
        <link rel="apple-touch-icon" href="/public/img/logo.png">
        <link rel="stylesheet" href="/public/css/style.css">
        <link rel="stylesheet" href="/public/css/mobileStyle.css">
        <link rel="manifest" href="/public/json/manifest.json">
        
    </head>

    <body>
        
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