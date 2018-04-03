class AddNewFieldsToTopic < ActiveRecord::Migration[5.1]
  def change
    add_column :topics, :name, :string
    add_column :topics, :options, :string
    add_column :topics, :subject, :string
  end
end
