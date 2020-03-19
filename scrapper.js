
import axios from 'axios'
import cheerio from 'cheerio'

export async function getHtml(url){
    const {data:html}=await axios.get(url);
    return html;
}



export async function getInstagramFollowers(html){
    const $=cheerio.load(html);
    const dataString=$('script[type="application/ld+json"]').html();
    const pageObject=JSON.parse(dataString);
    // return span.data('count'); 
    return (parseInt(pageObject.mainEntityofPage.interactionStatistic.userInteractionCount))
}
