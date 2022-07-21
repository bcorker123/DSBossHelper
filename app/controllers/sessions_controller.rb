class SessionsController < ApplicationController
    def create 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user 
        else
            render json: {error:"Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy 
        if current_user 
            session.delete :user_id
            head :no_content
        else
            render json: {error:"No active session"}, status: :unauthorized
        end
    end
end
