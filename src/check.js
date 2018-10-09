let axios = require('axios');
let cheerio = require('cheerio');

let base_url = 'https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=reebok+sports+shoes';

axios.get(base_url).then( (response) => {
  let $ = cheerio.load(response.data);
  let kurs = [];
  $('img,.a-link-normal.a-text-normal.s-access-image.cfMarker').each( (i, elm) => {
    kurs.push( {
      src:$(elm).attr('src'),

    });
  });
  return(kurs);
})
.then ( (kurs) => {
  console.log(kurs);
});
