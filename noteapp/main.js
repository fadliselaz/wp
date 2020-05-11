//MEMBUAT ELEMENT CARD
const cardTemplate = (id, title, content, username, date, i)=>{

    return `
        <div id="noteEditModal${id}" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <h3 class="text-dark medium">Edit Note</h3>
                        <form action="#" onsubmit=editNote(${id})>

                            <div class="form-group">
                                <label for="edit-username">Username</label>
                                <input id="edit-username-${id}" class="form-control" type="text" required value="${username}">
                            </div>

                            <div class="form-group">
                                <label for="edit-title">Judul</label>
                                <input id="edit-title-${id}" class="form-control" type="text" required value="${title}">
                            </div>

                            <div class="form-group">
                                <label for="edit-noteArea">Note</label>
                                <textarea id="edit-noteArea-${id}" class="form-control" rows="3" required>${content}</textarea>
                            </div>

                            <button class="btn btn-warning w-100" type="submit">Edit note</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    <div class="card" style="animation-delay : .${i + 2}s;" data-toggle="modal" data-target="#noteEditModal${id}">

        <span class="material-icons text-info small deleteIcon" data-toggle="modal" data-target="#noteEditModal${id}" style="margin-right : 20px;">  edit  </span>

        <span class="material-icons text-secondary small deleteIcon" onclick="deleteNote(${id})">  delete  </span>

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
    const spiner = document.querySelector('.spiner')
    spiner.style.display = 'flex'

    //MENGAMBIL DATA DARI JSON SERVER
    fetch(`http://localhost:3000/note`, {
        mode : 'cors',
        method : 'GET',
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {

        // MEMATIKAN SPINER
        spiner.style.display = 'none'

        // MENAMPILKAN DATA DI CONSOLE BROWSER
        console.log(data)

        // MENDAPATKAN ELEMENT CONTAINER
        const mainCon = document.getElementById('mainContainer') 

        // MAPPING DATA YANG DIDAPATKAN
        data.map( (e, i)=>{
            // INNER HASIL DATA KE ELEMENT CONTAINER
            mainCon.innerHTML += cardTemplate(e.id, e.title, e.content, e.username, e.date, i)
        } )
    })
    .catch(err => console.log(err))
    
}

// MEMBUAT FUNCTION BERJALAN 


const inputData = ()=>{
    //COLLECT DATA DARI FORM
    const us = document.getElementById('username').value
    const ttl = document.getElementById('title').value
    const nt = document.getElementById('noteArea').value
    // const dt = getWaktu()

        fetch('http://localhost:3000/note', {
            mode : 'cors',
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                username : us,
                title : ttl,
                content : nt,
                date : '13 Juli 1987',
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.length != 0){
                alert('note berhasil di tambahkan..')
                window.location.href = '/'
            }else{
                alert('note gagal di tambahkan..')
            }
        })
        .catch(err => console.log(err))
}

const deleteNote = (id)=>{

    fetch(`http://localhost:3000/note/${id}`,{
        mode : 'cors',
        method : 'DELETE',
        headers : {
            "Content-Type" : "application/json"
        }
    })
    .then(res => {
        if(res){
            alert('Note berhasil di delete')
        }else{
            alert('Note gagal di delete')
        }
    })
    .catch(err => console.log(err))

}

const editNote = (id)=>{
    //KITA DAPATKAN VALUE DARI MODAL EDIT FORM
    const us = document.getElementById(`edit-username-${id}`).value
    const ttl = document.getElementById(`edit-title-${id}`).value
    const nt = document.getElementById(`edit-noteArea-${id}`).value

    fetch(`http://localhost:3000/note/${id}`,{
        mode : 'cors',
        method : 'PUT',
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            username : us,
            title : ttl,
            content : nt,
            date : '13 Juli 1987'
        })
    })
    .then(res => {
        console.log(res.status)
        res.json()
        alert('data berhasil di ubah..')
    })
    .catch(err => console.log(err))

}

const searchNote = ()=>{
    const con = document.getElementById("mainContainer")
    con.innerHTML = ""
    const keyWord = document.getElementById('search').value
    console.log(keyWord)
    getData(keyWord)
}

window.addEventListener('load', ()=>{
    getData()
    const spiner = document.querySelector('.spiner')
    spiner.style.display = 'flex'
})