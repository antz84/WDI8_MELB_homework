require './apartment'

class Building

  def initialize(address='1/32', style='art deco', has_doorman=true, is_walkup=false, num_floors=6, apartments=['apt1', 'apt2'])
    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors
    @apartments = apartments
  end

  attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors, :apartments

  def to_s
    puts "*BUILDING* Address: #{@address}, Style: #{@style}, Has Doorman: #{@has_doorman}, Is Walkup: #{@is_walkup}, Number of Floors: #{@num_floors}, Apartments: #{@apartments.join(', ')}"
  end

end
