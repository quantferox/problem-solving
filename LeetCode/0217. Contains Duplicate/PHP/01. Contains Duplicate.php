<?php

function containsDuplicate($nums)
{
    array_multisort($nums, SORT_ASC);
    for ($x = 0; $x < count($nums) - 1; $x++) {
        if ($nums[$x] == $nums[$x + 1]) {
            return true;
        }
    }
    return false;
}
