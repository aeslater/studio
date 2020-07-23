'use strict';

console.log('This file is connected and ready to run.');

//          This section is for a countdown timer showing days until music school starts (during summer)
//          Or for a week counter showing which week of the school year we are in.

/*         // When the top section is commented out, the bottom section starts working but doesn't completely work. It just displays the first reply.

var today = new Date();// Determine today's date.
var summerStart = '2020-05-02'; // first Saturday of May.
var schoolStart = '2020-09-06'; // first Sunday of September after Labor day.
var daysLeft; // this is how many days of summer left, or number of days until music school starts

var thisWeek; // this is the week number of the school year, from 1 to 36. I'm continuing right through Christmas or else I'll never get done with this assignment.

// If it's summer, display a countdown days timer until school starts.
if (today >= summerStart && today < schoolStart) {
    daysLeft = schoolStart - today;
    document.write(<p>'Days until Music School Starts:' + daysLeft</p>);
}

// If it's during school year but before the next calendar year (i.e. fall semester), display the week # of the school year
else if (today >= schoolStart) {
    thisWeek = Math.floor((today - schoolStart) / 7); // Round down.
    document.write(<p>'We are in Week ' + thisWeek + ' of 36'</p>);
}

// If it's during school year and before summer (i.e. spring semester), display the week # of the school year
// Adding number of weeks in spring semester plus 16 weeks for last calendar year's fall semester
else {
    thisWeek = Math.floor((today / 7) + 16);
    document.write(<p>'We are in Week ' + thisWeek + ' of 36'</p>);
}

*/


//           This section is for a question about whether the user plays an instrument (check out instruments if you don't play) 
//           And a question if they practiced (with GIFs celebrating and encouraging practice). 

// Ask user if they play an instrument 
var instrument = prompt('Do you play an instrument? (yes or no)');

// This will be the reply to the user
var reply;

if (instrument = 'no'|| 'No' || 'NO' || 'N' || 'n') {
    reply = 'Check out our instruments!';
    window.alert(reply);
    // figure out how to highlight instruments section

} else if (instrument = 'yes' || 'Yes' || 'YES' || 'y' || 'Y') {

    // If user plays an instrument, did they practice today?
    var practice = prompt('Did you practice today? (yes or no)');

    if (practice = 'yes' || 'Yes' || 'YES' || 'y' || 'Y') {
        reply = 'Great job!';
        window.alert(reply);
        // figure out how to display a celebratory GIF

    } else if (practice = 'no' || 'No' || 'NO' || 'N' || 'n') {
        reply = 'Practice only on the days you eat. -Dr. Shinichi Suzuki';
        window.alert(reply);
        // figure out how to display a "You can do it!" GIF

    } else {
        reply = "I don't understand. Please refresh and try again.";
         window.alert(reply);
    }

} else {
    reply = "I don't understand. Please refresh and try again.";
    window.alert(reply);
} 


    

