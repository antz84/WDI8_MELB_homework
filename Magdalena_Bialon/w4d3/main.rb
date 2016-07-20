require 'pry'
require './building.rb'
require './apartment.rb'
require './person.rb'


tenant1 = Person.new('Dominika', 40, 'female', 'apartment')
p tenant1.to_s

# binding.pry

ap_number10 = Apartment.new(10, true, 100, 3, 3)
p ap_number10.to_s
puts ap_number10.add(tenant1)

# binding.pry

# ap_number10.renters.push('magda')


building1 = Building.new('prahran', 'mansion', true, true, 100)


p building1.to_s
puts building1.add(ap_number10)
