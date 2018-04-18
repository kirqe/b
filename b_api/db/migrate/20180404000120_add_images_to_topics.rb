class AddImagesToTopics < ActiveRecord::Migration[5.1]
  def change
    add_column :topics, :images, :json
  end
end
