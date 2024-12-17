import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import { Button, Typography, Grid } from '@mui/material';
import { CourseCategory, Instructor, Course } from '../../../types/course';
import { PageProps } from '../../../types/index';

interface MultiStepFormProps {
    courseCategories: CourseCategory[];
    instructors: Instructor[];
    languages: { code: string; name: string }[];
    formData: Course & { quizzes: { question: string; answer: string }[] };
    setFormData: (field: string, value: any) => void;
    handleSubmit: (e: React.FormEvent) => void;
    addChapter: () => void;
    addLesson: () => void;
    addQuiz: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({
    courseCategories,
    instructors,
    languages,
    formData,
    setFormData,
    handleSubmit,
    addChapter,
    addLesson,
    addQuiz,
}) => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => {
        setCurrentStep(prevStep => prevStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(prevStep => prevStep - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: Course) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
        const { name, value } = event.target;
        if (name) {
            setFormData(name, value);
        }
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, type: string) => {
        const { name, value } = e.target;
        setFormData((prevData: Course) => {
            const updatedContent: any[] = Array.isArray(prevData[type as keyof Course]) ? [...(prevData[type as keyof Course] as any[])] : [];
            updatedContent[index] = { ...updatedContent[index], [name]: value };
            return { ...prevData, [type]: updatedContent };
        });
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={{ ...formData, description: formData.description || '' }} handleChange={handleChange} handleSelectChange={handleSelectChange} courseCategories={courseCategories} instructors={instructors} />;
            case 2:
                return <Step2 formData={{
                    ...formData,
                    price: formData.price.toString(),
                    old_price: formData.old_price?.toString() || '',
                    subscription_price: formData.subscription_price?.toString() || ''
                }} handleChange={handleChange} />;
            case 3:
                return <Step3 formData={{ ...formData, lessons: formData.lessons || [], chapters: formData.chapters || [] }} handleChange={handleContentChange} addLesson={addLesson} addChapter={addChapter} />;
            case 4:
                return <Step4 formData={formData} handleChange={handleContentChange} addQuiz={addQuiz} />;
            case 5:
                return <Step5 formData={{ ...formData, course_code: formData.course_code || '' }} handleChange={handleChange} handleSelectChange={handleSelectChange} languages={languages} />;
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
                    {currentStep < 5 ? (
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
