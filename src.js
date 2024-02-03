
document.addEventListener("keypress", function(ent){
    if(ent.key === "Enter"){
        let button = document.querySelector('.botao')
        button.click()
    }
})
function Ok(){

    
    let txtnum= document.querySelector('.txtnum')
    if(event.key === 'Enter'){}
    let num = Number(txtnum.value)
    let c = 1
    let res = document.querySelector('.res')
    res.innerHTML = ''
    
    if (txtnum.value.lenght <= 0){
        alert('ERRO! Número Inválido')
    }else{
        for(c;c<=10;c+=1){
            res.innerHTML += `${num} x ${c} = ${num*c} <br> `
        }
    }
}
