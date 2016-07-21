require './apartment'
require './person'
require './building'
require 'pry'

# put a person inside an apartment inside a building 


#list of persons
timmy = Person.new("Timmy",31,"male")
jane = Person.new("Jane",34,"female")
jenny = Person.new("Jenny",300,"female")
#their apartment
thePlace = Apartment.new()
thePlace.renters.push(timmy,jane,jenny)



#list of other people
rob = Person.new("rob",31,"male")
alice = Person.new("alice",34,"female")
sarah = Person.new("sarah",22,"female")
#their apartment
apartmentTwo = Apartment.new()
apartmentTwo.renters.push(rob,alice,sarah)



#the building they live in
theBuilding = Building.new()

theBuilding.apartments.push(thePlace,apartmentTwo)


binding.pry
