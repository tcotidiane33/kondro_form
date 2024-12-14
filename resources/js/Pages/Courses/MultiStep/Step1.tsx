import React from 'react';
import { TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface Step1Props {
    formData: {
        title: string;
        description: string;
        course_category_id: string;
        instructor_id: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSelectChange: (name: string, value: any) => void;
    courseCategories: { id: number; category_name: string }[];
    instructors: { id: number; name: string }[];
}

const Step1: React.FC<Step1Props> = ({ formData, handleChange, handleSelectChange, courseCategories, instructors }) => {
    return (
        <Grid container margin={2} spacing={2}>
            <Grid item xs={4}>
                <TextField
                    label="Titre"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="course-category-label">Catégorie de Cours</InputLabel>
                    <Select
                        labelId="course-category-label"
                        name="course_category_id"
                        value={formData.course_category_id}
                        onChange={(e) => handleSelectChange('course_category_id', e.target.value)}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {courseCategories.map((category) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.category_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="instructor-label">ID de l'Instructeur</InputLabel>
                    <Select
                        labelId="instructor-label"
                        name="instructor_id"
                        value={formData.instructor_id}
                        onChange={(e) => handleSelectChange('instructor_id', e.target.value)}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        {instructors.map((instructor) => (
                            <MenuItem key={instructor.id} value={instructor.id}>
                                {instructor.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default Step1;
