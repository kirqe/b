class Topic < ApplicationRecord
  belongs_to :board
  has_many :posts, dependent: :destroy


end
