
class Apartment
  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths,

  def initialize
    @is_occupied = is_occupied
    @sqft = sqft
    @num_beds = num_beds
    @num_baths = num_baths
  end

  def to_s
    p "#{@name} has #{@sqft} sq ft including #{@num_baths} and #{@num_beds}."
  end

end
