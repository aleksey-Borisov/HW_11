document.querySelector('h1').textContent = 'Моя Собственная Библиотека'

const books = document.querySelectorAll('.book')
books.forEach(book => {
	const title = book.querySelector('.title')
	title.style.color = 'green'
	book.style.backgroundColor = '#ffffcc'
})

const bookList = document.getElementById('book-list')
const newBook = document.createElement('div')
newBook.className = 'book'
newBook.innerHTML = `
    <div class="title">1984</div>
    <div class="author">Джордж Оруэлл</div>
`
bookList.appendChild(newBook)

const booksToRemove = document.querySelectorAll('.book')
booksToRemove.forEach(book => {
	const title = book.querySelector('.title').textContent
	if (title === 'Преступление и наказание') {
		book.remove()
	}
})
