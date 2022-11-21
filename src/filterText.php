<?php
$txt = $_POST['txt'];
//filtering text
$newtxt = filter_var($txt, FILTER_SANITIZE_STRING, FILTER_FLAG_STRIP_HIGH);
echo $newtxt;