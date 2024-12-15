import React from 'react';
import { TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface Step3Props {
    formData: {
        start_from: string;
        duration: string;
        lesson: string;
        prerequisites: string;
        difficulty: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Step3: React.FC<Step3Props> = ({ formData, handleChange }) => {
    return (
        <Grid container spacing={2} margin={2}>
            <Grid item xs={3}>
                <TextField
                    label="Commence à partir de"
                    name="start_from"
                    type="date"
                    value={formData.start_from}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Durée"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Leçon"
                    name="lesson"
                    value={formData.lesson}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <FormControl fullWidth>
                    <InputLabel id="difficulty-label">Difficulté</InputLabel>
                    <Select
                        labelId="difficulty-label"
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                    >
                        <MenuItem value="beginner">Débutant</MenuItem>
                        <MenuItem value="intermediate">Intermédiaire</MenuItem>
                        <MenuItem value="advanced">Avancé</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Prérequis"
                    name="prerequisites"
                    value={formData.prerequisites}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
};

export default Step3;
