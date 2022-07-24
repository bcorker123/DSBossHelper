class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :build_id, :user_id, :boss_id
end
