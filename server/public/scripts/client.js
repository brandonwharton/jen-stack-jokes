console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    
    // click listeners
    $('#addJokeButton').on('click', addJoke);

    // render DOM with joke data on load
    gatherJokes();
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
        // update DOM with GET request
        gatherJokes();
    }).catch(function (error) {
        console.log('Something went wrong with POST request', error);
    });
};


// GET request function to gather joke data from server and render DOM
function gatherJokes() {
    console.log('Beginning joke gather');
    // AJAX GET request to bring in joke data
    $.ajax({
        url: '/jokes',
        type: 'GET'
    }).then(function (response) {
        console.log('GET request from /jokes success', response);
        // render DOM with jokes data
        $('#outputDiv').empty();
        response.forEach(function (joke) {
            $('#outputDiv').append(`
                <p>${joke.whoseJoke} asked: ${joke.jokeQuestion}</p>
                <p>Answer: ${joke.punchLine}</p>
            `)
        });
    }).catch(function (error) {
        console.log('Something went wrong with GET request', error);   
    });
}