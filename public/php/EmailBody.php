<?php

namespace Wojciach\Wojciach;

class EmailBody 
{
    public $name;
    public $email;
    public $phone;
    public $company;
    public $message;

    public function __construct() 
    {
        $this->name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
        $this->email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
        $this->phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
        $this->company = filter_input(INPUT_POST, 'company', FILTER_SANITIZE_SPECIAL_CHARS);
        $this->message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
    }

    public function getBody() 
    {
        $template = file_get_contents('emailLayout.html');
        $body = str_replace(
            array('{{name}}', '{{email}}', '{{phone}}', '{{company}}', '{{message}}'),
            array($this->name, $this->email, $this->phone, $this->company, $this->message),
            $template
        );
        return $body;
    }
}
