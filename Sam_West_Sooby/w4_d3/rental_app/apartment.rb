require 'pry'

class Apartment

  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths, :renters

  def initialize(price, is_occupied, sqft, num_beds, num_baths, renters)
    @price = price.to_f
    @is_occupied = is_occupied
    @sqft = sqft.to_i
    @num_beds = num_beds.to_i
    @num_baths = num_baths.to_i
    @renters = renters
    end

  # def add(renters)
  #   @renters.push(renters)
  # end

  def to_s
    "Price: #{@price}. Is it occupied? #{@is_occupied}. Its size is #{@sqft}, with #{@num_beds} bedrooms and #{@num_baths}. Renters? #{@renters}"
  end

end