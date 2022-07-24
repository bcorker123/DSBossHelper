class BossSerializer < ActiveModel::Serializer
  attributes :id, :health, :image_url, :location, :name
end
