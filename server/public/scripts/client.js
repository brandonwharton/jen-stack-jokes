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
    
    // gather data from DOM for new joke to POST
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val(),
    }
    // console.log('New joke is:', newJoke);

    // AJAX post request to send new joke to server
    $.ajax ({
        url: '/jokes',
        type: 'POST',
        data: newJoke
    }).then(function (response) {
        console.log('POST request to /jokes success', response);
    }).catch(function (error) {
        console.log('Something went wrong with POST request', error);
    });
};