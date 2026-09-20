<?php

function commonFactors($a, $b)
{
    $commonFactorValues = 0;
    $maxValue = max($a, $b);
    for ($i = 1; $i <= $maxValue; $i++) {
        $commonFactorValues += (($a % $i == 0 && $b % $i == 0) ? 1 : 0);
    }
    return $commonFactorValues;
}
