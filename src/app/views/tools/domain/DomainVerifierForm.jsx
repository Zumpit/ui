import React, { useState } from 'react';
import { Button, Icon } from '@material-ui/core'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { SimpleCard } from 'app/components';

const DomainVerifierForm = () => {
    const [domain ,setDomain] = useState('');
     
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className="m-sm-30" >
            <SimpleCard title="Domain Verifier">
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
            <TextValidator
                        className="mb-4 w-full"
                        label="www.example.com"
                        onChange={(e) => setDomain(e.target.value)}
                        type="text"
                        name="Domain"
                        value={domain || ''}
                        validators={['required']}
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
export default DomainVerifierForm;