# require './person'

# require './apartments'
require 'pry'

class Building

  attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors, :apartments

  def initialize(address, style, has_doorman, is_walk, num_floors, apartment=[])

    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors

  end

  # def to_string
    # "HELLO THERE! THIS BUILDIN IS GOOD!: at #{@address} style: #{@style} has doorman: #{@has_doorman}"
  # end

end

binding.pry
