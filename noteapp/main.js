//MEMBUAT ELEMENT CARD

const cardTemplate = (title, content, username, date)=>{

    return `
    
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
        </div>

        <div class="card-footer">
            <small>${username}</small> <br />
            <small>${date}</small>
        </div>
    </div>
    
    `

}

const mainContainer = document.getElementById('mainContainer')

mainContainer.innerHTML = cardTemplate('Ini Judul saya', 'ini content saya', 'today')