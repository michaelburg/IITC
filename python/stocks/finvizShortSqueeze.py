# from finvizfinance.quote import finvizfinance


# filters = ['ind_stocksonly', 'sh_avgvol_o750', 'sh_price_o10', 'sh_relvol_o1', 'sh_short_o15', 'ta_averagetruerange_o1']
# from finvizfinance.screener.overview import Overview

# # Define your filters
# filters = ['exch_nasd', 'idx_sp500']  # Example filters for NASDAQ and S&P 500

# # Create the Screener object with the specified filters
# stock_screener = Overview()
# stock_screener.set_filter(filters=filters)

# # Fetch the screener data
# df = stock_screener.ScreenerView()
# print(df)


from datetime import datetime

# Example datetime string
datetime_string = "2024-04-04 00:00"

# Parse the string into a datetime object
datetime_object = datetime.strptime(datetime_string, "%Y-%m-%d %H:%M")

# Format the datetime object to a string with only hour and minute
time_string = datetime_object.strftime("%H:%M")

print(time_string)