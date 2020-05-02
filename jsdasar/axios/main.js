const post = (dt) => {
    fetch(`http://localhost:4000/api/userdata`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dt)
    })

}

const check = (e, i) => {
    fetch(`http://localhost:4000/api/userdata?email=${e}`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }

    })
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                console.log('data ada')
                document.querySelector('.gagal').style.display = 'flex'

            } else {
                post(i)
                console.log('data berhasil dimasukan')
                // window.location.href = 'register.html'
                document.querySelector('.berhasil').style.display = 'flex'
                setTimeout(() => {
                    window.location.href = 'login.html'
                }, 3000)

            }
        })
        .catch(err => console.log(err))
}



const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const berhasil = document.querySelector('.berhasil').style.display = 'none'
    const gagal = document.querySelector('.gagal').style.display = 'none'

    const input = {
        email: email,
        password: password
    }

    check(email, input)

}


const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    fetch(`http://localhost:4000/api/userdata?email=${email}&password=${password}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }

    })
        .then(res => res.json())
        .then(data => {
            if (data.length > 0) {
                const dt = data[0]

                alert('selamat datang..' + dt.email)
                localStorage.setItem('isLogin', dt.email)
                window.location.href = 'home.html'
            } else {
                alert('username atau password salah')
            }
        })

}
