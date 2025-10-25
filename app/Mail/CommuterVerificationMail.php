<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CommuterVerificationMail extends Mailable
{
    use Queueable, SerializesModels;


    public $commuter;
    public $otp;

    /**
     * Create a new message instance.
     */
    public function __construct($commuter, $otp)
    {
        $this->commuter  = $commuter;
        $this->otp  = $otp;
    }

    /**
     * Build the message
     */
    public function build()
    {
       return $this->subject('Verify Your Commuter Account')
                    ->view('emails.commuter_verification');
    }
}
