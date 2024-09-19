
function calcularAltura() {
    const angulo = +document.getElementById("angulo").value;
    const distancia = +document.getElementById("distancia").value;
    const altura_aluno = +document.getElementById("altura_aluno").value;

    const radiano_angulo = angulo * (Math.PI/180);
    let h_objeto = (Math.tan(radiano_angulo) * distancia + altura_aluno).toFixed(2);
    
    document.getElementById("resultado").innerHTML = `Altura do objeto: ${h_objeto}m.`;
}

function calcularAltura2() {
    const a1 = +document.getElementById("angulo1").value;
    const a2 = +document.getElementById("angulo2").value;
    const distancia = +document.getElementById("distancia").value;
    const altura_aluno = +document.getElementById("altura_aluno").value;

    if(a1 > a2) {
        const ang2 = a2;
        a2 = a1;
        a1 = ang2;
    }

    const radiano_a1 = a1 * (Math.PI/180);
    const radiano_a2 = a2 * (Math.PI/180);

    let dif_A = a2 - a1;
    const radiano_dif_A = dif_A * (Math.PI/180);

    let d1 = distancia * Math.sin(radiano_a1);
    let d2 = d1 / Math.sin(radiano_dif_A);

    let h_nuvem = (d2 * Math.sin(radiano_a2) + altura_aluno).toFixed(2);
    
    document.getElementById("resultado").innerHTML = `Altura da nuvem: ${h_nuvem}m.`;
}

