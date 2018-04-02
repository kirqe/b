# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
  Board.create(
    name: FFaker::Name.name,
    description: FFaker::Lorem.phrase,
    permalink: FFaker::Internet.domain_word
  )
end


500.times do
  Topic.create(
    board_id: rand(1..10),
    body: FFaker::Lorem.sentence,
  )
end


500.times do
  Post.create(
    topic_id: rand(1..500),
    body: FFaker::Lorem.sentence,
  )
end
