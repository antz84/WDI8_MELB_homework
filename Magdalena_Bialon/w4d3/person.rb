
class Person

  attr_accessor :name, :age, :gender, :apartment

  def initialize(name, age, gender, apartment)
    @name = name
    @age = age.to_i
    @gender = gender
    @apartment = apartment    # need to update this
  end

  def to_s
    "#{@name}, aged  #{@age} gender: #{@gender}, live in #{@apartment} "
  end

end



#tenant = Person.new('magda', 25, 'female', 'apartment')
