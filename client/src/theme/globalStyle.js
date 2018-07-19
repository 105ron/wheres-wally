const globalCSS = `
  @import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One');
  @import url('https://fonts.googleapis.com/css?family=Varela+Round');
  body {
    --wallyred: #E5462B;
    --wallyblue: #4863A8;
    --redshadow: rgba(244, 85, 58, 0.7);
    --blueshadow: rgba(87, 114, 183, 0.7);
    padding: 0;
    margin: 0;
    font-family: 'Alfa Slab One',cursive;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  /*
  ***********
  CSS Transitions
  ***********
  */

 

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;

export default globalCSS;
