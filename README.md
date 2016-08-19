### Installation
Please create database named "test-migration"

npm install

## Run migrate and create all table
sequelize db:migrate

## Generate original data
sequelize db:seed:all

## Update Database
sequelize db:migrate

## Delete all table
sequelize db:migrate:undo:all