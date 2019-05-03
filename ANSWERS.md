## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

JS is not a typed language so PropTypes allows us to check that data being passed is of the type you are expecting. This is very useful for debugging and error checking.


- [ ] Describe a life-cycle event in React?

An example of a life-cycle event would be "componentDidMount".  This event will trigger application logic after rendering.

- [ ] Explain the details of a Higher Order Component?

HOCs are components that receive another component as their argument and return a new component. This allows developers to reuse functionality between components and limits repeating chunks of code.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

 1. Vanilla CSS - this is traditional and easy to read.
 2. Styled components - this allows you to write styles in the same file as your component. Useful for reusable view elements.
 3. Inline styles- style travels with the component so very easy to read and modify at the element/component level.