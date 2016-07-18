=begin

##A
a = ["Anil", "Erik", "Jonathan"]

a[1]
a.push("Jane")

##B
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

h[1]
h[:two]
h["two"]
h[3] = "Three"
h[:four] = "4"

##C

is = {true => "It's true!", false => "It's false"}

is[2 + 2 == 4] -> its true
is["Erik" == "Jonathan"] its false
is[9 > 10] its false 
is[0] nil
is["Eric"] nil

##D

users["Jonathan"][:twitter] #1
users["Erik"][:favorite_numbers].push(7)
users["tad"] = " " #passing into an array #3
users["Erik"][:favorite_numbers].min

=end


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

 users["Anil"][:favorite_numbers].select.each_with_index { |i| i.even? }

# array of the favorite numbers common to all users?

jon = users["Jonathan"][:favorite_numbers]
eri = users["Erik"][:favorite_numbers]
anil = users["Anil"][:favorite_numbers]

intersection = (jon & eri & anil)

# array containing sorted, and excluding duplicates?

 
jon = users["Jonathan"][:favorite_numbers]
eri = users["Erik"][:favorite_numbers]
anil = users["Anil"][:favorite_numbers]

  allNum = (jon.concat eri.concat anil).sort
 winner = allNum.uniq