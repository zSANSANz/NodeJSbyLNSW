create database test1; 

create schema pegawai;

create table accounts (user_id serial primary key, 
	username varchar (50) unique not null, 
	password varchar (50) not null,
	email varchar (255)	unique not null,
	created_on timestamp not null,
	last_login timestamp);
	
create type pegawai.gender as enum ('male', 'female');
	
create extension if not exists "uuid-ossp";

create table pegawai.profile (
	id VARCHAR(50) primary key default (uuid_generate_v4()), 
	nip VARCHAR(50) unique not null,
	nama_pegawai VARCHAR(100) not null,
	alamat varchar(255),
	tempat_lahir varchar(255),
	tanggal_lahir timestamp,
	gender gender,
	usia int,
	created_at timestamp not null,
	updated_at timestamp
);
	
insert into pegawai.profile(
	nip,
	nama_pegawai,
	alamat,
	tempat_lahir,
	tanggal_lahir,
	gender,
	usia,
	created_at
) values (
	'N008895', 
	lower('SISKA'), 
	'banten', 
	'depok', 
	'07-09-2002', 
	'male', 
	'19', 
	now()
)

update pegawai.profile set
	alamat = 'blitar',
	tempat_lahir = 'mataram'
where id = '61ce19f5-25ee-49cd-ba8d-c2658f517208'

delete from pegawai.profile 
where id = '3399eaf6-f4b3-45c8-bc5b-77bd352cf3cb'

select * from pegawai.profile

create table pegawai.divisi(
	id serial primary key,
	nama_devisi varchar(50) not null,
	created_at timestamp not null,
	updated_at timestamp
)

insert into pegawai.divisi(
	nama_devisi,
	created_at
)values
(
	'backend developer',
	now()
),
(
	'frontend developer',
	now()
),
(
	'mobile developer',
	now()
),
(
	'devops',
	now()
),
(
	'cloud engineer',
	now()
),
(
	'data scientiest',
	now()
)


alter table pegawai.profile
add divisi_id INT
