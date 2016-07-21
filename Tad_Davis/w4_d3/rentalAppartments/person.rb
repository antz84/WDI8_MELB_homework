class Person 


	attr_accessor :name, :age, :gender

	def initialize name="urkle",age=33,gender="man"
	@name = name
	@age = age
	@gender = gender
	
	end

	def to_s
		"#{@name} #{@age} #{gender}"
	end
end