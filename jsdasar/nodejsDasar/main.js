

//BUAT DUMMY DATABASE
const dataUsername = 'fadliselaz'
const dataPassword = '12345678'

//BUAT FUNCTION Proses AUTH
// KITA AMBIL DATA DARI INPUT USER
const login = function(){

    //kita dapatkan apa yang usermasukan
    const inputUsername = document.getElementById('username').value
    const inputPassword = document.getElementById('password').value

    //BANDINGKAN DENGAN DATA DUMMY
    //Juka Sama
    if(inputUsername == dataUsername && inputPassword == dataPassword){
        alert('anda berhasil login')
        window.location.href = 'https://facebook.com'
    }else{
        alert('Username atau password salah..')
    }
}

