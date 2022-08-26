const endpoint = 'https://persongalleri-5d3e.restdb.io/rest/persongalleri';
const info = {
  headers: {
    'x-apikey': '600fe9211346a1524ff12e31',
  },
};

async function hentPersoner() {
  const response = await fetch(endpoint, info);
  const personer = await response.json();
  visPersoner(personer);
}

function visPersoner(personer) {
  const personSection = document.querySelector('#persongalleri');
  const personTemplate = document.querySelector('template');

  personer.forEach((person) => {
    let fullname = person.fornavn + ' ' + person.efternavn;
    const clone = personTemplate.cloneNode(true).content;
    clone.querySelector('h2').textContent = fullname;
    clone.querySelector('img').src = '/faces/' + person.billede;
    clone.querySelector('.email').textContent = `E-mail: ${person.email}`;
    clone.querySelector('.fødselsdag').textContent =
      'Født: ' + person.fødselsdag.slice(0, 10);
    clone.querySelector('.titel').textContent = `Titel: ${person.titel}`;
    personSection.appendChild(clone);
  });
}

hentPersoner();
