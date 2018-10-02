class Difficulty < ApplicationRecord
  extend FriendlyId
  has_many :games
  friendly_id :name, use: :slugged
end
