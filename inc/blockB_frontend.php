<?php

function blockBFrontend($attributes){
    return <<<HTML
    <html>
    <body>
    <a href=`$attributes[url]`>{$attributes['name']}</a>
    </body>
    </html>
HTML;
}
