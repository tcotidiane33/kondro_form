import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { Button, Typography, Grid } from '@mui/material';

const MultiStepForm = ({ courseCategories, instructors, languages, formData, setFormData, handleSubmit }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (name: string, value: any) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} handleChange={handleChange} handleSelectChange={handleSelectChange} courseCategories={courseCategories} instructors={instructors} />;
            case 2:
                return <Step2 formData={formData} handleChange={handleChange} />;
            case 3:
                return <Step3 formData={formData} handleChange={handleChange} />;
            case 4:
                return <Step4 formData={formData} handleChange={handleChange} languages={languages} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Créer un Cours
            </Typography>
            {renderStep()}
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item>
                    {currentStep > 1 && (
                        <Button variant="contained" color="secondary" onClick={handleBack}>
                            Précédent
                        </Button>
                    )}
                </Grid>
                <Grid item>
                    {currentStep < 4 ? (
                        <Button variant="contained" color="primary" onClick={handleNext}>
                            Suivant
                        </Button>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Soumettre
                        </Button>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

export default MultiStepForm;
