<?php
 $recipient="root@localhost";
 $subject="Test Email";
 $mail_body="Nobody is going to get this email but me.";
 mail($recipient, $subject, $mail_body);
 ?>