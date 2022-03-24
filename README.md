# Racquet Game Scorekeeper Website 

Site URL: https://jburrellirl.github.io/ProjectTwo/

This is a basic interactive website, to be used for keeping score for various racquet-based games. Here's a screenshot of the site to show that it's responsive to different screen sizes:

![Responsive Screenshot]()

## UX

This website has a simple UI, that allows the user to focus specifically on the scoreboard area itself, without distractions. 

## Features

* The scoreboard itself has a button for both player one and player two, to award points when required to each player. When a point is awarded to either player, the total for each player (underneath the appropriate headings) is increased by one. The winning score for each game is dependent on which game is selected.
* A Reset button is placed below the two scorekeeping buttons, to reset the scores to zero when required.
* The select field within the scoreboard can be used to choose from three different games - squash (play to 11 points), racquetball (play to 15 points) and badminton (play to 21 points).
* The bottom scoreboard keeps count of the total of individual games won, up to a winning score of 3 games.

I developed the functionality of this scoreboard as follows:

1) The first requirement of this scoreboard is to select a game, so that the scoreboard knows which game is being played and what the winning score for this game is. If you don't select a game before clicking on one of the player buttons, a browser alert appears, asking to you select a game before proceeding.

2) Once a game has been selected, when clicking on either of the scorekeeping buttons, the score for the appropriate player increases by one.

3) The score for each player can be increased, up to the total number of points required by the game selected. Once the winning score has been reached, a green border appears around the winning score, and a red border appears around the losing score, to denote winner and loser of that game. It's then not possible to award any more points to either player, as the game has been concluded.

4) Once the winning score has been reached, a game point is attributed to that game winner under the "First to 3!" heading. The user can then click on the Reset button, to begin the game again.

5) Once a player reaches a total of 3 overall games won, a browser alert appears to denote the overall winner - either "Player One Wins!" or "Player Two Wins". Once this alert appears, the overall game total under the "Play to 3!" heading is reset to zero, so that the match can begin again after the Reset button is pressed.

6) During the game itself, if a user changes the selected game to another game, the overall game totals for both score areas (individual game and overall) are reset to zero. This is to avoid confusion in terms of points awarded, as switching between selected games mid-game is not an expected activity for the user. The 3 sports available in the scoreboard (squash, racquetball and badminton) are individual sports and do not overlap.

### Features Left to Implement

In the future, it'd be nice to expand this to include other games such as tennis, which have more complex scoring systems.

## Technologies Used

Below is a list of languages, plugins and other tools used to create and develop this website. 

* HTML5: To structure the website and the content included on the website. Semantic tags were used to make each section and code's used obvious.
* CSS3: To style the features used throughout the website to achieve design and placement targets e.g. adding padding, a background image, margins, fonts, and changing colors.
* JavaScript: To create the interactive elements of the website itself. 
* [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Lato' font into the style.css file which is used for the text areas in this webpage.

## Testing

* During the development of this, I continually tested its functionality across different web browsers such as Google Chrome, Brave and Mozilla Firefox. The intended functionality of the scoreboard is as described above in the features section. I did not detect any usability bugs outside of its intended functionality once I'd completed development.

*  I tested the site using the responsiveness tools in Google Chrome, and the site is responsive across devices of varying screen widths.

* The site receives a good score from the Lighthouse testing tool, as shown here: 

![Lighthouse results]()


### Bugs

* The main issue I encountered and resolved was one where the overall scoreboard area (at the bottom) would not reset the overall score variable after the game was finished, and after the Reset button was pressed.
* Resolved an issue where the JS file would not load and returned a console error. This was related to a wrong file path, and was resolved.
* No further unresolved bugs have been detected.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

* In the GitHub repository, navigate to the Settings tab, and under the GitHub Pages section, click on the "Check It Out Here" link.
* From the source section drop-down menu, select the Master Branch
* Once the master branch has been selected, click Save to automatically publish the page.
* The live link can be found here - https://jburrellirl.github.io/ProjectTwo/ .

## Validator Testing

* HTML - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjburrellirl.github.io%2FProjectTwo%2F).
* No errors were found when passing through the official [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjburrellirl.github.io%2FProjectTwo%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).

## Credits

Resources used include the following:


### Content
