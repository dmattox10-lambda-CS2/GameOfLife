# GameOfLife
Conway's Game of Life with React Hooks!

Hosted on my private server [HERE! CLICK ME!](https://life.danielmattox.com)

This is a React implementation of Conway's Game of Life [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

I make frequent use of the useState hook since I'm using all functional components

I used the useInterval hook from [here](https://joshwcomeau.com/snippets/react-hooks/use-interval) in place of setInterval and clearInterval since I couldn't get those working with functional components and I actually like it better!

The game logic is separated out into game.js in the src directory
The game components have a good separation of concerns

I used Reactstrap, built on Bootstrap, for layout, together with bootswatch for styling because I absolutely love them!

## Custom Features
[X] Sample Cell Configurations for users to load and run
[X] Random Cell Configuration
[X] Cell Color Picker
[X] Step One Generation At A Time
[X] Allow Users To Specify Speed

### Base Game Expectations
[X] Display Current Generation
[X] Grid of cells at least 25x25 able to be toggled alive or dead
[X] Working Algorithm
[X] Section outlining Rules