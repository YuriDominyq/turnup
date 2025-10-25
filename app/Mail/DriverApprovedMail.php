<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DriverApprovedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $driver;

    /**
     * Create a new message instance.
     */
    public function __construct($driver)
    {
        $this->driver = $driver;
    }

    /**
     * Build the message
     */
    public function build()
    {
       return $this->subject('Congratulations! Your Driver Account Has Been Approved')
                            ->view('emails.driver_approved');
    }
}
