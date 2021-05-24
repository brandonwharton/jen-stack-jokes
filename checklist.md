- [ ] Send requests to the server from client using AJAX requests
    - [ ] GET request
- [ ] Display response on the DOM

- [ ] Demonstrate the separation of logic between client and the server


- [ ] Client
    - [ ] Add jokes using the input form
        - [ ] POST request on button click
            - [x] Link button
            - [x] Gather input data
            - [x] Send input data
            - [ ] On sent, update display (GET)
    - [ ] Display
        - [X] All jokes displayed on DOM below inputs
        - [X] All jokes displayed on app load
    - [ ] GET request
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