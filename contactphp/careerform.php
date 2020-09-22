
<?php
if(isset($_POST['submit'])) {
      require 'PHPMailerAutoload.php';
      require 'credential.php';

      $mail = new PHPMailer;

       //$mail->SMTPDebug = 4;   
                                   // Enable verbose debug output
      $name = $_POST['name'];
      $email = $_POST['email'];
      $qualification = $_POST['qualification'];
      $address = $_POST['address'];
      $city = $_POST['city'];
      $country = $_POST['country'];
      $mobile = $_POST['mobile'];
      $message =  $_POST['comment'];

      $mail->isSMTP();                                      // Set mailer to use SMTP
      $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
      $mail->SMTPAuth = true;                               // Enable SMTP authentication
      $mail->Username = EMAIL;                 // SMTP username
      $mail->Password = PASS;                           // SMTP password
      $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
      $mail->Port = 587;                                    // TCP port to connect to

      $mail->setFrom($_POST['email'], 'Barackcement');
      $mail->addAddress(EMAIL);     // Add a recipient

      $mail->addReplyTo($_POST['email']);
      // print_r($_FILES['file']); exit;
      for ($i=0; $i < count($_FILES['file']['tmp_name']) ; $i++) { 
        $mail->addAttachment($_FILES['file']['tmp_name'][$i], $_FILES['file']['name'][$i]);    // Optional name
      }
      $mail->isHTML(true);                                  // Set email format to HTML

      $mail->Subject = 'New carrer Submission';
      $mail->Body    = '<br>'
                  .'Name: '.$name.'<br>'
                  .'Mail: '.$email.'<br>'
                  .'qualification: '.$qualification.'<br>'
                  .'Mobile: '.$mobile.'<br>'
                  .'Address: '.$address.'<br>'
                   .'City: '.$city.'<br>'
                  .'Country: '.$country.'<br>'
                  .'Message: '.$message.'<br>';

      $mail->AltBody = $_POST['comment'];

      if(!$mail->send()) {
          echo 'Message could not be sent.';
          echo 'Mailer Error: ' . $mail->ErrorInfo;
      } else {
        header("Location:thank-you.html");
      }
    }
    ?>