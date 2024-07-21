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
		<section className='bookList'>
			{books.map((book) => {
				return (
					<Book key={book.id} {...book} />
				)
			})}
		</section>
	);
};

const Book = (props) => {
	const { img, title, author } = props;
	const displayTitle = () => {
		console.log(title);
	}
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			{/* <button onClick={() => console.log(title)}>Display Title</button> */}
			<button onClick={displayTitle}>Display Title</button>
			<h4>{author}</h4>
		</article>
	)
};

export default BookList;
// https://www.amazon.in/gp/bestsellers/books/1318158031/ref=zg_bs_nav_books_1