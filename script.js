// script.js

confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  
  function ubahKartu() {
    document.getElementById("kartu").innerHTML = `
      <h1 class="font-semibold text-pink-700 text-wrap animate__animated animate__zoomIn">
        Selamat ulang tahun! Semoga panjang umur, makin banyak kebahagiaan, rezeki lancar, dan segala impian jadi kenyataan.
        Semoga kita terus bisa bareng-bareng, seru-seruan, dan saling dukung ya! 🎉🎂
      </h1>
      <h2 class="mt-3 text-pink-600 animate__animated animate__fadeIn">- Dari : Divzz -</h2>
      <button
        class="p-2 bg-pink-400 text-white rounded mt-5 w-full hover:bg-pink-600 transition ease-in-out duration-300 animate__animated animate__delay-1s animate__tada"
        onclick="refresh()"
      >
        Tutup
      </button>
    `;
  }
  
  function refresh() {
    location.reload();
  }
  