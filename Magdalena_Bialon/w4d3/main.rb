require 'pry'
require './building.rb'
require './apartment.rb'
require './person.rb'


tenant1 = Person.new('Dominika', 40, 'female', 'apartment')
tenant2 = Person.new('Ada', 70, 'female', 'penthouse')
# puts tenant1.to_s
# puts tenant2.to_s

# I GET THIS IN PRY:
# Dominika, aged  40 gender: female, live in apartment
# Ada, aged  70 gender: female, live in penthouse



ap_10 = Apartment.new(1000, true, 100, 3, 3)
ap_11 = Apartment.new(200, true, 100, 3, 3)

# puts ap_10.add(tenant1)
# puts ap_11.add(tenant2)

# 1) I GET THIS IN PRY:
# Dominika, aged  40 gender: female, live in apartment    // as I assined ap_10 with tenant1
# Ada, aged  70 gender: female, live in penthouse         // as I assined ap_11 with tenant2


# puts ap_10.add(tenant1)
# puts ap_10.to_s

# 2) I GET THIS IN PRY:
#Dominika, aged  40 gender: female, live in apartment
#Apartment price: 1000.0 and is occupied:  true, square meters: 100, num of bedrooms 3 and bathrooms,
#               is rented by Dominika, aged  40 gender: female, live in apartment .


# puts ap_11.add(tenant2)
# puts ap_11.to_s

# 3) I GET THIS IN PRY:
#Ada, aged  70 gender: female, live in penthouse
#Apartment price: 200.0 and is occupied:  true, square meters: 100, num of bedrooms 3 and bathrooms,
#    is rented by Ada, aged  70 gender: female, live in penthouse .



building1 = Building.new('prahran', 'mansion', true, true, 100)


puts ap_10.add(tenant1)
puts building1.add(ap_10)
p building1.to_s


# I GET THIS IN PRY:
#Dominika, aged  40 gender: female, live in apartment
#Apartment price: 1000.0 and is occupied:  true, square meters: 100, num of bedrooms 3 and bathrooms,
#      is rented by Dominika, aged  40 gender: female, live in apartment .
#"The adress: prahran which is style building:  mansion, doorman true and walkup: true, number of floors 100,
#  and apartment type: Apartment price: 1000.0 and is occupied:  true, square meters: 100, num of bedrooms 3 and bathrooms,
#  is rented by Dominika, aged  40 gender: female, live in apartment ."
