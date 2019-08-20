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
    /* Types Shield Functions */
    static function tStr($v, string $d = ''): string
    {
        $return = $d;
        try {
            $return = strval($v);
        } catch (Exception $e) {

            $return = $d;
        }
        return $return;
    }

    static function tInt($v, int $d = 0): int
    {
        $return = $d;
        try {
            $return = intval($v);
        } catch (Exception $e) {
            $return = $d;
        }
        return $return;
    }

    static function tFloat($v, float $d = 0): float
    {
        $return = $d;
        try {
            $return = floatval($v);
        } catch (Exception $e) {
            $return = $d;
        }
        return $return;
    }

    static function tBool($v, boolean $d = NULL): boolean
    {
        $return = $d;
        try {
            $return = boolval($v);
        } catch (Exception $e) {
            $return = $d;
        }
        return $return;
    }
}
