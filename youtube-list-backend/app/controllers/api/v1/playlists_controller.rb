class Api::V1::PlaylistsController < ApplicationController

    # USER CREATES NEW PLAYLIST
    def create
        binding.pry
        user = User.find_by(id: params[:user][:user_id])
        user.playlists.create(name: params[:user][:playlist][:name])
        render json: user, include: ["playlists"]
    end

    # USER UPDATES/ ADDS MORE VIDEOS TO PLAYLIST
    def update
    end

    # USER DELETES PLAYLIST
    def destroy
    end

end