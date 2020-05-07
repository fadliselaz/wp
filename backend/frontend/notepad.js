

const card = (title, content, id, dt, author)=>{

    const crd = `
    
    <div class="card col-lg-3 " style="position: relative;" id="card-${id}" value={true}>

        <span class="material-icons medium closeButton"
            style="position: absolute; right: 5px; top: 5px;" onclick="deleteNote(${id})">delete_forever
        </span>

        <span class="material-icons medium editButton"
            style="position: absolute; right: 30px; top: 5px;" onclick="showTogle(${id})">edit
        </span>

        <span class="small greenButton btn btn-success btn-sm"
            style="position: absolute; top: 5px; left: 5px; width: 15px; height: 15px; border-radius:20px;" onclick="completeTogle(${id}, 'green')">
        </span>

        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text content">${content}</p>
            <hr>
            <small class="card-small text-muted small ">${author}</small><br>
            <small class="text-muted" >${dt}</small>

            <div class="editForm" id="editForm-${id}" >

                <div class="form-group">
                    <label for="editAuthor">Author</label>
                    <input id="editAuthor-${id}" class="form-control" type="text" value="${author}">
                </div>
        
                <div class="form-group">
                    <label for="editTitle">Title</label>
                    <input id="editTitle-${id}" class="form-control" type="text" value="${title}">
                </div>
        
                <div class="form-group">
                    <label for="editNote">Note</label>
                    <textarea id="editNote-${id}" class="form-control" rows="3" >${content}</textarea>
                </div>

                <div class="btn-group w-100" role="group" aria-label="Button group">
            
                    <button class="btn btn-success " onclick="editNote(${id})">edit</button>
                    <button class="btn btn-warning " onclick="showTogle(${id})">cancel</button>
                </div>

        
    
            </div>

        </div>

    </div>
    `
    return crd
        
}

//CREATE DATA
const tambahNote = ()=>{
    const dt = new Date()
    const waktu = `
    ${dt.getDate()}:${dt.getDay()}:${dt.getFullYear()} / 
    ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} WIB
    `
    const ath = document.getElementById('author')
    const ttl = document.getElementById('title')
    const nt = document.getElementById('note')

    fetch('http://localhost:3000/notes', {
        mode : 'cors',
        method : 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            id : null,
            author : ath.value,
            title : ttl.value,
            note : nt.value,
            date : waktu

        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    window.location.href = "#"
}

//READ DATA
const loadNote = ()=>{
    
    fetch('http://localhost:3000/notes', {
        mode : 'cors',
        method : 'GET'
    })
    .then(res => res.json())
    .then(data => {
        data.map((e)=>{
            var conn = document.getElementById('noteArea')
            conn.innerHTML += card(e.title, e.note, e.id, e.date, e.author)
            console.log(e.author);
            
        })
    })
}

//DELETE
const deleteNote = (x)=>{
    const yakin = confirm('yakin hapus ?')
    if(yakin){
        fetch(`http://localhost:3000/notes/${x}`, {
            mode : 'cors',
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
}

// EDIT
const editNote = (id)=>{
    const dt = new Date()
    const editAuthor = document.getElementById(`editAuthor-${id}`)
    const editTitle = document.getElementById(`editTitle-${id}`)
    const editNote = document.getElementById(`editNote-${id}`)
    const waktu = `
    ${dt.getDate()}:${dt.getDay()}:${dt.getFullYear()} / 
    ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} WIB
    `


    fetch(`http://localhost:3000/notes/${id}`, {
        mode : 'cors',
        method : 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            id : null,
            author : editAuthor.value,
            title : editTitle.value,
            note : editNote.value,
            date : waktu

        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// TOGLE SHOW EDIT
const showTogle = (id)=>{
    const show = document.getElementById(`editForm-${id}`)
    const getAtr = show.style.display
    show.style.display = getAtr == "none" ? "contents" : "none"
}

const completeTogle = (id, color)=>{
    const card = document.getElementById(`card-${id}`)
    const cl = card.style.backgroundColor
    card.style.backgroundColor = cl == color ? 'white' : color

}

//AUTO LOAD
window.addEventListener('load', ()=>{
    loadNote()
})

