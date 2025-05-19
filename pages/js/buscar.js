import { API_BASE_URL } from "./config.js";

const params = new URLSearchParams(window.location.search);

await fetch(`${API_BASE_URL}/produtosDisponiveis`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao buscar os dados do usuário');
    }
    return response.json();
  })
  .then(data => {
    if (params.has('id')) {
      const id = params.get('id');

      data.forEach(async produto => {
        if (produto.id == id) {
          const response = await fetch(`${API_BASE_URL}/estoqueCompleto`);

          if (!response.ok) {
            alert(`Erro na requisição: ${response.status}`);
          }

          const dados = await response.json();

          dados.forEach(item => {
            if (item.idProduto == id) {
    
              const tabela = document.getElementById('tabela-produtos-body');
              let tr = document.createElement('tr');
    
              let tdId = document.createElement('td');
              tdId.textContent = produto.id;
    
              let tdNome = document.createElement('td');
              tdNome.textContent = produto.descricao;
    
              let tdPreco = document.createElement('td');
              tdPreco.textContent = produto.precoUnitario;
    
              let tdAcao = document.createElement('td');
              tdAcao.textContent = item.quantidade;
    
              tr.appendChild(tdId);
              tr.appendChild(tdNome);
              tr.appendChild(tdPreco);
              tr.appendChild(tdAcao);
              tabela.appendChild(tr);
            }
          });

        }
      });

    } else {
      data.forEach(async produto => {
        const response = await fetch(`${API_BASE_URL}/estoqueCompleto`);

          if (!response.ok) {
            alert(`Erro na requisição: ${response.status}`);
          }

          const dados = await response.json();

          dados.forEach(item => {
            if (item.idProduto == produto.id) {
    
              const tabela = document.getElementById('tabela-produtos-body');
              let tr = document.createElement('tr');
    
              let tdId = document.createElement('td');
              tdId.textContent = produto.id;
    
              let tdNome = document.createElement('td');
              tdNome.textContent = produto.descricao;
    
              let tdPreco = document.createElement('td');
              tdPreco.textContent = produto.precoUnitario;
    
              let tdAcao = document.createElement('td');
              tdAcao.textContent = item.quantidade;
    
              tr.appendChild(tdId);
              tr.appendChild(tdNome);
              tr.appendChild(tdPreco);
              tr.appendChild(tdAcao);
              tabela.appendChild(tr);
            }
          });

      });

    }
  });


