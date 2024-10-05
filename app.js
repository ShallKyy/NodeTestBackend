const {saveContact, pertanyaan} = require('./contact');

const main = async () => {
  const nama = await pertanyaan('Masukkan nama anda : ');
  const noHp = await pertanyaan('Masukkan nomor hp anda : ');
  const email = await pertanyaan('Masukkan email anda : ');

  saveContact(nama, noHp, email)
};

main();
