
class Apartment

  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths, :renters

  def initialize(price, is_occupied, sqft, num_beds, num_baths)
    @price = price.to_f
    @is_occupied = is_occupied
    @sqft = sqft.to_i
    @num_beds = num_beds.to_i
    @num_baths = num_baths.to_i
    @renters = []
  end

  def add(renters)
    @renters.push(renters)
  end

  def to_s
    "Price: #{@price} and is occupied:  #{@is_occupied}, square meters: #{@sqft}, num of bedrooms #{@num_beds} and bathrooms, is rented by #{@renters} people."
  end

end
