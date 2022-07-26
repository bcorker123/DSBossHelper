class Boss < ApplicationRecord
    has_many :characters
    has_many :hints
end
