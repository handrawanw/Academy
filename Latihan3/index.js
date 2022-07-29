let array=[
    {
        category:"Marskman",
        nama:"Miya",
        nilai:70
    },{
        category:"Fighter",
        nama:"Sun",
        nilai:75
    },
    {
        category:"Marskman",
        nama:"Layla",
        nilai:50
    },
    {
        category:"Mage",
        nama:"Harley",
        nilai:90
    },
    {
        category:"Marskman",
        nama:"Hanabi",
        nilai:68
    },{
        category:"Tank",
        nama:"Gatotkaca",
        nilai:77.5
    },{
        category:"Marskman",
        nama:"Lesley",
        nilai:78
    },{
        category:"Fighter",
        nama:"Ruby",
        nilai:71
    },{
        category:"Fighter",
        nama:"Yu Zhong",
        nilai:64
    },{
        category:"Fighter",
        nama:"Yu Zhong",
        nilai:44
    },{
        category:"Assasin",
        nama:"Karina",
        nilai:89
    },{
        category:"Mage",
        nama:"Eudora",
        nilai:89.5
    },{
        category:"Support",
        nama:"Angela",
        nilai:69
    },
    {
        category:"Tank",
        nama:"Akai",
        nilai:38
    },
    {
        category:"Assasin",
        nama:"Aamon",
        nilai:96
    }
];

/* 
    1. buat lah sebuah program untuk grouping data berdasarkan kategori
    ketentuan 
    ---->>>
    lebih besar dari 80 -> kategori terbaik
    lebih besar dengan dari 70 dan kategori lebih kecil dari 80 -> kategori baik
    lebih besar dengan dari 60 dan kategori lebih kecil dari 70 -> kategori cukup
    lebih kecil dari 60 -> kategori kurang
    expected result
    { terbaik:
   [ { category: 'Mage', nama: 'Harley', nilai: 90 },
     { category: 'Assasin', nama: 'Karina', nilai: 89 },
     { category: 'Mage', nama: 'Eudora', nilai: 89.5 },
     { category: 'Assasin', nama: 'Aamon', nilai: 96 } ],
  baik:
   [ { category: 'Marskman', nama: 'Miya', nilai: 70 },
     { category: 'Fighter', nama: 'Sun', nilai: 75 },
     { category: 'Tank', nama: 'Gatotkaca', nilai: 77.5 },
     { category: 'Marskman', nama: 'Lesley', nilai: 78 },
     { category: 'Fighter', nama: 'Ruby', nilai: 71 } ],
  cukup:
   [ { category: 'Marskman', nama: 'Hanabi', nilai: 68 },
     { category: 'Fighter', nama: 'Yu Zhong', nilai: 64 },
     { category: 'Support', nama: 'Angela', nilai: 69 } ],
  kurang:
   [ { category: 'Marskman', nama: 'Layla', nilai: 50 },
     { category: 'Fighter', nama: 'Yu Zhong', nilai: 44 },
     { category: 'Tank', nama: 'Akai', nilai: 38 } ] 
    }

    2. buat function hitung nilai rata-2 nilai dari setiap array setiap kategori terbaik, baik, dst ..

    3. buat function urutkan nilai tertinggi to terendah nilai dari setiap array setiap kategori terbaik, baik, dst ..


    // clue 
    1. pelajari cara penggunaan Array.reduce(looping) untuk grouping , (soal 1)
    2. pelajari cara penggunaan Array.push atau array.unshift atau array.splice untuk tambah data ke dalam array untuk perobjeknya,(soal 1)
    3. pelajari cara penggunaan array.sort untuk menjawab soal no 3
    4. pelajari cara penggunaan Array.reduce(looping) untuk increment decrement nilai dan dihitung rata-2nya (soal 2)

*/

function jawaban() {
    // your code here
}
