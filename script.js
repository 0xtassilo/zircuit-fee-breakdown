document.addEventListener('DOMContentLoaded', () => {
    fetch('https://api.zircuit.com/transactions/recent')
        .then(response => response.json())
        .then(data => displayTransactions(data))
        .catch(error => console.error('Error fetching transactions:', error));
});

function displayTransactions(transactions) {
    const container = document.getElementById('transactions');
    transactions.forEach(tx => {
        const txElement = document.createElement('div');
        txElement.className = 'transaction';
        txElement.innerHTML = `
            <p><strong>Hash:</strong> ${tx.hash}</p>
            <p><strong>From:</strong> ${tx.from}</p>
            <p><strong>To:</strong> ${tx.to}</p>
            <p><strong>Amount:</strong> ${tx.amount} ETH</p>
            <p><strong>Timestamp:</strong> ${new Date(tx.timestamp).toLocaleString()}</p>
        `;
        container.appendChild(txElement);
    });
}
