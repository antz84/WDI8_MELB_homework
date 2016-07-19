require 'pry'

a = ["Anil", "Erik", "Jonathan"]


# a[0]
# a.pop
# a


# binding.pry


#a1

puts a[1]

#a2

a.push('Dean')
puts a[3]


h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
#binding.pry

#b1
puts h[1]

#b2
puts h[:two]

#b3
puts h['two']

#b4
# {3 => "Three"}
h[3] = "Three"



#b5
h[:four] = 4




#C

is = {true => "It's true!", false => "It's false"}


# c1 What is the return value of is[2 + 2 == 4]?
# answer - It's true!

# c2 What is the return value of is["Erik" == "Jonathan"]?
# answer - It's false


# c3 What is the return value of is[9 > 10]?
# answer - It's false


# c4 What is the return value of is[0]?
# answer - nil


# c5 What is the return value of is["Erik"]?
# answer - nil


# D

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

#1 How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]

#2 How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push(7)

#3 How would you add yourself to the users hash?
users["Dean"]

#4 How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

#5 How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort()[0]

#6 How would you return an array of Anil's favorite numbers that are also even?
anilArray = users["Anil"][:favorite_numbers]
finalArray = []
anilArray.each_with_index do |item,index|
  if (item %2 ==0) then
    finalArray.push(item)
  end
end
puts "#6"
puts finalArray
b = anilArray.select {|x| x.even? }

puts "6a"
puts b

#7 How would you return an array of the favorite numbers common to all users?
anilArray = users["Anil"][:favorite_numbers]
erikArray = users["Erik"][:favorite_numbers]
jonathanArray = users["Jonathan"][:favorite_numbers]
puts "#7"
puts finalArray & erikArray & jonathanArray





#8 How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
#uniq
anilArray = users["Anil"][:favorite_numbers]
erikArray = users["Erik"][:favorite_numbers]
jonathanArray = users["Jonathan"][:favorite_numbers]
puts '#8'
puts (anilArray + erikArray + jonathanArray).sort.uniq

#names and group size
#split a group of 10










#binding.pry
