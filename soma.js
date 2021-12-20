function resultado(){
    let a = document.querySelector("#A");
    let n1= parseInt (A, value);
    let b = document.querySelector("#B");
    let n2= parseInt (B, value);
    let divMensagem =document.querySelector('#mensagem')

    let soma= somar(n1,n2);



    let div = document.createElement('div');
    div.textContent= soma;
    divMensagem.append(div);




}
function somar(n1,n2){
    let soma = n1+n2;
    return soma;
}
function pares(){
    let pares = n1+n2;
    return par;

}
