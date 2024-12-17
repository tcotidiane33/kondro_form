import React from 'react';
import { TextField, Grid, Button } from '@mui/material';

interface Step4Props {
    formData: {
        quizzes: { question: string; answer: string }[];
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => void;
    addQuiz: () => void;
}

const Step4: React.FC<Step4Props> = ({ formData, handleChange, addQuiz }) => {
    return (
        <Grid container spacing={2}>
            {formData.quizzes.map((quiz, index) => (
                <Grid item xs={12} key={index}>
                    <TextField
                        label="Question"
                        name="question"
                        value={quiz.question}
                        onChange={(e) => handleChange(e, index)}
                        fullWidth
                    />
                    <TextField
                        label="Réponse"
                        name="answer"
                        value={quiz.answer}
                        onChange={(e) => handleChange(e, index)}
                        fullWidth
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={addQuiz}>
                    Ajouter un Quiz
                </Button>
            </Grid>
        </Grid>
    );
};

export default Step4;
