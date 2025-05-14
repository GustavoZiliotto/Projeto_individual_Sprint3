create database projeto_indi_sprint3;
use projeto_indi_sprint3;

create table usuario (
id int primary key auto_increment,
susep varchar (20),
cpf char(11),
senha varchar(45),
unique (susep));

create table leads (
id int primary key auto_increment,
data datetime default current_timestamp,
nome varchar (70),
email varchar (50),
mensagem varchar (300),
idade varchar(3));

create table usuario_leads (
fkusuario int,
foreign key (fkusuario) references usuario (id),
fklead int,
foreign key (fklead) references leads (id),
cotacao char(1),
apolice char (1),
primary key (fkusuario, fklead));



