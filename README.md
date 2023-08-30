# App feed

### Projeto 
Template de feed

## Tecnologias
### Sites:
[unsplash](https://unsplash.com/pt-br)

[figma](https://figma.com)

### Packages
[phosphoricons](https://phosphoricons.com/)
[date-fns](https://date-fns.org/)



## NEW JS
### time
~~~javascript 
//component/Post
//Ex: É uma boa pratica e ajuda com a acessibilidade manter a data original

<time title="11 de maio ás 8:13" dateTime="2023-05-11 08:13:30">Publicado  há 1h</time>
~~~
~~~javascript 
//component/Post
//Ex: É uma boa pratica e ajuda com a acessibilidade manter a data original
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR',{
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute:'2-digit'
    }).format(publishedAt)

    //08 de agosto às 20:00
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

#### not
~~~css
/*component/Post */
.commentForm button[type=submit]:not(:disabled):hover 
/* Quando o botão estiber disabilidade o hover não vai funcionar */
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



## Anotações
#### 3 principais momentos em que um component é renderizao novamente no React.
1. Quando o estado é alterado.
2. Quando a propriedade é alterada.
3. Quando um component pai é renderizado novamente
_Obs: O React compara os elementos com base nas key, A key ajuda o React a entender que não precisa executar aquele elemento novamente._
