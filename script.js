function computerTurn() {
    var computer = Math.random()

    if (computer < 0.33) {
        computer = 'gunting'
    }

    else if (computer >= 0.33 && computer < 0.67) {
        computer = 'batu'
    }

    else {
        computer = 'kertas'
    }
    return computer
}

function winOrlose(computer, player) {
    if (player == computer) {
        hasil = 'SERI!'
    }

    else if (player == 'gunting') {
        if (computer == 'batu') {
            hasil = 'MAAF, KAMU KALAH!'

        }

        else {
            hasil = 'SELAMAT, KAMU MENANG!'
        }
    }

    else if (player == 'batu') {
        if (computer == 'gunting') {
            hasil = 'SELAMAT, KAMU MENANG!'

        }

        else {
            hasil = 'MAAF, KAMU KALAH!'
        }
    }

    else if (player == 'kertas') {
        if (computer == 'batu') {
            hasil = 'SELAMAT, KAMU MENANG!'

        }

        else {
            hasil = 'MAAF, KAMU KALAH!'
        }
    }
    return hasil
}

function rollTheimg() {
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gunting', 'batu', 'kertas']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) {
            i = 0
        }
    }, 100)
}

const pGunting = document.querySelector('.gunting')
pGunting.addEventListener('click', function () {
    const pilihanComputer = computerTurn()
    const pilihanPlayer = pGunting.className
    const hasil = winOrlose(pilihanComputer, pilihanPlayer)

    rollTheimg()

    setTimeout(function () {
        const imgComputer = document.querySelector('.img-komputer')
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

        const info = document.querySelector('.info')
        info.innerHTML = hasil
    }, 1000)

})

const pBatu = document.querySelector('.batu')
pBatu.addEventListener('click', function () {
    const pilihanComputer = computerTurn()
    const pilihanPlayer = pBatu.className
    const hasil = winOrlose(pilihanComputer, pilihanPlayer)

    rollTheimg()

    setTimeout(function () {
        const imgComputer = document.querySelector('.img-komputer')
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

        const info = document.querySelector('.info')
        info.innerHTML = hasil
    }, 1000)
})

const pKertas = document.querySelector('.kertas')
pKertas.addEventListener('click', function () {
    const pilihanComputer = computerTurn()
    const pilihanPlayer = pKertas.className
    const hasil = winOrlose(pilihanComputer, pilihanPlayer)

    rollTheimg()

    setTimeout(function () {
        const imgComputer = document.querySelector('.img-komputer')
        imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

        const info = document.querySelector('.info')
        info.innerHTML = hasil
    }, 1000)
})