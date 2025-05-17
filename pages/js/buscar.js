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
    console.log('Dados do usuário:', data);

    if (params.has('id')) {
      let existeId = false;
      const id = params.get('id');
      console.log('ID encontrado:', id);

      data.forEach(produto => {
        if (produto.id == id) {
          console.log('Produto encontrado:', produto);
          existeId = true;

          const tabela = document.getElementById('tabela-produtos-body');
          let tr = document.createElement('tr');

          let tdId = document.createElement('td');
          tdId.textContent = produto.id;

          let tdNome = document.createElement('td');
          tdNome.textContent = produto.descricao;

          let tdPreco = document.createElement('td');
          tdPreco.textContent = produto.precoUnitario;

          let tdAcao = document.createElement('td');
          let buttonMore = document.createElement('button');
          buttonMore.textContent = 'Ver Mais';
          buttonMore.className = 'btn-more';
          buttonMore.addEventListener('click', () => {});
          tdAcao.appendChild(buttonMore);
          
          let buttonRemove = document.createElement('button');
          buttonRemove.textContent = 'Remover';
          buttonRemove.className = 'btn-remove';
          buttonRemove.addEventListener('click', () => {});
          tdAcao.appendChild(buttonRemove);

          tr.appendChild(tdId);
          tr.appendChild(tdNome);
          tr.appendChild(tdPreco);
          tr.appendChild(tdAcao);
          tabela.appendChild(tr);
        }
      });

      if (!existeId) {
        alert('ID não encontrado');
      }

    } else {
      console.log('ID não encontrado na URL');

      data.forEach(produto => {
        console.log('Produto:', produto);

          const tabela = document.getElementById('tabela-produtos-body');
          let tr = document.createElement('tr');

          let tdId = document.createElement('td');
          tdId.textContent = produto.id;

          let tdNome = document.createElement('td');
          tdNome.textContent = produto.descricao;

          let tdPreco = document.createElement('td');
          tdPreco.textContent = produto.precoUnitario;

          let tdAcao = document.createElement('td');
          let buttonMore = document.createElement('button');
          buttonMore.textContent = 'Ver Mais';
          buttonMore.className = 'btn-more';
          buttonMore.addEventListener('click', () => {});
          tdAcao.appendChild(buttonMore);
          
          let buttonRemove = document.createElement('button');
          buttonRemove.textContent = 'Remover';
          buttonRemove.className = 'btn-remove';
          buttonRemove.addEventListener('click', () => {});
          tdAcao.appendChild(buttonRemove);

          tr.appendChild(tdId);
          tr.appendChild(tdNome);
          tr.appendChild(tdPreco);
          tr.appendChild(tdAcao);
          tabela.appendChild(tr);
        
      });

    }

  });


