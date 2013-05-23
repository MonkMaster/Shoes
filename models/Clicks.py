from google.appengine.ext import db


class Clicks(db.Model):
	name = db.StringProperty(required=True)
	gender = db.StringProperty(required=True)
	country = db.StringProperty(required=True)
	regPrice = db.FloatProperty(required=True)
	salePrice = db.FloatProperty(required=True)
	date = db.DateTimeProperty(required=True)
#end class

class Events(db.Model):
	event = db.StringProperty(required=True)
	date = db.DateTimeProperty(required=True)
#end class

class Searches(db.Model):
	country = db.StringProperty(required=True)
	date = db.DateTimeProperty(required=True)
	brands = db.StringListProperty(required=True)
	genders = db.StringListProperty(required=True)
	style = db.StringProperty(required=True)
	size = db.StringProperty(required=True)
	order = db.StringProperty(required=True)
#end class