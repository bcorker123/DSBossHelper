# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts 'seeding users'
User.create(username:'brian', password_digest:'123')
puts 'seeding bosses'
Boss.create(name:"Asylum Demon", health:1000, image_url:'', location:'Undead Asylum')