// wait for the document to be ready
$(document).ready(function() {

    // create a reference to the button element
    const button = $('button');

    // add an event listener to the button
    button.click(function() {
        // get a random choice from the array of choices
        const choice = RandomChoice();

        // update the answer text on the page with the random choice
        $('#answer').text(choice);
    });
});