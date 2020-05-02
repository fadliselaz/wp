

// dummy database
const dataUsername = 'admin'
const dataPassword = '1234'

//membuat sebuah function unutk Validasi
const login = function(){

    //tampung apapun yang user masukan
    const inputUsername = document.getElementById('username').value
    const inputPassword = document.getElementById('password').value

    //kita akan bandingkan data dengan inputan user
    if (inputUsername == dataUsername && inputPassword == dataPassword ) {
        alert(`Selamat datang ${inputUsername}`)
        window.location.href = 'home.html'

        localStorage.setItem('qazwsx', true)

    }else{
        alert('username atau password kurang tepat..')
    }

}