
class Building

  attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors, :apartments

  def initialize(address, style, has_doorman, is_walkup, num_floors)
    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors.to_i
    @apartments = []
  end

  def add(apartments)
    @apartments.push(apartments)
  end

  def to_s
    "The adress: #{@address} which is style building:  #{@style}, doorman #{@has_doorman} and walkup: #{@is_walkup}, number of floors #{@num_floors}, and apartment type: #{@apartments.join(', ')}"
  end

end


#apartments.join(', ') ->> to get rid of :
#Dominika, aged  40 gender: female, live in apartment
#Apartment price: 1000.0 and is occupied:  true, square meters: 100, num of bedrooms 3 and bathrooms,
#         is rented by [#<Person:0x007f97bb1bd5f0 @name="Dominika", @age=40, @gender="female", @apartment="apartment">].
#"The adress: prahran which is style building:  mansion, doorman true and walkup: true,
#         number of floors 100, and apartment type:
#         [#<Apartment:0x007ff3fc1ed4b0 @price=1000.0, @is_occupied=true, @sqft=100, @num_beds=3, @num_baths=3,
#         @renters=[#<Person:0x007ff3fc1ed640 @name=\"Dominika\", @age=40, @gender=\"female\", @apartment=\"apartment\">]>]"
