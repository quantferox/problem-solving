<?php

function containsDuplicate($nums)
{
    return count($nums) !== count(array_unique($nums));
}
