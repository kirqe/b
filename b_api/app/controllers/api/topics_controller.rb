class Api::TopicsController < Api::ApiController
  def index
    board = Board.find_by(permalink: params[:board_id])
    @topics = board.topics.page(params[:page]).per(20)
  end

  def show
    @topic = Topic.find(params[:id])
  end

end
