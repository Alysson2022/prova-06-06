create database animesDB;

use animesDB;

create table tb_animes(
	id_anime		int primary key auto_increment,
    nm_anime		varchar(20)
);

select * from tb_animes;


insert INTO TB_ANIMES (NM_ANIME)
     values ('Dragon Ball Super');