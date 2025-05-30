-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database projeto_indi_sprint3;
use projeto_indi_sprint3;

create table usuario (
id int primary key auto_increment,
codigo varchar (50),
email varchar (50),
cpf varchar(50),
senha varchar(50),
unique (codigo));

create table leads (
id int primary key auto_increment,
data datetime default current_timestamp,
nome varchar (70),
celular varchar (30),
email varchar (50),
mensagem varchar (300),
idade varchar(3),
cotacao char(1),
apolice char (1),
fkusuario int,
foreign key (fkusuario) references usuario (id));

create table usuario_leads (
fkusuario int,
foreign key (fkusuario) references usuario (id),
fklead int,
foreign key (fklead) references leads (id),
cotacao char(1),
apolice char (1),
primary key (fkusuario, fklead));

create user if not exists site_seguros identified by 'Sptech#2024';
grant all privileges on projeto_indi_sprint3 to site_seguros;

select * from usuario;
select * from leads;


INSERT INTO leads (nome, celular, email, mensagem, idade) VALUES
('Maria Silva', '(11)91234-5678', 'maria.silva@email.com', 'Gostaria de saber mais sobre o seguro residencial.', '32'),
('Carlos Oliveira', '(21)99876-5432', 'carlos.oliveira@email.com', 'Tenho interesse em seguro para automóvel.', '45'),
('Ana Souza', '(31)98765-4321', 'ana.souza@email.com', 'Quero cotação para seguro de vida.', '28'),
('Roberto Lima', '(41)97654-3210', 'roberto.lima@email.com', 'Busco seguro empresarial.', '39');

INSERT INTO usuario_leads (fkusuario, fklead, cotacao, apolice) VALUES
(1, 1, 'S', 'N'),
(1, 2, 'S', 'S'),
(2, 3, 'N', 'N'),
(2, 4, 'S', 'N');

select 
distinct (month(data)) as mes
