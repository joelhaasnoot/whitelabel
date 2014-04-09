var Locale = {}

Locale.dateFormat = 'mm-dd-yyyy';
Locale.timeFormat = 'hh:mm';
Locale.loading = "Loading...";
Locale.edit = "Change trip";
Locale.plan = "Plan trip";
Locale.geocoderInput = "Train station, stop or address";
Locale.startpointEmpty = "No starting point entered";
Locale.noStartpointSelected = "No starting point selected";
Locale.destinationEmpty = "No destination entered";
Locale.noDestinationSelected = "No destination selected";
Locale.noValidDate = "Enter a valid date";
Locale.noValidTime = "Enter a valid time";
Locale.dateTooEarly = function ( minDate8601 ) { return "This trip planner works for travel dates starting "+minDate8601.split('-').reverse().join('-'); }
Locale.dateTooLate = function ( maxDate8601 ) { return "This trip planner works for travel dates till "+maxDate8601.split('-').reverse().join('-'); }
Locale.from = "From";
Locale.via = "Via";
Locale.to = "To";
Locale.date = "Date";
Locale.time = "Time";
Locale.months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
Locale.days = ['Sunday','Monday','dinsdag','woensdag','donderdag','vrijdag','zaterdag'];
Locale.earlier = 'Earlier';
Locale.later = 'Later';
Locale.noAdviceFound = 'No valid trips found';
Locale.walk = 'Walk';
Locale.platformrail = 'Platform';
Locale.platform = 'Platform';
Locale.amountTransfers = function ( transfers ) { if (transfers == 0) { return 'Direct'; } else { return transfers+ 'x transfers';} }
Locale.autocompleteMessages = {
        noResults: "No results found.",
        results: function( amount ) {
            return amount + ( amount > 1 ? " results are " : " result is" ) + " available, use the up and down arrow keys to navigate them.";
        }
}