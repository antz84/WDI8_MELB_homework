
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
    "The adress: #{@address} which is #{@style} dorman #{@has_doorman} and walkup: #{@is_walkup}, the number of floors #{@num_floors}, and the number of apartments: #{@apartments}"
  end

end
