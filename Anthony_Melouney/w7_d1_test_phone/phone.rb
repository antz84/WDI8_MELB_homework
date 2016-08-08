class Phone
  def initialize(number)
    @number = number.gsub(/\D/, "")
  end

  def number
    return @number
  end

end
