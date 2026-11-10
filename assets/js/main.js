(function () {
  'use strict';
  var WA = '6282131087971';
  function wa(t) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); }
  function $(id) { return document.getElementById(id); }

  /* ---------- WhatsApp dynamic click handlers ---------- */
  document.querySelectorAll('[data-wa]').forEach(function (el) {
    el.href = wa(el.getAttribute('data-wa'));
    el.target = '_blank';
    el.rel = 'noopener';
  });

  /* ---------- Product models database for Detail View (matching landingpage.mp4) ---------- */
  var materialProducts = {
    'Drill': [
      { name: 'Tote Bag Drill American Sablon 1 Warna', price: 'Min. 50 pcs', img: 'assets/img/drill.webp' },
      { name: 'Tote Bag Drill Resleting Laptop 14"', price: 'Min. 50 pcs', img: 'assets/img/drillresleting.webp' },
      { name: 'Tote Bag Japan Drill Gusset Kantor', price: 'Min. 50 pcs', img: 'assets/img/japandrill.webp' },
      { name: 'Tote Bag Drill Tali Webbing Tebal', price: 'Min. 50 pcs', img: 'assets/img/drillwebing.webp' },
      { name: 'Tote Bag Drill Dua Saku Depan', price: 'Min. 50 pcs', img: 'assets/img/drill2saku.webp' },
      { name: 'Tote Bag Drill Seragam Instansi BUMN', price: 'Min. 50 pcs', img: 'assets/img/drillinstansi.webp' }
    ],
    'Cotton': [
      { name: 'Tote Bag Cotton Combed 100% Organik', price: 'Min. 50 pcs', img: 'assets/img/cotton.webp' },
      { name: 'Tote Bag Cotton Twill Lembut Harian', price: 'Min. 50 pcs', img: 'assets/img/cottontwill.webp' },
      { name: 'Tote Bag Katun Eco Lifestyle Distro', price: 'Min. 50 pcs', img: 'assets/img/cottonlifestyle.webp' },
      { name: 'Tote Bag Cotton Tali Selempang Bahu', price: 'Min. 50 pcs', img: 'assets/img/cottonselempang.webp' },
      { name: 'Tote Bag Katun Sablon DTF Multi-Warna', price: 'Min. 50 pcs', img: 'assets/img/cottondtf.webp' },
      { name: 'Tote Bag Katun Polos Bordir Mini', price: 'Min. 50 pcs', img: 'assets/img/cottonbordir.webp' }
    ],
    'Non Woven': [
      { name: 'Goodie Bag Spunbond Non Woven 75 gsm', price: 'Min. 100 pcs', img: 'assets/img/spunbond75gsm.webp' },
      { name: 'Tote Bag Non Woven Gusset Lipatan Samping', price: 'Min. 100 pcs', img: 'assets/img/spunbondlipatsamping.webp' },
      { name: 'Tas Spunbond Handle Oval Seminar Massal', price: 'Min. 100 pcs', img: 'assets/img/spunbondoval.webp' },
      { name: 'Goodie Bag Spunbond Sablon 1 Sisi', price: 'Min. 100 pcs', img: 'assets/img/spunbondsablon.webp' },
      { name: 'Tas Spunbond Kotak Box Nasi / Souvenir', price: 'Min. 100 pcs', img: 'assets/img/spunbondkotak.webp' },
      { name: 'Tote Bag Non Woven Eco Belanja Berulang', price: 'Min. 100 pcs', img: 'assets/img/spunbondbelanja.webp' }
    ],
    'Jute': [
      { name: 'Tote Bag Jute Goni Rustic Natural', price: 'Min. 50 pcs', img: 'assets/img/goninatural.webp' },
      { name: 'Tote Bag Jute Kombinasi Saku Kanvas', price: 'Min. 50 pcs', img: 'assets/img/gonikanvas.webp' },
      { name: 'Hampers Bag Goni Rustic Pita Souvenir', price: 'Min. 50 pcs', img: 'assets/img/gonipita.webp' },
      { name: 'Tote Bag Jute Furing Dalam Resleting', price: 'Min. 50 pcs', img: 'assets/img/goniresleting.webp' },
      { name: 'Tas Goni Handle Kayu Eksotis', price: 'Min. 50 pcs', img: 'assets/img/gonikayu.webp' },
      { name: 'Tote Bag Goni Sablon Putih Minimalis', price: 'Min. 50 pcs', img: 'assets/img/gonilogo.webp' }
    ],
    'Leather': [
      { name: 'Tote Bag Genuine Leather Sapi Pull-Up', price: 'Min. 20 pcs', img: 'assets/img/genuineleathersapi.webp' },
      { name: 'Tote Bag Crazy Horse Leather Vintage', price: 'Min. 20 pcs', img: 'assets/img/genuineleatherkuda.webp' },
      { name: 'Executive Leather Tote Bag Deboss Logo', price: 'Min. 20 pcs', img: 'assets/img/genuineleatherdeboss.webp' },
      { name: 'Luxury Leather Tote Bag Furing Suede', price: 'Min. 20 pcs', img: 'assets/img/genuineleatherfuring.webp' },
      { name: 'Leather Tote Bag Resleting YKK Premium', price: 'Min. 20 pcs', img: 'assets/img/genuineleatherresleting.webp' },
      { name: 'Slim Leather Tote Bag Minimalis', price: 'Min. 20 pcs', img: 'assets/img/genuineleatherslim.webp' }
    ],
    'PU Leather': [
      { name: 'Tote Bag PU Leather Sintetis Waterproof', price: 'Min. 50 pcs', img: 'assets/img/puleathersintetis.webp' },
      { name: 'Tote Bag PU Leather Matte Finish Sleek', price: 'Min. 50 pcs', img: 'assets/img/puleathermatte.webp' },
      { name: 'Tote Bag PU Leather Kompartemen Laptop', price: 'Min. 50 pcs', img: 'assets/img/puleatherlaptop.webp' },
      { name: 'Tote Bag PU Leather Gold Foil Stamping', price: 'Min. 50 pcs', img: 'assets/img/puleatherfoil.webp' },
      { name: 'Tote Bag PU Leather Dual Tone Modern', price: 'Min. 50 pcs', img: 'assets/img/puleatherdualtone.webp' },
      { name: 'Tote Bag PU Leather Kancing Magnetik', price: 'Min. 50 pcs', img: 'assets/img/puleathermagnetic.webp' }
    ],
    'Nylon': [
      { name: 'Tote Bag Nylon Foldable Ripstop Pocket', price: 'Min. 50 pcs', img: 'assets/img/nilonfoldable.webp' },
      { name: 'Tote Bag Nylon Parasut Ultralight Travel', price: 'Min. 50 pcs', img: 'assets/img/nilonultralight.webp' },
      { name: 'Tote Bag Nylon Tahan Air (Waterproof)', price: 'Min. 50 pcs', img: 'assets/img/nilonwaterproof.webp' },
      { name: 'Tote Bag Nylon Packable Belanja Praktis', price: 'Min. 50 pcs', img: 'assets/img/nilonpackable.webp' },
      { name: 'Tote Bag Nylon Serut Multifungsi', price: 'Min. 50 pcs', img: 'assets/img/nilonmultifungsi.webp' },
      { name: 'Tote Bag Nylon Outdoor Hiking Edition', price: 'Min. 50 pcs', img: 'assets/img/nilonhiking.webp' }
    ],
    'Polyester': [
      { name: 'Tote Bag Polyester D300 Print Sublim Full Color', price: 'Min. 50 pcs', img: 'assets/img/polyesterd300.webp' },
      { name: 'Tote Bag Polyester D600 Heavy Duty Kokoh', price: 'Min. 50 pcs', img: 'assets/img/polyesterd600.webp' },
      { name: 'Tote Bag Polyester Canvas Artwork Custom', price: 'Min. 50 pcs', img: 'assets/img/polyesterartwork.webp' },
      { name: 'Tote Bag Polyester Lapisan PVC Waterproof', price: 'Min. 50 pcs', img: 'assets/img/polyesterpvc.webp' },
      { name: 'Tote Bag Polyester Sablon Gambar Foto', price: 'Min. 50 pcs', img: 'assets/img/polyesterfoto.webp' },
      { name: 'Tote Bag Polyester Anime & Merchandise', price: 'Min. 50 pcs', img: 'assets/img/polyesteranime.webp' }
    ],
    'Denim': [
      { name: 'Tote Bag Denim Jeans Washed Casual Indigo', price: 'Min. 50 pcs', img: 'assets/img/denimwashed.webp' },
      { name: 'Tote Bag Denim Raw Selvedge Look Tebal', price: 'Min. 50 pcs', img: 'assets/img/denimraw.webp' },
      { name: 'Tote Bag Denim Saku Depan Jeans Klasik', price: 'Min. 50 pcs', img: 'assets/img/denimsaku.webp' },
      { name: 'Tote Bag Denim Bordir Patch Vintage', price: 'Min. 50 pcs', img: 'assets/img/denimbordir.webp' },
      { name: 'Tote Bag Denim Resleting Tali Webbing', price: 'Min. 50 pcs', img: 'assets/img/denimwebing.webp' },
      { name: 'Tote Bag Denim Kombinasi Kulit Sintetis', price: 'Min. 50 pcs', img: 'assets/img/denimkulit.webp' }
    ],
    'Linen': [
      { name: 'Tote Bag Linen Rami Natural Japanese Style', price: 'Min. 50 pcs', img: 'assets/img/linenjapan.webp' },
      { name: 'Tote Bag Linen Slub Aesthetic Minimalist', price: 'Min. 50 pcs', img: 'assets/img/linenslub.webp' },
      { name: 'Tote Bag Linen Washed Earthy Tone', price: 'Min. 50 pcs', img: 'assets/img/linenearthy.webp' },
      { name: 'Tote Bag Linen Rami Tali Simpul Jepang', price: 'Min. 50 pcs', img: 'assets/img/linenknotjapan.webp' },
      { name: 'Tote Bag Linen Kafe & Galeri Seni', price: 'Min. 50 pcs', img: 'assets/img/linenkafe.webp' },
      { name: 'Tote Bag Linen Sablon Tinta Botanical', price: 'Min. 50 pcs', img: 'assets/img/linenbotanical.webp' }
    ],
    'Corduroy': [
      { name: 'Tote Bag Corduroy Vintage Ribbed 90s', price: 'Min. 50 pcs', img: 'assets/img/corduroyvintage.webp' },
      { name: 'Tote Bag Corduroy Kancing Magnet Retro', price: 'Min. 50 pcs', img: 'assets/img/corduroymagnet.webp' },
      { name: 'Tote Bag Corduroy Streetwear Distro', price: 'Min. 50 pcs', img: 'assets/img/corduroystreet.webp' },
      { name: 'Tote Bag Corduroy Furing Saku Dalam', price: 'Min. 50 pcs', img: 'assets/img/corduroysaku.webp' },
      { name: 'Tote Bag Corduroy Tali Lebar Empuk', price: 'Min. 50 pcs', img: 'assets/img/corduroytalilebar.webp' },
      { name: 'Tote Bag Corduroy Warna Pastel Vintage', price: 'Min. 50 pcs', img: 'assets/img/corduroypastel.webp' }
    ],
    'Kanvas': [
      { name: 'Tote Bag Kanvas Katun Marsoto 12-14 Oz', price: 'Min. 50 pcs', img: 'assets/img/kanvas12oz.webp' },
      { name: 'Tote Bag Kanvas Resleting + Furing Dalam', price: 'Min. 50 pcs', img: 'assets/img/kanvasresleting.webp' },
      { name: 'Tote Bag Blacu Natural Unbleached Eco', price: 'Min. 100 pcs', img: 'assets/img/kanvasblacu.webp' },
      { name: 'Tote Bag Kanvas Tali Kulit Sintetis', price: 'Min. 50 pcs', img: 'assets/img/kanvastalikulit.webp' },
      { name: 'Tote Bag Kanvas Dua Warna (Two-Tone)', price: 'Min. 50 pcs', img: 'assets/img/kanvas2warna.webp' },
      { name: 'Goodie Bag Blacu Tali Serut Souvenir', price: 'Min. 100 pcs', img: 'assets/img/kanvasserut.webp' }
    ]
  };

  var materialImages = {
    'Drill': 'assets/img/drill.webp',
    'Cotton': 'assets/img/cotton.webp',
    'Non Woven': 'assets/img/spundbond.webp',
    'Jute': 'assets/img/jutegoni.webp',
    'Leather': 'assets/img/leather.webp',
    'PU Leather': 'assets/img/puleather.webp',
    'Nylon': 'assets/img/nylon.webp',
    'Polyester': 'assets/img/polyester.webp',
    'Denim': 'assets/img/denim.webp',
    'Linen': 'assets/img/linen.webp',
    'Corduroy': 'assets/img/corduroy.webp',
    'Kanvas': 'assets/img/kanvas.webp'
  };

  /* ---------- Catalog: filter, cari, detail (Interactive exact reproduction of landingpage.mp4) ---------- */
  var cat = $('catalog');
  if (cat && $('grid')) {
    var items = [].slice.call($('grid').children),
        cats = [].slice.call(cat.querySelectorAll('.cat')),
        q = $('q'),
        viewList = $('viewList'),
        viewDetail = $('viewDetail'),
        active = 'Semua',
        last = null;

    function tile(li) { return li.firstElementChild; }

    function updateCounts() {
      cats.forEach(function (b) {
        var f = b.dataset.filter;
        var countSpan = b.querySelector('.n');
        if (!countSpan) return;
        var n = (f === 'Semua') ? items.length : items.filter(function (li) {
          var t = tile(li);
          return t && t.dataset.cat && t.dataset.cat.toLowerCase() === f.toLowerCase();
        }).length;
        countSpan.textContent = '(' + n + ')';
      });
    }
    updateCounts();

    function show(detail) {
      if (viewList) viewList.hidden = detail;
      if (viewDetail) viewDetail.hidden = !detail;
    }

    function apply() {
      var queryVal = q ? q.value.trim().toLowerCase() : '';
      var n = 0;

      items.forEach(function (li) {
        var t = tile(li);
        if (!t) return;
        var d = t.dataset;
        var hay = ((d.name || '') + ' ' + (d.cat || '') + ' ' + (d.bahan || '') + ' ' + (d.desc || '')).toLowerCase();
        var catMatch = (active === 'Semua') || (d.cat && d.cat.toLowerCase() === active.toLowerCase());
        var queryMatch = !queryVal || hay.indexOf(queryVal) > -1;
        var ok = catMatch && queryMatch;

        li.hidden = !ok;
        if (ok) n++;
      });

      if ($('empty')) $('empty').hidden = n > 0;
      if ($('emptyQ') && q) $('emptyQ').textContent = q.value.trim();
      if ($('emptyWa') && q) {
        $('emptyWa').href = wa('Halo Totebag Malang, saya mencari tote bag bahan/jenis: ' + (q.value.trim() || active));
      }
    }

    function slugify(text) {
      return (text || '').toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
    }

    function renderProductGrid(categoryName, matImg) {
      var container = $('productGrid');
      if (!container) return;
      container.innerHTML = '';

      var prods = materialProducts[categoryName] || materialProducts['Drill'] || [];
      var defaultImg = matImg || materialImages[categoryName] || 'assets/img/kanvas.webp';

      prods.forEach(function (p) {
        var cardImg = p.img || defaultImg;
        var pId = p.id || slugify(p.name);
        var a = document.createElement('a');
        a.className = 'product-card';
        a.href = 'produk/' + encodeURIComponent(pId) + '.html';
        a.title = 'Lihat spesifikasi & detail: ' + p.name;
        a.innerHTML =
          '<div class="product-thumb">' +
            '<button type="button" class="wishlist-btn" aria-label="Simpan ke favorit">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
            '</button>' +
            '<img src="' + cardImg + '" alt="' + p.name + '" loading="lazy">' +
          '</div>' +
          '<div class="product-title">' + p.name + '</div>' +
          '<div class="product-price">' + p.price + '</div>';

        // Clicking wishlist only toggles wishlist without navigating
        a.addEventListener('click', function (e) {
          if (e.target.closest('.wishlist-btn')) {
            e.preventDefault();
            e.stopPropagation();
            var wb = e.target.closest('.wishlist-btn');
            wb.classList.toggle('active');
            var svg = wb.querySelector('svg');
            if (wb.classList.contains('active')) {
              svg.setAttribute('fill', 'currentColor');
            } else {
              svg.setAttribute('fill', 'none');
            }
            return;
          }
        });

        container.appendChild(a);
      });
    }

    function openDetail(t) {
      last = t;
      var d = t.dataset;
      var matImg = d.img || materialImages[d.cat] || 'assets/img/kanvas.webp';

      if ($('dTitle')) $('dTitle').textContent = d.name.toUpperCase();
      if ($('dGroup')) $('dGroup').innerHTML = '<strong>Kategori:</strong>&nbsp;' + d.cat;
      if ($('dMoq')) $('dMoq').innerHTML = '<strong>Minimal Order:</strong>&nbsp;' + d.moq;
      if ($('dBahan')) $('dBahan').innerHTML = '<strong>Bahan:</strong>&nbsp;' + d.bahan;
      if ($('dDesc')) $('dDesc').textContent = d.desc;

      var dImg = $('dImg');
      if (dImg) {
        dImg.src = matImg;
        dImg.alt = d.name;
        dImg.style.cursor = 'pointer';
        dImg.title = 'Klik untuk melihat detail produk ' + d.name;
        dImg.onclick = function () {
          var firstProd = (materialProducts[d.cat] && materialProducts[d.cat][0]) || null;
          var pid = firstProd ? (firstProd.id || slugify(firstProd.name)) : slugify(d.name);
          window.location.href = 'produk/' + encodeURIComponent(pid) + '.html';
        };
      }

      var icon = $('dIcon');
      if (icon) {
        icon.style.display = 'none'; // Replaced by dImg photo
      }

      if ($('dWa')) {
        $('dWa').href = wa('Halo Totebag Malang, saya ingin konsultasi & minta penawaran untuk bahan ' + d.name + ' (' + d.bahan + ').');
      }

      // Render related/matching product models in right column (exact layout of landingpage.mp4)
      renderProductGrid(d.cat, matImg);

      show(true);
      if ($('dTitle')) $('dTitle').focus();
      cat.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    cat.addEventListener('click', function (e) {
      var c = e.target.closest('.cat');
      if (c) {
        active = c.dataset.filter;
        cats.forEach(function (b) {
          var isCurrent = b === c;
          b.classList.toggle('is-active', isCurrent);
          b.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
        });
        apply();
        show(false);
        return;
      }
      var t = e.target.closest('.tile');
      if (t) {
        openDetail(t);
        return;
      }
      if (e.target.closest('#back')) {
        show(false);
        if (last && document.contains(last)) last.focus();
      }
    });

    if (q) {
      q.addEventListener('input', function () {
        apply();
        show(false);
      });
    }

    if ($('searchForm')) {
      $('searchForm').addEventListener('submit', function (e) {
        e.preventDefault();
        apply();
        show(false);
        cat.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Read URL params ?cat=... or ?q=...
    var params = new URLSearchParams(window.location.search);
    var catParam = params.get('cat');
    var qParam = params.get('q');

    if (catParam) {
      cats.forEach(function (b) {
        if (b.dataset.filter.toLowerCase() === catParam.toLowerCase()) {
          active = b.dataset.filter;
          cats.forEach(function (x) { x.classList.remove('is-active'); x.setAttribute('aria-pressed', 'false'); });
          b.classList.add('is-active');
          b.setAttribute('aria-pressed', 'true');
        }
      });
    }
    if (qParam && q) {
      q.value = qParam;
    }
    apply();
  }

  /* ---------- Form kontak -> WhatsApp ---------- */
  var form = $('waForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.classList.add('was-validated');
      if (!form.checkValidity()) return;
      var v = function (id) {
        var el = $(id);
        return el ? el.value.trim() : '';
      };
      var msg = 'Halo Totebag Malang, saya ingin minta penawaran.\n' +
        'Nama/Perusahaan: ' + v('nama') + '\n' +
        'Jenis Bahan: ' + v('jenis') + '\n' +
        'Jumlah: ' + v('jumlah') + ' pcs\n' +
        'Catatan Kebutuhan: ' + (v('pesan') || '-');
      window.open(wa(msg), '_blank', 'noopener');
    });
  }

  /* ---------- Year helper ---------- */
  document.querySelectorAll('#yr, .current-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Back to Top Button ---------- */
  var backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    var checkScroll = function () {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
