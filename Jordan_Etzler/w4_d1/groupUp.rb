students = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i' , 'j']
group = 3.0 #Syntax must include decimal place for float

# Find split values
divide = students.length / group
divideRemainder = (students.length / group) - group

#Slice Array
groupArr = students.each_slice(divide).to_a

if divideRemainder > 0
  # groupArr[divide + 1]
  loner = groupArr[0] + groupArr[divide]
  final = groupArr + loner
end
