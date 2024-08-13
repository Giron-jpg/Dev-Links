var trilho = document.getElementById('toggle')
var corpo = document.querySelectorAll('body, #caixa1>img, div#toggle, div#toggle>i ,ul li a, ul li a:hover, .social-links>a>i, .links:hover, footer>p')
trilho.addEventListener('click',()=>{
    trilho.classList.toggle('claro')
    corpo.forEach(item=>{
        item.classList.toggle('claro')
    })
})
