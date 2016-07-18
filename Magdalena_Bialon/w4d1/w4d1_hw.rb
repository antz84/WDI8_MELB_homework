#A.
require 'pry'

a = ["Anil", "Erik", "Jonathan"]

puts a[1];
a.pop



#B
h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2}

h[1]
h[:two]
h["two"]
h[3]="Three"
h[:four] = 4



#C
is = {
  true => "It's true!",
  false => "It's false"
}

# is[2 + 2 == 4]    >> "It's true!"
# is["Erik" == "Jonathan"]   >> "It's false"
# is[9 > 10]   >>   "It's false"
# is[0]   >>  nil
# is["Erik"]   >>   nil



#D
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}


# binding.pry


users["Jonathan"][:twitter]
users["Erik"][:favorite_numbers].push(7)
users["Magda"] = {}
puts users["Erik"][:favorite_numbers]
#puts users["Erik"][:favorite_numbers].sort
puts users["Erik"][:favorite_numbers].min
puts users["Anil"][:favorite_numbers].map{ |n| n if n % 2 == 0 }.compact

intersection = (users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers])
puts intersection


allNumbers = (users["Jonathan"][:favorite_numbers] + users["Erik"][:favorite_numbers] + users["Anil"][:favorite_numbers]).sort.uniq

binding.pry
