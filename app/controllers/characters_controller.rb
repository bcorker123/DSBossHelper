class CharactersController < ApplicationController
    def index 
        render json: Character.all, serializer: CharacterSerializer
    end 
end
