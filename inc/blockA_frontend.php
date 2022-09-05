<?php

function blockAFrontend($attributes){
    return <<<HTML
    <html>
    <body>
    <div>
        <p>{$attributes['name']}</p>
        <p>{$attributes['address']}</p>
        <p>{$attributes['url']}</p>
    </div>
    </body>
    </html>
HTML;
}