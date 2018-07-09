import axios from 'axios';
import cheerio from 'cheerio';

    let devtoList = [];
axios.get('https://www.flipkart.com/search?q=phones&marketplace=FLIPKART&otracker=start&as-show=on&as=off')
    .then((response) => {console.log(response)
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);

            $('._1Nyybr._30XEf0').each(function(i, elem) {
                devtoList[i] = {
                    //href:$(this).children('.a-link-normal.a-text-normal').attr('href'),
                    url: $(this).attr('src')

                }


            });
    }
}, (error) => console.log("err") );

export default devtoList;
