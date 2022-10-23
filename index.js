// // array string
// // Coba sendiri code dr w3schools -> JAVASCRIPT -> ARRAY
// const cars = [
//     'ayla',
//     'agya',
//     'calya',
//     'sigra',
//     'innova',
//     'kijang'
// ]

// const numbers = [1,2,3,4,5,6,7]
// console.log(cars)
// console.log(numbers)

// document.write(cars + '<br>')
// document.write(numbers + '<br>')
// //kalo mau tampilin data yang ke-3 misalnya (dihitung dr 0 )
// document.write(cars[3] + '<br>')

// //cara tampilkan type mobil & variabel ke 3 dlm 1 baris 
// document.write('<span>Type Mobil</span>: ' + cars[3])

// //cara tampilkan type mobil variabel ke 3 di paragraf baru ( otomatis ke bawah)
// document.write('<p></p>' + cars[3] + '<br>')

// //utk print jumlah data 
// document.write('<span>Jumlah Data</span>: ' + cars.length +'<br>' )

// //join : data menjadi 1
// document.write('<span>Join data</span>: ' + cars.join('-') + '<br>')

// // funsi pop : menghapus data terakhir tapi dia 
// //akan tampilin data yg akan dihapus saja
// document.write('<span>Pop data</span>: ' + cars.pop() + '<br>')

// document.write(cars +'<br>')

// document.write('<span>Add data</span>: ' + cars.push('BMW') + '<br>')
// document.write(cars +'<br>')

// //CONCAT Tambah data array baru : 
// // const warnamobil = ["merah", "silver", "blue"];

// // const TypeMobildanWarna = cars.concat(warnamobil);

// // document.getElementById("demoGabungData").innerHTML = TypeMobildanWarna;

// //LOOP
// //bisa index +1
// for(index = 0; index < cars.length ; index +=2 ){ 
//     document.write(cars[index] + '<br>')

// }


//  const data = [
//     {
//         "id": 7,
//         "email": "michael.lawson@reqres.in",
//         "first_name": "Michael",
//         "last_name": "Lawson",
//         "avatar": "https://reqres.in/img/faces/7-image.jpg"
//     },
//     {
//         "id": 8,
//         "email": "lindsay.ferguson@reqres.in",
//         "first_name": "Lindsay",
//         "last_name": "Ferguson",
//         "avatar": "https://reqres.in/img/faces/8-image.jpg"
//     },
//     {
//         "id": 9,
//         "email": "tobias.funke@reqres.in",
//         "first_name": "Tobias",
//         "last_name": "Funke",
//         "avatar": "https://reqres.in/img/faces/9-image.jpg"
//     },
//     {
//         "id": 10,
//         "email": "byron.fields@reqres.in",
//         "first_name": "Byron",
//         "last_name": "Fields",
//         "avatar": "https://reqres.in/img/faces/10-image.jpg"
//     },
//     {
//         "id": 11,
//         "email": "george.edwards@reqres.in",
//         "first_name": "George",
//         "last_name": "Edwards",
//         "avatar": "https://reqres.in/img/faces/11-image.jpg"
//     },
//     {
//         "id": 12,
//         "email": "rachel.howell@reqres.in",
//         "first_name": "Rachel",
//         "last_name": "Howell",
//         "avatar": "https://reqres.in/img/faces/12-image.jpg"
//     }
//  ]
 
//  var container = document.getElementById("di-user");
//  for (user of data) {
//      // iterate location properties
//      for (var prop in user) {
//        if (Object.prototype.hasOwnProperty.call(user, prop)) {
//          //create and append grid item
//          var item = document.createElement("DIV");
//          item.classList.add(user[prop]);
//          item.innerHTML = user[prop];
//          container.appendChild(item);
//        }
//      }
//    }
//    axios.get('https://reqres.in/api/users?page=2')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// --CARA MENAMPILKAN NAMA & UMUR ---
// function user (name, age){
//     console.log('Nama : ' , name, 'dan usia ', age)
// }

// //pakai user utk isi data saja 
// user ('Ken', 13)
// user ('Junji', 10)

// //cara 2 
// const user2 = function(name,age){
//     const result = `Nama: ${name} dan usia : ${age}`
//     return result 
// }

// const Ken = user2('Ken', 13)
// const Junji = user2('Junji', 10)
// console.log(Ken)
// console.log(Junji)

// const user3 = (nama, usia) =>{
//     const result = `Nama : ${nama} dan usia : ${usia}`
//     return result

// }
// console.log(user3('Ken',13))
// console.log(user3('Junji',10))

// --CARA MENAMPILKAN NAMA & UMUR ---

// const score = 40
// if(score > 50 ){
//     console.log('Lulus')
// } else {
//     console.log('Tidak Lulus')
// }

const scoreMath = 70

if ((scoreMath > 80) &&  (scoreMath <100 ))  {
    console.log('Sangat Memuaskan')
} else if ((scoreMath > 50)){
    console.log('Lulus Memuaskan')
} else if ((scoreMath < 50)){
    console.log('Tidak Lulus')
} else  {
    console.log('Selamat Belajar')
}
