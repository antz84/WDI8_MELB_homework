
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
    "Apartment price: #{@price} and is occupied:  #{@is_occupied}, square meters: #{@sqft}, num of bedrooms #{@num_beds} and bathrooms, is rented by #{@renters.join(', ')}."
  end

end


#{@renters.join(', ')  to get rid of :
#Apartment price: 1000.0 and is occupied:  true, square meters: 100, num of bedrooms 3 and bathrooms,
#   is rented by [#<Person:0x007f9bc9901188 @name="Dominika", @age=40, @gender="female", @apartment="apartment">].

#Apartment price: 1000.0 and is occupied:  true, square meters: 100, num of bedrooms 3 and bathrooms,
#      is rented by Dominika, aged  40 gender: female, live in apartment .
