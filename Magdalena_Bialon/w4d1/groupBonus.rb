group = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


grouped = group.each_slice(3).to_a
# grouped = group  .to_a

grouped_ok = grouped + grouped[0].concat(grouped[-1])
