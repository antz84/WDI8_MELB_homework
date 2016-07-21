
#A #######
a = ["Anil", "Erik", "Jonathan"]

#1
a[1];
#2
a.push('Jordan')


#B #######

h = {
  0 => "Zero",
  1 => "One",
  :two => "Two",
  "two" => 2
}

#1
h[1]
#2
h[:two]
#3
h["two"]
#4
h[3] = "Three"
#5
h[:four] = 4


#C #######

is = {true => "It's true!", false => "It's false"}

#1
#It's True
#2
# It's False
#3
#It's False
#4
#nil
#5
#nil

#D #######

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

#1
users["Jonathan"][:twitter]
#2
users["Erik"][:favorite_numbers] = 7
#3
users['Jordan'] = "Awesome"
#4
users["Erik"][:favorite_numbers]
#5
users["Anil"][:favorite_numbers].sort[0]
#6
users["Anil"][:favorite_numbers].select {|x| x.even?}
#7
(users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Jonathan"][:favorite_numbers])
#8
(users["Erik"][:favorite_numbers]+ users["Anil"][:favorite_numbers]+ users["Jonathan"][:favorite_numbers]).uniq.sort
