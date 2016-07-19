require 'pry'

group = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


grouped = group.each_slice(3).to_a
# grouped = group  .to_a

grouped_threeF = grouped[0].concat(grouped[-1])

grouped_ok = grouped[0..(grouped.length - 2)]

print grouped_ok

binding.pry



# [["a", "b", "c", "j"], ["d", "e", "f"], ["g", "h", "i"]]
