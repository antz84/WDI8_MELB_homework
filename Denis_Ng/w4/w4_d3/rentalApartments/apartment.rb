# require './person'
require 'pry'

class Apartment

  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths, :renters

  def initialize(price, is_occupied, sqft, num_beds, num_baths, renters=[])

    @price	 = price
    @is_occupied = is_occupied
    @sqft = sqft.to_s
    @num_beds = num_beds.to_s
    @num_baths	 = num_baths.to_s

  end

  # def to_string
  #   "HELLO THERE! THIS BUILDIN IS GOOD!: at #{@address} style: #{@style} has doorman: #{@has_doorman}"
  # end

end

binding.pry

a1 = Apartment.new("$500,000", true, 1000, 3, 2 )
