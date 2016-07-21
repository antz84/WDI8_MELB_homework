require './building'
require './person'
require './apartment'
require "pry"


b1 = Building.new("500 Elizabeth Street", "studio", false, true, 40)
b2 = Building.new("123 Power Street", "apartment", true, true, 80)

a1 = Apartment.new("$500,000", true, 1000, 3, 2 )
a2 = Apartment.new("$800,000", false, 1500, 5, 2 )

p1 = Person.new("James", 28, "Male")
p2 = Person.new("Amy", 30, "Female")

a1.renters.push(p1)

binding.pry
