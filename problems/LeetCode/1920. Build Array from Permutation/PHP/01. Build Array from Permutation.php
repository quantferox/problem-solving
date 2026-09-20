<?php

function buildArray($nums)
{
    $ans = array(count($nums));
    for ($x = 0; $x < count($nums); $x++) {
        $ans[$x] = $nums[$nums[$x]];
    }
    return $ans;
}
