document.addEventListener('DOMContentLoaded', () => {

    const addBook = document.getElementById('addbook');
    const CenterCard = document.querySelector('.center-card');
    const CancelButton = document.getElementById('cancel-button');
    const SendButton = document.getElementById('send-button');
    const BookTitle = document.getElementById('book-title');
    const BookAuthor =  document.getElementById('author-book');
    const BookGender = document.getElementById('gender-book');
    const BookPubli = document.getElementById('publi-book');
    const FormBook = document.getElementById('form-addbook');
    const input = 

    addBook.addEventListener('click', (e) => {
        CenterCard.style.display = 'flex';
        console.log(e);
    })

    CancelButton.addEventListener('click', (e) => {
        CenterCard.style.display = 'none';
        console.log(e);
    })


    FormBook.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log(BookTitle.value)
    })
});