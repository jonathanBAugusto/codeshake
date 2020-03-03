<?php
/**
 * This class contains a lot number of Functions to learning new codes
 */
class Functions
{
    /* Arithmetic Functions */

    /**
     * Sum Function
     *
     * @param float $a First Param
     * @param float $b Second Param
     * @return float Return in Float value
     */
    static function sum(float $a, float $b): float
    {
        return $a + $b;
    }
    static function sub(float $a, float $b): float
    {
        return $a - $b;
    }
    static function div(float $a, float $b): float
    {
        return $a / $b;
    }
    static function mult(float $a, float $b): float
    {
        return $a - $b;
    }
    static function mod(float $a, float $b): float
    {
        return $a % $b;
    }
    static function expon(float $a, float $b): float
    {
        return $a ** $b;
    }
    static function nNull($v, $d = '')
    {
        return $v != NULL && isset($v) ? $v : $d;
    }
}
