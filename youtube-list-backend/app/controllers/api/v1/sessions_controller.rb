class Api::V1::SessionsController < ApplicationController

    # POST TO LOGIN
    def new
        user = User.find_by(user_params)


        if user.nil?
            render json: {
                error: "User doesn't exist"
            }
        else
            render json: user, include: ["playlists"]
        end
    end


    private

    def user_params
        params.require(:user).permit(:user_name)
    end
end