This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## THE CODE PUB - Easter Edition

Welcome to The Code Pub's easter workshop!

## Preparations
To get started, make sure you have `yarn` or `npm` installed on your computer. If not; follow the instructions to install homebrew here: https://docs.brew.sh/Installation.

Then install `yarn`or `npm`, instructions for `yarn` can be found here: https://yarnpkg.com/lang/en/docs/install/#mac-stable

If you do not have git installed already, install it by typing: `brew install git`
 
## Setup
To get the repository to your computer:

- Open the terminal
- Navigate to a place where you want to create the project
  - `mkdir NAME_OF_FOLDER` to create folder
  - `ls` to show what items are present in current location
  - `cd NAME_OF_FOLDER_YOU_WANT_TO_GO_TO` to open a folder
  - `cd ..` to navigate back one level
- Once you've navigated to where you want to create your project, type `git clone https://github.com/amandadahlin/tcp-easter.git`
- Go into the newly created folder by typing `cd tcp-easter`
- Install all dependencies to typing `yarn` or `npm install`
- Start it with `yarn start` or `npm start` (it will be running on open [localhost](https://localhost:3000))
- To start editing the code, open the project in a source code editor, e.g. [Visual Studio Code](https://code.visualstudio.com/)

## Instructions
1. Import <EasterEgg /> in App.js
2. Go to file EasterEgg.js
3. Add render method and return statement
4. Add content in return statement, e.g. <div className=”egg” />
5. Add constructor and a default state
6. Create an if-statement to return whole or cracked egg
7. Add method that updates the state to set cracked=true
8. Call method that cracks the egg on click
