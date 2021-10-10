// find linkedin of founded email

//const cheerio = require('cheerio') ;
//const axios = require('axios');

import cheerio from 'cheerio';
import axios from 'axios';

const AXIOS_OPTIONS = {
    headers: {
       "User-Agent": 
         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
    },
};

const linkedinLinkGoogle = (email) => {
  const encodedString =  encodeURI(email)   
  return (
   axios
       .get(
           `https://www.google.com/search?q=site%3A"linkedin.com"++${encodedString}&hl=en&gl=us`,
            AXIOS_OPTIONS
       )
       .then( function({data}){
          let $ = cheerio.load(data);         
          var links = []; 
         $(".yuRUbf > a").each((i,el) => {
             links[i] = $(el).attr("href");
         });
         var result = [];
         for (let i=0; i< links.length; i++){
                result[i] = {
                   link: links[i],
                };
         }
         var link = result[0];
         
         console.log("Linkedin Link of EMail : ",link.link);
         return link.link;
       })
       .catch(function(err){
          console.log(err);
       })
  )
}

export default linkedinLinkGoogle

