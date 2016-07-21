require 'pry'

class Person

  # attr_accessor :name, :age, :gender, :apartment

  def initialize(name, age, gender)
    @name = name
    @age = age.to_i
    @gender = gender
  end

  def to_s
    puts "#{@name} is #{@age} years old, is a #{@gender} and wants to rent"
  end

end
