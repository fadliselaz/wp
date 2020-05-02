

const register = ()=>{
    // alert('ehlo')
    // GET INPUT VALUE
    const email = document.getElementById('email').value
    const password1 = document.getElementById('password1').value
    const password2 = document.getElementById('password2').value
    const passErr = document.getElementById('passErr')

    // CHECK PASSWORD
    if(password1 !== password2){
        passErr.innerHTML = `password harus sama`
    }else{
        localStorage.setItem(email, password1)
        alert('berhasil register')
        window.location.href = 'login.html'

    }

}

const login = () => {

    // GET INPUT VALUE
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if(localStorage.getItem(email) && localStorage.getItem(email) == password){
        alert('berhasil login')
        localStorage.setItem('isLogin', email)
        window.location.href = "home.html"
    }else{
        alert('username atau password salah')
    }

}