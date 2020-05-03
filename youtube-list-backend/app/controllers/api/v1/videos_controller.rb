class Api::V1::VideosController < ApplicationController

    def show
        user = User.find_by(id: params[:user_id])
        playlist = Playlist.find_by(id: params[:playlist_id])
        render json: playlist.to_json(:include => [:videos])
    end

    # USER ADDS NEW VIDEO TO A PLAYLIST
    def create
        user = User.find_by(id: params[:user_id])
        playlist = user.playlists.find_by(id: params[:playlist_id])
        video = Video.create(title: params[:video][:title], url: params[:video][:url], playlist_id: playlist.id)
        render json: user.to_json(:include => {:playlists => {:include => [:videos]}})
    end

    # USER DELETES VIDEO FROM A PLAYLIST
    def destroy
        video = Video.find_by(id: params[:id])
        video.destroy
        render json: {
            video_id: params[:id]
        }
    end

end