document.getElementById('get_btn').addEventListener('click', function (e) {
        e.preventDefault();
        fetch('http://localhost:8080/random')
            .then(res => res.text())
            .then(quote => {
            document.getElementById('response').textContent = 
                quote;
            })
            .catch(err => {
            document.getElementById('response').textContent = 'Failed to load quote.';
            console.error(err);
            });
        });