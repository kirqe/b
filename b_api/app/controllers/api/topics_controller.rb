class Api::TopicsController < Api::ApiController
  before_action :set_board, only: [:index, :create]

  def index
    @topics = @board.topics.latest.page(params[:page]).per(20)
  end

  def show
    @topic = Topic.find(params[:id])
  end

  def create
    @topic = @board.topics.new(topic_params)

    p "-----------"
    p @topic
    p "-----------"
    if @topic.save
      render status: :created
    else
      render json: @topic.errors, status: :unprocessable_entity
    end
  end

  private
    def topic_params
      params.require(:topic).permit(:name, :options, :subject, :body, {images: []})
    end

    def set_board
      @board = Board.find_by(permalink: params[:board_id])
    end
end
