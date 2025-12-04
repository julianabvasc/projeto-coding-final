/* =======================================================
   JAVASCRIPT PRINCIPAL - AGROSUSTENTA
   ======================================================= */

// Aguarda todo o HTML carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('AgroSustenta: Sistema carregado com sucesso!');

    // -------------------------------------------------------
    // 1. ROLAGEM SUAVE (SMOOTH SCROLL)
    // -------------------------------------------------------
    // Seleciona todos os links que começam com '#' (âncoras)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o pulo brusco padrão

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Faz a rolagem deslizar
                });
            }
        });
    });

    // -------------------------------------------------------
    // 2. GRÁFICO DO DASHBOARD DA COOPERATIVA (Chart.js)
    // -------------------------------------------------------
    // Verifica se existe o elemento <canvas> do gráfico na tela atual
    const ctxCoop = document.getElementById('myAreaChart');

    if (ctxCoop) {
        // Cria um novo gráfico apenas se o elemento existir
        new Chart(ctxCoop, {
            type: 'line', // Tipo Linha (com área preenchida)
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets: [{
                    label: 'Lotes Ativos',
                    data: [200, 400, 300, 600, 500, 800, 700, 900, 800, 1100, 1000, 1200],
                    borderColor: '#7cb342', // Verde Claro
                    backgroundColor: 'rgba(124, 179, 66, 0.3)', // Transparência
                    fill: true,
                    tension: 0.4, // Curvatura da linha
                    pointRadius: 0,
                    hoverRadius: 6
                },
                {
                    label: 'Saídas',
                    data: [100, 300, 200, 500, 400, 700, 600, 800, 700, 1000, 900, 1100],
                    borderColor: '#aed581', // Verde Mais Claro
                    backgroundColor: 'rgba(174, 213, 129, 0.3)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0,
                    hoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }, // Esconde a legenda padrão
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { maxTicksLimit: 7 }
                    },
                    y: {
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // -------------------------------------------------------
    // 3. INTERAÇÃO DA TELA DE RASTREIO (Simulação)
    // -------------------------------------------------------
    const btnGerarQR = document.querySelector('.generate-qr-btn');
    const qrIconBox = document.querySelector('.qr-symbol');

    if (btnGerarQR) {
        btnGerarQR.addEventListener('click', function() {
            // Simula o processamento
            btnGerarQR.textContent = "Gerando...";
            btnGerarQR.style.backgroundColor = "#558b2f";
            
            setTimeout(() => {
                // Após 1.5 segundos, simula o sucesso
                btnGerarQR.textContent = "QR Code Gerado!";
                qrIconBox.textContent = "🏁"; // Muda o ícone
                alert("QR Code gerado com sucesso para o pacote AGRS-2025!");
            }, 1500);
        });
    }

});
async function fazerLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ usuario, senha })
    });

    const dados = await resposta.json();

    if (dados.token) {
        localStorage.setItem("token", dados.token);  
        alert("Login realizado!");
        window.location.href = "dashboard.html"; 
    } else {
        alert("Usuário ou senha incorretos");
    }
}
async function listarArmazens() {
    const token = localStorage.getItem("token");

    const resposta = await fetch("http://localhost:3000/armazem", {
        headers: { "Authorization": `Bearer ${token}` }
    });

    const dados = await resposta.json();

    const tabela = document.querySelector("#tabelaArmazem tbody");
    tabela.innerHTML = "";

    dados.forEach(armazem => {
        tabela.innerHTML += `
            <tr>
                <td>${armazem.idArmazem}</td>
                <td>${armazem.nome}</td>
                <td>
                    <button onclick="editar(${armazem.idArmazem})">Editar</button>
                    <button onclick="excluir(${armazem.idArmazem})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

window.onload = listarArmazens;
async function criarArmazem() {
    const nome = document.getElementById("nomeNovo").value;
    const token = localStorage.getItem("token");

    await fetch("http://localhost:3000/armazem", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ nome })
    });

    alert("Armazém criado!");
    listarArmazens();
}
async function editar(id) {
    const novoNome = prompt("Digite o novo nome:");
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:3000/armazem/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ nome: novoNome })
    });

    alert("Atualizado!");
    listarArmazens();
}
async function excluir(id) {
    const token = localStorage.getItem("token");

    await fetch(`http://localhost:3000/armazem/${id}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
    });

    alert("Armazém excluído!");
    listarArmazens();
}
