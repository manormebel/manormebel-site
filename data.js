const products = [
    { 
        id: 1, 
        name: "Kursi Rattan Kangaroo Low Seat Chair (id-1)", 
        category: "Teras & Outdoor", 
        keywords: ["meja kursi teras"],
        price: "", 
        image: "/images/products/meja-kursi-teras/meja-kursi-teras-id-1/meja-kursi-teras-1.jpg", 
        images: [
            "/images/products/meja-kursi-teras/meja-kursi-teras-id-1/meja-kursi-teras-1.jpg",
            "/images/products/meja-kursi-teras/meja-kursi-teras-id-1/meja-kursi-teras-2.jpg",
            "/images/products/meja-kursi-teras/meja-kursi-teras-id-1/meja-kursi-teras-3.jpg"
        ],
        desc: "" 
    },
    // Produk baru: Lemari hias ruang tamu
    {
        id: 2,
        name: "Lemari Display Jati (id-1)",
        category: "Ruang Tamu",
        keywords: ["Lemari hias"],
        price: "",
        image: "/images/products/lemari-hias/lemari-hias-id-1/lemari-hias-1.jpg",
        images: [
            "/images/products/lemari-hias/lemari-hias-id-1/lemari-hias-1.jpg",
            "/images/products/lemari-hias/lemari-hias-id-1/lemari-hias-2.jpg",
            "/images/products/lemari-hias/lemari-hias-id-1/lemari-hias-3.jpg"
        ],
        desc: ""
    },
    // Produk baru: Lemari hias ruang tamu (id-2)
    {
        id: 4,
        name: "Lemari Display Jati (id-2)",
        category: "Ruang Tamu",
        keywords: ["Lemari hias"],
        price: "",
        image: "/images/products/lemari-hias/lemari-hias-id-2/lemari-hias-1.jpg",
    images: [
      "/images/products/lemari-hias/lemari-hias-id-2/lemari-hias-1.jpg",
      "/images/products/lemari-hias/lemari-hias-id-2/lemari-hias-2.jpg",
      "/images/products/lemari-hias/lemari-hias-id-2/lemari-hias-3.jpg"
    ],
        desc: ""
    },
    // Produk baru: Lemari display white beauty (id-3)
    {
        id: 94,
        name: "Lemari display white beauty (id-3)",
        category: "Ruang Tamu",
        keywords: ["Lemari hias"],
        price: "",
        image: "/images/products/lemari-hias/lemari-hias-id-3/lemari-hias-1.jpg",
        images: [
            "/images/products/lemari-hias/lemari-hias-id-3/lemari-hias-1.jpg",
            "/images/products/lemari-hias/lemari-hias-id-3/lemari-hias-2.jpg",
            "/images/products/lemari-hias/lemari-hias-id-3/lemari-hias-3.jpg"
        ],
        desc: ""
    },
    // Produk baru: Lemari display black beauty (id-4) - Diperbaiki ID dari 95 ke 96 untuk menghindari collision
    {
        id: 96,
        name: "Lemari display black beauty (id-4)",
        category: "Ruang Tamu",
        keywords: ["Lemari hias"],
        price: "",
        image: "/images/products/lemari-hias/lemari-hias-id-4/lemari-hias-1.jpg",
        images: [
            "/images/products/lemari-hias/lemari-hias-id-4/lemari-hias-1.jpg",
            "/images/products/lemari-hias/lemari-hias-id-4/lemari-hias-2.jpg",
            "/images/products/lemari-hias/lemari-hias-id-4/lemari-hias-3.jpg"
        ],
        desc: ""
    },
    // Produk baru: Meja TV Minimalis (id-1) - Diperbaiki ID dari 96 ke 100 untuk menghindari collision
    {
        id: 100,
        name: "Meja TV Minimalis (id-1)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-1/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-1/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-1/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-1/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Minimalis (id-2) - Diperbaiki ID dari 97 ke 101 untuk sequential
    {
        id: 101,
        name: "Meja TV Minimalis (id-2)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-2/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-2/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-2/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-2/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Minimalis (id-3) - Diperbaiki ID dari 98 ke 102 untuk sequential
    {
        id: 102,
        name: "Meja TV Minimalis (id-3)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-3/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-3/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-3/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-3/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Minimalis (id-4) - Diperbaiki ID dari 99 ke 103 untuk sequential
    {
        id: 103,
        name: "Meja TV Minimalis (id-4)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-4/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-4/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-4/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-4/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Minimalis Modern (id-5) - Diperbaiki ID dari 100 ke 104 untuk menghindari collision
    {
        id: 104,
        name: "Meja TV Minimalis Modern (id-5)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-5/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-5/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-5/meja-tv-2.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Black Beauty (id-6) - Diperbaiki ID dari 101 ke 105 untuk menghindari collision
    {
        id: 105,
        name: "Meja TV Black Beauty (id-6)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-6/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-6/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-6/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-6/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Minimalis (id-7) - Diperbaiki ID dari 102 ke 106 untuk menghindari collision
    {
        id: 106,
        name: "Meja TV Minimalis (id-7)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-7/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-7/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-7/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-7/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Varian Warna (id-8) - Diperbaiki ID dari 103 ke 107 untuk menghindari collision
    {
        id: 107,
        name: "Meja TV Varian Warna (id-8)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-8/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-8/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-8/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-8/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong Meja TV - Diperbaiki ID dari 104 ke 108 untuk menghindari collision
    {
        id: 108,
        name: "Meja TV Minimalis (id-9)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-9/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-9/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-9/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-9/meja-tv-3.jpg"
        ],
        desc: ""
    },
    {
        id: 109,
        name: "Meja TV Minimalis (id-10)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-10/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-10/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-10/meja-tv-2.jpg"
        ],
        desc: ""
    },
    {
        id: 110,
        name: "Meja TV Minimalis Modern (id-11)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-11/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-11/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-11/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-11/meja-tv-3.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Meja TV Minimalis Modern (id-12) - Diperbaiki ID dari 107 ke 111 untuk menghindari collision
    {
        id: 111,
        name: "Meja TV Minimalis Modern (id-12)",
        category: "Ruang Tamu",
        keywords: ["Meja TV"],
        price: "",
        image: "/images/products/meja-tv/meja-tv-id-12/meja-tv-1.jpg",
        images: [
            "/images/products/meja-tv/meja-tv-id-12/meja-tv-1.jpg",
            "/images/products/meja-tv/meja-tv-id-12/meja-tv-2.jpg",
            "/images/products/meja-tv/meja-tv-id-12/meja-tv-3.jpg"
        ],
        desc: ""
    },
    { 
        id: 11, 
        name: "Kursi makan ukir (id-1)", 
        category: "Ruang Makan", 
        keywords: ["Kursi makan"],
        price: "", 
        image: "/images/products/kursi-makan/kursi-makan-id-1/kursi-makan-1.jpg", 
        images: [
            "/images/products/kursi-makan/kursi-makan-id-1/kursi-makan-1.jpg"
        ],
        desc: "" 
    },
    // Tambahan 7 produk Kursi Makan kosong (dimulai dari ID 723)
    ...Array.from({ length: 7 }, (_, i) => ({
        id: 723 + i,
        name: `Kursi makan (id-${i + 2})`,
        category: "Ruang Makan", 
        keywords: ["Kursi makan"],
        price: "", 
        image: `/images/products/kursi-makan/kursi-makan-id-${i + 2}/kursi-makan-1.jpg`,
        images: [`/images/products/kursi-makan/kursi-makan-id-${i + 2}/kursi-makan-1.jpg`], 
        desc: "" 
    })),
    { 
        id: 10, 
        name: "Sofa jati minimalis modern Scandinavian leter L (id-1)", 
        category: "Ruang Tamu", 
        keywords: ["Sofa"],
        price: "", 
        image: "/images/products/sofa/sofa-id-1/sofa-1.jpg", 
        images: [
            "/images/products/sofa/sofa-id-1/sofa-1.jpg",
            "/images/products/sofa/sofa-id-1/sofa-2.jpg",
            "/images/products/sofa/sofa-id-1/sofa-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 3, 
        name: "Meja kursi makan (id-1)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-1/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-1/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-1/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-1/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 9, 
        name: "Custom Furniture", 
        category: "Request Design", 
        keywords: [],
        price: "", 
        image: "/images/products/custom-furniture/custom-furniture-1.jpg", 
        images: [
            "/images/products/custom-furniture/custom-furniture-1.jpg",
            "/images/products/custom-furniture/custom-furniture-2.jpg",
            "/images/products/custom-furniture/custom-furniture-3.jpg"
        ],
        desc: "Furnitur custom kami dirancang khusus untuk menyesuaikan kebutuhan ruang dan gaya Anda. Dibuat dengan material berkualitas dan pengerjaan profesional, setiap produk mengutamakan kenyamanan, fungsi, dan estetika. Desain dapat disesuaikan mulai dari ukuran, warna, hingga finishing" 
    },
    { 
        id: 5, 
        name: "Kursi Tamu Minimalis (id-1)", 
        category: "Ruang Tamu", 
        keywords: ["Meja kursi tamu"],
        price: "", 
        image: "/images/products/meja-kursi-tamu/meja-kursi-tamu-id-1/meja-kursi-tamu-1.jpg", 
        images: [
            "/images/products/meja-kursi-tamu/meja-kursi-tamu-id-1/meja-kursi-tamu-1.jpg",
            "/images/products/meja-kursi-tamu/meja-kursi-tamu-id-1/meja-kursi-tamu-2.jpg"
        ],
        desc: "" 
    },
    { 
        id: 6, 
        name: "Cradenza Kayu Jati Modern Minimalis (id-1)", 
        category: "Ruang Tamu", 
        keywords: ["Buffet / credenza"],
        price: "", 
        image: "/images/products/buffet-credenza/buffet-credenza-id-1/buffet-credenza-1.jpg", 
        images: [
            "/images/products/buffet-credenza/buffet-credenza-id-1/buffet-credenza-1.jpg",
            "/images/products/buffet-credenza/buffet-credenza-id-1/buffet-credenza-2.jpg",
            "/images/products/buffet-credenza/buffet-credenza-id-1/buffet-credenza-3.jpg"
        ],
        desc: "" 
    },
    // Tambahan 11 produk Cradenza Kayu Jati Modern Minimalis (id-2 sampai id-12)
    ...Array.from({ length: 11 }, (_, i) => ({
        id: 128 + i,
        name: `Cradenza Kayu Jati Modern Minimalis (id-${i + 2})`,
        category: "Ruang Tamu", 
        keywords: ["Buffet / credenza"],
        price: "", 
        image: `/images/products/buffet-credenza/buffet-credenza-id-${i + 2}/buffet-credenza-1.jpg`,
        images: (() => {
            const id = i + 2;
            const basePath = `/images/products/buffet-credenza/buffet-credenza-id-${id}`;
            // Yang punya 3 gambar: id-5, id-7, id-8
            if (id === 5 || id === 7 || id === 8) {
                return [`${basePath}/buffet-credenza-1.jpg`, `${basePath}/buffet-credenza-2.jpg`, `${basePath}/buffet-credenza-3.jpg`];
            }
            // Yang punya 2 gambar: id-2,3,4,6,9,10,11,12
            else {
                return [`${basePath}/buffet-credenza-1.jpg`, `${basePath}/buffet-credenza-2.jpg`];
            }
        })(),
        desc: "" 
    })),
    { 
        id: 7, 
        name: "Meja kursi makan (id-2)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-2/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-2/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-2/meja-kursi-makan-2.jpg"
        ],
        desc: "" 
    },
    { 
        id: 8, 
        name: "Meja kursi makan (id-3)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-3/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-3/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-3/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-3/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 31, 
        name: "Meja kursi makan (id-4)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-4/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-4/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-4/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-4/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 32, 
        name: "Meja kursi makan (id-5)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-5/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-5/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-5/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-5/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 33, 
        name: "Meja kursi makan (id-6)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-6/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-6/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-6/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-6/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 34, 
        name: "Meja kursi makan (id-7)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-7/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-7/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-7/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-7/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 35, 
        name: "Meja kursi makan (id-8)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-8/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-8/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-8/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-8/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 36, 
        name: "Meja makan jati minimalis (id-1)", 
        category: "Ruang Makan", 
        keywords: ["Meja makan"],
        price: "", 
        image: "/images/products/meja-makan/meja-makan-id-1/meja-makan-1.jpg", 
        images: [
            "/images/products/meja-makan/meja-makan-id-1/meja-makan-1.jpg"
        ],
        desc: "" 
    },
    { 
        id: 37, 
        name: "Meja makan bundar (id-2)", 
        category: "Ruang Makan", 
        keywords: ["Meja makan"],
        price: "", 
        image: "/images/products/meja-makan/meja-makan-id-2/meja-makan-1.jpg", 
        images: [
            "/images/products/meja-makan/meja-makan-id-2/meja-makan-1.jpg"
        ],
        desc: "" 
    },
    { 
        id: 38, 
        name: "Meja kursi makan (id-9)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "", 
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-9/meja-kursi-makan-1.jpg", 
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-9/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-9/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-9/meja-kursi-makan-3.jpg"
        ],
        desc: "" 
    },
    { 
        id: 39, 
        name: "Meja makan ukir (id-3)", 
        category: "Ruang Makan", 
        keywords: ["Meja makan"],
        price: "", 
        image: "/images/products/meja-makan/meja-makan-id-3/meja-makan-1.jpg", 
        images: [
            "/images/products/meja-makan/meja-makan-id-3/meja-makan-1.jpg"
        ],
        desc: "" 
    },

    // Placeholder Products (31-50): Meja
    {
        id: 40,
        name: "Meja kursi makan (id-10)",
        category: "Ruang Makan",
        keywords: ["Meja kursi makan"],
        price: "",
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-10/meja-kursi-makan-1.jpg",
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-10/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-10/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-10/meja-kursi-makan-3.jpg"
        ],
        desc: ""
    },
    {
        id: 41,
        name: "meja makan jati minimalis bulat (id-4)",
        category: "Ruang Makan",
        keywords: ["Meja makan"],
        price: "",
        image: "/images/products/meja-makan/meja-makan-id-4/meja-makan-1.jpg",
        images: [
            "/images/products/meja-makan/meja-makan-id-4/meja-makan-1.jpg"
        ],
        desc: ""
    },
    {
        id: 42,
        name: "Meja kursi makan (id-11)",
        category: "Ruang Makan",
        keywords: ["Meja kursi makan"],
        price: "",
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-11/meja-kursi-makan-1.jpg",
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-11/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-11/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-11/meja-kursi-makan-3.jpg"
        ],
        desc: ""
    },
    {
        id: 43,
        name: "Meja kursi makan (id-12)",
        category: "Ruang Makan",
        keywords: ["Meja kursi makan"],
        price: "",
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-12/meja-kursi-makan-1.jpg",
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-12/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-12/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-12/meja-kursi-makan-3.jpg"
        ],
        desc: ""
    },
    {
        id: 44,
        name: "Meja kursi makan (id-13)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "",
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-13/meja-kursi-makan-1.jpg",
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-13/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-13/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-13/meja-kursi-makan-3.jpg"
        ],
        desc: ""
    },
    {
        id: 45,
        name: "Meja kursi makan (id-14)", 
        category: "Ruang Makan", 
        keywords: ["Meja kursi makan"],
        price: "",
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-14/meja-kursi-makan-1.jpg",
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-14/meja-kursi-makan-1.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-14/meja-kursi-makan-2.jpg",
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-14/meja-kursi-makan-3.jpg"
        ],
        desc: ""
    },
    // Tambahan 4 produk Meja Makan Marmer kosong (melanjutkan dari id-5)
    {
        id: 46,
        name: "Meja makan marmer (id-5)",
        category: "Ruang Makan",
        keywords: ["Meja makan"],
        price: "",
        image: "/images/products/meja-makan/meja-makan-id-5/meja-makan-1.jpg",
        images: [
            "/images/products/meja-makan/meja-makan-id-5/meja-makan-1.jpg"
        ],
        desc: ""
    },
    {
        id: 47,
        name: "Meja makan marmer (id-6)",
        category: "Ruang Makan",
        keywords: ["Meja makan"],
        price: "",
        image: "/images/products/meja-makan/meja-makan-id-6/meja-makan-1.jpg",
        images: [
            "/images/products/meja-makan/meja-makan-id-6/meja-makan-1.jpg"
        ],
        desc: ""
    },
    {
        id: 48,
        name: "Meja makan marmer (id-7)",
        category: "Ruang Makan",
        keywords: ["Meja makan"],
        price: "",
        image: "/images/products/meja-makan/meja-makan-id-7/meja-makan-1.jpg",
        images: [
            "/images/products/meja-makan/meja-makan-id-7/meja-makan-1.jpg"
        ],
        desc: ""
    },
    {
        id: 49,
        name: "Meja makan marmer (id-8)",
        category: "Ruang Makan",
        keywords: ["Meja makan"],
        price: "",
        image: "/images/products/meja-makan/meja-makan-id-8/meja-makan-1.jpg",
        images: [
            "/images/products/meja-makan/meja-makan-id-8/meja-makan-1.jpg"
        ],
        desc: ""
    },

    {
        id: 51,
        name: "Sofa Sudut Minimalis white (id-2)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-2/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-2/sofa-1.jpg",
            "/images/products/sofa/sofa-id-2/sofa-2.jpg",
            "/images/products/sofa/sofa-id-2/sofa-3.jpg"
        ],
        desc: ""
    },
    {
        id: 52,
        name: "Meja Tamu Minimalis white (id-2)",
        category: "Ruang Tamu",
        keywords: ["Meja kursi tamu"],
        price: "",
        image: "/images/products/meja-kursi-tamu/meja-kursi-tamu-id-2/meja-kursi-tamu-1.jpg",
        images: [
            "/images/products/meja-kursi-tamu/meja-kursi-tamu-id-2/meja-kursi-tamu-1.jpg",
            "/images/products/meja-kursi-tamu/meja-kursi-tamu-id-2/meja-kursi-tamu-2.jpg"
        ],
        desc: ""
    },
    // Placeholder Products (53-70): Sofa
    {
        id: 53,
        name: "Sofa jati minimalis kombinasi rattan (id-3)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-3/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-3/sofa-1.jpg",
            "/images/products/sofa/sofa-id-3/sofa-2.jpg",
            "/images/products/sofa/sofa-id-3/sofa-3.jpg"
        ],
        desc: ""
    },
    {
        id: 54,
        name: "Single Sofa (id-4)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-4/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-4/sofa-1.jpg",
            "/images/products/sofa/sofa-id-4/sofa-2.jpg"
        ],
        desc: ""
    },
    {
        id: 55,
        name: "Sofa Jati Minimalis (id-5)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-5/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-5/sofa-1.jpg",
            "/images/products/sofa/sofa-id-5/sofa-2.jpg",
            "/images/products/sofa/sofa-id-5/sofa-3.jpg"
        ],
        desc: ""
    },
    {
        id: 56,
        name: "Sofa Jati Minimalis Meja Bulat (id-6)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-6/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-6/sofa-1.jpg",
            "/images/products/sofa/sofa-id-6/sofa-2.jpg",
            "/images/products/sofa/sofa-id-6/sofa-3.jpg"
        ],
        desc: ""
    },
    {
        id: 57,
        name: "Sofa Peanut Blue (id-7)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-7/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-7/sofa-1.jpg",
            "/images/products/sofa/sofa-id-7/sofa-2.jpg",
            "/images/products/sofa/sofa-id-7/sofa-3.jpg"
        ],
        desc: ""
    },
    {
        id: 58,
        name: "Sofa Jati Minimalis (id-8)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-8/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-8/sofa-1.jpg",
            "/images/products/sofa/sofa-id-8/sofa-2.jpg",
            "/images/products/sofa/sofa-id-8/sofa-3.jpg"
        ],
        desc: ""
    },
    {
        id: 59,
        name: "Sofa Singgle (id-9)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-9/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-9/sofa-1.jpg",
            "/images/products/sofa/sofa-id-9/sofa-2.jpg",
            "/images/products/sofa/sofa-id-9/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 60: Sofa siggle jati (id-10)
    {
        id: 60,
        name: "Sofa siggle jati (id-10)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-10/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-10/sofa-1.jpg",
            "/images/products/sofa/sofa-id-10/sofa-2.jpg",
            "/images/products/sofa/sofa-id-10/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 61: Nursing Chair/Sofa Menyusui (id-11)
    {
        id: 61,
        name: "Nursing Chair/Sofa Menyusui (id-11)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-11/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-11/sofa-1.jpg",
            "/images/products/sofa/sofa-id-11/sofa-2.jpg",
            "/images/products/sofa/sofa-id-11/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 62: Sofa minimalis L Grey (id-12)
    {
        id: 62,
        name: "Sofa minimalis L Grey (id-12)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-12/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-12/sofa-1.jpg",
            "/images/products/sofa/sofa-id-12/sofa-2.jpg",
            "/images/products/sofa/sofa-id-12/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 63: Sofa Jati singgle (id-13)
    {
        id: 63,
        name: "Sofa Jati singgle (id-13)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-13/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-13/sofa-1.jpg",
            "/images/products/sofa/sofa-id-13/sofa-2.jpg",
            "/images/products/sofa/sofa-id-13/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 64: Sofa Daybed (id-14)
    {
        id: 64,
        name: "Sofa Daybed (id-14)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-14/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-14/sofa-1.jpg",
            "/images/products/sofa/sofa-id-14/sofa-2.jpg",
            "/images/products/sofa/sofa-id-14/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 65: Sofa Modular (id-15)
    {
        id: 65,
        name: "Sofa Modular (id-15)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-15/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-15/sofa-1.jpg",
            "/images/products/sofa/sofa-id-15/sofa-2.jpg",
            "/images/products/sofa/sofa-id-15/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 66: sofa minimalis & teak wood (id-16)
    {
        id: 66,
        name: "sofa minimalis & teak wood (id-16)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-16/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-16/sofa-1.jpg",
            "/images/products/sofa/sofa-id-16/sofa-2.jpg",
            "/images/products/sofa/sofa-id-16/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 67: Kursi Sofa Retro Minimalis (id-17)
    {
        id: 67,
        name: "Kursi Sofa Retro Minimalis (id-17)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-17/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-17/sofa-1.jpg",
            "/images/products/sofa/sofa-id-17/sofa-2.jpg",
            "/images/products/sofa/sofa-id-17/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 68: Sofa Meja Tamu Sudut Minimalis white (id-18)
    {
        id: 68,
        name: "Sofa Meja Tamu Sudut Minimalis white (id-18)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-18/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-18/sofa-1.jpg",
            "/images/products/sofa/sofa-id-18/sofa-2.jpg",
            "/images/products/sofa/sofa-id-18/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 69: sofa tamu minimalis (id-19)
    {
        id: 69,
        name: "sofa tamu minimalis (id-19)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-19/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-19/sofa-1.jpg",
            "/images/products/sofa/sofa-id-19/sofa-2.jpg",
            "/images/products/sofa/sofa-id-19/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 70: sofa minimalis beauty (id-20)
    {
        id: 70,
        name: "sofa minimalis beauty (id-20)",
        category: "Ruang Tamu",
        keywords: ["Sofa"],
        price: "",
        image: "/images/products/sofa/sofa-id-20/sofa-1.jpg",
        images: [
            "/images/products/sofa/sofa-id-20/sofa-1.jpg",
            "/images/products/sofa/sofa-id-20/sofa-2.jpg",
            "/images/products/sofa/sofa-id-20/sofa-3.jpg"
        ],
        desc: ""
    },
    // Produk 91 - Individual
    {
        id: 91,
        name: "ayunan jati (id-1)",
        category: "Teras & Outdoor",
        keywords: ["Ayunan"],
        price: "",
        image: "/images/products/ayunan/ayunan-id-1/ayunan-jati-1.jpg",
        images: [
            "/images/products/ayunan/ayunan-id-1/ayunan-jati-1.jpg",
            "/images/products/ayunan/ayunan-id-1/ayunan-jati-2.jpg"
        ],
        desc: ""
    },
    // Produk 92 - Individual
    {
        id: 92,
        name: "ayunan jati (id-2)",
        category: "Teras & Outdoor",
        keywords: ["Ayunan"],
        price: "",
        image: "/images/products/ayunan/ayunan-id-2/ayunan-jati-1.jpg",
        images: [
            "/images/products/ayunan/ayunan-id-2/ayunan-jati-1.jpg",
            "/images/products/ayunan/ayunan-id-2/ayunan-jati-2.jpg"
        ],
        desc: ""
    },
    // Produk 93 - Individual
    {
        id: 93,
        name: "ayunan jati (id-3)",
        category: "Teras & Outdoor",
        keywords: ["Ayunan"],
        price: "",
        image: "/images/products/ayunan/ayunan-id-3/ayunan-jati-1.jpg",
        images: [
            "/images/products/ayunan/ayunan-id-3/ayunan-jati-1.jpg",
            "/images/products/ayunan/ayunan-id-3/ayunan-jati-2.jpg"
        ],
        desc: ""
    },
    // Produk 95 - Individual (diperbaiki dari ID 94 untuk menghindari collision)
    {
        id: 95,
        name: "ayunan jati (id-4)",
        category: "Teras & Outdoor",
        keywords: ["Ayunan"],
        price: "",
        image: "/images/products/ayunan/ayunan-id-4/ayunan-jati-1.jpg",
        images: [
            "/images/products/ayunan/ayunan-id-4/ayunan-jati-1.jpg",
            "/images/products/ayunan/ayunan-id-4/ayunan-jati-2.jpg"
        ],
        desc: ""
    },
    // Produk kosong: Cermin Hias (id-1 sampai id-8) - Diperbaiki ID dari 128-135 menjadi 148-155 untuk menghindari collision dengan Buffet / credenza
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 148 + i,
        name: `Cermin Hias (id-${i + 1})`,
        category: "Console Table/Cermin Hias",
        keywords: ["Console Table/Cermin Hias"],
        price: "",
        image: i < 8 ? `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 1}/meja-konsol-cermin-hias-1.jpg` : "",
        images: i < 8 ? [
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 1}/meja-konsol-cermin-hias-1.jpg`
        ] : [],
        desc: ""
    })),
    // Set meja makan jati Daun Marmer klasik modern 4 kursi (ID 711)
    {
        id: 711,
        name: "Meja kursi makan (id-15)",
        category: "Ruang Makan",
        keywords: ["Meja kursi makan"],
        price: "",
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-15/meja-kursi-makan-1.jpg",
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-15/meja-kursi-makan-1.jpg"
        ],
        desc: ""
    },
    // Set Meja Makan Minimalis 4 Kursi (id-16) (ID 712)
    {
        id: 712,
        name: "Meja kursi makan (id-16)",
        category: "Ruang Makan",
        keywords: ["Meja kursi makan"],
        price: "",
        image: "/images/products/meja-kursi-makan/meja-kursi-makan-id-16/meja-kursi-makan-1.jpg",
        images: [
            "/images/products/meja-kursi-makan/meja-kursi-makan-id-16/meja-kursi-makan-1.jpg"
        ],
        desc: ""
    },
    // Tambahan 7 produk Kursi Meja Tamu (dimulai dari ID 713)
    ...Array.from({ length: 7 }, (_, i) => ({
        id: 713 + i,
        name: `Kursi Tamu Minimalis (id-${i + 3})`,
        category: "Ruang Tamu", 
        keywords: ["Meja kursi tamu"],
        price: "", 
        image: `/images/products/meja-kursi-tamu/meja-kursi-tamu-id-${i + 3}/meja-kursi-tamu-1.jpg`,
        images: [
            `/images/products/meja-kursi-tamu/meja-kursi-tamu-id-${i + 3}/meja-kursi-tamu-1.jpg`,
            `/images/products/meja-kursi-tamu/meja-kursi-tamu-id-${i + 3}/meja-kursi-tamu-2.jpg`
        ],
        desc: "" 
    })),
    // Tambahan 3 produk Kursi Meja Tamu (dimulai dari ID 720)
    ...Array.from({ length: 3 }, (_, i) => ({
        id: 720 + i,
        name: `Kursi Tamu Minimalis (id-${i + 10})`,
        category: "Ruang Tamu", 
        keywords: ["Meja kursi tamu"],
        price: "", 
        image: `/images/products/meja-kursi-tamu/meja-kursi-tamu-id-${i + 10}/meja-kursi-tamu-1.jpg`,
        images: [
            `/images/products/meja-kursi-tamu/meja-kursi-tamu-id-${i + 10}/meja-kursi-tamu-1.jpg`,
            `/images/products/meja-kursi-tamu/meja-kursi-tamu-id-${i + 10}/meja-kursi-tamu-2.jpg`
        ], 
        desc: "" 
    })),
    // Produk kosong: Console Table (id-9 sampai id-16) - Diperbaiki ID dari 136-143 menjadi 156-163 untuk menghindari collision dengan produk lain
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 156 + i,
        name: `Console Table (id-${i + 9})`,
        category: "Console Table/Cermin Hias",
        keywords: ["Console Table/Cermin Hias"],
        price: "",
        image: `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 9}/meja-konsol-cermin-hias-1.jpg`,
        images: i === 0 ? [
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 9}/meja-konsol-cermin-hias-1.jpg`,
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 9}/meja-konsol-cermin-hias-2.jpg`,
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 9}/meja-konsol-cermin-hias-3.jpg`
        ] : [
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 9}/meja-konsol-cermin-hias-1.jpg`,
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 9}/meja-konsol-cermin-hias-2.jpg`
        ],
        desc: ""
    })),
    // Produk kosong: Console Table (id-17 sampai id-20) - Diperbaiki ID dari 144-147 menjadi 164-167 untuk menghindari collision dengan produk lain
    ...Array.from({ length: 4 }, (_, i) => ({
        id: 164 + i,
        name: `Console Table (id-${i + 17})`,
        category: "Console Table/Cermin Hias",
        keywords: ["Console Table/Cermin Hias"],
        price: "",
        image: `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 17}/meja-konsol-cermin-hias-1.jpg`,
        images: [
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 17}/meja-konsol-cermin-hias-1.jpg`,
            `/images/products/meja-konsol-cermin-hias/meja-konsol-cermin-hias-id-${i + 17}/meja-konsol-cermin-hias-2.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Tempat tidur kosong (dimulai dari ID 731)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 731 + i,
        name: `Tempat tidur (id-${i + 1})`,
        category: "Kamar Tidur",
        keywords: ["Tempat tidur"],
        price: "",
        image: `/images/products/tempat-tidur/tempat-tidur-id-${i + 1}/tempat-tidur-1.jpg`,
        images: [
            `/images/products/tempat-tidur/tempat-tidur-id-${i + 1}/tempat-tidur-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Lemari pakaian kosong (dimulai dari ID 739)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 739 + i,
        name: `Lemari pakaian (id-${i + 1})`,
        category: "Kamar Tidur",
        keywords: ["Lemari pakaian"],
        price: "",
        image: `/images/products/lemari-pakaian/lemari-pakaian-id-${i + 1}/lemari-pakaian-1.jpg`,
        images: [
            `/images/products/lemari-pakaian/lemari-pakaian-id-${i + 1}/lemari-pakaian-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Lemari laci kosong (dimulai dari ID 747)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 747 + i,
        name: `Lemari laci (id-${i + 1})`,
        category: "Kamar Tidur",
        keywords: ["Lemari laci"],
        price: "",
        image: `/images/products/lemari-laci/lemari-laci-id-${i + 1}/lemari-laci-1.jpg`,
        images: [
            `/images/products/lemari-laci/lemari-laci-id-${i + 1}/lemari-laci-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Nakas kosong (dimulai dari ID 755)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 755 + i,
        name: `Nakas (id-${i + 1})`,
        category: "Kamar Tidur",
        keywords: ["Nakas"],
        price: "",
        image: `/images/products/nakas/nakas-id-${i + 1}/nakas-1.jpg`,
        images: [
            `/images/products/nakas/nakas-id-${i + 1}/nakas-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Meja rias kosong (dimulai dari ID 763)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 763 + i,
        name: `Meja rias (id-${i + 1})`,
        category: "Kamar Tidur",
        keywords: ["Meja rias"],
        price: "",
        image: `/images/products/meja-rias/meja-rias-id-${i + 1}/meja-rias-1.jpg`,
        images: [
            `/images/products/meja-rias/meja-rias-id-${i + 1}/meja-rias-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Meja kantor kosong (dimulai dari ID 771)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 771 + i,
        name: `Meja kantor (id-${i + 1})`,
        category: "Ruang Kantor",
        keywords: ["Meja kantor"],
        price: "",
        image: `/images/products/meja-kantor/meja-kantor-id-${i + 1}/meja-kantor-1.jpg`,
        images: [
            `/images/products/meja-kantor/meja-kantor-id-${i + 1}/meja-kantor-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Kursi direktur kosong (dimulai dari ID 779)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 779 + i,
        name: `Kursi direktur (id-${i + 1})`,
        category: "Ruang Kantor",
        keywords: ["Kursi direktur"],
        price: "",
        image: `/images/products/kursi-direktur/kursi-direktur-id-${i + 1}/kursi-direktur-1.jpg`,
        images: [
            `/images/products/kursi-direktur/kursi-direktur-id-${i + 1}/kursi-direktur-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Lemari arsip kosong (dimulai dari ID 787)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 787 + i,
        name: `Lemari arsip (id-${i + 1})`,
        category: "Ruang Kantor",
        keywords: ["Lemari arsip"],
        price: "",
        image: `/images/products/lemari-arsip/lemari-arsip-id-${i + 1}/lemari-arsip-1.jpg`,
        images: [
            `/images/products/lemari-arsip/lemari-arsip-id-${i + 1}/lemari-arsip-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Meja meeting kosong (dimulai dari ID 795)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 795 + i,
        name: `Meja meeting (id-${i + 1})`,
        category: "Ruang Kantor",
        keywords: ["Meja meeting"],
        price: "",
        image: `/images/products/meja-meeting/meja-meeting-id-${i + 1}/meja-meeting-1.jpg`,
        images: [
            `/images/products/meja-meeting/meja-meeting-id-${i + 1}/meja-meeting-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Tempat tidur anak kosong (dimulai dari ID 803)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 803 + i,
        name: `Tempat tidur anak (id-${i + 1})`,
        category: "Ruang Anak",
        keywords: ["Tempat tidur anak"],
        price: "",
        image: `/images/products/tempat-tidur-anak/tempat-tidur-anak-id-${i + 1}/tempat-tidur-anak-1.jpg`,
        images: [
            `/images/products/tempat-tidur-anak/tempat-tidur-anak-id-${i + 1}/tempat-tidur-anak-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Meja kursi belajar kosong (dimulai dari ID 811)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 811 + i,
        name: `Meja kursi belajar (id-${i + 1})`,
        category: "Ruang Anak",
        keywords: ["Meja kursi belajar"],
        price: "",
        image: `/images/products/meja-kursi-belajar/meja-kursi-belajar-id-${i + 1}/meja-kursi-belajar-1.jpg`,
        images: [
            `/images/products/meja-kursi-belajar/meja-kursi-belajar-id-${i + 1}/meja-kursi-belajar-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Lemari anak kosong (dimulai dari ID 819)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 819 + i,
        name: `Lemari anak (id-${i + 1})`,
        category: "Ruang Anak",
        keywords: ["Lemari anak"],
        price: "",
        image: `/images/products/lemari-anak/lemari-anak-id-${i + 1}/lemari-anak-1.jpg`,
        images: [
            `/images/products/lemari-anak/lemari-anak-id-${i + 1}/lemari-anak-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Rak mainan kosong (dimulai dari ID 827)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 827 + i,
        name: `Rak mainan (id-${i + 1})`,
        category: "Ruang Anak",
        keywords: ["Rak mainan"],
        price: "",
        image: `/images/products/rak-mainan/rak-mainan-id-${i + 1}/rak-mainan-1.jpg`,
        images: [
            `/images/products/rak-mainan/rak-mainan-id-${i + 1}/rak-mainan-1.jpg`
        ],
        desc: ""
    })),
    // Tambahan 8 produk Box bayi kosong (dimulai dari ID 835)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 835 + i,
        name: `Box bayi (id-${i + 1})`,
        category: "Ruang Anak",
        keywords: ["Box bayi"],
        price: "",
        image: `/images/products/box-bayi/box-bayi-id-${i + 1}/box-bayi-1.jpg`,
        images: [
            `/images/products/box-bayi/box-bayi-id-${i + 1}/box-bayi-1.jpg`
        ],
        desc: ""
    })),
    
    // Tambahan 7 produk Meja kursi teras kosong (dimulai dari ID 843)
    ...Array.from({ length: 7 }, (_, i) => ({
        id: 843 + i,
        name: `Meja kursi teras (id-${i + 2})`,
        category: "Teras & Outdoor",
        keywords: ["meja kursi teras"],
        price: "",
        image: `/images/products/meja-kursi-teras/meja-kursi-teras-id-${i + 2}/meja-kursi-teras-1.jpg`,
        images: [
            `/images/products/meja-kursi-teras/meja-kursi-teras-id-${i + 2}/meja-kursi-teras-1.jpg`
        ],
        desc: ""
    })),
    
    // Tambahan 8 produk Meja kursi taman kosong (dimulai dari ID 850)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 850 + i,
        name: `Meja kursi taman (id-${i + 1})`,
        category: "Teras & Outdoor",
        keywords: ["meja kursi taman"],
        price: "",
        image: `/images/products/meja-kursi-taman/meja-kursi-taman-id-${i + 1}/meja-kursi-taman-1.jpg`,
        images: [
            `/images/products/meja-kursi-taman/meja-kursi-taman-id-${i + 1}/meja-kursi-taman-1.jpg`
        ],
        desc: ""
    })),
    
    // Tambahan 4 produk Kursi santai / lounge chair kosong (dimulai dari ID 858)
    ...Array.from({ length: 4 }, (_, i) => ({
        id: 858 + i,
        name: `Kursi santai / lounge chair (id-${i + 1})`,
        category: "Teras & Outdoor",
        keywords: ["Kursi santai / lounge chair"],
        price: "",
        image: `/images/products/kursi-santai-lounge-chair/kursi-santai-lounge-chair-id-${i + 1}/kursi-santai-lounge-chair-1.jpg`,
        images: [
            `/images/products/kursi-santai-lounge-chair/kursi-santai-lounge-chair-id-${i + 1}/kursi-santai-lounge-chair-1.jpg`
        ],
        desc: ""
    })),
    
    // Tambahan 8 produk Meja kursi bar kosong (dimulai dari ID 862)
    ...Array.from({ length: 8 }, (_, i) => ({
        id: 862 + i,
        name: `Meja kursi bar (id-${i + 1})`,
        category: "Cafe & Bar",
        keywords: ["Meja kursi bar"],
        price: "",
        image: `/images/products/meja-kursi-bar/meja-kursi-bar-id-${i + 1}/meja-kursi-bar-1.jpg`,
        images: [
            `/images/products/meja-kursi-bar/meja-kursi-bar-id-${i + 1}/meja-kursi-bar-1.jpg`
        ],
        desc: ""
    })),
    
    // Tambahan 16 produk Meja kursi cafe kosong (dimulai dari ID 870)
    ...Array.from({ length: 16 }, (_, i) => ({
        id: 870 + i,
        name: `Meja kursi cafe (id-${i + 1})`,
        category: "Cafe & Bar",
        keywords: ["Meja kursi cafe"],
        price: "",
        image: `/images/products/meja-kursi-cafe/meja-kursi-cafe-id-${i + 1}/meja-kursi-cafe-1.jpg`,
        images: [
            `/images/products/meja-kursi-cafe/meja-kursi-cafe-id-${i + 1}/meja-kursi-cafe-1.jpg`
        ],
        desc: ""
    })),
    
    // Tambahan 4 produk Meja kursi bar kosong (melanjutkan dari ID 886)
    ...Array.from({ length: 4 }, (_, i) => ({
        id: 886 + i,
        name: `Meja kursi bar (id-${i + 9})`,
        category: "Cafe & Bar",
        keywords: ["Meja kursi bar"],
        price: "",
        image: `/images/products/meja-kursi-bar/meja-kursi-bar-id-${i + 9}/meja-kursi-bar-1.jpg`,
        images: [
            `/images/products/meja-kursi-bar/meja-kursi-bar-id-${i + 9}/meja-kursi-bar-1.jpg`
        ],
        desc: ""
    })),
    
    // Tambahan 4 produk Meja kursi bar kosong (melanjutkan dari ID 890)
    ...Array.from({ length: 4 }, (_, i) => ({
        id: 890 + i,
        name: `Meja kursi bar (id-${i + 13})`,
        category: "Cafe & Bar",
        keywords: ["Meja kursi bar"],
        price: "",
        image: `/images/products/meja-kursi-bar/meja-kursi-bar-id-${i + 13}/meja-kursi-bar-1.jpg`,
        images: [
            `/images/products/meja-kursi-bar/meja-kursi-bar-id-${i + 13}/meja-kursi-bar-1.jpg`
        ],
        desc: ""
    }))
];
