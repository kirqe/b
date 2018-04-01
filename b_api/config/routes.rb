Rails.application.routes.draw do

  # resources :topics, defaults: { format: :json } do
  #   resources :posts
  # end
  namespace :api do

      resources :boards, defaults: { format: :json } do
        resources :topics do
          resources :posts, only: [:create]
        end
      end
    
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
