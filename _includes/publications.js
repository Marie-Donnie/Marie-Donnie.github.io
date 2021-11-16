var api_url = "https://api.archives-ouvertes.fr/search/?wt=json&rows=10000&fq=authIdHal_s:marie-delavergne&fl=label_bibtex,doiId_s,docid,uri_s,label_s,authFullName_s,title_s,producedDateY_i,files_s,conferenceTitle_s,journalTitle_s,docType_s,abstract_s&sort=producedDateY_i%20desc";


function updatePublications (publications) {
    let html = `
<p>${publications.response.numFound} .</p>
<ul class="articles">
`;
    for (let p of publications.response.docs) {
        html +=`
<li>
  <h4><a href="${p.uri_s}">${p.title_s[0]}</a></h4>
  <p>${p.authFullName_s.join(", ")} (${p.producedDateY_i})</p>
  <p>${p.docType_s}</p>
  <p class="conference">${"conferenceTitle_s" in p ? p.conferenceTitle_s : ""}</p>
  <div class="files">
`;
        if ("files_s" in p) {
            html += `<a href="${p.files_s[0]}">PDF</a>`;
        }
        html += `
<a href="${p.uri_s}/bibtex">Bibtex</a>
<div class="modal-body">
  <h5>Bibtex
  <p>${p.label_bibtex}</p>
</div>
  </div>
</li>
`;
    }
    html += "</ul>";
    // $('#hal_target').html(html);
    return html;
}

// producedDateY_i vs releasedDateY_i

function getPublications () {
    publications_period = "";
    $('#hal_target').html(`<p>Loading publications...</p>`);
    $.getJSON(api_url, updatePublications);
}


$( document ).ready(function() {
    $('#publi_hal').html(``);
    getPublications ();
});
