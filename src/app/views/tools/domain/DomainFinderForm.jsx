import React, {useState} from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {Button, Icon, Grid, Card } from '@material-ui/core'
import {SimpleCard} from 'app/components';
import VerticalStepper from '../../forms/UploadForm';

function DomainFinderForm(){
    const [input, setInput] = useState('');
     
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit the form');    
        setInput('');
    }
    return ( 
        <div>
        <div className="m-sm-30">
            <SimpleCard title="Company or Domain Finder">
           <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
               <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="Domain or Company Name"
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            name="company name"
                            value={input || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />
                    </Grid>
                    </Grid>
                     <Button color="primary" variant="contained" type="submit">
                    <Icon>search</Icon>
                    <span className="pl-2 capitalize">Search</span>
            </Button>
           </ValidatorForm>
           </SimpleCard>
          </div>
          <div className="m-sm-30">
             <VerticalStepper />
          </div>
        </div>
    )  
}

export default DomainFinderForm;