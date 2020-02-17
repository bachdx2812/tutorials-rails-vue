# frozen_string_literal: true

class User < ApplicationRecord
  belongs_to :school, optional: true

  validates :name, :description, presence: true
  validates :name, length: { minimum: 5 }

  enum gender: {
    male: 1,
    female: 2
  }

  def to_collection
    { 
      id: id,
      name: name,
      school: school
    }
  end
end
