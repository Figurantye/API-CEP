var CEP = document.getElementById("CEP");

function consultarCEP() {
    axios.get('viacep.com.br/ws/' + CEP + '/json/')
        .then(response => response.json)
        .then(data => {
            const bairro = reesponse.data.bairro || "Não Informado";
            const cidade = response.data.localidade || "Não Informado";
            const estado = response.data.uf || "Não Informado";
            const rua = response.data.logradouro || "Não Informado";
        })

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
                <strong>Logradouro:</strong> ${rua}<br>
                <strong>Bairro:</strong> ${bairro}<br>
                <strong>Cidade:</strong> ${cidade}<br>
                <strong>Estado:</strong> ${estado}`;
            
}