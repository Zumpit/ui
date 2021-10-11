import Verifier from 'email-verifier';

let verifier = new Verifier("at_7kZL2WlLMJqqn0NdHU2OXMKDXR0T1")


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
   
    template.forEach(async (email) => {
     console.log(`Testing ${email}`);
     verifier.verify(email, (err, data) => {
         if (err) throw err;
         //console.log(data);
        //  if(data.smtpCheck==='true'){
        //      console.log(email) 
        // }
        if (data.smtpCheck==='true'){
            return email;
        }
     })
   })
  
}