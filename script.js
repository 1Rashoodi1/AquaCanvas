
// Set up canvas, context & drawing functions (using JavaScript) 

const canvas = document.getElementById('drawing-canvas'); // Get the HTML5 canvas element
const ctx = canvas.getContext('2d');  

let imgSrc;   
let isDrawing = false;    
let currentX, currentY;


function draw(x, y, color) { 
    ctx.beginPath(); // Start a new path for drawing! 
    ctx.moveTo(currentX, currentY);  // Move the cursor to start point - make sure you use this variable in your function above

    if (isDrawing) { 
      ctx.lineTo(x, y);   // Connect the two points with a straight line or a path as needed!
      ctx.strokeStyle = color; // Use this for drawing lines and shapes!  You can adjust this as needed to suit your application's style!

    } else { 
     console.log("Drawing is not active yet!");   // Log an error if you want to check the status of your application after it has loaded or paused - use logging or a simple alert in case of failure
  } 


ctx.stroke(); // Draw the current path!

}


function startDrawing() {
    isDrawing = true;
    currentX = 0;   // Initial position for our drawing cursor!   You may want to adjust these values based on your application's needs - like maybe using a mouse pointer, or even an image upload with a button that shows the loaded file in the browser.  

}


function stopDrawing() {
    isDrawing = false; // Stop recording and prevent further drawing 

 }



// Function to handle event (click on canvas) - You might need some additional code for handling user events!   You should include logic to listen for clicks or other gestures that users make while interacting with the application.  


function uploadImageToCanvas() { 
    const imageInput = document.createElement('input'); // Create an HTML5 input element (like a file)

    imageInput.type = 'file'; 
   // The browser will show a modal when this part of code is executed!  You'll need to handle the user clicks, or events that occur after uploading an image!


    const uploadButton = document.createElement('button'); // Create button element for file uploading - You might want to include some basic UI like loading spinner while your application waits for a response from the server
   uploadButton.type = 'submit'; 

  imageInput.addEventListener('change', (event) => { 
    const files = event.target.files; // Get list of selected file(s). You'll need to handle how these files are processed in your application! 


        console.log("Selected image:", files[0]);   // Log the name of the uploaded file for debugging purposes - you may want to display this information on a screen or log it to an API
  });

    uploadButton.addEventListener('click', () => { // This will be triggered after user clicks on upload button! 


        console.log("Starting uploading!");   // Log info when the file is uploaded in your console - you might want to display this as a loading indicator for the application, or show an alert on success
    });  



    document.body.appendChild(imageInput); // Add image input into the page's DOM (Document Object Model)
   canvas.addEventListener('click', startDrawing ); 

 }


 uploadImageToCanvas();