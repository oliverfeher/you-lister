class User < ApplicationRecord
    validates :user_name, presence: true, uniqueness: true
    has_many :playlists
    has_many :videos, through: :playlists
end