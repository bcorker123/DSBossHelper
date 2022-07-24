class BossesController < ApplicationController
    def index 
        render json: Boss.all, each_serializer: BossSerializer
    end
end
