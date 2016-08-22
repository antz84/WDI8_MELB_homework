class Phone
  def initialize(number)
    @number = number.gsub(/\D/, "")
  end

  def area_code
    @number = @number.chars[0..2].join("")
  end

  def to_s
    # @first3 = @number.chars[0..2].join("")
    # @next3 = @number.chars[3..5].join("")
    # @last4 = @number.chars[6..9].join("")
    # @final = "(" + @first3 + ") " + @next3 + "-" + @last4
    # return @final
    #
    # @end = "(" + @first3 + ") " + @next3 + "-" + @last4
    # return @end
    "(#{@number.chars[0..2].join("")}) #{@number.chars[3..5].join("")}-#{@number.chars[6..9].join("")}"
  end

  def number
    if @number.length == 9
      @number = "0000000000"
      # return @number   #dont even need these return statements as ruby automatically returns the last evaluated statement
    elsif @number.length == 11 && @number.chars.first == '1'
      @number[0] = ''
      @number    # dont need the returnstatement here, but still need the value
    elsif @number.length == 11 && @number.chars.first != '1'
      @number = "0000000000"
      @number
    elsif @number.length == 9
      @number = "0000000000"
     @number
    elsif @number.length == 10 && @number.chars[0..2] == '123'
      @number.area_code
    else
     @number
    end
  end

end
