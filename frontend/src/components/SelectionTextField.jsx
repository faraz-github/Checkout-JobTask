import { useState } from "react";

import { MenuItem, TextField } from "@mui/material";

function SelectionTextField() {

    const locations = [
        {
            value: 'america',
            label: 'America',
        },
        {
            value: 'europe',
            label: 'Europe',
        },
        {
            value: 'poland',
            label: 'Poland',
        },
        {
            value: 'india',
            label: 'India',
        },
    ];

    const [location, setLocation] = useState("poland")

    const handleChange = (event) => {
        setLocation(event.target.value);
    }

    return (
        <TextField
            color="secondary"
            fullWidth
            select
            value={location}
            onChange={handleChange}
            InputProps={{ style: { fontSize: "14px" } }}
        >
            {locations.map((location) => (
                <MenuItem key={location.value} value={location.value}>
                    {location.label}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default SelectionTextField;