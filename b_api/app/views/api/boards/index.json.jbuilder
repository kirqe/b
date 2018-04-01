json.boards @boards do |board|
  json.id board.id
  json.permalink board.permalink
  json.url api_board_topics_url(board)
  json.description board.description
  json.created_at board.created_at
end

if @boards.next_page
  json.next_href api_boards_url(page: @boards.next_page)
end
