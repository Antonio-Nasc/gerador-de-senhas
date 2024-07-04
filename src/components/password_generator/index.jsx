import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, Stack, TextField, Typography } from "@mui/material";
import copy from "copy-to-clipboard";

export default function PasswordGenerator() {
    const [passwordValue, setPasswordValue] = useState("");
    const [textGenerator, setTextGenerator] = useState("Gerar!");
    const [textCopy, setTextCopy] = useState("Copiar");
    const [passwordSize, setPasswordSize] = useState(12)

    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const passwordLength = passwordSize;
    function generateRandomPassword(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];
        }
        return result;
    }
    function Random() {
        const newPassword = generateRandomPassword(passwordLength);
        setPasswordValue(newPassword);
        setTextCopy("Copiar");
    }

    function Copy() {
        copy(passwordValue);
        setTextCopy("Copiado!");
    }

    return (
        <Stack sx={{ height: "100vh", background: "#181818", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ width: 700, height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center', background: "#3c3c3c" }}>
                <CardContent>
                    <Typography gutterBottom variant="h4" sx={{ color: "#fff" }}>Gerador de senhas</Typography>
                    <TextField 
                    sx={{display:'flex', justifyContent: "center", background: "#fff"}}
                    required
                    label="Tamanho"
                    value={passwordSize}
                    size="small"
                    onChange={(ev) => setPasswordSize(ev.target.value)}/>
                    <CardActions sx={{ display: 'flex', justifyContent: "center", gap: 2, mb: 2 }}>
                        <Button sx={{ background: "#181818", color: "#fff" }} onClick={Random}>{textGenerator}</Button>
                        <Button sx={{ background: "#181818", color: "#fff" }} onClick={Copy}>{textCopy}</Button>
                    </CardActions>
                    <Typography sx={{textAlign: "center", color: "#fff"}}>{passwordValue}</Typography>
                </CardContent>
            </Card>
        </Stack>
    );
}
