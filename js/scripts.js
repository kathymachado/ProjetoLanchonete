// Array para armazenar itens do pedido
let orderItems = [];
let totalValue = 0;

// Adiciona um item ao pedido
function addToOrder(itemName, itemPrice) {
    // Cria um novo item
    const newItem = { name: itemName, price: itemPrice };
    
    // Adiciona o item ao array de pedidos
    orderItems.push(newItem);
    totalValue += itemPrice;

    // Atualiza a lista de pedidos
    updateOrderList();
}

// Atualiza a lista de pedidos
function updateOrderList() {
    const orderList = document.getElementById('order-list');
    const itemCount = document.getElementById('item-count');
    const totalValueElement = document.getElementById('total-value');

    // Limpa a lista existente
    orderList.innerHTML = '';

    // Adiciona itens à lista
    orderItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center'; // Adiciona classes para estilo

        listItem.innerHTML = `${item.name} - R$${item.price.toFixed(2)}`;

        // Cria um botão para remover o item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'btn btn-danger btn-sm'; // Adiciona classe Bootstrap para estilo
        removeButton.onclick = () => removeFromOrder(index);

        // Adiciona o botão ao item da lista
        listItem.appendChild(removeButton);
        orderList.appendChild(listItem);
    });

    // Atualiza contadores
    itemCount.textContent = orderItems.length;
    totalValueElement.textContent = totalValue.toFixed(2);
}

// Remove um item do pedido
function removeFromOrder(index) {
    // Subtrai o valor do item removido
    totalValue -= orderItems[index].price;

    // Remove o item do array de pedidos
    orderItems.splice(index, 1);

    // Atualiza a lista de pedidos
    updateOrderList();
}

function finalizarCompra(){
    alert("Pedido realizado com sucesso.")
}

// Adiciona um evento ao carregar a página para garantir que tudo esteja pronto
window.onload = () => {
    console.log('Lanchonete carregada');
};