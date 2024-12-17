import React from 'react';
import { TextField, Grid, Button } from '@mui/material';

interface Step3Props {
    formData: {
        lessons: { title: string; content: string }[];
        chapters: { title: string; description: string }[];
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number, type: string) => void;
    addLesson: () => void;
    addChapter: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handleChange, addLesson, addChapter }) => {
    return (
        <Grid container spacing={2}>
            {formData.chapters.map((chapter, index) => (
                <Grid item xs={12} key={index}>
                    <TextField
                        label="Titre du Chapitre"
                        name="title"
                        value={chapter.title}
                        onChange={(e) => handleChange(e, index, 'chapters')}
                        fullWidth
                    />
                    <TextField
                        label="Description du Chapitre"
                        name="description"
                        value={chapter.description}
                        onChange={(e) => handleChange(e, index, 'chapters')}
                        fullWidth
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={addChapter}>
                    Ajouter un Chapitre
                </Button>
            </Grid>
            {formData.lessons.map((lesson, index) => (
                <Grid item xs={12} key={index}>
                    <TextField
                        label="Titre de la Leçon"
                        name="title"
                        value={lesson.title}
                        onChange={(e) => handleChange(e, index, 'lessons')}
                        fullWidth
                    />
                    <TextField
                        label="Contenu de la Leçon"
                        name="content"
                        value={lesson.content}
                        onChange={(e) => handleChange(e, index, 'lessons')}
                        fullWidth
                    />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={addLesson}>
                    Ajouter une Leçon
                </Button>
            </Grid>
        </Grid>
    );
};

export default Step3;
