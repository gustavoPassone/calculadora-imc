var btn = document.querySelector('.btn')

function calcularIMC(event) {
    event.preventDefault()
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    const imc = (peso / (altura * altura)).toFixed(2)
    const infos = document.querySelector(".mensagem--resultado")
    
    if (peso == "" || altura == "" || peso < 0 || altura < 0) {
        const erro = document.getElementById("mensagem--inicio")
        erro.innerHTML = "Preencha todos os campos acima!"
    } else {
        if (imc < 17) {
            infos.innerHTML = `
            <div class="resultado">
                <div class="resultado--top">
                    <p>Peso</p>
                    <p>Altura</p>
                    <p>IMC</p>
                    <p>Resultado</p>
                </div>
                <div class="resultado--bottom">
                    <p id="rPeso">${peso}</p>
                    <p id="rAtura">${altura}</p>
                    <p id="rImc">${imc}</p>
                    <p id="rClass">Muito abaixo do peso</p>
                </div>
            </div> `
        } else if (imc >= 17 && imc <= 18.49) {
            infos.innerHTML = `
            <div class="resultado">
                <div class="resultado--top">
                    <p>Peso</p>
                    <p>Altura</p>
                    <p>IMC</p>
                    <p>Resultado</p>
                </div>
                <div class="resultado--bottom">
                    <p id="rPeso">${peso}</p>
                    <p id="rAtura">${altura}</p>
                    <p id="rImc">${imc}</p>
                    <p id="rClass">Abaixo do peso</p>
                </div>
            </div> `
        } else if (imc >= 18.5 && imc <= 24.99) {
            infos.innerHTML = `
            <div class="resultado">
                <div class="resultado--top">
                    <p>Peso</p>
                    <p>Altura</p>
                    <p>IMC</p>
                    <p>Resultado</p>
                </div>
                <div class="resultado--bottom">
                    <p id="rPeso">${peso}</p>
                    <p id="rAtura">${altura}</p>
                    <p id="rImc">${imc}</p>
                    <p id="rClass">Peso normal</p>
                </div>
            </div> `
        } else if (imc >= 25 && imc <= 29.99) {
            infos.innerHTML = `
            <div class="resultado">
                <div class="resultado--top">
                    <p>Peso</p>
                    <p>Altura</p>
                    <p>IMC</p>
                    <p>Resultado</p>
                </div>
                <div class="resultado--bottom">
                    <p id="rPeso">${peso}</p>
                    <p id="rAtura">${altura}</p>
                    <p id="rImc">${imc}</p>
                    <p id="rClass"Acima do peso</p>
                </div>
            </div> `
        } else if (imc >= 30 && imc <= 34.99) {
            infos.innerHTML = `
            <div class="resultado">
                <div class="resultado--top">
                    <p>Peso</p>
                    <p>Altura</p>
                    <p>IMC</p>
                    <p>Resultado</p>
                </div>
                <div class="resultado--bottom">
                    <p id="rPeso">${peso}</p>
                    <p id="rAtura">${altura}</p>
                    <p id="rImc">${imc}</p>
                    <p id="rClass">Obesidade I</p>
                </div>
            </div> `
        } else if (imc >= 35 && imc <= 39.99) {
            infos.innerHTML = `
            <div class="resultado">
                <div class="resultado--top">
                    <p>Peso</p>
                    <p>Altura</p>
                    <p>IMC</p>
                    <p>Resultado</p>
                </div>
                <div class="resultado--bottom">
                    <p id="rPeso">${peso}</p>
                    <p id="rAtura">${altura}</p>
                    <p id="rImc">${imc}</p>
                    <p id="rClass">Obedidade II</p>
                </div>
            </div> `
        } else {
            infos.innerHTML = `
            <div class="resultado">
                <div class="resultado--top">
                    <p>Peso</p>
                    <p>Altura</p>
                    <p>IMC</p>
                    <p>Resultado</p>
                </div>
                <div class="resultado--bottom">
                    <p id="rPeso">${peso}</p>
                    <p id="rAtura">${altura}</p>
                    <p id="rImc">${imc}</p>
                    <p id="rClass">Obedidade III</p>
                </div>
            </div> `
        } 
    }
}

btn.addEventListener('click', calcularIMC)

function editarAltura(altura) {
    // Remove tudo que não for número
    let valor = this.value.replace(/\D/g, '');

    // Limita a 3 dígitos (ex: 170 -> 1.70)
    valor = valor.slice(0, 3);

    if (valor.length >= 2) {
      valor = valor.slice(0, 1) + '.' + valor.slice(1);
    }

    this.value = valor;
}

altura.addEventListener("input", editarAltura)

function editarPeso(peso) {
    // Remove tudo que não for número
    let valor = this.value.replace(/\D/g, '');

    // Limita a 4 dígitos
    valor = valor.slice(0, 4);

    if (valor.length >= 2) {
      valor = valor.slice(0, valor.length - 1) + '.' + valor.slice(-1);
    }

    this.value = valor;
}

peso.addEventListener("input", editarPeso)