class Person
  attr_accessor :name, :age, :gender, :apartment

  def initialize(name = 'tenant')
    @name = name
    @age = age
    @gender = gender
    @apartment = apartment
  end

  def to_s
    p " #{@name} is a #{@age} year old #{@gender} living in #{@apartment}"
  end

end
