function addContact() {
    contactSection = document.getElementById('contact-list')

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'


    contactSection.appendChild(nameInput)

}
