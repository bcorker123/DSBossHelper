class Character < ApplicationRecord
    belongs_to :user 
    belongs_to :boss 
    belongs_to :build

    validates :user_id, presence: true
    validates :boss_id, presence: true
    validates :build_id, presence: true
    validates :name, presence: true
end
