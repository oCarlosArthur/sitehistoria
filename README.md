# História do Brasil — Presidências e Debate

Site educativo desenvolvido em grupo para um **trabalho escolar da disciplina de História**. O projeto reúne páginas sobre diferentes governos da história recente do Brasil, uma linha do tempo visual e uma área concebida para promover a **troca de opiniões e discussões sobre o tema**.

Além da pesquisa histórica, a atividade foi uma oportunidade de aplicar conhecimentos de desenvolvimento web na construção de uma experiência visual e interativa.

> **Projeto acadêmico:** o conteúdo retrata o material produzido na época da atividade. Este repositório preserva a implementação original e não representa uma plataforma histórica continuamente atualizada.

## Funcionalidades e páginas

- **Página inicial (MenuHist.html):** navegação por cartões com os presidentes abordados no trabalho.
- **Linha do tempo (LinhaTempo.html):** apresentação cronológica dos governos e de acontecimentos destacados pela equipe.
- **Páginas individuais:** conteúdos sobre Fernando Henrique Cardoso, Luiz Inácio Lula da Silva, Dilma Rousseff, Michel Temer e Jair Bolsonaro.
- **Pontos positivos e negativos (PosEContra.html):** seção planejada para apresentar aspectos e discussões relacionados aos governos.
- **Área de debate (Chat.html):** interface de envio e visualização de opiniões sobre presidentes brasileiros, idealizada como um espaço de conversa entre visitantes.

### Sobre o chat

A proposta do projeto incluía um **chat/mural de opiniões para promover discussões em torno do conteúdo de História**. No código atualmente preservado neste repositório, a interface está presente, mas o arquivo **java/chat.js**:

- usa uma lista de mensagens fictícias para preencher a tela;
- contém uma chamada de envio para uma API externa configurada em um endereço fixo;
- deixa a consulta à API comentada.

Por isso, **a versão publicada não comprova um chat em tempo real funcional de forma independente**. Para reativar a comunicação entre visitantes, seria necessário configurar um backend disponível, restaurar a listagem de mensagens e implementar/validar a atualização das conversas. O objetivo aqui é documentar fielmente o projeto desenvolvido.

## Tecnologias utilizadas

- **HTML5** — estrutura das páginas;
- **CSS3** — estilização e apresentação visual;
- **JavaScript** — interações do site;
- **Swiper.js** — carrossel de cartões na página inicial;
- **Axios** — biblioteca utilizada na tentativa de integração do formulário de opiniões com uma API.

## Organização dos arquivos

    sitehistoria/
    ├── MenuHist.html        # Página inicial com cartões
    ├── LinhaTempo.html      # Linha do tempo dos governos
    ├── Fernando.html        # Fernando Henrique Cardoso
    ├── Lula.html            # Luiz Inácio Lula da Silva
    ├── Dilma.html           # Dilma Rousseff
    ├── Temer.html           # Michel Temer
    ├── Bolsonaro.html       # Jair Bolsonaro
    ├── PosEContra.html      # Discussões e pontos de vista
    ├── Chat.html            # Interface de opiniões/debate
    ├── css/                 # Estilos do site
    ├── java/                # Scripts JavaScript e bibliotecas
    └── imagens/             # Imagens utilizadas nas páginas

## Como visualizar o projeto

1. Clone o repositório:

       git clone https://github.com/oCarlosArthur/sitehistoria.git

2. Abra a pasta no Visual Studio Code ou outro editor.
3. Inicie um servidor web local simples, por exemplo utilizando a extensão **Live Server** do VS Code.
4. Acesse o arquivo **MenuHist.html** pelo navegador.

As páginas informativas podem ser exploradas localmente. **O envio e a atualização de opiniões no chat dependem de uma integração de backend que não está operacionalizada neste repositório.**

## Aprendizados

- Estruturação de páginas e navegação entre conteúdos;
- Construção de interfaces com HTML, CSS e JavaScript;
- Utilização de componentes interativos, como carrossel;
- Organização de um site com conteúdos de pesquisa histórica;
- Experimentação de comunicação entre front-end e API;
- Colaboração em um projeto escolar que combina História e tecnologia.

## Observações

As páginas e estilos foram mantidos conforme o trabalho original. Algumas partes podem conter textos de exemplo ou precisar de ajustes, e as informações históricas devem ser conferidas antes de qualquer uso como referência atualizada.

## Autoria

**Projeto escolar desenvolvido em grupo**, com participação de **Carlos Arthur Abe de Almeida, Gabriel da Silva Rodrigues, Igor Augusto da Silva de Assis e Vitor Sagioratto Ivanoff**.
