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
      let existeId = false;
      const id = params.get('id');

      data.forEach(produto => {
        if (produto.id == id) {
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
          buttonMore.addEventListener('click', () => {
            window.location.href = `verMais.html?id=${produto.id}`;
          });
          tdAcao.appendChild(buttonMore);

          let buttonRemove = document.createElement('button');
          buttonRemove.textContent = 'Remover';
          buttonRemove.className = 'btn-remove';
          buttonRemove.addEventListener('click', () => {
            if (confirm(`Você tem certeza que deseja remover o produto ${produto.descricao}?`)) {
              console.log(produto);

              // Aqui você pode fazer a chamada para remover o produto
              // fetch(`${API_BASE_URL}/removeProduto/${produto.id}`, {
              //   method: 'DELETE'
              // })
            }
          });
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
      data.forEach(produto => {
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
        buttonMore.addEventListener('click', () => {
          window.location.href = `verMais.html?id=${produto.id}`;
        });
        tdAcao.appendChild(buttonMore);

        let buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Remover';
        buttonRemove.className = 'btn-remove';
        buttonRemove.addEventListener('click', () => {

          if (confirm(`Você tem certeza que deseja remover o produto ${produto.descricao}?`)) {
            console.log(produto);
            
            // Aqui você pode fazer a chamada para remover o produto
            // fetch(`${API_BASE_URL}/removeProduto/${produto.id}`, {
            //   method: 'DELETE'
            // })
          }

        });
        tdAcao.appendChild(buttonRemove);

        tr.appendChild(tdId);
        tr.appendChild(tdNome);
        tr.appendChild(tdPreco);
        tr.appendChild(tdAcao);
        tabela.appendChild(tr);

      });

    }
  });


