class BossesController < ApplicationController
    def index 
        render json: Boss.all 
    end
end
