# 👕 Hacktiv Shirt Store

⏰ Time Estimation ~150 minutes

## Livecode Phase 1 Week 3

## Max Score
- Max Score = 100

## Release 0 - Config/Connection (5 points)

- +3 jika database terbentuk
- +2 jika nama database adalah `p1-livecode-w3`

## Release 1 - Setup (12 points)

- +4 Sukses query create table sesuai requirement
- +8 Kolom-kolom sesuai requirement
- *-1 Untuk tiap kolom yang tidak sesuai*

## Release 2 - Seeding (12 point)

- +12 Berhasil melakukan seeding pada file `seed.js`

## Release 3 - Routing (15 point)

- +2.5 Jika routing list sesuai `GET /`
- +2.5 Jika routing add sesuai `GET /shirts/add`
- +2.5 Jika routing add sesuai `POST /shirts/add`
- +2.5 Jika routing edit sesuai `GET /shirts/edit/:id`
- +2.5 Jika routing edit sesuai `POST /shirts/edit/:id`
- +2.5 Jika routing delete sesuai `GET /shirts/delete/:id`
- *-1 Untuk tiap routing yang tidak sesuai*

## Release 4 - Home + Add (22 points)

##### Home
- +10 Berhasil menampilkan semua data melalui ejs
- *-3 Jika tidak menampilkan semua properti*

##### Add
- +4 Menampilkan form add
- +8 Berhasil melakukan add data ke database
- *-2 Jika type tidak menggunakan select input*
- *-2 Jika size tidak menggunakan select input*
- *-2 Jika tidak redirect ke `/` stelah action berhasil*

## Release 5 - Edit + Delete (22 points)

##### Edit
- +4 Menampilkan form edit
- +8 Berhasil melakukan edit data sesuai id
- *-2 Jika name tidak terpopulate*
- *-2 Jika type tidak terpopulate dengan benar*
- *-2 Jika size tidak terpopulate dengan benar*
- *-2 Jika stock tidak terpopulate*
- *-2 Jika tidak redirect ke `/` setelah action berhasil*

##### Delete
- +10 Berhasil melakukan delete data sesuai id
- *-3 Jika tidak redirect ke `/` setelah action berhasil*

## Release 6 - Validation (12 Points)

- +4 Validasi name pada saat add dan edit
- +2 Validasi type pada saat add dan edit
- +2 Validasi size pada saat add dan edit
- +4 Validasi stock harus 0 pada saat delete


## Penalty

- *-20 jika push `node_modules`*
- *-5 jika tidak MVC*