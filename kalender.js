// Møtene hentes fra Venstrekoderne sin kalender i Vi (venstre.medvi.no →
// Venstrekoderne → Arrangementer). Vi er kilden: nye møter legges inn der,
// og denne siden viser dem selv. Uten JavaScript, eller om Vi ikke svarer,
// står møtene fra _posts og _includes igjen som før.
const KALENDER = "https://venstre.medvi.no/kalender/arrangementer-2paqpn.json";

// Møtene som sto på den gamle siden beholder ankrene sine, så lenker til
// dem (fra Facebook og andre steder) fortsatt åpner riktig møte.
const GAMLE_ANKRE = {
    detmep: "kunstig-intelligens-mars-2022",
    cyk8r3: "personvern-november-2022",
    stax32: "csam-desember-2022",
    "63165t": "offentlige-it-prosjekter-magne",
    x5kvx5: "eus-radikale-digitalpolitikk",
    "91d9mc": "oslo-kommune-digitale-tjenester",
    b2y77x: "/2024/02/13/oslo-kommune-digitale-tjenester",
    jnfcya: "/2024/03/12/workshop-stortingsprogrammet-del-1",
    vr49gb: "/2024/12/17/teknologi-og-krig",
    "29zr58": "/2025/11/03/nye-datasentre",
};

async function visMøter() {
    const neste = document.getElementById("neste-moter");
    const tidligere = document.getElementById("tidligere-moter");
    if (!neste || !tidligere) return;

    let møter;
    try {
        const svar = await fetch(KALENDER);
        if (!svar.ok) return;
        møter = (await svar.json()).events;
    } catch {
        return;
    }

    const kommende = møter.filter((møte) => !møte.over);
    const ferdige = møter.filter((møte) => møte.over).reverse();

    neste.replaceChildren(...(kommende.length ? [overskrift(kommende.length), ...kommende.map(kort)] : []));
    tidligere.replaceChildren(...ferdige.map(kort));

    autoExpandLinked();
    document.getElementById(decodeURIComponent(window.location.hash.slice(1)))?.scrollIntoView();
}

function overskrift(antall) {
    const ramme = element("div", "px-6 md:px-8 mx-auto max-w-prose content mb-6");
    const indre = element("div", "mt-12 content");
    indre.append(element("h2", "text-venstregrønn-standard font-bold", antall === 1 ? "Neste møte:" : "Kommende møter:"));
    ramme.append(indre);
    return ramme;
}

// Samme kort som møtene på siden alltid har hatt: bildet, tittelen, når og
// hvor, og resten bak «Les mer».
function kort(møte) {
    const boks = element("div", "md:flex mb-6 md:mb-8 md:justify-items-stretch mx-auto max-w-prose bg-gray-100 shadow-xl border-4 border-mørk-tavle-standard");
    boks.id = GAMLE_ANKRE[møte.id] || møte.id;

    if (møte.image_url) {
        const bilde = element("picture", "md:flex-1.5 self-stretch bg-mørk-tavle-standard");
        const img = element("img", "md:h-[165px] object-cover object-left md:shadow-lg");
        img.src = møte.image_url;
        img.alt = "";
        bilde.append(img);
        boks.append(bilde);
    }

    const tekst = element("div", "p-6 md:px-8 md:flex-1");
    tekst.append(element("h2", "font-bold", møte.title), element("span", "my-3", tidOgSted(møte)));

    const mer = element("details", "content mt-3");
    mer.append(element("summary", "a cursor-pointer", "Les mer"));
    const beskrivelse = element("div", "kalender-beskrivelse content");
    beskrivelse.innerHTML = møte.description_html;
    // Vi pakker teksten inn i en egen div; sidens .content-regler gjelder
    // bare direkte barn, så den får klassen også.
    beskrivelse.querySelectorAll(":scope > div").forEach((indre) => indre.classList.add("content"));
    mer.append(beskrivelse);
    tekst.append(mer);

    boks.append(tekst);
    return boks;
}

// «Mandag 3. november 2025, kl. 18:00 – 19:30, Venstres hus»: datoene og
// klokkeslettene slik de er skrevet i Vi, på Oslo-tid.
function tidOgSted(møte) {
    let tekst = dato(møte.start_date);
    if (møte.end_date && møte.end_date !== møte.start_date) tekst += ` – ${dato(møte.end_date)}`;
    if (møte.start_time) tekst += `, kl. ${møte.start_time}${møte.end_time ? ` – ${møte.end_time}` : ""}`;
    if (møte.location) tekst += `, ${møte.location}`;
    return tekst;
}

function dato(iso) {
    const [år, måned, dag] = iso.split("-").map(Number);
    const tekst = new Date(år, måned - 1, dag).toLocaleDateString("nb-NO", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    return tekst.charAt(0).toUpperCase() + tekst.slice(1);
}

function element(navn, klasser, tekst) {
    const node = document.createElement(navn);
    if (klasser) node.className = klasser;
    if (tekst) node.textContent = tekst;
    return node;
}

visMøter();
