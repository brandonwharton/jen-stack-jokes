
- [x] Client
    - [x] Add jokes using the input form
        - [x] POST request on button click
            - [x] Link button
            - [x] Gather input data
            - [x] Send input data
            - [x] On sent, update display (GET)
    - [x] Display
        - [X] All jokes displayed on DOM below inputs
        - [X] All jokes displayed on app load
    - [x] GET request
        - [x] AJAX request to server for jokes list
        - [X] Display on DOM

- [x] Server
    - [x] POST
        - [x] recieve joke object in req.body
        - [x] push to jokes array
        - [x] send back OK
    - [x] GET
        - [x] Send back entire joke array

Data Model

Can be the same for both GET and POST API endpoints
[
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  }
];