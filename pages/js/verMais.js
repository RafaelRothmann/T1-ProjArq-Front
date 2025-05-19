import { API_BASE_URL } from "./config.js";

const params = new URLSearchParams(window.location.search);

if (params.has('id')) {
    const id = params.get('id');

    await fetch(`${API_BASE_URL}/produtosDisponiveis`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados do usuário');
            }
            return response.json();
        })
        .then(async data => {
            let existeId = false;

            data.forEach(async produto => {
                if (produto.id == id) {
                    existeId = true;
                    document.title = `Produto ${produto.descricao}`;
                    
                    document.getElementById('title').innerText = produto.descricao;
                    document.getElementById('preco').innerText = `R$ ${produto.precoUnitario.toFixed(2).replace('.', ',')}`;

                }
            });

            if (!existeId) {
                alert('ID não encontrado');
                window.location.href = 'buscar.html';
            }

        })

} else {
    alert('ID não encontrado na URL');
    window.location.href = 'buscar.html';
}
