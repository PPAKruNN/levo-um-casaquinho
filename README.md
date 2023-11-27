# Levo um casaquinho?

> Uma das principais dores de quem vai dar um passeio ou pretende ir para algum destino por alguns dias é saber que roupa levar! 😫

**Então pra isso surgiu o "Levo um casaquinho?"!**

Essa é uma aplicação web que se integra com a api da [open weather](https://openweathermap.org) para buscar informações de clima e disponibilizá-las aos usuários em tempo real. Permitindo ao usuário ter acesso a informações de qualquer cidade como: clima, temperatura do dia (máxima, minima e atual), umidade, velocidade do vento e até mesmo uma previsão do tempo dos próximos dias!

# Demonstração

-   [Link de deploy](https://levo-um-casaquinho-eight.vercel.app/)

# Tecnologias Utilizadas:

-   React.js (com Vite)
-   Styled Components
-   Recharts

# Como funciona?

Ao abrir a aplicação, o usuário pode pesquisar - utilizando o input na barra lateral - por alguma cidade ou local utilizando seu nome em qualquer língua. Caso a aplicação seja capaz de encontrar alguma localidade com o nome informado, as informações serão disponibilizadas na tela!

No menu lateral, você pode ver a temperatura atual e a descrição do clima atual, acompanhado de um ícone.
Além disso, a data, dia da semana e hora atual da localidade é exibida.
E por fim, há um switch que permite trocar a unidade de medida de temperatura entre Celsius e Fahrenheit.

### Página `/today`

Nessa página, o usuário pode visualizar o nome da localidade e coordenadas. Além disso, também tem acesso a dados sobre temperatura minínima e máxima, umidade e velocidade do vento. E também recebe um aconselhamento sobre levar um casaquinho ou não.

### Página `/upcoming`

Nessa página, além de visualizar o nome da localidade e suas respectivas coordenadas, o usuário também pode ver um gráfico de previsão do clima dos próximos 5 dias, com dados espaçados por um intervalo de 3 horas.

## Como executar o projeto?

Instale as dependências executando:

```

npm install

```

Atualize as informações do seu ambiente no arquivo .env.

-   Crie uma cópia do arquivo **".env.example"** e a renomeie para **".env"**.
-   Troque o campo VITE_API_KEY para sua chave da OpenWeatherAPI.

Rode o projeto usando o comando:

```
npm run dev

```
