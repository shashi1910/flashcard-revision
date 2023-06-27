# Flashcard Application

This is a simple flashcard application written in JavaScript based on the concept of ANKI. It allows users to create and review flashcards. It can also be called a revision application which helps user to revise.

## How it works

The application has two main parts: creating flashcards and reviewing flashcards.

### Creating Flashcards

Users can create new flashcards by filling out a form with a question and an answer. When the form is submitted, the data is sent to a server using a `POST` request.

### Reviewing Flashcards

Users can review flashcards by clicking on the `start-revision` button. This will take them to the `/revision` page where they can see a random flashcard.

After reviewing the flashcard, users can indicate whether they got the answer correct or incorrect. If the user got the answer correct, the flashcard will be shown again after a delay of 1 day. If the user got the answer incorrect, the flashcard will be shown again after a delay of 1 minute.

## Server

The application uses a server written in Node.js using Express. The server serves static files and has two routes: `/` and `/revision`.

## Code Explanation

The code uses event listeners to handle user interactions and variables to keep track of the state of the application.

The `displayNextFlashcard` function is used to display the next flashcard. It takes one argument: `repeatDelay`. If this argument is provided, it means that the current flashcard should be repeated after a delay.

The code also uses `fetch` to send data to and retrieve data from a server.

## How to Use

1. Make sure you install Express, Nodemon. You can install them by using `npm install` command.
2. Make sure you have json-server installed by running `npm install -g json-server`.
3. Start the json-server by running `json-server --watch db.json`.
4. Start the server by running `npm start`
5. Add data like question and answer to the form and press `save card`.
6. In order to stat revision, press `Start Revision`.
7. Click the “Show Answer” button to reveal the answer to the current question.
8. Click the “Correct” or “Wrong” button to mark the question and display the next question.

## Issues

- When all flashcards have been displayed, it does not give a popup that `all flashcards have been shown and there are no new flashcards available`.
- The feature of showing flashcards after a delay is not working properly.
