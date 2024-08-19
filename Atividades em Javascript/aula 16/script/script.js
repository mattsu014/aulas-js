
const apiKey = 'YOUR_API_KEY';
const url = `https://api.apilayer.com/exchangerates_data/latest?apikey=${apiKey}`;

function fetchExchangeRates() {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede.');
            }
            return response.json();
        })
        .then(data => {
            const eurRate = data.rates.EUR;
            document.getElementById('eur-rate').textContent = `EUR: ${eurRate}`;
        })
        .catch(error => {
            console.error('Erro ao obter taxas de câmbio:', error);
            document.getElementById('eur-rate').textContent = 'Erro ao carregar taxa.';
        });
    }
fetchExchangeRates();