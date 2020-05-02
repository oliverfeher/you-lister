class Playlist < ApplicationRecord
    has_many :videos
    accepts_nested_attributes_for :videos
end