// ============================================================================
// ILIAS & LAHCEN — Shared Data Layer
// All product data lives in localStorage under this key.
// Both admin.html and client.html use the same key so they stay in sync.
// ============================================================================

const LS_KEY = "boutique_produits";

// ── Default product catalogue ────────────────────────────────────────────────
// Used ONLY when localStorage is empty (first ever visit).
const PRODUITS_DEFAUT = [
    { id: 2,  nom: "FC Barcelona",        desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/qaEQSuXNwtGQEIyA.png",  prix: 300, reduc: 15 },
    { id: 3,  nom: "Manchester United",   desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/RbVBspigZmtgSTuf.png",  prix: 280, reduc: 10 },
    { id: 4,  nom: "Atletico Madrid",     desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/RPPFWOHvqLmMzATN.png",  prix: 260, reduc: 12 },
    { id: 5,  nom: "Bayern Munich",       desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/oNkExRcUNiQMUqkq.png",  prix: 320, reduc: 20 },
    { id: 6,  nom: "Borussia Dortmund",   desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/CIQlKUJIGQbPAXok.png",  prix: 250, reduc: 14 },
    { id: 7,  nom: "AC Milan",            desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/RxjIzScvbTduLuyd.png",  prix: 270, reduc: 11 },
    { id: 8,  nom: "Inter Milan",         desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/rBfLJpsSCylekyeM.png",  prix: 275, reduc: 13 },
    { id: 9,  nom: "Juventus",            desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/lvNRoVKlnzTDPREL.png",  prix: 290, reduc: 16 },
    { id: 10, nom: "AS Roma",             desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/BSBhbEQjfiuTHLvo.png",  prix: 240, reduc: 9  },
    { id: 11, nom: "Manchester City",     desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/QXOziUQBsLkYROuQ.png",  prix: 310, reduc: 18 },
    { id: 12, nom: "Liverpool",           desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/nAhgpmyLqJJefOHx.png",  prix: 305, reduc: 17 },
    { id: 13, nom: "Chelsea",             desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/DAkUvWpPEAeMCXDT.png",  prix: 295, reduc: 14 },
    { id: 14, nom: "Tottenham Spurs",     desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/nPsjnSwTTmpsJahE.png",  prix: 260, reduc: 12 },
    { id: 15, nom: "Arsenal",             desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/btEoiicZToyocXHG.png",  prix: 285, reduc: 13 },
    { id: 16, nom: "PSG",                 desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/lygaJJwGxxSplQVv.png",  prix: 330, reduc: 20 },
    { id: 17, nom: "Marseille",           desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/iQHdHUqLVBaWCVqp.png",  prix: 230, reduc: 8  },
    { id: 18, nom: "Benfica",             desc: "club sportif",          img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/yCDMgvAfacbOIVFF.png",  prix: 220, reduc: 7  },
    { id: 19, nom: "Raja Club Athletic",  desc: "club sportif marocain", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/ZeeKdsduQZkecHJi.png",  prix: 210, reduc: 10 },
    { id: 20, nom: "Wydad Athletic Club", desc: "club sportif marocain", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663526519230/smvEdYrnPhLvpYVZ.png",  prix: 215, reduc: 12 },
    { id: 21, nom: "France",              desc: "Tenu Home (Rang 1)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/qChfvzufrZgLxwNU.jpg",            prix: 500, reduc: 25 },
    { id: 22, nom: "Espagne",             desc: "Tenu Home (Rang 2)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/PwHrYJioEWyfEXSb.png",            prix: 480, reduc: 22 },
    { id: 23, nom: "Argentine",           desc: "Tenu Home (Rang 3)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/YNGVtcNMDCrwWGFz.png",            prix: 490, reduc: 24 },
    { id: 24, nom: "Angleterre",          desc: "Tenu Home (Rang 4)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/ezHXsXNPYvcxjgBY.png",            prix: 450, reduc: 20 },
    { id: 25, nom: "Portugal",            desc: "Tenu Home (Rang 5)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/CgzDacHWeDtyoUGs.webp",           prix: 440, reduc: 18 },
    { id: 26, nom: "Brésil",              desc: "Tenu Home (Rang 6)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/TmWwnkOdzMzfDLdy.png",            prix: 460, reduc: 21 },
    { id: 27, nom: "Pays-Bas",            desc: "Tenu Home (Rang 7)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/OGCdYYsfgNFMdByG.png",            prix: 420, reduc: 15 },
    { id: 28, nom: "Maroc",               desc: "Tenu Home (Rang 8)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/tivNsTRMigUveUju.webp",           prix: 410, reduc: 14 },
    { id: 29, nom: "Belgique",            desc: "Tenu Home (Rang 9)",    img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/HLMkxkTqrjrPtpCY.jpg",            prix: 400, reduc: 12 },
    { id: 30, nom: "Allemagne",           desc: "Tenu Home (Rang 10)",   img: "https://files.manuscdn.com/user_upload_by_module/session_file/91973513/EdNnaqghqGoZpzkc.png",            prix: 430, reduc: 16 }
];

// ============================================================================
// READ — Load all products from localStorage.
// If localStorage is empty, seed it with defaults and return those.
// ============================================================================
function db_charger() {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
        try {
            return JSON.parse(raw);
        } catch (e) {
            // Corrupted data — reset to defaults
            console.warn("localStorage data corrupted, resetting to defaults.");
        }
    }
    // First visit or corrupted: seed localStorage with default products
    db_sauvegarder(PRODUITS_DEFAUT);
    return PRODUITS_DEFAUT.slice(); // return a copy
}

// ============================================================================
// WRITE — Persist the full products array to localStorage.
// Every Create / Update / Delete operation ends by calling this.
// ============================================================================
function db_sauvegarder(liste) {
    localStorage.setItem(LS_KEY, JSON.stringify(liste));
}

// ============================================================================
// CREATE — Add a new product to the stored list.
// Automatically assigns a unique id (max existing id + 1).
// Returns the newly created product.
// ============================================================================
function db_ajouter(nom, desc, img, prix, reduc) {
    const liste = db_charger();
    const newId = liste.length > 0 ? Math.max(...liste.map(p => p.id)) + 1 : 1;
    const produit = { id: newId, nom, desc, img, prix: Number(prix), reduc: Number(reduc) || 0 };
    liste.push(produit);
    db_sauvegarder(liste);
    return produit;
}

// ============================================================================
// UPDATE — Replace an existing product (matched by id) with new values.
// All fields are updated; any omitted field keeps its old value.
// Returns the updated list.
// ============================================================================
function db_modifier(id, champs) {
    const liste = db_charger().map(p =>
        p.id === id ? { ...p, ...champs, id } : p   // preserve id
    );
    db_sauvegarder(liste);
    return liste;
}

// ============================================================================
// DELETE — Remove a product by id.
// Returns the updated list.
// ============================================================================
function db_supprimer(id) {
    const liste = db_charger().filter(p => p.id !== id);
    db_sauvegarder(liste);
    return liste;
}

// ============================================================================
// HELPERS shared by both pages
// ============================================================================

/** Calculate final price after discount */
function prixFinal(p) {
    return p.prix * (1 - p.reduc / 100);
}

/** Format a number as "XX.XX Dhs", stripping trailing .00 */
function fmt(n) {
    return n.toFixed(2).replace(/\.00$/, '') + ' Dhs';
}


// ============================================================================
// ADMIN PAGE — everything below only runs when admin elements are present
// ============================================================================

(function adminInit() {
    if (!document.getElementById('grid')) return;   // not on admin page

    let produits = db_charger();      // in-memory working copy
    let editId   = null;              // id of the product currently being edited

    // ── Stats bar ───────────────────────────────────────────────────────────
    function stats() {
        document.getElementById("stat-total").textContent = produits.length;

        const total = produits.reduce((s, p) => s + prixFinal(p), 0);
        const avg   = produits.length ? Math.round(total / produits.length) : 0;
        document.getElementById("stat-avg").textContent = avg + " Dhs";

        const max = produits.length ? Math.max(...produits.map(p => p.reduc)) : 0;
        document.getElementById("stat-max").textContent = max + "%";
    }

    // ── Render product cards ─────────────────────────────────────────────────
    function render(liste) {
        const grid  = document.getElementById("grid");
        const empty = document.getElementById("empty");

        if (!liste.length) {
            grid.innerHTML = "";
            empty.style.display = "block";
            return;
        }
        empty.style.display = "none";
        grid.innerHTML = liste.map(p => {
            const fp = fmt(prixFinal(p));
            return `
<div class="card">
  <div class="card-img-wrap">
    ${p.img
        ? `<img src="${p.img}" alt="${p.nom}">`
        : `<div class="img-placeholder">Aucune image</div>`}
    ${p.reduc > 0 ? `<span class="badge">-${p.reduc}%</span>` : ""}
  </div>
  <div class="card-body">
    <div class="card-name">${p.nom}</div>
    <div class="card-desc">${p.desc}</div>
    <div class="card-price">${fp}</div>
    ${p.reduc > 0 ? `<div class="card-old">${fmt(p.prix)}</div>` : ""}
  </div>
  <div class="card-actions">
    <button class="btn-edit" onclick="ouvrir(${p.id})">Modifier</button>
    <button class="btn-del"  onclick="supprimer(${p.id})">Supprimer</button>
  </div>
</div>`;
        }).join("");
    }

    // ── Search / filter ──────────────────────────────────────────────────────
    window.filtrer = function() {
        const q = document.getElementById("search").value.toLowerCase();
        render(produits.filter(p =>
            p.nom.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
        ));
    };

    // ── CREATE ───────────────────────────────────────────────────────────────
    window.ajouterProduit = function() {
        const nom  = document.getElementById("f-name").value.trim();
        const prix = parseFloat(document.getElementById("f-price").value);

        if (!nom)          return showToast("⚠️ Nom obligatoire");
        if (!prix || prix <= 0) return showToast("⚠️ Prix invalide");

        // db_ajouter writes to localStorage and returns the new product
        db_ajouter(
            nom,
            document.getElementById("f-desc").value.trim(),
            document.getElementById("f-img").value.trim(),
            prix,
            parseInt(document.getElementById("f-reduc").value) || 0
        );

        // Reload in-memory copy from localStorage so it stays in sync
        produits = db_charger();
        viderForm();
        stats();
        filtrer();
        showToast("✅ Produit ajouté !");
    };

    function viderForm() {
        ["f-name","f-desc","f-img","f-price","f-reduc"]
            .forEach(id => { document.getElementById(id).value = ""; });
    }

    // ── DELETE ───────────────────────────────────────────────────────────────
    window.supprimer = function(id) {
        if (!confirm("Supprimer ce produit ?")) return;
        produits = db_supprimer(id);   // db_supprimer returns the updated list
        stats();
        filtrer();
        showToast("🗑️ Produit supprimé");
    };

    // ── UPDATE — open modal ──────────────────────────────────────────────────
    window.ouvrir = function(id) {
        const p = produits.find(x => x.id === id);
        if (!p) return;
        editId = id;

        document.getElementById("m-name").value  = p.nom;
        document.getElementById("m-desc").value  = p.desc;
        document.getElementById("m-price").value = p.prix;
        document.getElementById("m-reduc").value = p.reduc;
        document.getElementById("m-img").value   = p.img;

        document.getElementById("modal").classList.add("open");
    };

    window.fermerModal = function() {
        document.getElementById("modal").classList.remove("open");
        editId = null;
    };

    window.fermerModalSiDehors = function(e) {
        if (e.target.id === "modal") fermerModal();
    };

    // ── UPDATE — save modal ──────────────────────────────────────────────────
    window.sauvegarder = function() {
        const nom   = document.getElementById("m-name").value.trim();
        const prix  = parseFloat(document.getElementById("m-price").value);

        if (!nom)          return showToast("⚠️ Nom obligatoire");
        if (!prix || prix <= 0) return showToast("⚠️ Prix invalide");

        // db_modifier writes to localStorage and returns the updated list
        produits = db_modifier(editId, {
            nom,
            desc:  document.getElementById("m-desc").value.trim(),
            prix,
            reduc: parseInt(document.getElementById("m-reduc").value) || 0,
            img:   document.getElementById("m-img").value.trim()
        });

        fermerModal();
        stats();
        filtrer();
        showToast("✅ Modifications sauvegardées");
    };

    // ── Toast notification ───────────────────────────────────────────────────
    function showToast(msg) {
        const t = document.getElementById("toast");
        if (!t) return;
        t.textContent = msg;
        t.style.display = "block";
        clearTimeout(t._timer);
        t._timer = setTimeout(() => { t.style.display = "none"; }, 2800);
    }

    // ── Boot ─────────────────────────────────────────────────────────────────
    stats();
    filtrer();
})();