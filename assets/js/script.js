//Listen for DOMContentLoaded to ensure that all HTML and resources
//  have been loaded before attempting to run code

//document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
   // console.log('Hi')


// TODO: Declare any global variables we need
 let heads= 0
 let tails= 0
 let totalFlipCount = 0
 let headTD  =document.getElementById('heads')
 let headPercTD  =document.getElementById('heads-percent')
 let tailTD  =document.getElementById('tails')
 let tailPercTD  =document.getElementById('tails-percent')
 let msg = document.getElementById('message');
 let img = document.getElementById('penny-image')


function updateDisplay() {
    headTD.innerHTML = heads
    let divider =0
    if(totalFlipCount===0) 
        divider = 1
    else divider = totalFlipCount
    headPercTD.innerHTML = ((heads/divider) * 100).toFixed(2) + "%"
    tailTD.innerHTML = tails
    tailPercTD.innerHTML = ((tails/divider) * 100).toFixed(2) + "%"
} 

document.getElementById('clear').addEventListener('click',
    function() {
        heads = 0
        tails = 0
        updateDisplay();
        msg.innerHTML="Let's get rolling"
    }
)

document.getElementById('Flip').addEventListener('click',
    function() { 
        x = (Math.floor(Math.random() * 2) == 0);
        totalFlipCount +=1
        if(x){
            heads+=1;
            img.src = 'assets/images/penny-heads.jpg'
            msg.innerHTML = "You flipped heads!"
        }else{
            tails +=1;
            img.src = 'assets/images/penny-tails.jpg'
            msg.innerHTML = "You flipped tails!"
        }
        updateDisplay()

})
 
//finished here 

//     // Create a variable to track percentages
//     // let allPercents = [0, 0]
//     // for (let i = 0; i < allFlips.length; i++) {
//     //     // Get the percentage for this flip
//     //     allPercents[i] = Math.round((allFlips[i] / total) * 100)
//     // }
// }
// // let totalHeads= document.getElementById('heads')
// // let totalTails= document.getElementById('tails')
// // let hPercentage= document.getElementById('heads-percent')
// // let TPercentage = document.getElementById('tails-percentage')


// // Update the message to the user
//  document.getElementById('message').textContent = 'flip it!'


//     // let flip=document.querySelector('flip') 
//     // flip=addEventListener('click', function(){
//      document.getElementById('flip').textContent ='you flipped heads'
//      function flip() {
//      x =(math.floor (Math.random()* 2) ==0);
//         if (coin-heads){
//              flip ("heads");
            
//            }else{
//                 flip('tails');
//     }
        
//         // // Display the result of the flip
//         // document.getElementById('message').textContent = 'You flipped!'


    
//     // let clear = document.querySelector('clear')
//     // clear.addEventListener('click' , function(){
//     // clear.textContent = 'it worked'
// // })




    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
