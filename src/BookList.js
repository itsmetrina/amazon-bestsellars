import Book from './Book';
import './BookList.css';
import { books } from './books';

const BookList = () => {
	return (
		<>
			<h1>Bestsellers in Action & Adventure</h1>
			<section className='bookList'>

				{books.map((book, index) => {
					return (
						<Book key={book.id} {...book} rank={index} />
					)
				})}
			</section>
		</>
	);
};

export default BookList
// https://www.amazon.in/gp/bestsellers/books/1318158031/ref=zg_bs_nav_books_1