import './BookList.css';

const firstBook = {
	author: 'Saksham Garg',
	title: 'Samsara: Enter The Valley Of The Gods',
	img: './images/book1.jpg'
};
const secondBook = {
	author: 'J.K.Rowling',
	title: "Harry Potter and the Philosopher's Stone",
	img: 'https://images-eu.ssl-images-amazon.com/images/I/81m9fP+LIPL._UX300__PJku-sticker-v8,TopRight,0,-50_AC_UL600_SR600,400_.jpg'
};

const BookList = () => {
	return (
		<section className='bookList'>
			<Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
				<p>Anim consectetur sunt do consectetur fugiat velit.</p>
				<button>Click Me!</button>
			</Book>
			<Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
		</section>
	);
};

const Book = ({ img, title, author, children }) => {
	// console.log(props)
	// const { img, title, author, children } = props;
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			{children}
		</article>
	)
};

export default BookList;
// https://www.amazon.in/gp/bestsellers/books/1318158031/ref=zg_bs_nav_books_1