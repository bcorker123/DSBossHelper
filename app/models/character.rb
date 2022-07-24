class Character < ApplicationRecord
    belongs_to :user 
    belongs_to :boss 
    belongs_to :build
end
