json.topics @topics do |topic|
  json.id topic.id
  json.board_id topic.board_id
  json.body topic.body
  json.created_at topic.created_at
  json.url api_board_topic_url(topic.board, topic)
  json.posts topic.posts.limit(3) do |post|
    json.id post.id
    json.topic_id post.topic_id
    json.body post.body
    json.created_at post.created_at
  end
end
if @topics.next_page
  json.next_href api_board_topics_url(page: @topics.next_page)
end
