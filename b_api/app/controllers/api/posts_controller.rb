class Api::PostsController < Api::ApiController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end
end
