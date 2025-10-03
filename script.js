const avanca = document.queryselectorA('.btn-proximo')

avanca.forEach(button => {
  button.addEventListener('click', function(){
const atual = document.querySelector('.ativo')
const proximoPasso = 'passo-' + this.getAttribute('data-proximo')  

 atual.classList.remove('ativo');
 document.getElementById9proximoPasso).classList.add('ativo');   
  })
})                        
