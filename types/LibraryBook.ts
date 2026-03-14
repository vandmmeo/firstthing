import type {Book} from './Book';
import type {Borrowable} from './Borrowable';

export class LibraryBook implements Borrowable {
    borrow: (userName: string) => void = (userName) => {
        console.log (
            "Книга" +
             this.info.title + 
            " выдана пользователю" +
            userName
        )
    };

    info: Book;
constructor (book: Book) {
    this.info = book;
}
}

