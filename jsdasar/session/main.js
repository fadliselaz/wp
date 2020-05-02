


const register = () => {
    
    // GET  ELEMENT and VALUE
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const password2 = document.getElementById('password2').value
    var passwordError = document.getElementById('passwordError')

    // CEK PASSWORD
    if(password !== password2){
        passwordError.innerHTML = "password harus sama"
    }
    else if(localStorage.getItem(email)){
        alert('username sudah dipakai')
    }
    else{
        localStorage.setItem(email, password)
        alert('berhasil login')
        window.location.href = 'login.html'
    }

}

const login = ()=> {
    
    // GET ELEMENT and VALUE
    const loginEmail = document.getElementById('email').value
    const loginPassword = document.getElementById('password').value
    var passwordError = document.getElementById('passwordError')

    //CEK APAKAH ADA DI DATA LOCALSTORAGE
    if( localStorage.getItem(loginEmail) ){

        // AMBIL DATA PASSWORD
        const dataPassword = localStorage.getItem(loginEmail)
        
        if(dataPassword == loginPassword){
            alert('selamat datang')
            localStorage.setItem('isLogin', loginEmail)
            window.location.href = 'home.html'
        }else{
            passwordError.innerHTML = 'password salah !'
        }

    }else{
        alert('data tidak ditemukan')
    }
}

const logout = ()=>{
    const yakin = confirm('yakin logout?')
    if(yakin){
        localStorage.removeItem('isLogin')
        window.location.href = 'login.html'
    }
}