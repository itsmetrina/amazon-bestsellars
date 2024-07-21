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
  const BookList = () => {
    return (
      <>
        <Book />
      </>
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
	const Author = () => {
      return (
        <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.75rem'}}>Saksham Garg</h4>
      );
    };
	```
	- Alternative: Define styles as constants.
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

### Props Handling Examples

- **Props**: Pass data from parent to child components.
  - Access props directly: (`props.obj`):
	```jsx
	// Parent Component
	const BookList = () => {
		return <Book title="Samsara: Enter The Valley Of The Gods" author="Saksham Garg" />;
	};

	// Child Component
	const Book = (props) => {
		return (
			<div>
				<p>Title: {props.title}</p>
				<p>Author: {props.author}</p>
			</div>
		);
	};
	```

	#### Destructure props (`const { obj1, obj2 } = props`):
	```jsx
	// Parent Component
	const BookList = () => {
		const data = {
			title: 'Samsara: Enter The Valley Of The Gods',
			author: 'Saksham Garg.'
		};

		return <Book {...data} />;
	};

	// Child Component
	const Book = ({ title, author }) => {
		return (
			<div>
				<h2>{title}</h2>
				<p>{author}</p>
			</div>
		);
	};
	```

	#### Using function parameters destructuring (`({ obj1, obj2 }) => ...`):
	```jsx
	// Parent Component
	const BookList = () => {
		const bookDetails = {
			title: 'Samsara: Enter The Valley Of The Gods',
			author: 'Saksham Garg.'
		};

		return <Book bookDetails={bookDetails} />;
	};

	// Child Component
	const Book = ({ bookDetails }) => {
		const { title, author } = bookDetails;

		return (
			<div>
				<p>Name: {title}</p>
				<p>Age: {age}</p>
				<p>Location: {location}</p>
			</div>
		);
	};
	```

	#### Special prop: children for rendering content between component tags:
	```jsx
	// Parent Component
	const BookList = () => {
		return (
			<Book>
				<p>This content will be rendered as children.</p>
				<button>Click Me</button>
			</Book>
		);
	};

	// Child Component
	const Book = (props) => {
		return (
			<div>
				<h2>Child Component</h2>
				<div>{props.children}</div>
			</div>
		);
	};
	```

### Handling Data
- **Arrays**: Use `key` for efficient rendering in lists. Prefer using item `id` for dynamic lists.
  ```jsx
  const itemList = ['Item 1', 'Item 2', 'Item 3'];

  const BookList = () => {
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
