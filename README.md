
# Cabeleleila Leila Salão de Beleiza (Front-End)

Trata-se de um sistema web para cadastro dos clientes do salão de beleza, agendamento de horários para serviços fornecidos e também um controle interno da dona do salão.


##

Esse sistema foi desenvolvido para um desafio proposto pela empresa [DSIN - Tecnologia da Informação](https://www.dsin.com.br/) para a vaga de Estágio em Desenvolvimento. Ele está divido pensando na arquitetura mordena de desenvolvimento web, onde o servidor é desacoplado da página, o que me traz vantagens tanto para manutenção, quanto para deploy e versionamento. 
- [Front-End](https://github.com/anti-w/leila-saloon-web)
- [Back-End](https://github.com/anti-w/leila-saloon-server)



## Funcionalidades

- [x]  CRUD Clientes
- [x]  Painel de usuário
- [x]  Agendamento de Horários
- [x]  Listagem de horários agendados
- [x]  Alterar horário
- [x]  Alterar um horário só é possível 2 dias antes da data agendada, caso contrário apenas por telefone
- [x]  Cancelar horário agendado
- [x]  Histórico de horários
- [ ]  Filtrar histórico por período selecionado
- [ ]  Caso haja dois horários na mesma semana, propor que os serviços sejam realizados no mesmo dia
- [ ]  Modo dark/light
- [ ]  Responsividade
- [ ]  Painel administrativo

## Stack utilizada


- [ViteJS](https://vitejs.dev/)
- [Styled-components](https://styled-components.com/)
- [React](https://pt-br.reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [NodeJS](https://nodejs.org/en/)
- [React Hook Form](https://react-hook-form.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [React DatePicker](https://reactdatepicker.com/)




## Demonstração

O site encontra-se disponível online! [Cabeleleila Leila Salão de Beleiza](https://leila-saloon-3bki6fnug-anti-w.vercel.app/)

![Site structure](https://res.cloudinary.com/dscztnlqq/image/upload/v1659345880/leila-saloon/Captura_de_Tela_26_np8jah.png)

![Home Page](https://res.cloudinary.com/dscztnlqq/image/upload/v1659344783/leila-saloon/Captura_de_Tela_16_usjemd.png)

![Login Page](https://res.cloudinary.com/dscztnlqq/image/upload/v1659344783/leila-saloon/Captura_de_Tela_17_m0ms1a.png)

![Register Page](https://res.cloudinary.com/dscztnlqq/image/upload/v1659344783/leila-saloon/Captura_de_Tela_18_rhk9jn.png)

![User Schedules List Page](https://res.cloudinary.com/dscztnlqq/image/upload/v1659344783/leila-saloon/Captura_de_Tela_23_maalxk.png)

![[User Schedules History Page](https://res.cloudinary.com/dscztnlqq/image/upload/v1659344783/leila-saloon/Captura_de_Tela_24_gsupsl.png)

![Create Schedules](https://res.cloudinary.com/dscztnlqq/image/upload/v1659344783/leila-saloon/Captura_de_Tela_21_blhhyr.png)




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/anti-w/leila-saloon-web
```

Entre no diretório do projeto

```bash
  cd leila-saloon-web
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

## Aprendizados

Lidar com datas pode parecer fácil, mas é complicado e é preciso validar, estar atento, pois pode ser que algo tenha passado e com certeza sempre tem o que melhorar, nunca estou satisfeito, porém fiz o que pude dado o tempo de desafio. 

![Logo](https://www.univem.edu.br/storage/paginas/September2019/Marca%20DSIN%20Principal%20em%20Alta.jpg)

