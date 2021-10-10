//const { rejects } = require('assert');
//var async = require('async');
//const { first } = require('cheerio/lib/api/traversing');
//const { resolve } = require('dns');
//var emailExistence = require('email-existence');
import React from 'react';
import emailExistence from 'email-existence';
import async from 'async'; 

const findEmail = (firstname, lastname, domain) => {
  const fi = firstname.charAt(0);
  const li = lastname.charAt(0);
  
 const template = [ 
    firstname+'@'+domain,
    lastname+'@'+domain,
    fi+lastname+'@'+domain, 
    li+firstname+'@'+domain,
    firstname+lastname+'@'+domain, 
    lastname+firstname+'@'+domain,
    firstname+'.'+lastname+'@'+domain,
    lastname+'.'+firstname+'@'+domain,
    fi+'.'+lastname+'@'+domain,
    li+'.'+firstname+'@'+domain,
    firstname+'-'+lastname+'@'+domain,
    lastname+'-'+firstname+'@'+domain,
    fi+'-'+li+'@'+domain,
    lastname+'_'+firstname+'@'+domain,
    firstname+'_'+lastname+'@'+domain,
    fi+'_'+li+'@'+domain,
    li+'_'+fi+'@'+domain,
  ];
   
   return new Promise((resolve, reject) => {
      const queue = async.queue((email, done) => {
         // check for email validation
         console.log('Testing %s...', email);
         emailExistence.check(email, (err, res) => {
            //console.log('I am in checking ', email);
            if (err){
               console.log('Idhar error : ', err);
               return done();
            }
            // if (res==false){
            //    return done();
            // }
            if (res){
               console.log(`${email} is a valid email address ${res}`);
               queue.kill();
               return resolve(email);
            }
         })
         setTimeout(()=>{
            const remaining = queue.length();
            done(null, {email, remaining});
         },2000)
      },2);
      template.forEach((email) => {
        queue.push(email, (error, {email,remaining}) => {
            if (error){
              console.log(`An error occured while testing ${email}`);
            }
            else{
               console.log(`Finished with ${email}. ${remaining} emails remaining`)
            }
        });      
      });
      queue.drain(() => {
         console.log(`Email not Found for ${domain}, ${firstname}, ${lastname} `)      
         reject();
      })    
   })  
}
export default findEmail;
