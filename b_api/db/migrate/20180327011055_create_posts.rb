class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.references :topic, foreign_key: true
      t.string :body

      t.timestamps
    end
  end
end
