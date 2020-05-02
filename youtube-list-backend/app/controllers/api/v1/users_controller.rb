class Api::V1::UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users.to_json(:include => {:playlists => {:include => [:videos]}})
    end

    def create
        user = User.create(user_params)
        render json: user
    end

    private

    def user_params
        params.require(:user).permit(:user_name)
    end

end