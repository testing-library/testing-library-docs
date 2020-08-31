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

## Basic Enzyme to React Testing Library migration examples
One thing to keep in mind that there's not a one-to-one mapping of Enzyme features to React Testing Library features. 
Many Enzyme features result in inefficient tests, and we are here to learn the React Testing Library’s philosophy and 
testing approach.

React Testing Library has dozens of helpful queries which lets you access your component’s elements and their 
properties, and here we’ll show you a very basic Enzyme’s queries with React Testing Library’s alternatives.

Let’s say we have a `Welcome` component, which just shows a welcome message, and we will have a look at both Enzyme 
and React Testing Library tests to learn how we can test this component:

**React Component**

The following component gets a `name` from `props` and shows a welcome message in an `h1` element, it also has a 
text input which users can change to a different name, and the template updates accordingly.
Check the live version on [Stackblitz](https://stackblitz.com/edit/react-cs4aw4?file=src/index.js)
```

const Welcome = props => {
    const [values, setValues] = useState({
        firstName: props.firstName,
        lastName: props.lastName
    });

    const handleChange = event => {
        setValues({...values, [event.target.name]: event.target.value})
    };

    return (
        <div>
            <h1>Hello, {values.firstName} {values.lastName}</h1>

            <form>
                <label>
                    First Name
                    <input
                        value={values.firstName}
                        name="firstName"
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Last Name
                    <input
                        value={values.lastName}
                        name="lastName"
                        onChange={handleChange}
                    />
                </label>
            </form>
        </div>
    );
};

export default Welcome;

```

### Test 1: Render the component, and check if the `h1` value is correct

**Enzyme test**
```
it('should have correct welcome text', ()=>{
   const wrapper = shallow(<Welcome firstName='John' lastName='Doe'/>);
   expect(wrapper.find('h1').text()).to.equal('Welcome, John Doe');   
})
```


**React Testing library**
```
 it("should have correct welcome text", () => {
   render(<Welcome firstName='John' lastName='Doe'/>);
   expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John Doe');
});
```

As you see, both are pretty similar, Enzyme's `shallow` wrapping doesn’t descend down to sub-components, 
React Testing Library’s `render` is more similar to `mount`.

In React Testing Library, you don’t need to assign the `render` result to a variable (wrapper, or etc), 
and you can simply access the rendered output by calling the `screen`. The other good thing to know is 
that React Testing Library automatically cleans up the output for each test, so you don’t need to call 
`cleanup` on Jest’s `AfterEach` or `BeforeEach` function.

The other thing that you might notice is `getByRole` which has `heading` as its value. `heading` is the accessible
role of the `h1` element. You can learn more about them on 
[queries](https://testing-library.com/docs/dom-testing-library/api-queries#byrole) documentation page.

### Test 2: Input texts must have correct value
In the component above, the input text value will be initialized with the `props.firstName` and `props.lastName` 
values, and we need to check whether the value is correct or not

**Enzyme**
```
 it("should have correct input value", () => {
   const wrapper = shallow(<Welcome firstName='John' lastName='Doe'/>);
   expect(wrapper.find('input[name="firstName"]').value).to.equal('John');
   expect(wrapper.find('input[name="lastName"]').value).to.equal('Doe');
});
```

**React Testing Library**
```
it("should have correct input value", () => {
  render(<<Welcome firstName='John' lastName='Doe'/>);
  expect(screen.getByRole('form')).toHaveFormValues({
      firstName: 'John',
      lastName: 'Doe',
  })
});
```
Cool! It's pretty simple and handy, and the tests are clear enough that we don't need to talk so much about them.
But something that you might notice is that the `<form>` had a `role="form"` attribute, but what is it? 

`role` is one of the accessibility-related attributes that is recommended to use to improve your web application
for people with disabilities. Some elements have default `role` values and you don't need to set one for them, 
but some others like `<form>` does not have one. You could use different approaches to access the `<form>` element,
but we recommend trying to access elements by their `role` to make sure your component is accessible by people with
disabilities and those who are using screen readers. 
This [section](https://testing-library.com/docs/dom-testing-library/api-queries#byrole) 
of the query page might help you to understand better.


React Testing Library aims to test the component, like how users would, users see the button, heading, form
and other elements by their role, not by their `id` or `class`, or element tag name. When you use React Testing
Library, you should not try to access the DOM like how you would do by JQuery API. 

We made some handy query API which help you to access the component elements very efficiently,
and you can see the [list of available queries](https://testing-library.com/docs/dom-testing-library/api-queries)
in detail. 

Something else that people have a problem with is that they’re not sure which query should they use, luckily we have 
a great page which explains [which query to use](https://testing-library.com/docs/guide-which-query), so don’t forget 
to check it out!

If you still have a problem with the React Testing Library’s queries, and you’re not sure which query to use, 
there is an awesome Chrome extension named 
**[Testing Playground](https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano/related)**  
that aims to enable developers to find a better query when writing tests, and it helps you find the best queries 
to select elements. It allows you to inspect the element hierarchies in the Chrome Developer Tools, 
and provides you with suggestions on how to select them, while encouraging good testing practices. 

## using act() and wrapper.update()
In Enzyme, for some asynchronous purposes, you have to call `act()` to run your tests correctly, but in 
 React Testing Library you don't need to use `act()` most of the times since it will wrap APIs with
  `act()` so you don't need to manually wrap it.

`update()` syncs the Enzyme component tree snapshot with the react component tree, often time you might see 
`wrapper.update()` in Enzyme tests, but React Testing Library does not need something like that, 
good for you since you need to handle fewer things!


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

Easy! With the help of other modules provided by the Testing Library, we can test our components smoothly! 
To learn more about the `user-event` library, you can have a look at its 
[GitHub repository](https://github.com/testing-library/user-event#table-of-contents)

### Triggering class methods in tests (`wrapper.instance()`)
As we already discussed, we are against testing implementation details and things that uses are not aware of it,
and we aim to test and interact with the component like how our users would.

>  if your test uses instance() or state(), know that you're testing things that the user couldn't possibly
> know about or even care about, which will take your tests further from giving you confidence that things will
> work when your user uses them. [Kent C. Dodds](https://kentcdodds.com/blog/why-i-never-use-shallow-rendering#calling-methods-in-react-components)

### How to `shallow` render a component?
Generally, you should avoid mocking out components. However, if you need to, then it's pretty trivial 
using [Jest's mocking](https://jestjs.io/docs/en/manual-mocks.html) 
feature. (see our [FAQ](https://testing-library.com/docs/react-testing-library/faq))

