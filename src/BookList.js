import './BookList.css';
const books = [
	{
		id: 1,
		author: 'Saksham Garg',
		title: 'Samsara: Enter The Valley Of The Gods',
		img: './images/book1.jpg'
	},
	{
		id: 2,
		author: 'J.K.Rowling',
		title: "Harry Potter and the Philosopher's Stone",
		img: 'https://images-eu.ssl-images-amazon.com/images/I/81m9fP+LIPL._UX300__PJku-sticker-v8,TopRight,0,-50_AC_UL600_SR600,400_.jpg'
	}
];

const BookList = () => {
	return (
		<>
			<EventExample />
			<section className='bookList'>
				{books.map((book) => {
					return (
						<Book key={book.id} {...book} />
					)
				})}
			</section>
		</>
	);
};

const EventExample = () => {
	const handleFormInpt = (e) => {
		console.log('handle form input');
		console.log(e.target.name);
		console.log(e.target.value);
	};
	const handleButtonInpt = () => {
		alert('handle button click!');
	};
	const handleFormSubmission = (e) => {
		e.preventDefault();
		console.log('Form Submission');
	};
	return (
		<section>
			{/* <form onSubmit={handleFormSubmission}> */}
			<form onSubmit={(e)=>console.log(e.target.value)}>
				<h2>Form</h2>
				<input type='text' name='Example' onChange={handleFormInpt} style={{ margin: '1rem 0' }} />
				<button type='submit'>Submit FOrm</button>
			</form>
			{/* <button onClick={handleButtonInpt}>Click Me!</button> */}
			<button onClick={() => console.log("Arrow Func")}>Click Me!</button>
		</section>
	);
};

const Book = (props) => {
	const { img, title, author } = props;
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	)
};

export default BookList;
// https://www.amazon.in/gp/bestsellers/books/1318158031/ref=zg_bs_nav_books_1