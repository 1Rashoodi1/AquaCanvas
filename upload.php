<?php  // Check if we have a POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") { // This is your standard way to handle POST requests in general

    $file = $_FILES['image']; // Get the uploaded file 
    if (empty($file) === true || $file["error"] !== UPLOAD_ERR_OK){ 
        echo "Error: No image received or upload failed.";  // Handle no image case.
        exit;   

    } 


    $destination = "uploads/" . basename($_FILES['image']['name']); // File Location for saving!

    if(move_uploaded_file($file["tmp_name"], $destination)) { // Try to move file 
      echo "File uploaded successfully: ". $_FILES['image']['name']; 
    } else{  // If it fails, report the error.   
        echo 'Error uploading file.'; 
    }

}


?>
