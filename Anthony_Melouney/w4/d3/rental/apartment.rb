# require'pry'

class Apartment

  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths, :renters

  def initiailze(price, is_occupied, sqft, num_beds, num_baths, renters)
    @price = price.to_d
    @is_occupied = #boolean
    @sqft = sqft.to_i
    @num_beds = num_beds.to_i
    @num_baths = num_baths.to_i
    @renters = []
  end

  def to_s
    p "Price: #{@price}" /n + "test"
  end
end

# binding.pry
