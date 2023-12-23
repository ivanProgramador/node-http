
//http é um biblioteca interna do node por isso eu não precis instalar pacotes pra usar ela 

var http = require('http');

/* a função create server como o nome ja diz cria um servidor e a extensão dela
   que ea função listem fica a numeração da porta que esse servidor vai usar
   
   a função create server pracisa de umma função dentro dela função de call back
   essa funcção recebe 2 parametros requisição(oque o usuario pediu) e reposta(oque o servidor vai entregar)
   nesse caso eu uso a função end do meu parametro resposta e devolvo uma tag html

   Assim quando o usuario acessar http://localhost:1234 ele vai ver a minha resposta para requisição que ele fez
   embora seja um jeito facil de se fazer um servidor, a biblioteca http e limitada quando se trata de desenvolvimento 
   de aplicações maiores qua precisam retornar bem mais que uma pagina 

   por tanto esse é um exemplo basico de como cirar um servidor com poucas linhas de codigo usando apenas o node
   e sua bilioteca nativa 

*/

http.createServer(function(requisicao,resposta){
    resposta.end('<h1>seja bem vindo ao site</h1>')
}).listen(1234);
console.log('servidor rodando')