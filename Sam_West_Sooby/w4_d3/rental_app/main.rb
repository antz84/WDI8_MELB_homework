require 'pry'
require './apartment'
require './building'
require './person'

person1 = Person.new("Derek", "30", "female")
person2 = Person.new("darren", "34", "female")

apartment1 = Apartment.new("199.99", true, "80", "4", "2", [person1])

apartment1.renters.push(person2)

puts apartment1