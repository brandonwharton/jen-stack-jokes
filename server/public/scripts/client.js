console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    
    // click listeners
    $('#addJokeButton').on('click', addJoke);
}


// POST request function to add joke to server on click
function addJoke() {
    console.log('clicked addJoke'); 
}