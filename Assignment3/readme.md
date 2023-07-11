## What is a Media Query in CSS, and what is its purpose?

    Media Query is a way in CSS to make website responsive.
    for example:
    ```
    @media screen and (width: 600px) {
        body {
            color: red;
        }
    }
    ```
## How do you define a media query in CSS?

    Media Query is feature that allows you to apply different styles to a web page based on different condition like the view width window.

## Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries.

    Different device have different viewport width like a mobile have a different viewport width than let's say a laptop. So to make sure the web page adapts to the viewport width of device we use breakpoint and write CSS to make web page look adative and responsive.

    for example: applies to device having view width more than or equal to 576px. 
  ```
    @media (min-width: 576px) {
  
    }
  ```  
## What is the purpose of using Media Queries for Print Media?

    Media queries for print media serve the purpose of defining specific styles and layout adjustments that are applied when a webpage is printed. They allow web developers to customize the appearance of the printed version of a web page to ensure it is optimized for paper output.

## What is the purpose of the orientation media feature?

    Orientation is used to test the orientation view of web page i.e. landscape or portrait.
  
