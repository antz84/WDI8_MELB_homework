class Building 

	attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors, :apartments

	def initialize address="melbourne",style="outdated futuristic",has_doorman=true,is_walkup=true,num_floors=34,apartments=[]
	@address = address
	@style = style
	@has_doorman = has_doorman
	@is_walkup = is_walkup
	@num_floors = num_floors
	@apartments = apartments
	end

	def to_s
	"#{address} #{style} #{has_doorman} #{is_walkup} #{num_floors} #{apartments}"
	end


end 
