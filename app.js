
function bton() {
    confirm('Ada masalah dengan wesite ini?')
    prompt('Apa masalah anda?')
    alert('Maaf, server kami sedang di perbaiki')
}

const btn = document.querySelector('#menu')
const nav = document.querySelector('.nav__links')

btn.addEventListener('click', function() {
    nav.classList.toggle('menu-active')
})



function donate() {
    var tanya = prompt(
        "masukan jenis Atm anda \n 1. BCA \n 2. PayPal \n 3. GOPAY \n 4. OVO \n ketik angkanya"
      );
      
      if (tanya == 1) {
        var nom = prompt(
          "masukan Nominal yang anda mau \n 1. 50.000 \n 2. 100.000 \n 3. 500.000 \n 4. Other \n ketik angkanya"
        );
        if (nom == 1) {
          const b = prompt("Masukan pin BCA anda");
          const c = confirm(`donasi anda 50.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 2) {
          const b = prompt("Masukan pin BCA anda");
          const c = confirm(`donasi anda 100.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 3) {
          const b = prompt("Masukan pin BCA anda");
          const c = confirm(`donasi anda 500.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 4) {
          var a = prompt("Masukan nominal anda");
          const b = prompt("Masukan pin BCA anda");
          const c = confirm(`donasi anda ${a} ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        }
      } else if (tanya == 2) {
        var nom = prompt(
          "masukan Nominal yang anda mau \n 1. 50.000 \n 2. 100.000 \n 3. 500.000 \n 4. Other \n ketik angkanya"
        );
        if (nom == 1) {
          const b = prompt("Masukan pin PayPal anda");
          const c = confirm(`donasi anda 50.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 2) {
          const b = prompt("Masukan pin PayPal anda");
          const c = confirm(`donasi anda 100.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 3) {
          const b = prompt("Masukan pin PayPal anda");
          const c = confirm(`donasi anda 500.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 4) {
          var a = prompt("Masukan nominal anda");
          const b = prompt("Masukan pin PayPal anda");
          const c = confirm(`donasi anda ${a} ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        }
      } else if (tanya == 3) {
        var nom = prompt(
          "masukan Nominal yang anda mau \n 1. 50.000 \n 2. 100.000 \n 3. 500.000 \n 4. Other \n ketik angkanya"
        );
        if (nom == 1) {
          const b = prompt("Masukan pin Gopay anda");
          const c = confirm(`donasi anda 50.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 2) {
          const b = prompt("Masukan pin Gopay anda");
          const c = confirm(`donasi anda 100.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 3) {
          const b = prompt("Masukan pin Gopay anda");
          const c = confirm(`donasi anda 500.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 4) {
          var a = prompt("Masukan nominal anda");
          const b = prompt("Masukan pin Gopay anda");
          const c = confirm(`donasi anda ${a} ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        }
      } else if (tanya == 4) {
        var nom = prompt(
          "masukan Nominal yang anda mau \n 1. 50.000 \n 2. 100.000 \n 3. 500.000 \n 4. Other \n ketik angkanya"
        );
        if (nom == 1) {
          const b = prompt("Masukan pin OVO anda");
          const c = confirm(`donasi anda 50.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 2) {
          const b = prompt("Masukan pin OVO anda");
          const c = confirm(`donasi anda 100.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 3) {
          const b = prompt("Masukan pin OVO anda");
          const c = confirm(`donasi anda 500.000 ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        } else if (nom == 4) {
          var a = prompt("Masukan nominal anda");
          const b = prompt("Masukan pin OVO anda");
          const c = confirm(`donasi anda ${a} ketik oke`);
          alert("Terima kasih telah donasi ke website kami");
        }
      } else {
        alert("Maaf, angka anda invalid, coba lagi");
      }
}

const bt = document.querySelector('#bt');
bt.style.bottom = "0";
bt.style.background = "#000000";
bt.style.borderRadius = "20px";
bt.style.width = "6.25rem";
bt.style.height = "2.25rem";
bt.style.fontWeight = "900";
bt.style.position = "fixed";
bt.style.zIndex = "999";
bt.style.color = "white";
bt.style.border = "0";
bt.style.cursor = "pointer";
bt.style.margin = "0px 0px 20px 20px";
bt.style.fontFamily = "poppins", "sans-serif";


