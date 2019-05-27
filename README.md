# Simon Says Game - Milestone Project Two
# Interactive Frontend Development

### Site link
This site has been deployed using GitHub Pages and is available at https://fion21.github.io/new-game-2/

## Purpose of Project/Scope

This game is the coursework for the Interactive Frontend Development Project: Milestone Two. Its scope was to create a game with HTML, CSS and JavaScript, where the main feature is JavaScript funtionality and logic. 

This app is my version of the classic simple memory game called **_Simon_**; ref: [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)). My app is called **_Simon Says_**, which is the basis of the game before the game was invented for children to spot something begining with a letter. The aim of this game is to repeat a sequence of signals with cursor presses which are played out and displayed as sound and colour; randomly chosen by the computer with an increment of one for each synchronisation.

## UX
I was happy with the original Simon interface, but added a tomato colour and lighter hues in the **Win** phase. I designed the inner circle as a red and yellow colour scheme, and the background of the game is on a black background. There is also a brief intro pop-up for the instructions.

### User Stories

- Let there be a random series of pad(button) presses
- Let the correct repetition of pad presses, 
  be reused in the next round, plus one more pad press
- Let there be a different sound for each pad:  when a sequence is played, 
  and also when a pad is depressed
- Indirect musical ear development, let there be musical significance for the       sounds
- Let there be a **'strict mode'** option, which takes me back to round one
- Let there be a refresh option
- Let the series of repetitions not be arduous and boring


### Research

To understand the game, I reviewed the Freecodeinstitute version of the **_Simon_** game, which gave me an idea of the layout and functionality. This was the starting point on which I could base the game.

Most of the versions used a circular user interface, which contained the game's controls. I have modified the colours and softened the look to be more welcoming with a red inner-circle.

### Wireframes

I used powerpoint to render the basic game, but in a final screenshot the live graphics and dark background can be seen.

## Features

The original game had 20 rounds, in my write-up of the game rules, I shortened this down to 5 rounds as it was leading to frustration and boredom, with the 5 rounds even I could enjoy the game, and I added some fun sound files so there would be an entertainment factor.
 
### Features Left to Implement/Alternative Future Editions

- Adding an animation swoosh accross the screen for **"No!"** or **"Win!"**.        Creating an animal noise game for infants instead of the musical sounds, with     animal pictures.

## Technologies Used

+ HTML5
  [**HTML**](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
    - used for html webpage elements and structure and loading components
+ CSS3
  [**CSS**](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
    - used for styles and layout enhancement
+ Javascript
 [**JavaScript**](https://www.javascript.com/)
    - main body of coding for this project to add funtionality and interactivity to the      game
+ Google Fonts
  [**Google Fonts**](https://fonts.google.com/)
    - used **Google Fonts** to style the text with **'Stylish'** font
+ Favicon
  [**Favicon**](https://www.favicon.cc)
    - used for the icon in the address bar
+ Apache/Ubuntu/Github/Cloud9/AWS
  [**GitHub**](https://github.com)[**Cloud9**](https://c9.io/login)[**AWS**](https://eu-west-1.console.aws.amazon.com) *et al*
    - used for uploading to Github as a feature of Cloud9 IDE and/or AWS.
+ Jasmine
  [**Jasmine**](https://jasmine.github.io/)
  - used Test Driven Development (TDD) with the **Jasmine** framework to automate the **JavaScript** file.


## Testing

I have tested the Javascript page in Jasmine, no errors were reported, although it reported a script error while loading.

I have tested this website on various sized screens for responsiveness and this has primarily been designed for desktop use. I tested the site on the latest versions of Google Chrome and MS Edge. 

As for the Iphone I have tested it live on the Iphone5 and it works although the user has to resize it for the whole circle to show up and the inner-circle graphics are displaced. Also there is a delay between the sounds and the lights on the Iphone5.


## Deployment and Version Control

- [**Git**](https://git-scm.com/)
    - I used **Git** as the version control system locally to add and commit changes made to the project in Cloud9. They were then pushed to GitHub.
- [**GitHub**](https://github.com/)
    - **GitHub** has been used as a remote repository to push and store the committed changes from Git to my project. I then deloyed it to Github and it runds on a live environment on Github Pages on the above link.

##  Deployment to GitHub

To deploy the site to GitHub pages, the following took place

1. Opened the `Tools` tab, then `New Terminal` in the `AWS` workspace.
2. Made a `git status`command, then initialised with a `git init`command.
3. Added all the files to the Staging area with `git add .`
4. Used`git commit -m "Initial commit"` to commit the files
5. Created a new repository in GitHub called 'new-game-2'.
6. Added from GitHub into the terminal window of C9:
    `git remote add origin`
    `https://github.com/fion21/new-game-2.git`
    `git push -u origin master`

7. My GitHub username and password were enetered to push all files from Git to GitHub.
8. Opened `Settings` on the GitHub repository page.
9. Chose the `master branch` option under `GitHub Pages`.

10. Further commits were added thereafter.


## Credits
Inspiration for a working model of the Simon game, with use of the sounds from this resource. A YouTube video on the Simon Game by **freecodecamp.org**. https://www.youtube.com/watch?v=n_ec3eowFLQ.

### Content
This app is my version of the classic simple memory game called **_Simon_**; ref: [Wikipedia](https://en.wikipedia.org/wiki/Simon_(game)).

### Media
The icon for the game of Simon was downloaded from https://www.favicon.cc/?action=icon&file_id=67599 and is displayed in the address bar when the webpage is open.

### Music
For the **"No!"** and **"Win!"** sounds, **Cackle3, Tamba_112** and **Cymbal**. I sourced their namesakes' at https://www.freesoundeffects.com/free-sounds/.

**Simon pad sounds**
Sounds 1-4 etc at:
https://s3.amazonaws.com/freecodecamp/simonSound1.mp3
https://s3.amazonaws.com/freecodecamp/simonSound2.mp3
https://s3.amazonaws.com/freecodecamp/simonSound3.mp3
https://s3.amazonaws.com/freecodecamp/simonSound4.mp3

### Acknowledgements
I received direction and ideas for this project from my allocated mentor.

### Disclaimer

- This project is for educational purposes only.
