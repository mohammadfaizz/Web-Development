<?php 
$insert = 0;
if(isset($_POST['name']))
{
$con = mysqli_connect("localhost","id18143641_faiz011","@Webhost0110");
if(!$con == true){
    die("connection is failed due to" . mysqli_connect_error());
}
// echo "successfully connected";

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];

$sql = "INSERT INTO `id18143641_twform`.`TW form data` (`Sno.`, `Name`, `Email`, `Phone No.`, `Msg`, `Data/Time`) VALUES (NULL, '$name', '$email', '$phone', '$msg', current_timestamp()); ";

if($con->query($sql) == true){
    // echo "successfully inserted";
    $insert = 1;
}
else{
    echo "ERROR : $sql <br> $con->error";
}

$con->close();

}

?>







<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/3129e58f01.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./css/style.css">
        <title>Travel Website</title>
    </head>
<body>
    <!-- nav bar  -->
    <nav class="nav-bar bg-dark">
        <div class="container">
            <h1 class="logo lg-heading">WT</h1>
            <ul class="nav-items">
                <li class="nav-item"><a href="./index.html">Home</a></li>
                <li class="nav-item"><a href="./about.html">About</a></li>
                <li class="nav-item"><a href="./contact.php">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="contact">
        <div class="container">
            <div class="form-wrapper">
             <div class="company-address">
                <div class="address-item">
                <i class="fas fa-map-marker-alt"></i>
                <h2 class="md-heading text-black">Address</h2>
                <p class="text-black">B-302 Buland Masjid Shastri Park Delhi-110053</p>
                </div>
                <div class="address-item">
                <i class="fas fa-envelope"></i>
                <h2 class="md-heading text-black">E-mail</h2>
                <p class="text-black">iammohammadfaizz@gmail.com</p>
                </div>
                <div class="address-item">
                <i class="fas fa-phone-volume"></i>
                <h2 class="md-heading text-black">Mobile No</h2>
                <p class="text-black">8130298295</p>
                </div>
                <img src="./images/company.jpg" alt="" class="contact-img">
             </div>
             <form action="contact.php" class="form" method="post">
                 <h1 class="lg-heading text-black">Contact Us</h1>
                 <p class="text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem temporibus magni!</p>
                 <div class="form-item">
                     <label for="name">Name</label>
                     <input type="text" name="name" id="name" required>
                 </div>
                 <div class="form-item">
                     <label for="email">Email Id</label>
                     <input type="email" name="email" id="email" required>
                 </div>
                 <div class="form-item">
                     <label for="phone">Phone No:</label>
                     <input type="tel" name="phone" id="phone" required>
                 </div>
                 <div class="form-item">
                     <label for="message">Message</label>
                     <textarea name="msg" id="message" cols="30" rows="10"></textarea>
                 </div>
                 <button type="submit" class="form-btn">Submit</button>
             </form>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="container">
            <div class="social-media-links">
                <a href="https://www.facebook.com/faiz0458"><i class="fab fa-facebook fa-3x "></i></a>
                <a href="https://twitter.com/immohammadfaiz?t=lkZPLK2QwFXxd4OP3IWiVA&s=09"><i class="fab fa-twitter fa-3x "></i></a>
                <a href="https://instagram.com/iammohammadfaiz?utm_medium=copy_link"><i class="fab fa-instagram fa-3x "></i></a>
            </div>
            <br>
            <p>World Travel &copy; 2021, All Rights Reserved</p>
            <p class=" dev bg-white text-black">Developed by : Mohammad Faiz</p>
        </div>
    </footer>
</body>
</html>