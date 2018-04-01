class CreateTopics < ActiveRecord::Migration[5.1]
  def change
    create_table :topics do |t|
      t.references :board, foreign_key: true
      t.string :body

      t.timestamps
    end
  end
end
