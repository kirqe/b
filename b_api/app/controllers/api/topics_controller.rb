class Api::TopicsController < Api::ApiController
  def index
    board = Board.find(params[:board_id])
    @topics = board.topics.page(params[:page]).per(20)
  end

  def show
    @topic = Topic.find(params[:id])
  end

end
