class Game < ApplicationRecord
  extend FriendlyId
  belongs_to :difficulty
  friendly_id :title, use: :slugged
end
