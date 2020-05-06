



const inputan = ()=>{

    //kita ambil data dari inputan user
    const formInput = document.getElementById('userInput').value
    const judul = document.getElementById('judul').value
    var d = new Date() 
    var jam = d.getHours()
    var menit = d.getMinutes()
    

    const card = `
    <div class="card" style="margin: 10px;">
        <div class="card-body">
            <small class="card-title text-muted">${judul}</small>
            <hr style="width : 100%; "/>
            <p class="card-text">${formInput}</p>
            <hr/>
            <small>${jam} : ${menit}</small>
        </div>
    </div>
    `

    createCard(card)

}

const createCard = (arg1)=>{

    //mengambil data element yang akan kita INJECT
    const elmCard = document.getElementById('card')

    elmCard.innerHTML += arg1

}

