import React from 'react';
import { TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface Step2Props {
    formData: {
        type: string;
        price: string;
        old_price: string;
        subscription_price: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Step2: React.FC<Step2Props> = ({ formData, handleChange }) => {
    return (
        <Grid container spacing={2} margin={2}>
            <Grid item xs={3}>
                <FormControl fullWidth>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        labelId="type-label"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    >
                        <MenuItem value="paid">Payant</MenuItem>
                        <MenuItem value="free">Gratuit</MenuItem>
                        <MenuItem value="subscription">Abonnement</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Prix"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Ancien Prix"
                    name="old_price"
                    value={formData.old_price}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Prix d'Abonnement"
                    name="subscription_price"
                    value={formData.subscription_price}
                    onChange={handleChange}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
};

export default Step2;
