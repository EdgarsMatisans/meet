# meet

                                                  # FEATURE 1: FILTER EVENTS BY CITY # 
                                                  
          User story: as a user I should be able to filter events by cities, so that I can see the list of events by cities                                                         SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
    SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY
SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
    SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city
          FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
User story: as a user, I should be able to toggle event’s details so I choose if want to
see the details or not of each event
    Scenario 1: An event element is collapsed by default.
Given the user haven’t done anything
When event’s are displayed
Then details will be collapsed
    Scenario 2: User can expand an event to see its details.
Given the user got interested on event
When the user click on it
Then the details will be displayed
    Scenario 3: User can collapse an event to hide its details.
Given the details got displayed
When expanded the user can click on button to collapse the details
Then the details will collapse and the event card will get back to it’s original state
          FEATURE 3: SPECIFY NUMBER OF EVENTS
User story: as a user, I should be able to specify how many events I want to see, so
that I can manage how many events I want to see
    Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given the user hasn’t specified the number of event to be displayed
When on the main page
Then 32 events will be displayed
    Scenario 2: User can change the number of events they want to see.
Given the possibility to change the number of event to display
When the user specifies it
Then the that exact number will be displayed
          FEATURE 4: USE THE APP WHEN OFFLINE
User story:as a user, I should be able to use the app offline, so that I can check
events even when not connected.
    Scenario 1: Show cached data when there’s no internet connection.
Given the user is offline
When using the application
Then cached data shows what to be displayed
    Scenario 2: Show error when user changes the settings (city, time range).
Given the user is offline
When the user changes the settings
Then an error will be displayed explaining that when offline the data can only be read
          FEATURE 5: DATA VISUALIZATION
User story: as a user, I should be able to check on the upcoming events, so that I can
see events per cities.
    Scenario 1: Show a chart with the number of upcoming events in each city.
Given the user is checking the main page
When scrolling
Then a chart section will show the upcoming events by citie
