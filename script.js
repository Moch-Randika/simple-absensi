let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');
let absensi_data = [];
absensi_form.addEventListener('submit', function (event) {
  event.preventDefault();
  let fullName = event.target.fullName.value;
  fullName = fullName.trim();
  if (fullName.length == 0) {
    alert('Silahkan masukan nama lengkap');
    return;
  }
  absensi_data.push({
    nama_lengkap: fullName,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });
  event.target.fullName.value = '';
  render_card_html();
});

function render_card_html() {
  root.innerHTML = '';
  absensi_data.forEach((el, index) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${index})"> 
    <span> ${index + 1}. &nbsp; ${el.nama_lengkap}</span>    
    <span>${el.waktu} ${el.tanggal}</span> 
    </div>`;
  });
}

function handleDelete(index) {
  absensi_data.splice(index, 1);
  render_card_html();
}
