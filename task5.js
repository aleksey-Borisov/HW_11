function addNewBook() {
	const bookList = document.getElementById('book-list')
	const newBook = document.createElement('div')
	newBook.className = 'book'
	newBook.innerHTML = `
        <div class="title">1984</div>
        <div class="author">Джордж Оруэлл</div>
    `
	bookList.appendChild(newBook)
}

function removeSpecificBook() {
	const books = document.querySelectorAll('.book')
	books.forEach(book => {
		const title = book.querySelector('.title').textContent
		if (title === 'Преступление и наказание') {
			book.remove()
		}
	})
}

function setupBookTransfer() {
	const library1 = document.getElementById('book-list')
	const library2 = document.getElementById('book-list-2')

	library1.addEventListener('click', function (e) {
		const book = e.target.closest('.book')
		if (book) {
			setTimeout(() => {
				book.remove()
				library2.appendChild(book)
			}, 10)
		}
	})

	library2.addEventListener('click', function (e) {
		const book = e.target.closest('.book')
		if (book) {
			setTimeout(() => {
				book.remove()
				library1.appendChild(book)
			}, 10)
		}
	})
}

function init() {
	addNewBook()
	removeSpecificBook()
	setupBookTransfer()
}

document.addEventListener('DOMContentLoaded', init)
