// Cargar datos del archivo JSON utilizando fetch
fetch('resumen.json')
    .then(response => response.json()) // Convertir la respuesta en JSON
    .then(data => {
        // Seleccionar los elementos HTML donde se mostrarán los datos
        const banco = document.getElementById('banco');
        const sucursal = document.getElementById('sucursal');
        const titular = document.getElementById('titular');
        const nro_cuenta = document.getElementById('nro_cuenta');
        const saldo_usd = document.getElementById('saldo_usd');
        const saldo_eur = document.getElementById('saldo_eur');
        const cbu = document.getElementById('cbu');
        const abierto = document.getElementById('abierto');

        // Asignar los valores del archivo JSON a los elementos HTML
        banco.textContent = data.banco;
        sucursal.textContent = data.sucursal;
        titular.textContent = `Titular: ${data.titular}`;
        nro_cuenta.textContent = `Nro cuenta: ${data.nro_cuenta}`;

        // Acceder a los saldos en USD y EUR desde el array saldo
        const saldoUSD = data.saldo.find(item => item.moneda === 'USD');
        const saldoEUR = data.saldo.find(item => item.moneda === 'EUR');
        saldo_usd.textContent = `${saldoUSD.monto} USD`;
        saldo_eur.textContent = `${saldoEUR.monto} EUR`;

        cbu.textContent = `CBU: ${data.cbu}`;
        abierto.textContent = `Abierta: ${data.abierto}`;
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
