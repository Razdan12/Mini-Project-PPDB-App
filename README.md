# e-Portfolio
### link power point <a href="https://docs.google.com/presentation/d/1jfLKkzRdzGdLKsxLhY4hLKI7QgVOLsXxHRLsUiLdE-U/edit#slide=id.g18a42fef5ae_2_49" target="_blank">Download</a>

### link deploy <a href="https://cahyanto.netlify.app/" target="_blank">View</a>

## Fitur
* Data Profil
* Download PDF CV
* Halaman Portfolio
* Halaman Service
* Pesan Realtime
* Heroku
* Hasura
* Upload Foto / file ke firebase
* Halaman Admin

## Dokumentasi 
1. halaman depan user
![](doc/halaman%20user.png)

2. Halaman About 
![](doc/about.png)

3. Halaman Resume
![](doc/resume.png)

4. Halaman Portfolio
![](doc/portfolio.png)

5. Halaman Service
![](doc/service.png)

6. Halaman Pesan
![](doc/pesan.png)

7. Halaman Login
![](doc/login.png)

8. Halaman Admin
![](doc/admin.png)

lebih lengkap silakan kunjungi link deploy.<br>
> project ini masih banyak kekurangan serta masuh terdapat bug di beberapa tampilan. program ini open source bebas untuk di kembangkan lagi.

## Langkah - langkah instalasi
* masuk ke terminal editor kalian dan ketikan 
```powershell
git clone https://github.com/Razdan12/Mini-Project-Portfolio.git
```

* setelah berhasil cloning program masuk ke directori project kalian dan ketikan 
```powershell
npm install
```
atau jika menggunkana yarn
```powershell
yarn install
```

* setelah modul selesai di download masuk ke file app.js dan rubah baris ke 42 dan 44 
```javascript
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri:'https://quick-raccoon-82.hasura.app/v1/graphql', //link graph Ql Hasura
  headers:{
    'x-hasura-admin-secret' : 'VnVP6VG1OT1suqWkF7so2T0mhFtD6Ko5DJOZu3ITu3QU5vtqKEpcNOjKiJD1ggB' // Header Hasura
  }
});
```

pada config `uri` dan `headers` isikan link Graph Ql yang kalian dapatkan dari Hasura. untuk cara membuat Graph Ql di hasura silakan buka dokumentasi <a href="https://hasura.io/docs/latest/index/" target="_blank">Hasura</a>

* selanjutnya masuk ke folder `src/firebase` <br>
pada file `firebase.js` <br>
```javascript
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmw7FOoAz9UNFtNQZaiQQE71ByRxiKF1E",
  authDomain: "portofolio-b6e26.firebaseapp.com",
  projectId: "portofolio-b6e26",
  storageBucket: "portofolio-b6e26.appspot.com",
  messagingSenderId: "745708029468",
  appId: "1:745708029468:web:cb01b67248877a8690c1d9"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
```
replace semua config diatas dengan config firebase kalian. sebelumnya kalian harus sudah register ke firebase.

* setelah semua config diatas sudah di lakukan silakan jalankan program kalian dengan cara masuk ke terminal dan ketik
```powershell
npm start
```

* selamat program telah berhasil dijalankan.

> #### jika ada kesulitan dalam instalasi jangan sungkan untuk bertanya
> contact Saya<br>
> email : nur.razdan@gmail.com<br>
> whatsapp : 085158693933

## Salam Coding

