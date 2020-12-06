# React

## Why use React?
### Virtual DOM
To understand why the virtual DOM is an essential element of react, we need to understand the real DOM
> “The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.”
> -MDN Web Docs

The biggest problem with manipulating the real DOM is that even a small change requires a complete re-render. 

React's virtual DOM allows us to have more control over when and how this re-render happens.

Whenever the state in our application changes, the virtual DOM start to change/add/update it's element tree, and the actual DOM remains the same. Then React compares the virtual DOM tree to the previous state of the virtual DOM tree, using the diffing algorithm. 

React will them carry out the necessary changes to only those elements that require updating. This means that through the use of the Virtual DOM, React is faster then plain vanilla JavaScript at DOM manipulation.

![virtual dom](https://user-images.githubusercontent.com/25591390/101282522-a3270980-37cd-11eb-988f-3cb8f2a1c26e.png)

### Reusable Components
React is built on re-usable components, these components can be used several times throughout the application. Applications are a collection of composable React components that can be reused multiple times.

```js
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function App() {
  return ( 
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}
```
### JSX
**JavaScript eXtension** allows us to write JavaScript that looks like HTML.
Example - class based component that renders a h1. 
```js
class HelloWorld extends React.Component {
  render() {
    return (
      <h1 className='large'>Hello World</h1>
    );
  }
}
```

### Ecosystem
React was created by Jordan Walke, an software engineer at Facebook in 2011, and was open-sourced at JSConf US in May 2013. Since then it has continued to grow in popularity. React is maintained by Facebook with a large community of developers who have added to the eco system.

```js
import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(WHAT DO I WANT TO RENDER, WHERE DO I WANT TO RENDER IT)

```