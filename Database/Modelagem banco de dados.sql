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

create user if not exists site_seguros identified by 'Sptech#2024';
grant all privileges on projeto_indi_sprint3 to site_seguros;

select * from usuario;



 INSERT INTO usuario (codigo, email, cpf, senha) VALUES ('${codigo}', '${email}', '${cpf}', '${senha}')