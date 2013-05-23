import os
import datetime
import webapp2

from google.appengine.ext.webapp import template
from google.appengine.api import mail
from django.utils import simplejson as json


from models.model import DB
from models.Clicks import Clicks, Events, Searches
from additionalInfo.MoreInfo import MoreInfo

HOME_HTML_PATH = os.path.join(os.path.dirname(__file__), 'home.html')

class WatchlistPromo(webapp2.RequestHandler):
	def get(self):
		self.response.out.write(template.render('watchlist.html', None))
	#end def
#end class

class Register(webapp2.RequestHandler):
	def get(self):
		country = self.request.headers.get("X-AppEngine-Country")
		city = self.request.headers.get("X-AppEngine-City")
		region = self.request.headers.get("X-AppEngine-Region")

		if not country:
			country = 'None'
		elif not region:
			region = 'None'
		elif not city:
			city = 'None'
		#end if

		name = self.request.get("Name")
		email = self.request.get("Email")
		type = self.request.get("Type")

		data = ''.join([name, '\n', email, '\n', country, '\n', region, '\n', city])

		if 'WatchList' == type:
			mail.send_mail(sender='rao.robby@gmail.com', to='admin@shoemonk.com', subject='WatchList Registration', body=data)
		else:
			mail.send_mail(sender='rao.robby@gmail.com', to='admin@shoemonk.com', subject='Additional Deals Registration', body=data)
		#end if
	#end def
#end class

class ClickTracker(webapp2.RequestHandler):
	def get(self):
		name = self.request.get("name")
		gender = self.request.get("sex")
		regP = float(self.request.get("reg"))
		saleP = float(self.request.get("sale"))
		countryCode = self.request.headers.get("X-AppEngine-Country")

		click = Clicks(name=name, gender=gender, country=countryCode, regPrice=regP, salePrice=saleP, date=(datetime.datetime.now()))

		try:
			click.put()
			self.response.out.write(True)
		except:
			self.response.out.write(False)
		#end try
	#end def
#end class

class EventTracker(webapp2.RequestHandler):
	def get(self):
		event = self.request.get("Event")

		eventRec = Events(event=event, date=(datetime.datetime.now()))

		try:
			eventRec.put()
			self.response.out.write(True)
		except:
			self.response.out.write(False)
		#end try
	#end def
#end class

class GetShoes(webapp2.RequestHandler):
	def get(self):
		brands = self.request.get_all("brands")
		genders = self.request.get_all("gender")
		style = self.request.get("Style")
		size = self.request.get("Size")
		order = self.request.get("Order")
		countryCode = self.request.headers.get("X-AppEngine-Country")

		search = Searches(country=countryCode, date=(datetime.datetime.now()), brands=brands, genders=genders, style=style, size=size, order=order)
		search.put()

		if 'CA' == countryCode:
			country = 'CAN'
		else:
			country = 'USA'
		#end if

		shoes = DB.Query(genders, brands, order, size, style, country)

		self.response.out.write(json.dumps(shoes))
	#end def
#end def

class MainPage(webapp2.RequestHandler):
	def get(self):
		countryCode = self.request.headers.get("X-AppEngine-Country")

		if 'CA' == countryCode:
			country = 'CAN'
		else:
			country = 'USA'
		#end if

		xSales = MoreInfo.XSales(country)

		template_values = {
			'xSales': xSales
		}

		self.response.out.write(template.render(HOME_HTML_PATH, template_values))
	#end def
#end class

maps = [('/', MainPage), ('/ClickTracker', ClickTracker), ('/EventTracker', EventTracker), ('/GetShoes', GetShoes), ('/watchlist', WatchlistPromo), ('/reg', Register)]

app = webapp2.WSGIApplication(maps, debug=True)