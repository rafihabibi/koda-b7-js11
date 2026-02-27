function menampilkanNama(nama, waktuTunggu) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(nama)
    },waktuTunggu);
    
  });
}
menampilkanNama("John", 1500)
  .then((namaJohn) => {
    console.log(namaJohn);
    return menampilkanNama("Ed", 2000);
  })
  .then((namaEd) => {
    console.log(namaEd);
    return menampilkanNama("Jane", 500);
  })
  .then((namaJane) => {
    console.log(namaJane);
  })
  .catch((error) => {
    console.error(error);
  });

async function jalankanAsync() {
  try {
     const nama1 = await
     menampilkanNama("John", 1500);
     console.log(nama1);
     
     const nama2 = await
     menampilkanNama("Ed", 2000);
     console.log(nama2);
     
     const nama3 = await
     menampilkanNama("Jane", 500);
     console.log(nama3);
     
  } catch(error) {
    console.error(error);
  }
}

jalankanAsync();
