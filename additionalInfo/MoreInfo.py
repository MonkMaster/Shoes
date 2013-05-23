from google.appengine.api import rdbms


class MoreInfo():

	@staticmethod
	def XSales(country):
		sales = ""

		if 'CAN' == country:
			pumaSales = "PUMA:\n<a href='http://www.shop.puma.ca/Returns/HELP_Returns,en_CA,pg.html'>Return Policy</a>\nFREE standard shipping on orders over $100\n\n"
			adidasSales = "ADIDAS:\n<a href='http://www.adidas.ca/Returns/help-topics-returning,en_CA,pg.html'>Return Policy</a>\nFREE standard shipping on orders over $50\n\n"
			eastbaySales = "OTHER BRANDS:\n<a href='http://www.eastbay.com/customerserv/help:returnPolicy/'>Return Policy</a>\n$15 off orders $75 or greater, use URLEB27A at checkout\n15% off orders $75 or greater, use URLEB273 at checkout\n$20 off orders $120 or greater, use URLEBCY4 at checkout\n10% off orders $75 or greater, use URLEBAF5 at checkout\n\n"

			sales = ''.join([sales, adidasSales, pumaSales, eastbaySales])
		else:
			pumaSales = "PUMA:\n<a href='http://www.shop.puma.com/Returns/HELP_Returns,en_US,pg.html'>Return Policy</a>\nFREE standard shipping on orders over $85\n\n"
			adidasSales = "ADIDAS:\n<a href='http://www.adidas.com/us/content/returnpolicy'>Return Policy</a>\nFREE standard shipping on ALL orders\n\n"
			eastbaySales = "EASTBAY:\n<a href='http://www.eastbay.com/customerserv/help:returnPolicy/'>Return Policy</a>\n$15 off orders $75 or greater, use URLEB27A at checkout\nFREE shipping on orders over $75, use URLEB869 at checkout\n15% off orders $75 or greater, use URLEB273 at checkout\n$20 off orders $120 or greater, use URLEBCY4 at checkout\n10% off orders $75 or greater, use URLEBAF5 at checkout\n\n"
			converseSales = "CONVERSE:\n<a href='https://www.converse.com/help/ordersshippingandreturns/USCustomers.aspx'>Return Policy</a>\nAdditional 25% off ALL orders\n\n"
			nikeSales = "NIKE:\n<a href='http://help-en-us.nike.com/app/answers/detail/a_id/29785/p/3897'>Return Policy</a>\n\n"

			sales = ''.join([sales, adidasSales, pumaSales, converseSales, nikeSales, eastbaySales])
		#end if

		return sales
	#end def
#end class
