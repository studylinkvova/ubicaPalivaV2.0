let rozhid_km = 0;
let proc_misto_km = 0;
let proc_shose_km = 0;
let proc_bezdor_km = 0;
let start_probig_km = 0;
let end_probig_km = 0;
let start_die_km = 0;
let zapravka_die_km = 0;

let rozhid_pal = 0;
let proc_misto_pal = 0;
let proc_shose_pal = 0;
let proc_bezdor_pal = 0;
let start_probig_pal = 0;
let start_die_pal = 0;
let zapravka_die_pal = 0;
let end_die_pal = 0;

let rozdih_na_1km_misto = 0;
let rozdih_na_1km_shose = 0;
let rozdih_na_1km_bezdor = 0;
let full_probig = 0;

function vitrata_na_1km_po_km(){
    rozhid_km = Number(document.getElementById('rozhid_km').value);
    proc_misto_km = Number(document.getElementById('proc_misto_km').value) / 100;
    proc_shose_km = Number(document.getElementById('proc_shose_km').value) / 100;
    proc_bezdor_km = Number(document.getElementById('proc_bezdor_km').value) / 100;
    document.getElementById('rozhid_km_txt').innerHTML = `(${rozhid_km})`;
    document.getElementById('proc_misto_km_txt').innerHTML = `(${proc_misto_km*100} %)`;
    document.getElementById('proc_shose_km_txt').innerHTML = `(${proc_shose_km*100} %)`;
    document.getElementById('proc_bezdor_km_txt').innerHTML = `(${proc_bezdor_km*100} % )`;
}
function rahunok_po_km() {
 
    start_probig_km = parseFloat(document.getElementById('start_probig_km').value) || 0;
    end_probig_km = parseFloat(document.getElementById('end_probig_km').value) || 0;
    start_die_km = parseFloat(document.getElementById('start_die_km').value) || 0;
    zapravka_die_km = parseFloat(document.getElementById('zapravka_die_km').value) || 0;

    full_probig = end_probig_km - start_probig_km;


    km_city = Math.round(full_probig * proc_misto_km);
    km_trasa = Math.round(full_probig * proc_shose_km);
    km_bezdor = Math.round(full_probig * proc_bezdor_km);

    rozdih_na_1km_misto = (rozhid_km / 100) * 1.1;
    rozdih_na_1km_shose = (rozhid_km / 100) * 0.85;
    rozdih_na_1km_bezdor = (rozhid_km / 100) * 1.25;


   let paliva_city = Math.round(km_city * rozdih_na_1km_misto);
   let paliva_bezdor = Math.round(km_bezdor * rozdih_na_1km_bezdor);
   let paliva_trasa = Math.round(km_trasa * rozdih_na_1km_shose);
   let paliva_full = paliva_city + paliva_bezdor + paliva_trasa;

   
   let end_diesel = start_die_km + zapravka_die_km - paliva_full;

    // Вивід у HTML
    document.getElementById('rezultat').innerHTML = `
        <tr>
            <th>Початковий пробіг ${start_probig_km}</th>
            <th>Кінцевий пробіг ${end_probig_km}</th>
            <th>Пройдено за шляхівку ${full_probig}</th>
        </tr>
        <tr>
            <td>Наявність перед виїздом ${start_die_km}</td>
            <td>Заправка ${zapravka_die_km}</td>
            <td>Наявність під час постановки на стоянку ${end_diesel}</td>
        </tr>
        <tr>
            <td>Пробіг по місту ${km_city}</td>
            <td>Пробіг по шосе ${km_trasa}</td>
            <td>Пробіг по бездоріжжю ${km_bezdor}</td>
        </tr>
        <tr>
            <td>Витратив палива місто ${paliva_city}</td>
            <td>Витратив палива шосе ${paliva_trasa}</td>
            <td>Витратив палива бездоріжжя ${paliva_bezdor}</td>
            <td>Повна витрата палива ${paliva_full}</td>
        </tr>
    `;
    document.getElementById('zadnik').innerHTML = `
        <h2>ВП<sub>місто</sub> =  <math>
    <mfrac>
      <mrow><mi>${rozhid_km}</mi> <mo>×</mo> <mi>${km_city}</mi></mrow>
      <mn>100</mn>
    </mfrac>
  </math>
  +10% = ${paliva_city}
</h2>
    <h2>ВП<sub>шосе</sub> =  <math>
    <mfrac>
      <mrow><mi>${rozhid_km}</mi> <mo>×</mo> <mi>${km_trasa}</mi></mrow>
      <mn>100</mn>
    </mfrac>
  </math>
  -15% = ${paliva_trasa}
</h2>
    <h2>ВП<sub>бездор</sub> =  <math>
    <mfrac>
      <mrow><mi>${rozhid_km}</mi> <mo>×</mo> <mi>${km_bezdor}</mi></mrow>
      <mn>100</mn>
    </mfrac>
  </math>
  +25% = ${paliva_bezdor}
</h2>
<h2>ВП<sub>заг = ${paliva_city} + ${paliva_trasa} + ${paliva_bezdor} = ${paliva_full}</sub>
    `
}
function vitrata_na_1km_po_diesel(){
    rozhid_pal = Number(document.getElementById('rozhid_pal').value);
    proc_misto_pal = Number(document.getElementById('proc_misto_pal').value) / 100;
    proc_shose_pal = Number(document.getElementById('proc_shose_pal').value) / 100;
    proc_bezdor_pal = Number(document.getElementById('proc_bezdor_pal').value) / 100;
    document.getElementById('rozhid_pal_txt').innerHTML = `(${rozhid_pal})`;
    document.getElementById('proc_misto_pal_txt').innerHTML = `(${proc_misto_pal*100} %)`;
    document.getElementById('proc_shose_pal_txt').innerHTML = `(${proc_shose_pal*100} %)`;
    document.getElementById('proc_bezdor_pal_txt').innerHTML = `(${proc_bezdor_pal*100} % )`;
}
function rahunok_po_diesel(){
    start_die_pal = parseFloat(document.getElementById('start_die_pal').value) || 0;
    start_probig_pal = parseFloat(document.getElementById('start_probig_pal').value) || 0;
    zapravka_die_pal = parseFloat(document.getElementById('zapravka_die_pal').value) || 0;
    end_die_pal = parseFloat(document.getElementById('end_die_pal').value) || 0;
    diesel_all = start_die_pal + zapravka_die_pal - end_die_pal;
    
    
    diesel_city = Math.round(diesel_all * proc_misto_pal);
    diesel_trasa = Math.round(diesel_all * proc_shose_pal);
    diesel_bezdor = Math.round(diesel_all * proc_bezdor_pal);

    km_po_bezdory = Math.round(diesel_bezdor / ((rozhid_pal / 100) * 1.25));
    km_po_city = Math.round(diesel_city / ((rozhid_pal / 100) * 1.1));
    km_po_shose = Math.round(diesel_trasa / ((rozhid_pal / 100) * 0.85));
    km_zagalno =  km_po_bezdory + km_po_city + km_po_shose;

    km_end = start_probig_pal + km_zagalno;


    // Вивід у HTML
    document.getElementById('rezultat').innerHTML = `
        <tr>
            <th>Початковий пробіг ${start_probig_pal}</th>
            <th>Кінцевий пробіг ${km_end}</th>
            <th>Пройдено за шляхівку ${km_zagalno}</th>
        </tr>
        <tr>
            <td>Наявність перед виїздом ${start_die_pal}</td>
            <td>Заправка ${zapravka_die_pal}</td>
            <td>Наявність під час постановки на стоянку ${end_die_pal}</td>
        </tr>
        <tr>
            <td>Пробіг по місту ${km_po_city}</td>
            <td>Пробіг по шосе ${km_po_shose}</td>
            <td>Пробіг по бездоріжжю ${km_po_bezdory}</td>
        </tr>
        <tr>
            <td>Витратив палива місто ${diesel_city}</td>
            <td>Витратив палива шосе ${diesel_trasa}</td>
            <td>Витратив палива бездоріжжя ${diesel_bezdor}</td>
            <td>Повна витрата палива ${diesel_all}</td>
        </tr>
    `;
    document.getElementById('zadnik').innerHTML = `
        <h2>ВП<sub>місто</sub> =  <math>
    <mfrac>
      <mrow><mi>${rozhid_pal}</mi> <mo>×</mo> <mi>${km_po_city}</mi></mrow>
      <mn>100</mn>
    </mfrac>
  </math>
  +10% = ${diesel_city}
</h2>
    <h2>ВП<sub>шосе</sub> =  <math>
    <mfrac>
      <mrow><mi>${rozhid_pal}</mi> <mo>×</mo> <mi>${km_po_shose}</mi></mrow>
      <mn>100</mn>
    </mfrac>
  </math>
  -15% = ${diesel_trasa}
</h2>
    <h2>ВП<sub>бездор</sub> =  <math>
    <mfrac>
      <mrow><mi>${rozhid_pal}</mi> <mo>×</mo> <mi>${km_po_bezdory}</mi></mrow>
      <mn>100</mn>
    </mfrac>
  </math>
  +25% = ${diesel_bezdor}
</h2>
<h2>ВП<sub>заг = ${diesel_city} + ${diesel_trasa} + ${diesel_bezdor} = ${diesel_all}</sub>
    `
}