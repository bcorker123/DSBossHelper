class CharactersController < ApplicationController
    def index 
        render json: Character.all, serializer: CharacterSerializer
    end 

    def create 
        character = Character.create!(character_params)
        render json: character, status: :created
    rescue ActiveRecord::RecordInvalid => exception
        render json: {error:exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def update 
        character = Character.find(params[:id])
        character.update(boss_id: params[:boss_id], ng: params[:ng])
        puts character
        render json: character, status: :ok
    end

    def destroy 
        character = Character.find(params[:id])
        character.destroy
        head :no_content
    end

    private 

    def character_params
        params.permit(:name, :build_id, :user_id, :boss_id, :ng)
    end 
end
