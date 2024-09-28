document.getElementById('fetchBtn').addEventListener('click', fetchData);

        function fetchData() {
            const entity = document.getElementById('entity').value;
            const idNum = document.getElementById('idNum').value;
            const resultDiv = document.getElementById('result');
            const errorDiv = document.getElementById('error');
            const loading = document.getElementById('loading');

            resultDiv.textContent = '';
            errorDiv.textContent = '';
            loading.style.display = 'block';

            if (idNum < 1 || idNum > 10) {
                loading.style.display = 'none';
                errorDiv.textContent = 'Ошибка: ID должен быть от 1 до 10.';
                return;
            }

            fetch(`https://swapi.py4e.com/api/${entity}/${idNum}`)
                .then(res => {
                    if (!res.ok) {
                        return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
                    }
                    return res.json();
                })
                .then(data => {
                    loading.style.display = 'none';
                    if (entity === 'people') {
                        resultDiv.textContent = `Имя: ${data.name}`;
                    } else if (entity === 'films') {
                        resultDiv.textContent = `Название: ${data.title}`;
                    } else if (entity === 'planets') {
                        resultDiv.textContent = `Название: ${data.name}`;
                    } else if (entity === 'starships') {
                        resultDiv.textContent = `Название: ${data.name}`;
                    }
                })
                .catch(error => {
                    loading.style.display = 'none';
                    errorDiv.textContent = error;
                })
                .finally(() => {
                    loading.style.display = 'none';
                });
        }