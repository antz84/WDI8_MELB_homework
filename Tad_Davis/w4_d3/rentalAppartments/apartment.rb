class Apartment 

	attr_accessor :price, :is_occupied,:sqft,:num_beds, :num_baths,:renters

	def initialize price=50, is_occupied=true, sqft=55, num_beds=1, num_baths=34, renters=[]
	@price = price
	@is_occupied = is_occupied
	@sqft = sqft
	@num_beds = num_beds
	@num_baths = num_baths
	@renters = renters

	end

	def to_s
		"#{@price} #{@sqft} #{@num_baths} #{@num_baths} #{@renters}" 

	end 

end 