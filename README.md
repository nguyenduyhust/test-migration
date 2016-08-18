### Installation
Please create database named "test-migration"

npm install

## Run migrate and create all table
sequelize db:migrate --migrations-path migrations/create_database/

## Generate original data
sequelize db:seed:all

## Update Database
sequelize db:migrate --migrations-path migrations/update_database/

## Delete all table
sequelize db:migrate:undo:all --migrations-path migrations/create_database