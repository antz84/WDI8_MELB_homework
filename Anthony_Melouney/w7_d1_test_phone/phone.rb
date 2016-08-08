class Phone
  def initialize(number)
    @number = number.gsub(/\D/, "")
    # .delete("^0-9")
  end

  def number
    return @number
  end

end
