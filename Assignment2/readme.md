## What’s Box Model in CSS ?

Box model says everything on web page is essentially a rectangle that has a margin, padding and border. To understand this we take help of a example.

Padding: It is used to create space between content and border
Border: It is the boundary of the content.
Margin: It is used to create space outside the content border.

## What are the Different Types of Selectors in CSS & what are the advantages of them

There are 5 types of CSS Selector

Simple selectors - It is used to select element based on id, name & class
Combinator selector - It is used to select element based on relationship e.g. ~,+, space, >
Pseudo-Class Selectors - It is used to select elements based on special state like when mouse hovers or when a link is visited.
Pseudo-Elements Selectors - It is used to select and style a part of an element like first-line e.g. p::first-line{color: #000000}
Attribute Selectors - It is used to select elements based on attribute or attribute value. For e.g. a[target]:{background-color: yellow;}

## What is VW/VH

What are the Different Types of Selectors in CSS & what are the advantages of them

## Whats difference between Inline, Inline Block and block?

Following is the difference between inline, inline-block and block element:
Inline: do not start on a new line and only occupy the width they require. They can’t have a specified height or width.
Inline-block elements: Similar to inline but can have specified height and width.
Block element: always start on a new line and take up the full width available. They can have a specified width and height

## How is Border-box different from Content Box?

The main difference between content box and border box is the way they provide width and height to the content.

    In content box padding and border are not included so if we provide padding of 10 px and border of 5 px to a content of width 200 px then the final width of the element will be (200+10+5) px

    In border box padding and border are included so if we provide a padding of 10 px and border of 5 px to a content of width of 200px then final width of the element will be (200-10-5) px

## What’s z-index and How does it Function ?

Z-index is a CSS property that determines the order of overlapping of elements. The element with higher z-index will come on top and the one with lower z-index will be at the bottom. Z-index only works on positioned elements like absolute, relative, fixed, sticky and flex items.

## What’s Grid & Flex and difference between them?

GRID and Flex both are ways to do CSS Layout so you can create a flexible and responsive layout for your webpage.
GRID is a 2 dimensional layout structure that handles both rows and columns.
Flex is a 1 dimensional layout structure that can handle either row or column but not both.

## Difference between absolute and relative and sticky and fixed position explain with example.

Following is the difference between fixed, sticky, absolute and relative positions:
Fixed: The element is positioned relative to the viewport so it always stays at the same place even if we scroll the page.
Absolute: The element is positioned relative to the ancestor so if there’s no ancestor then it is relative to the body.
Relative: The element is positioned relative to its normal position.
Sticky: The element toggles between relative and fixed depending on the scroll so it stays relative initially but when the offset is met with the viewport it switches to being fixed. 


