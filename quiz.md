1. What is a React component?

A function that returns React elements.

2. What's wrong with this code?
```jsx
function myComponent() {
  return (
    <small>I'm tiny text!</small>
  )
}
```

The component name should be capitalized.

3. What's wrong with this code?
```jsx
function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" alt="React logo" width="40px" />
      </nav>
    </header>
  )
}

ReactDOM.render(Header(), document.getElementById('root'))
```

Instead of `Header()`, it should be `<Header />`. It should be a regular HTML tag.
