import React from 'react';
import { TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface Step5Props {
    formData: {
        course_code: string;
        image: string | null;
        thumbnail_image: string | null;
        thumbnail_video: string;
        status: number;
        language: string;
        tag: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSelectChange: (event: React.ChangeEvent<{ name?: string; value: unknown }>) => void;
}

const Step5: React.FC<Step5Props> = ({ formData, handleChange, handleSelectChange }) => {
    const languages = [
        { code: 'en', name: 'Anglais' },
        { code: 'fr', name: 'Français' }
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <TextField
                    label="Code du Cours"
                    name="course_code"
                    value={formData.course_code}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Image"
                    name="image"
                    type="file"
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Image de la Miniature"
                    name="thumbnail_image"
                    type="file"
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Vidéo de la Miniature"
                    name="thumbnail_video"
                    value={formData.thumbnail_video}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="status-label">Statut</InputLabel>
                    <Select
                        labelId="status-label"
                        name="status"
                        value={formData.status}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value={0}>En attente</MenuItem>
                        <MenuItem value={1}>Inactif</MenuItem>
                        <MenuItem value={2}>Actif</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="language-label">Langue</InputLabel>
                    <Select
                        labelId="language-label"
                        name="language"
                        value={formData.language}
                        onChange={handleSelectChange}
                    >
                        {languages.map((language) => (
                            <MenuItem key={language.code} value={language.code}>
                                {language.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="tag-label">Tag</InputLabel>
                    <Select
                        labelId="tag-label"
                        name="tag"
                        value={formData.tag}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value="popular">Populaire</MenuItem>
                        <MenuItem value="featured">En vedette</MenuItem>
                        <MenuItem value="upcoming">À venir</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Step5;
