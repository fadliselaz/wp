

// Prompt akan menampung data ke
// dalam variabel
const nama = prompt('masukan nama kamu : ')

//kita menggunakan variable nama 
//untuk menuliskannya ke layar browser
// document.write(nama)

//kita akan coba CONCAT
//menggabungkan STRING dengan data 
//dari Variable
// document.write(`selamat datang <b>${nama}</b>..`)

//Kita membuat sebuah ELEMENT HTML
//menggunakan bantuan BACKTICK
//dan juga menjalankan CONCAT di dalamnya
document.write(`

    <div style="
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellow;
    ">
        <h3>selamat datang</h3>
        <h1>${nama}</h1>
    </div>

`)
