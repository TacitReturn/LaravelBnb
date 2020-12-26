<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    public function bookables()
    {
        return $this->belongsTo(Bookable::class);
    }

    public function bookings()
    {
        return $this->belongsTo(Booking::class);
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
