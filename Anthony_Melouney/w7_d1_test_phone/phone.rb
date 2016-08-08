class Phone
  def initialize(number)
    @number = number.gsub(/\D/, "")
    # .delete("^0-9")
  end

  def number
    if @number.length <  10
      @number = "0000000000"
      return @number
    else
      return @number
    end
  end

end
