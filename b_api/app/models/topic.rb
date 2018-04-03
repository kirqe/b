class Topic < ApplicationRecord
  belongs_to :board
  has_many :posts, dependent: :destroy

  scope :latest, -> { order('created_at DESC') }
end
