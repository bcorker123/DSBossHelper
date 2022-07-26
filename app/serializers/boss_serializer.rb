class BossSerializer < ActiveModel::Serializer
  attributes :id, :health, :image_url, :location, :name, :hints 

  has_many :hints
end
