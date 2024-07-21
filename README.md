## React Practice Repository

This repository is dedicated to my personal React practice, which I followed along with a tutorial from FreeCodeCamp. The purpose of this repository is to improve my understanding and skills in React development.

## What I've Learned in React

### React Basics
- **React**: JavaScript library for building user interfaces.
- **Developers**: Developed and maintained by Facebook (Meta).
- **Components**: Fundamental building blocks in React.

### Key Concepts
- **Virtual DOM**: Efficiently updates changes in the actual DOM, reducing rendering time.
- **JSX**: JavaScript syntax extension, combining JavaScript and XML/HTML.
  - Use `className` instead of `class`.
  - Follow camelCase naming convention.
  - Always close tags.
  - Commenting in JSX (`{/* */}`).

### Components and Structure
- **Nesting Components**: Structuring UI with nested components.
  ```jsx
  // Example of nesting components
  const App = () => {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  };
  ```
- **React Developer Tools**: Browser extension for debugging React applications.

### Handling Assets
- **Public vs Src Folder**: Assets in the `public` folder are publicly accessible but not optimized. Prefer `src` for optimized assets in larger projects.

### Styling in React
- **CSS in JSX**: Inline styles with JavaScript objects.
  - Example:
    ```jsx
    const styles = {
      color: '#617d98',
      fontSize: '0.75rem',
      marginTop: '0.75rem'
    };

    const Author = () => {
      return (
        <h4 style={styles}>Saksham Garg</h4>
      );
    };
    ```

### Props and Data Flow
- **Props**: Pass data from parent to child components.
  - Access props directly:
    ```jsx
    const ChildComponent = (props) => {
      return <p>{props.message}</p>;
    };

    // Usage
    <ChildComponent message="Hello World!" />
    ```
  - Destructure props:
    ```jsx
    const ChildComponent = ({ message }) => {
      return <p>{message}</p>;
    };

    // Usage
    <ChildComponent message="Hello World!" />
    ```

### Handling Data
- **Arrays**: Use `key` for efficient rendering in lists. Prefer using item `id` for dynamic lists.
  ```jsx
  const itemList = ['Item 1', 'Item 2', 'Item 3'];

  const ListComponent = () => {
    return (
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  ```

### Events and State Management
- **Events**: Handling user interactions and events in React components.
  ```jsx
  const ButtonComponent = () => {
    const handleClick = () => {
      alert('Button clicked!');
    };

    return <button onClick={handleClick}>Click Me</button>;
  };
  ```
- **Prop Drilling**: Passing props down through multiple layers.
  - Alternative: Context API, Redux, or other state management solutions for more complex applications.
