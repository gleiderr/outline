#language: pt
Funcionalidade: Chat
  Eu desejo enviar mensagens espontaneamente, responder mensagens, receber respostas e ler mensagens de outros. Tudo isso da forma mais ágil possível.
  #Quando o digitar a mensagem 'oi'
  
  Cenário: Usuário conectado deseja enviar mensagens
    Dado o usuário 'a' está conectado
    E o destinatário 'desenvolvedor'
    E que o chat renderizado


  Cenário: Usuário não conectado deseja enviar mensagens
  Cenário: Usuário deseja ler mensagens
  Cenário: Todo usuário deseja saber quando uma mensagem foi lida pelo destinatário
  Cenário: Todo usuário deseja ler mensagens de seu interesse
