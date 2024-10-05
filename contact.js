const fs = require("fs");
const readline = require("readline");
const validator = require("validator");



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Membuat folder data
  const dirPath = "./data";
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('Direktori sudah terbuat')
  } 
  
  // membuat file contacts.json jika belum ada
  const filePath = "./data/contacts.json";
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]", "utf-8");
    console.log('File sudah terbuat')
  } 
  
  const pertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
      rl.question(pertanyaan, (nama) => {
        resolve(nama);
      });
    });
  };
  
  
const saveContact = (nama, noHp, email) => {
    const contact = { nama, noHp, email };
    const data = fs.readFileSync("./data/contacts.json", "utf-8");
    const contacts = JSON.parse(data);
  
    const cekEmail = validator.isEmail(contact.email);
    const cekNomorHp = validator.isNumeric(contact.noHp);
  
    if (!cekEmail || !cekNomorHp) {
      console.log("Masukkan format email/noHp/nama yang benar!");
      rl.close();
    } else {
      contacts.push(contact);
  
      fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts));
  
      console.log("Data sudah di input");
      rl.close();
    }
}

module.exports = {saveContact, pertanyaan}