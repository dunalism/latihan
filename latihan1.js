//Pertanyaan sederhana benar atau salah
//masukan nama,
// masukan kata bismillah dengan prompt
//jika benar lanjut ke pertanyaan pertama, jika salah ulangi masukan kata bismillah terus seperti itu
//
//benar poin 1 salah 0
//di pertanyaan terakhir hitung jumlah poin
//lalu munculkah hasilnya

let nama = prompt('Masukan Nama:')
alert(`Selamat datang ${nama} \nAyo asah pengetahuan islam mu!`);
alert('Ada 10 Pernyataan. tekan "ok" jika pernyataannya benar dan tekan "batal/cancel", jika pernyataannya salah');
let bismillah = '';
while (bismillah !== 'bismillah') {
    bismillah = prompt('Sebelum mulai, baca bismillah terlebih dahulu\nJika sudah, ketik bismillah (huruf kecil semua)');
    if (bismillah === 'bismillah') {
        var pertanyaan1 = confirm ('Sholat lima waktu adalah wajib bagi setiap Muslim.\nbenar atau salah?');
    } else { //true
        while (bismillah !== 'bismillah') {
        bismillah = prompt('Sebelum mulai, baca bismillah terlebih dahulu\nJika sudah, ketik bismillah (huruf kecil semua)');
        if (bismillah === 'bismillah') {
        var pertanyaan1 = confirm ('Sholat lima waktu adalah wajib bagi setiap Muslim.\nbenar atau salah?');
        }
        }
    }
}
var pertanyaan2 = confirm ('Zakat hanya diberikan kepada keluarga dekat.\nbenar atau salah?'); //false
var pertanyaan3 = confirm ('Shalat adalah rukun Islam yang pertama.\nbenar atau salah?'); //false
var pertanyaan4 = confirm ('Puasa Ramadhan dimulai saat matahari terbenam.\nbenar atau salah?'); //false
var pertanyaan5 = confirm ("Al-Qur'an terdiri dari 114 surat.\nbenar atau salah?"); //true
var pertanyaan6 = confirm ('Haji merupakan salah satu rukun Islam.\nbenar atau salah?'); //true
var pertanyaan7 = confirm ('Nabi Muhammad SAW lahir di kota Madinah\nbenar atau salah?'); //false
var pertanyaan8 = confirm ('Hari raya Idul Fitri dirayakan setelah bulan Ramadhan berakhir.\nbenar atau salah?'); //true
var pertanyaan9 = confirm ('Salat Tarawih dilakukan setiap malam selama bulan Ramadhan.\nbenar atau salah?'); //true
var pertanyaan10 = confirm ("Ka'bah adalah arah kiblat bagi umat Muslim dalam shalat.\nbenar atau salah?"); //true
var skor = 0;

if (pertanyaan1===true) {
    skor += 1}
if (pertanyaan2===false) {
    skor += 1}
if (pertanyaan3===false) {
    skor += 1}
if (pertanyaan4===false) {
    skor += 1}
if (pertanyaan5===true) {
    skor += 1}
if (pertanyaan6===true) {
    skor += 1}
if (pertanyaan7===false) {
    skor += 1}
if (pertanyaan8===true) {
    skor += 1}
if (pertanyaan9===true) {
    skor += 1}
if (pertanyaan10===true) {
    skor += 1}


console.log(skor);
alert(`Selamat! skor anda adalah\n${skor}`);
