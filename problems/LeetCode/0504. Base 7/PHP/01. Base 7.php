<?php

function convertToBase7($num)
{
    return $num < 0 ? "-" . base_convert($num, 10, 7) : base_convert($num, 10, 7);
}
