class Topic < ApplicationRecord
  mount_uploader :image, ImageUploader

  belongs_to :board
  has_many :posts, dependent: :destroy

  validates_presence_of :body

  scope :latest, -> { order('created_at DESC') }
end
