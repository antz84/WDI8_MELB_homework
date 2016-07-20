require 'pry'
require './building.rb'
require './apartment.rb'
require './person.rb'

def initialize(building, apartment, person)

@building = building
@apartment = apartment
@person = person
end

  p "Would you like to make a person? "

binding.pry
