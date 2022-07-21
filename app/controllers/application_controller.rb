class ApplicationController < ActionController::API
    include ActionController::Cookies

    private 

    def current_user 
        @current_user ||= User.find_by_id(session[:user_id])
    end
end
