import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Grid,
    Icon,
    Button,
} from '@material-ui/core'

import {SimpleCard} from 'app/components';
import VerticalStepper from '../../forms/UploadForm';

//import firebase from 'firebase';
//import db from '../../../firebase';
//import {findEmail} from '../../../scripts';

function EmailFinderForm(){
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [domain, setDomain] = useState('');
    const [results, setResults] = useState([]);
    

    const handleSubmit = (e) => {
        //console.log(e);
        e.preventDefault();
        console.log('Submit the form : '); 
        var url = "http://localhost:8000/findEmail/"
        axios.post(url, {
            "firstname": firstname,
            "lastname": lastname,
            "domain": domain 
        }).then((res) => {
            if (res.status == 200){
                console.log(res)
            }
        }).catch((err) => {
            console.log(err)
        })
        setFirstName('')
        setLastName('')
        setDomain('')
    }

    return ( 
        <div>
        <div className="m-sm-30">
            <SimpleCard title="Find Any Email">
           <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
               <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextValidator
                            className="mb-4 w-full"
                            label="First Name"
                            onChange={(e) =>  setFirstName(e.target.value)}
                            type="text"
                            name="firstName"
                            value={firstname || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                         <TextValidator
                            className="mb-4 w-full"
                            label="Last Name"
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            name="lastname"
                            value={lastname || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextValidator
                            className="mb-4 w-full"
                            label="Domain "
                            onChange={(e) => setDomain(e.target.value)}
                            type="text"
                            name="domain"
                            value={domain || ''}
                            validators={['required']}
                            errorMessages={[
                                'this field is required',
                            ]}
                        />
                    </Grid>
                    </Grid>
                     <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <span className="pl-2 capitalize">Submit</span>
            </Button>
           </ValidatorForm>
           </SimpleCard>
          </div>
          <div className="m-sm-30">
                {/* {results.map(({id, result}) => (
                    <SimpleCard id={id} title="Result">
                         <h3>{result.firstname}</h3>
                         <h4>{result.lastname}</h4>
                         <h4>{result.domain}</h4>
                         
                    </SimpleCard>
                ))}  */}
          </div>
          <div className="m-sm-30">
             <VerticalStepper />
          </div>
        </div>
    )  
}

export default EmailFinderForm;