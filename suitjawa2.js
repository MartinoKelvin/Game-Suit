function getPilihanComputer() {
    const comp = Math.random();

    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp <= 0.67) return 'orang';
    return 'semut';
}


function getHasil(comp, player) {
    if (player == comp)
        return 'SERI !';

    if (player == 'gajah')
        return (comp == 'orang') ? 'menang' : 'kalah';

    if (player == 'orang')
        return (comp == 'semut') ? 'menang' : 'kalah';

    if (player == 'semut')
        return (comp == 'gajah') ? 'menang' : 'kalah';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktumulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktumulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) i = 0;

    }, 100);
}




const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihancomputer = getPilihanComputer();
        const pilihanplayer = pil.className;
        const hasil = getHasil(pilihancomputer, pilihanplayer);
        console.log(hasil);

        putar();

        setTimeout(function () {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihancomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    })
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihancomputer = getPilihanComputer();
//     const pilihanplayer = pGajah.className;
//     const hasil = getHasil(pilihancomputer, pilihanplayer);
//     console.log(hasil);


//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihancomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });



// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihancomputer = getPilihanComputer();
//     const pilihanplayer = pOrang.className;
//     const hasil = getHasil(pilihancomputer, pilihanplayer);
//     console.log(hasil);


//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihancomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });



// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihancomputer = getPilihanComputer();
//     const pilihanplayer = pSemut.className;
//     const hasil = getHasil(pilihancomputer, pilihanplayer);
//     console.log(hasil);


//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihancomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });





















