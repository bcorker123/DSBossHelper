class UsersController < ApplicationController
    def show 
        if current_user
            render json: current_user
        else
            render json: {error:"No active session"}, status: :unauthorized
        end
    end

    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id 
        render json: user, serializer: UserSerializer, status: :created
    rescue ActiveRecord::RecordInvalid => exception
        render json: {error: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    private
    
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
