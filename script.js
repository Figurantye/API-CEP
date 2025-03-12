var CEP = document.getElementById("cep");

function consultarCEP() {
    fetch('https://viacep.com.br/ws/' + CEP.value + '/json/')
        .then(response => {
            if (!response.ok){
                throw new Error ("Erro ao consultar CEP");
            }
            return response.json();

        })
        .then(data => {
            const bairro = data.bairro || "Não Informado";
            const rua = data.logradouro || "Não Informado";
            const cidade = data.localidade || "Não Informado";
            const complemento = data.complemento || "Não Informado";
            const estado = data.uf || "Não Informado";
        
            const resultDiv = document.getElementById('result');

            resultDiv.innerHTML = `
                <p><strong>CEP:</strong> ${CEP.value}</p>
                <p><strong>Estado:</strong> ${estado}</p>
                <p><strong>Cidade:</strong> ${cidade}</p>
                <p><strong>Rua:</strong> ${rua}</p>
                <p><strong>Bairro:</strong> ${bairro}</p>
                <p><strong>Complemento:</strong> ${complemento}</p>`;
        })

        .catch(error => {
            document.getElementById('result').innerHTML = `
            <div class="alert alert-danger" role="alert">
            Ocorreu um erro ao consultar o CEP. Verifique se o CEP está correto.</div>
            `;
            console.error("Erro ao buscar o CEP: " + error);
        });
            
}