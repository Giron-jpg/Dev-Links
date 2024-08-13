var trilho = document.getElementById('toggle')
var corpo = document.querySelectorAll('body, #caixa1>img, div#toggle, div#toggle>div#ball, div#toggle>i ,ul li a, ul li a:hover, .social-links>a>i, .links:hover, footer>p')
trilho.addEventListener('click',()=>{
    corpo.forEach(item=>{
        item.classList.toggle('claro')
    })
})
