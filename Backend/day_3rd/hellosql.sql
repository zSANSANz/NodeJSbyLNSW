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

update pegawai.profile set
	divisi_id = 2
where id = '78a23660-57e5-43a1-a905-b0a890747618'

--cool Join
select * from pegawai.profile, pegawai.divisi 
where pegawai.profile.divisi_id = pegawai.divisi.id

--inner join == cool join kondisi terpenuhi
select p.nip, p.nama_pegawai, d.nama_devisi
from pegawai.profile p
join pegawai.divisi d on d.id = p.divisi_id

--left join = tampilkan yang null
select p.nip, p.nama_pegawai, d.nama_devisi
from pegawai.profile p
left join pegawai.divisi d on d.id = p.divisi_id

--right join = tampilkan yang null
select p.nip, p.nama_pegawai, d.nama_devisi
from pegawai.profile p
right join pegawai.divisi d on d.id = p.divisi_id

--order by 
select p.nip, p.nama_pegawai, d.nama_devisi
from pegawai.profile p
left join pegawai.divisi d on d.id = p.divisi_id
order by d.nama_devisi asc, p.nama_pegawai desc

--group by
select count(p.*) as banyak_pegawai, p.nama_pegawai
from pegawai.profile p
right join pegawai.divisi d on d.id = p.divisi_id
group by d.nama_devisi, p.nip, p.nama_pegawai

--limit 
select p.nip, p.nama_pegawai, d.nama_devisi
from pegawai.profile p
join pegawai.divisi d on d.id = p.divisi_id
limit 1

--offset melewati 1
select p.nip, p.nama_pegawai, d.nama_devisi
from pegawai.profile p
join pegawai.divisi d on d.id = p.divisi_id
offset 1

--distinct melewati duplikat
select distinct p.nama_pegawai, p.divisi_id from
pegawai.profile p

