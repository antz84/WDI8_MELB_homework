require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'yahoofinance'


get '/' do               #REQUEST

  if params[:stock] != nil && params[:stock] != ""

      @st = params[:stock]

      #@result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')['MSFT'].lastTrade
      @result = YahooFinance::get_quotes(YahooFinance::StandardQuote, @st)[@st].lastTrade

          #@result = YahooFinance::get_quotes(YahooFinance::StandardQuote, params[:stock])
          #@st = result[params[:stock]].lastTrade
   else                   # else dosn't need to be included
     @result = ""
   end


  erb(:index)           #RESPONSE

end




#browser : http://localhost:4567/?stock=MSFT
#browser : http://localhost:4567/?stock=AAPL
