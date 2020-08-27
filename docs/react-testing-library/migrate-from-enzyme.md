---
id: migrate
title: Migrate from Enzyme
sidebar_label: Migrate from Enzyme
---
This page would not go into detail, but it’s for those who have experience in working with Enzyme and are trying to
understand how to move to React Testing Library. It also has some helpful information for those who are comparing 
Enzyme with React Testing Library.

## What is React Testing Library?
React Testing Library is part of an open-source project named [Testing Library](https://github.com/testing-library). 
There are several other helpful tools and libraries in the Testing Library project which you can use them to write more 
efficient tests. Beside the React Testing Library, here are some other Testing Library’s libraries that can help you 
along the way:

* **[Jest-dom](https://github.com/testing-library/jest-dom)**: The library provides a set of custom jest matchers that 
you can use to extend jest. These will make your tests more declarative, clear to read, and to maintain. 

* **[user-event](https://github.com/testing-library/user-event):** user-event tries to simulate the real events that 
would happen in the browser as the user interacts with it. For example, userEvent.click(checkbox) would change the 
state of the checkbox.

## Why should I use the React Testing Library?
Enzyme is a good test library. The library and its contributors did so much for the community. We thank them all, 
but it does not mean we should not talk about differences and how we are doing better.

The primary purpose of the React Testing Library is to give you confidence by testing your components, like how your 
users will. Users don't care what happens behind the scene, and they just see the output! So, instead of accessing the 
components’ internal workflow, or evaluating the `state`, would it not be more comfortable just to run your tests 
based on the component output? 

React Testing Library aims to solve the problem that many developers are already facing with Enzyme by writing 
inefficient tests and taking care of 
[implementation details](https://kentcdodds.com/blog/testing-implementation-details). When you write more tests in 
Enzyme, you’ll finally block yourself from making any change in a component! As a result, you might have some 
confidence (true or false!), but, on the other hand, you slowed down your development speed and productivity, 
since every small change requires rewriting some part of your tests, even if the change you made does not affect 
the component’s output.

Re-writing your tests in React Testing library worth it because you're trading tests that slow you down for tests 
that give you more confidence and increase your productivity in the long run.

## How to migrate from Enzyme to React Testing Library?
One of the keys to a successful migrate is to do it incrementally, by running the two test libraries side by side in 
the same application and porting Enzyme’s tests to React Testing Library one by one. It makes it possible to migrate 
even large and complex applications without disrupting other businesses because the work can be done collaboratively 
and spread over some time. 

## Install React Testing Library
You can check [this page](https://testing-library.com/docs/react-testing-library/setup) for the complete installation 
and setup guide.

Here is what you should do, first you need to install the React Testing Library:

With NPM

`npm install --save-dev @testing-library/react @testing-library/jest-dom`

With Yarn

`yarn add --dev @testing-library/react @testing-library/jest-dom`

## Import React Testing Library to your test 
Let’s say we’re using Jest (you can use other test frameworks as well), then you just have to import the following 
modules into your test file:

```
// @todo what are the reasons to import React to make React Testing Library work? 
import React from 'react';

/**
* render: lets us render the component (like how React would)
* screen: It’s almost as same as accessing the “document.body” 
**/
import {render, screen} from '@testing-library/react'
```

The test structure is as same as how you would write it in Enzyme

```
describe('Describe the test', () => {
   it("test title", () => {
// Your tests come here...
   });
})

```

## Basic Enzyme to React Testing Library migration
One thing to keep in mind that there's not a one-to-one mapping of Enzyme features to React Testing Library features. 
Many Enzyme features result in inefficient tests, and we are here to learn the React Testing Library’s philosophy and 
testing approach.

React Testing Library has dozens of helpful queries which lets you access your component’s elements and their 
properties, and here we’ll show you a very basic Enzyme’s queries with React Testing Library’s alternatives.

Let’s say we have a `Welcome` component, which just shows a welcome message, and we will have a look at both Enzyme 
and React Testing Library tests to learn how we can test this component:

**Enzyme**
```
it('should have correct welcome text', ()=>{
   const wrapper = shallow(<Welcome  name='John Doe'/>);
   expect(wrapper.text()).to.equal('Welcome, John Doe');   
})
```


**React Testing library**
```
 it("should have correct welcome text", () => {
   render(<Welcome name='John Doe'/>);
   expect(screen.getByText('Welcome, John Doe')).toBeInTheDocument();
});
```
Alright! as you see, both are pretty similar, Enzyme's `shallow` wrapping doesn’t descend down to sub-components, 
React Testing Library’s `render` is more similar to `mount`.

You don’t need to assign the `render` result to a variable (ex wrapper, or etc), and you can simply access the 
rendered output by calling the `screen`. The other good thing to know is that React Testing Library automatically 
cleans up the output for each test, so you don’t need to call `cleanup` on Jest’s `AfterEeach` function.

React Testing Library aims to test the component, like how users would, users see the button, heading, and other
elements by their role, not by their `id` or `class`, or element tag name. When you use React Testing Library, you 
should not try to access the DOM like how you would do by JQuery API. We made some handy which help you to access 
your elements very efficiently. 

You can see the [list of available queries](https://testing-library.com/docs/dom-testing-library/api-queries) in detail. 
Something else that people have a problem with is that they’re not sure which query should they use, luckily we have 
a great page which explains [which query to use](https://testing-library.com/docs/guide-which-query), so don’t forget 
to check it out!

If you still have a problem with the React Testing Library’s queries, and you’re not sure which query to use, 
there is an awesome Chrome extension named 
**[Testing Playground](https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano/related)**  
that aims to enable developers to find a better query when writing tests. nd it helps you find the best queries 
to select elements. It allows you to inspect the element hierarchies in the Chrome Developer Tools, 
and provides you with suggestions on how to select them, while encouraging good testing practices. 

## using act() and wrapper.update()
In Enzyme, for some asynchronous purposes, you have to call `act()` to run your tests correctly, but you don't need to use 
`act()` most of the times since React Testing Library will wrap APIs with `act()` so you don't need to manually wrap it.

`update()` syncs the Enzyme component tree snapshot with the react component tree, often time you might see `wrapper.update()`
 in Enzyme, but React Testing Library does not need something like that, good for you since you need to handle fewer things!
 
## Finding elements
As for Enzyme, there are several ways to access elements in React Testing Library as well. Let's imagine we have the 
following Enzyme test
@todo continue from here


## Simulate user events
There are two ways to simulate user events, one is a perfect library named 
[`user-event`](https://github.com/testing-library/user-event), and the other way is  to use 
[`fireEvent`](https://testing-library.com/docs/dom-testing-library/api-events) which simulated
a copy of the DOM on Node by using jsdom. We recommend using `user-event` since it simulates the real events that would 
happen in the browser as the user interacts with it.  

To use the `user-event`, you simply need to install it:

With NPM:

`npm install @testing-library/user-event @testing-library/dom --save-dev`

With Yarn:

`yarn add @testing-library/user-event @testing-library/dom --dev`


Now you can import it into your test:

`import userEvent from '@testing-library/user-event'`


To demonstrate how to use `user-event` library, imagine we have a component named Checkbox, and it only shows a checkbox,
 and we want to simulate the user event with this component, here is the component:

```
// Checkbox.js
import React from 'react'
const Checkbox = () => {
   return (
       <div>
           <label htmlFor="checkbox">Check</label>
           <input id="checkbox" type="checkbox" />
       </div>
   )
}

export default Checkbox;
```

And here we want to test when a user click on the checkbox, does the value change to “checked”? So, let’s see how we 
write a test for that case:

```
it('should to handle click correctly', () => {
  
  render(<Checkbox/>)

  userEvent.click(screen.getByText('Check'))
  expect(screen.getByLabelText('Check')).toHaveAttribute('checked', true)
})
```

You see! With the help of other modules provided by the Testing Library, we can test our components smoothly! 
To learn more about the `user-event` library, you can have a look at its 
[GitHub repository](https://github.com/testing-library/user-event#table-of-contents)
