(function (global) {
  'use strict';

  var DEFAULT_CONTENT = {
    brand: {
      nama: 'Tepi Kata',
      tagline: 'Foto & Film Pernikahan',
      kota: 'Makassar, Sulawesi Selatan',
      whatsapp: '6285343808999',
      instagram: 'tepi_kata',
      copyright: '© 2026 Tepi Kata'
    },
    hero: {
      label: 'Makassar & Sulawesi Selatan · Foto & Film Pernikahan',
      judul: 'Cerita Cinta yang *Abadi*\ndalam Foto & Film',
      subjudul: 'Setiap orang punya jalan cerita yang ingin diabadikan—dokumentasi pernikahan natural, jujur, dan sinematik dari lamaran, siraman, mappacci, hingga akad dan resepsi.',
      gambar: 'images/hero.jpg',
      ctaUtama: 'Lihat Karya',
      ctaSekunder: 'Cek Tanggal'
    },
    galeriSection: {
      label: 'Kurasi Karya',
      judul: 'Momen yang *Dirasakan*,\nBukan Sekadar Dilihat'
    },
    galeri: [
      {
        id: 'g1',
        judul: 'Kirab Bahagia di Grand Ballroom',
        kategori: 'Akad & Resepsi',
        lokasi: 'Makassar',
        tahun: '2026',
        gambar: 'images/resepsi.jpg',
        deskripsi: 'Langkah perdana kedua mempelai memasuki ballroom resepsi dalam balutan busana adat Bugis-Makassar disambut hangat keluarga dan sahabat.'
      },
      {
        id: 'g2',
        judul: 'Sakral Malam Mappacci',
        kategori: 'Adat & Mappacci',
        lokasi: 'Gowa · Adat Bugis-Makassar',
        tahun: '2026',
        gambar: 'images/mappacci.jpg',
        deskripsi: 'Restu orang tua dan sesepuh dalam prosesi sakral Malam Mappacci yang penuh doa, haru, dan kekhidmatan.'
      },
      {
        id: 'g3',
        judul: 'Minimalis di Jendela Kota Tua',
        kategori: 'Prewedding',
        lokasi: 'Makassar',
        tahun: '2026',
        gambar: 'images/prewedding.jpg',
        deskripsi: 'Sesi prewedding bergaya arsitektural minimalis dengan komposisi simetris yang tenang dan abadi.'
      },
      {
        id: 'g4',
        judul: 'Khidmat Selepas Ijab Kabul',
        kategori: 'Akad & Resepsi',
        lokasi: 'Makassar',
        tahun: '2026',
        gambar: 'images/karya-akad-fadel.jpg',
        deskripsi: 'Momen penuh syukur dalam sentuhan monokrom klasik tepat setelah akad nikah dinyatakan sah.'
      },
      {
        id: 'g5',
        judul: 'Keagungan Busana Adat Bugis-Makassar',
        kategori: 'Adat & Mappacci',
        lokasi: 'Makassar · Sulawesi Selatan',
        tahun: '2026',
        gambar: 'images/karya-adat-zaira.jpg',
        deskripsi: 'Potret editorial bernuansa megah dengan pencahayaan dramatis yang merawat keindahan tradisi lokal.'
      },
      {
        id: 'g6',
        judul: 'Romansa Adat dalam Cahaya Temaram',
        kategori: 'Prewedding',
        lokasi: 'Sulawesi Selatan',
        tahun: '2026',
        gambar: 'images/karya-pw-alda.jpg',
        deskripsi: 'Prewedding berbalut busana adat bernuansa gelap editorial, menonjolkan detail kipas, payung tradisional, dan tatapan hangat.'
      },
      {
        id: 'g7',
        judul: 'Langkah Pertama di Tangga Ballroom',
        kategori: 'Akad & Resepsi',
        lokasi: 'Makassar',
        tahun: '2026',
        gambar: 'images/karya-resepsi-lia.jpg',
        deskripsi: 'Genggaman tangan penuh kebahagiaan dalam balutan baju bodo zamrud berpadu sulaman emas.'
      },
      {
        id: 'g8',
        judul: 'Tatapan Tenang Sebelum Akad',
        kategori: 'Adat & Mappacci',
        lokasi: 'Makassar',
        tahun: '2026',
        gambar: 'images/karya-adat-riri.jpg',
        deskripsi: 'Potret editorial pengantin wanita dalam balutan busana adat hijau-emas dengan cahaya chiaroscuro yang intim.'
      },
      {
        id: 'g9',
        judul: 'Kisah di Pelataran Rumah Adat',
        kategori: 'Prewedding',
        lokasi: 'Sulawesi Selatan',
        tahun: '2026',
        gambar: 'images/karya-pw-jeri.jpg',
        deskripsi: 'Sesi prewedding berlatar arsitektur rumah kayu tradisional Sulawesi Selatan dengan sentuhan warna hangat sinematik.'
      }
    ],
    filosofi: {
      label: 'Tujuan Utama Kami',
      judul: 'Mengubah hari bahagia Anda menjadi karya seni yang *hidup*.',
      paragraf: [
        'Pendekatan dokumenter dan candid selalu menjadi jantung cara kami bekerja. Tanpa pose yang dibuat-buat—kami percaya momen terkuat justru hadir secara alami: tatapan haru orang tua saat mappacci, tawa spontan bersama sahabat, hingga genggaman tangan sebelum akad dimulai.',
        'Dengan membaur tenang di tengah acara, tim foto dan film Tepi Kata merawat setiap detail agar bertahun-tahun kemudian Anda bukan hanya ingat seperti apa bentuknya, tetapi juga bagaimana rasanya berada di hari itu.'
      ],
      gambar: 'images/filosofi.jpg',
      sorotan: [
        { judul: 'Foto & Film', subjudul: 'Satu Visi Visual' },
        { judul: 'Galeri Daring', subjudul: 'Pilih dari HP' },
        { judul: 'Adat & Modern', subjudul: 'Bugis · Makassar' }
      ]
    },
    tentang: {
      label: 'Tentang Kami',
      judul: 'Lebih dari sekadar *dokumentasi* pernikahan',
      paragraf: [
        'Berbasis di Makassar, Sulawesi Selatan, Tepi Kata hadir untuk pasangan yang ingin menikmati hari bahagianya sepenuhnya tanpa sibuk memikirkan kamera. Tim fotografer, videografer, dan editor kami bekerja terpadu—memahami ritme sakral prosesi adat Bugis-Makassar hingga resepsi malam yang hangat.'
      ],
      gambar: 'images/tentang.jpg'
    },
    alurKerja: [
      {
        nomor: '01',
        judul: 'Diskusi & Konsep',
        deskripsi: 'Menyelaraskan jadwal prosesi, lokasi, nuansa warna, serta kebutuhan tim foto dan film.'
      },
      {
        nomor: '02',
        judul: 'Hari Bahagia',
        deskripsi: 'Liputan candid dan editorial yang tenang, terarah saat dibutuhkan, dan sigap menangkap emosi.'
      },
      {
        nomor: '03',
        judul: 'Galeri Seleksi Daring',
        deskripsi: 'Akses tautan galeri pribadi untuk melihat dan memilih foto favorit untuk edit maupun album langsung dari HP.'
      },
      {
        nomor: '04',
        judul: 'Film & Album Cetak',
        deskripsi: 'Tinjau draf tata letak album secara daring sebelum cetak, lengkap dengan film sinematik siap simpan.'
      }
    ],
    paketSection: {
      label: 'Layanan & Paket',
      judul: 'Dirancang mengikuti *rangkaian* acara Anda',
      subjudul: 'Setiap paket dapat disesuaikan dengan jumlah prosesi, kebutuhan tim tambahan, maupun add-on Mini Studio.'
    },
    paket: [
      {
        id: 'p1',
        label: '01 · Intimate',
        nama: '1 Prosesi / Prewedding',
        harga: '',
        deskripsi: 'Cocok untuk sesi Lamaran (Mappettuada), Mappacci Only, Akad Only, Resepsi Only, atau Prewedding.',
        fitur: [
          'Fotografer & Videografer (opsional)',
          'Galeri daring pribadi Tepi Kata',
          'Kurasi & color grading sinematik'
        ],
        pilihanUtama: false,
        badge: 'Pilihan Utama',
        sesiDefault: ['Lamaran', 'Prewedding']
      },
      {
        id: 'p2',
        label: '02 · Rangkaian Adat',
        nama: 'Paket 3–4 Prosesi',
        harga: '',
        deskripsi: 'Mencakup rangkaian lengkap mulai dari Lamaran atau Prewedding, Siraman & Mappacci, hingga Akad & Resepsi.',
        fitur: [
          'Tim Foto & Film Sinematik lengkap',
          'Seleksi foto edit & draf album daring',
          'Album cetak eksklusif + highlight film',
          'Tersedia opsi Mapparola & Mini Studio'
        ],
        pilihanUtama: true,
        badge: 'Pilihan Utama',
        sesiDefault: ['Prewedding', 'Siraman & Mappacci', 'Akad & Resepsi']
      },
      {
        id: 'p3',
        label: '03 · All-In',
        nama: 'Paket Premium',
        harga: '',
        deskripsi: 'Liputan menyeluruh untuk acara berskala besar atau multi-hari, termasuk keluarga kedua mempelai & luar kota.',
        fitur: [
          'Multi-kamera Foto & Video + Support',
          'Add-on Mini Studio di lokasi resepsi',
          'Prioritas editing & album custom'
        ],
        pilihanUtama: false,
        badge: 'Pilihan Utama',
        sesiDefault: ['Lamaran', 'Prewedding', 'Siraman & Mappacci', 'Akad & Resepsi', 'Mapparola', 'Mini Studio']
      }
    ],
    testimoniSection: {
      label: 'Kata Mereka',
      sublabel: 'Cerita dari pasangan yang telah mempercayakan hari bahagianya bersama Tepi Kata'
    },
    testimoni: [
      {
        id: 't1',
        kutipan: 'Timnya santai banget tapi super sigap. Kami tidak merasa dipaksa berpose, dan hasil foto mappacci sampai resepsinya benar-benar bikin merinding setiap kali dilihat ulang.',
        namaKlien: 'Pasangan Akad & Resepsi',
        sesi: 'Makassar',
        gambar: 'images/resepsi.jpg'
      },
      {
        id: 't2',
        kutipan: 'Paling suka fitur galeri online-nya—habis acara kami tinggal pilih foto favorit untuk edit dan album langsung dari HP bareng keluarga. Praktis dan rapi sekali.',
        namaKlien: 'Pasangan Paket 4 Prosesi',
        sesi: 'Gowa',
        gambar: 'images/mappacci.jpg'
      },
      {
        id: 't3',
        kutipan: 'Warna foto dan filmnya hangat, elegan, dan timeless. Dari prewedding sampai resepsi terasa seperti nonton film pendek tentang kisah kami sendiri.',
        namaKlien: 'Pasangan Prewedding & Wedding',
        sesi: 'Sulawesi Selatan',
        gambar: 'images/hero.jpg'
      }
    ],
    kontakSection: {
      label: 'Mari Terhubung',
      judul: 'Ceritakan Rencana Hari Bahagia Anda',
      subjudul: 'Isi detail singkat acara Anda di bawah ini untuk mengecek ketersediaan jadwal tim Tepi Kata dan mendapatkan daftar paket lengkap.',
      daftarSesi: [
        'Lamaran',
        'Prewedding',
        'Siraman & Mappacci',
        'Akad & Resepsi',
        'Mapparola',
        'Mini Studio'
      ]
    }
  };

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function mergeContent(incoming) {
    var base = clone(DEFAULT_CONTENT);
    if (!incoming || typeof incoming !== 'object') return base;

    if (incoming.brand && typeof incoming.brand === 'object') {
      Object.assign(base.brand, incoming.brand);
    }
    if (incoming.hero && typeof incoming.hero === 'object') {
      Object.assign(base.hero, incoming.hero);
    }
    if (incoming.galeriSection && typeof incoming.galeriSection === 'object') {
      Object.assign(base.galeriSection, incoming.galeriSection);
    }
    if (Array.isArray(incoming.galeri)) {
      base.galeri = incoming.galeri.map(function (item, idx) {
        return {
          id: item.id || ('g' + (idx + 1)),
          judul: item.judul || '',
          kategori: normalizeCategory(item.kategori || 'Akad & Resepsi'),
          lokasi: item.lokasi || '',
          tahun: item.tahun || '',
          gambar: item.gambar || 'images/resepsi.jpg',
          deskripsi: item.deskripsi || ''
        };
      });
    }
    if (incoming.filosofi && typeof incoming.filosofi === 'object') {
      Object.assign(base.filosofi, incoming.filosofi);
      if (!Array.isArray(base.filosofi.paragraf)) {
        base.filosofi.paragraf = base.filosofi.paragraf ? [String(base.filosofi.paragraf)] : [];
      }
      if (!Array.isArray(base.filosofi.sorotan)) {
        base.filosofi.sorotan = clone(DEFAULT_CONTENT.filosofi.sorotan);
      }
    }
    if (incoming.tentang && typeof incoming.tentang === 'object') {
      Object.assign(base.tentang, incoming.tentang);
      if (!Array.isArray(base.tentang.paragraf)) {
        base.tentang.paragraf = base.tentang.paragraf ? [String(base.tentang.paragraf)] : [];
      }
    }
    if (Array.isArray(incoming.alurKerja)) {
      base.alurKerja = incoming.alurKerja.map(function (step, idx) {
        return {
          nomor: step.nomor || String(idx + 1).padStart(2, '0'),
          judul: step.judul || '',
          deskripsi: step.deskripsi || ''
        };
      });
    }
    if (incoming.paketSection && typeof incoming.paketSection === 'object') {
      Object.assign(base.paketSection, incoming.paketSection);
    }
    if (Array.isArray(incoming.paket)) {
      base.paket = incoming.paket.map(function (pkg, idx) {
        return {
          id: pkg.id || ('p' + (idx + 1)),
          label: pkg.label || '',
          nama: pkg.nama || '',
          harga: pkg.harga || '',
          deskripsi: pkg.deskripsi || '',
          fitur: Array.isArray(pkg.fitur) ? pkg.fitur : [],
          pilihanUtama: Boolean(pkg.pilihanUtama),
          badge: pkg.badge || 'Pilihan Utama',
          sesiDefault: Array.isArray(pkg.sesiDefault) ? pkg.sesiDefault : []
        };
      });
    }
    if (incoming.testimoniSection && typeof incoming.testimoniSection === 'object') {
      Object.assign(base.testimoniSection, incoming.testimoniSection);
    }
    if (Array.isArray(incoming.testimoni)) {
      base.testimoni = incoming.testimoni.map(function (t, idx) {
        return {
          id: t.id || ('t' + (idx + 1)),
          kutipan: t.kutipan || '',
          namaKlien: t.namaKlien || '',
          sesi: t.sesi || '',
          gambar: t.gambar || 'images/resepsi.jpg'
        };
      });
    }
    if (incoming.kontakSection && typeof incoming.kontakSection === 'object') {
      Object.assign(base.kontakSection, incoming.kontakSection);
      if (!Array.isArray(base.kontakSection.daftarSesi) || !base.kontakSection.daftarSesi.length) {
        base.kontakSection.daftarSesi = clone(DEFAULT_CONTENT.kontakSection.daftarSesi);
      }
    }

    return base;
  }

  function normalizeCategory(cat) {
    var lower = String(cat || '').trim().toLowerCase();
    if (lower === 'resepsi' || lower === 'akad & resepsi' || lower === 'akad dan resepsi') return 'Akad & Resepsi';
    if (lower === 'adat' || lower === 'adat & mappacci' || lower === 'mappacci') return 'Adat & Mappacci';
    if (lower === 'prewedding' || lower === 'pre-wedding') return 'Prewedding';
    return String(cat || 'Akad & Resepsi').trim();
  }

  function normalizeWhatsapp(raw) {
    var digits = String(raw || '').replace(/[^0-9]/g, '');
    if (!digits) return '';
    if (digits.indexOf('0') === 0) {
      digits = '62' + digits.slice(1);
    }
    return digits;
  }

  global.TEPI_KATA_DEFAULT_CONTENT = DEFAULT_CONTENT;
  global.TEPI_KATA_UTILS = {
    clone: clone,
    mergeContent: mergeContent,
    normalizeCategory: normalizeCategory,
    normalizeWhatsapp: normalizeWhatsapp,
    CATEGORIES: ['Akad & Resepsi', 'Adat & Mappacci', 'Prewedding'],
    PREVIEW_STORAGE_KEY: 'tepikata_preview_draft_v1'
  };
})(window);
