import React, {useState} from 'react';
import { Button, Icon } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { SimpleCard } from 'app/components';

const EmailVerifierForm = () => {
     const [email ,setEmail] = useState('');
     
     const handleSubmit = (e) => {
         e.preventDefault();
         console.log(e);
     }

     return (
        <div className="m-sm-30" >
            <SimpleCard title="Email Verifier">
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <TextValidator
                        className="mb-4 w-full"
                        label="Email@address.com"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="Email"
                        value={email || ''}
                        validators={['required','isEmail']}
                        errorMessages={[
                            'this field is required',
                        ]}/>
          <Button  color="primary" variant="contained" type="submit">
              <Icon>search</Icon>
               <span className="pl-2 capitalize">Verify</span>
          </Button>
           </ValidatorForm>
           </SimpleCard>
    </div>
    )
}

export default EmailVerifierForm;