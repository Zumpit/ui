import queue from 'async';
import check from 'email-existence';
import load from 'cheerio';
import axios from 'axios';
import Promise from 'es6-promise';
//import Verifier from 'email-verifier';

//let verifier = new Verifier("at_7kZL2WlLMJqqn0NdHU2OXMKDXR0T1")


const AXIOS_OPTIONS = {
    headers: {
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
    },
};

export function findEmail(firstname, lastname, domain){
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
        const q = queue((email, done) => {
            // check for email validation
            console.log('Testing %s...', email);
            check(email, (err, res) => {
                //console.log('I am in checking ', email);
                if (err) {
                    console.log('Idhar error : ', err);
                    return done();
                }
                // if (res==false){
                //    return done();
                // }
                if (res) {
                    console.log(`${email} is a valid email address ${res}`);
                    q.kill();
                    return resolve(email);
                }
            });
            setTimeout(() => {
                const remaining = q.length();
                done(null, { email, remaining });
            }, 2000);
        }, 2);
        template.forEach((email) => {
            q.push(email, (error, { email, remaining }) => {
                if (error) {
                    console.log(`An error occured while testing ${email}`);
                } else {
                    console.log(
                        `Finished with ${email}. ${remaining} emails remaining`
                    );
                }
            });
        });
        q.drain(() => {
            console.log(
                `Email not Found for ${domain}, ${firstname}, ${lastname} `
            );
            reject();
        });
    });
}

function findLinkedLink(emailAddr) {
    const encodedString = encodeURI(emailAddr);
    return axios
        .get(
            `https://www.google.com/search?q=site%3A"linkedin.com"++${encodedString}&hl=en&gl=us`,
            AXIOS_OPTIONS
        )
        .then(function ({ data }) {
            const $ = load(data);
            const links = [];
            $('.yuRUbf > a').each((i, el) => {
                links[i] = $(el).attr('href');
            });
            const result = [];
            for (let i = 0; i < links.length; i++) {
                result[i] = {
                    link: links[i],
                };
            }
            const link = result[0];

            console.log('Linkedin Link of EMail : ', link.link);
            return link.link;
        })
        .catch(function (err) {
            console.log(err);
        });
}

export default { findEmail, findLinkedLink };
  
