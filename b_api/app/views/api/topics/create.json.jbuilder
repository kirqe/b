json.id @topic.id
json.body @topic.body
json.created_at @topic.created_at
json.posts @topic.posts do |post|
  json.id post.id
  json.topic_id post.topic_id
  json.body post.body
  json.created_at post.created_at
end
