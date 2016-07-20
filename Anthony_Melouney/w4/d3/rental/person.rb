require 'pry'

class Person

  attr_accessor :name, :age, :gender

  def initiailze(name, age, gender)
    @name = name
    @age = age
    @gender = gender
  end

  def to_s
    "#{@name} + #{@age} + #{@gender} + #{@apartment}"
  end
end

binding.pry
