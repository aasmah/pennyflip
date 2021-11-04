// TODO: Declare any global variables we need
let heads= 0
let tails= 0
let percentageHeads = 0
let percentageTails = 0
let totalFlips = heads + tails

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    let button= document.querySelector('#flip') {
        button.addEventListener('click', function(){
            document.getElementById('message').textContent ='you flipped heads'
        let coin-heads = Math.random() <0.5
        if (coin-heads){
            heads++;
            totalFlips++
            else(){
                tails++;
                totalFlips
            }
        }
    }
    let clear = document.querySelector('#clear')
    clear.addEventListener('click' , function(){
        //clear.textcontent = 'it worked'
})

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})