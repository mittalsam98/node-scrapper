import {getHtml,getInstagramFollowers} from './scrapper.js';


async function go(){
 const html  = await getHtml('https://www.instagram.com/decent_sachin.mittal/') ;
    
 const instagramCount=await getInstagramFollowers(html);
console.log('You have '+instagramCount+' instagram follwers');
}

go(); 