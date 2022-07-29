class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :build_image, :user_id, :boss_id, :ng

  belongs_to :build

  def build_image 
    self.object.build.image_url
  end
end
