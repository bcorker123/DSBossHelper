class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :characters 

  has_many :characters
end
