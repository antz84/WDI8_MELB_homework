require 'pry'

class Building
  attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors, :apartments

  def initialize(address = '123 building')
    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors
    @apartments = [] #add_apartment doesn't work if placeholder is apartments
  end

  def to_s
    p "#{@address} has #{@num_floors} floors in the #{@style} style. Has doorman: #{@has_doorman}. Walkup: #{@is_walkup}. Availability in #{@apartments.join(', ')}"
  end #need else statement to specify no doorman/ not walkup
  # #{'Has doorman' if @has_doorman == true}.  #{'Walkup building. ' if @is_walkup == true}
  #error if only 1 apt in apartment array

  def add_apartment(apartment)
    @apartments.push(apartment)
  end

end
