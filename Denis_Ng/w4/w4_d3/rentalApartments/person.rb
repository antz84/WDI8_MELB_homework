require 'pry'

class Person

  attr_accessor :name, :age, :gender

  def initialize(name, age, gender)

    @name = name
    @age = age
    @gender = gender

  end

  # def to_string
  #   # "HELLO THERE! THIS BUILDIN IS GOOD!: at #{@address} style: #{@style} has doorman: #{@has_doorman}"
  # end

end

binding.pry
