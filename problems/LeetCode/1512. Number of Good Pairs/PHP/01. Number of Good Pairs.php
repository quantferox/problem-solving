<?php

function numIdenticalPairs($nums)
{
    $uniquePair = 0;
    for ($x = 0; $x < count($nums); $x++) {
        for ($y = ($x + 1); $y < count($nums); $y++) {
            if ($nums[$x] == $nums[$y] && $x < $y) {
                $uniquePair++;
            }
        }
    }
    return $uniquePair;
}
