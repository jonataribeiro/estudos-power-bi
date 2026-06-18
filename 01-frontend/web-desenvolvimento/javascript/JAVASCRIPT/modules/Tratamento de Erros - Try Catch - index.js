/*TRATAMENTO DE ERROS ( TRY CATCH ) - Nos ajuda a lidar com erros */

app.post("/users", (request, response) => {
try {
    const { name, age } = request.body;

    if(age < 18) throw new Error("Only allowed users over 18 years old") // Apenas permitido usuários a partir de 18 anos.

    const user = { id: uuid.v4(), name, age };

    users.push(user);

    return response.status(201).json(user);
}   catch(err){
    return response.status(400).json({error:err.message});
}   finally {
        console.log("Terminou tudo")
}

});

app.put("/users/:id", checkUserId, (request, response) => {  
});

app.delete("/users/:id", checkUserId, (request, response) => {
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});