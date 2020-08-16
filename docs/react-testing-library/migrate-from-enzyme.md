---
id: migrate
title: Migrate from Enzyme
sidebar_label: Migrate from Enzyme
---
This page is for those who have experience in working with Enzyme and are trying to understand 
how to move to React Testing Library. It also has some helpful information for those who are 
comparing Enzyme with React Testing Library.


### Why should I use the react testing library?
The Enzyme is a good test library, and the library and its contributors did so much for the community. 
We thank them all so much, but it does not mean we should not talk about differences.

The primary purpose of the React Testing Library is to give you confidence by testing your components, 
like how your users will. Users don't care what happens behind the scene, and they just see the output! 
So, instead of checking each DOM element in detail, accessing the components’ internal workflow, or 
evaluating the state, would it not be more comfortable just to run your tests based on the component 
output? 

React Testing Library aims to solve the problem that many developers are already facing with Enzyme 
by writing inefficient tests. When you write more tests in Enzyme, you’ll finally block yourself 
from making any change in a component! As a result, you have some confidence, but, on the other hand, 
you slowed down your development speed and productivity, since every small change requires 
rewriting some part of your tests, even if the difference is not visible in the component output! 

Re-writing your tests in React Testing library worth it because you're trading tests that slow you 
down for tests that give you more confidence and increase your productivity in the long run.

### How to migrate from Enzyme to React Testing Library?
One thing to keep in mind that there's not a one-to-one mapping of Enzyme features 
to React Testing Library features. Many Enzyme features result in inefficient tests, 
and we are here to learn the React Testing Library’s philosophy and testing approach.

One of the keys to a successful migrate is to do it incrementally, by running the 
two test libraries side by side in the same application and porting Enzyme’s tests 
to React Testing Library one by one. It makes it possible to migrate even large 
and complex applications without disrupting other businesses because the work can 
be done collaboratively and spread over some time. 

### How to install the React Testing Library?
You can check [this page](https://testing-library.com/docs/react-testing-library/setup) 
for the complete installation and setup guide.

Here is what you should do, first you need to have React Testing Library installed 
on your machine:

npm
`npm install --save-dev @testing-library/react @testing-library/jest-dom`

or install via yarn
`yarn add --dev @testing-library/react @testing-library/jest-dom`





