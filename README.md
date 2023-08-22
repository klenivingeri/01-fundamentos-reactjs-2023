# App feed

### Projeto 
Template de feed

## Tecnologias
### Sites:
[unsplash](https://unsplash.com/pt-br)

[figma](https://figma.com)

### Packages
[phosphoricons](https://phosphoricons.com/)



## NEW JS
### time
~~~javascript 
//component/Post
//Ex: É uma boa pratica e ajuda com a acessibilidade manter a data original

<time title="11 de maio ás 8:13" dataTime="2023-05-11 08:13:30">Publicado  há 1h</time>
~~~

## NEW CSS 
#### rezise e footer
~~~css
/*component/Post */
textarea {
    rezise: none; /* Não permite que o campo seja redimensionado */
}

footer {/* Ocultar elemento */
    /* display: none; Evitar usar display none, pq ele não é bom para acessibilidade */
    visibility: hidden;
    max-height: 0;
}
~~~

#### focus-within
~~~css
/* 
    Ex: quando qualquer elemenoto dentro do commentForm for focado,
    quero que o elemento footer tenha a seguinte alteração
*/
.commentForm:focus-within footer {
    visibility:visible;
    max-height: none; /* max-height possui padrão none;
}
~~~


