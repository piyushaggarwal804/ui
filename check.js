const axios =require('axios');
const cheerio=require('cheerio');


axios.get('https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=reebok+sports+shoes')
    .then((response) => {
      // console.log(response)
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            // console.log($.html())
            // console.log($.text())
          let x=  $('.mediaCentralImage.imageContainer__image')
          console.log(x.length)
          console.log(typeof(x))
          console.log(x[0])
          for(let i=0;i<x.length;i++){
            console.log(x[i])
          }
                }
}, (error) => console.log("err") );

// export default devtoList;
