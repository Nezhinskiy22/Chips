window.onload = () => {
    document.getElementById('chips-show').onclick = () => {
        console.log('work')
        let text = document.getElementById('chips-text').value
        document.getElementById('chips-text').value = ''
        let chips = document.createElement('div')
        chips.classList.add('chips')
        chips.innerText = text

        if (!document.getElementById('chips-field')) {
            let chipsField = document.createElement('div')
            chipsField.id = 'chips-field'
            document.body.appendChild(chipsField)
        }
        document.getElementById('chips-field').appendChild(chips)
        setTimeout(
            () => {
                chips.remove()
                removeChipsField()
            }, 3000
        )
    }

    function removeChipsField() {
        let chips = document.querySelectorAll('#chips-field .chips')
        if (chips.length == 0) {
            document.getElementById('chips-field').remove()
        }
    }
}