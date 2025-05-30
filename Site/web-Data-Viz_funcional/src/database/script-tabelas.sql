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
celular varchar (20),
email varchar (50),
mensagem varchar (300),
idade varchar(3),
cotacao char(1),
apolice char (1),
fkusuario int,
foreign key (fkusuario) references usuario (id));

create user aluno identified by 'sptech';
grant all privileges on projeto_indi_sprint3 to aluno;

select * from leads;
