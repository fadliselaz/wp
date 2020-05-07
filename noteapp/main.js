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

// const mainContainer = document.getElementById('mainContainer')
// mainContainer.innerHTML = cardTemplate('Ini apps saya', 'ini content saya', 'today')

const getData = ()=>{

    //MENGAMBIL DATA DARI JSON SERVER
    fetch('http://localhost:3000/note', {
        mode : 'cors',
        method : 'GET',
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {

        // MENAMPILKAN DATA DI CONSOLE BROWSER
        console.log(data)

        // MENDAPATKAN ELEMENT CONTAINER
        const mainCon = document.getElementById('mainContainer') 

        // MAPPING DATA YANG DIDAPATKAN
        data.map( (e)=>{
            // INNER HASIL DATA KE ELEMENT CONTAINER
            mainCon.innerHTML += cardTemplate(e.title, e.content, e.username, e.date)
        } )
    })
    .catch(err => console.log(err))
}

getData()