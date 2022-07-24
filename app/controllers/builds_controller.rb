class BuildsController < ApplicationController
    def index 
        render json: Build.all#, serializer: BuildSerializer
    end
end
