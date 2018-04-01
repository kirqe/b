class Api::BoardsController < Api::ApiController
  def index
    @boards = Board.page(params[:page]).per(20)
  end

  def show
    @board = Board.find_by_permalink(params[:permalink])
  end
end
