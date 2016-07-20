
class Person

  def initialize(name='Andrew', age=23, gender='male', apartment=['apt1'])
    @name = name
    @age = age
    @gender = gender
    @apartment = apartment
  end

  attr_accessor :name, :age, :gender, :apartment

  def to_s
    puts "*RENTERS* Name: #{@name}, Age: #{@age}, Gender: #{@gender}, Apartment: #{@apartment.join(', ')}"
  end

end
