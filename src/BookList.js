import Book from './Book';
import './BookList.css';
import { books } from './books';

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

export default BookList
// https://www.amazon.in/gp/bestsellers/books/1318158031/ref=zg_bs_nav_books_1