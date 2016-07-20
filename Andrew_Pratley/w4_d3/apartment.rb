require './person'

class Apartment

  def initialize(price=1.23, is_occupied=true, sqft=45, num_beds=3, num_baths=2, renters=['renter1', 'renter2'])
    @price = price
    @is_occupied = is_occupied
    @sqft = sqft
    @num_beds = num_beds
    @num_baths = num_baths
    @renters = renters
  end

  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths, :renters

  def to_s
    puts "*APARTMENT* Price: #{@price}, Is Occupied: #{@is_occupied}, Sqft: #{@sqft}, Number of Beds: #{@num_beds}, Number of Baths: #{@num_baths}, Renters: #{@renters.join(', ')}"
  end

end
