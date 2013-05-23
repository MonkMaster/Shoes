from google.appengine.api import rdbms


class DB():

	@staticmethod
	def Query(genders, brands, orderby, size, style, country):
		if [] == brands or [] == genders: #necessary? have js that make sure brand+gender selected
			return
		#end if

		jsonProduct = []

		cnxn = rdbms.connect(instance='shoemonk-sql:shoemonk', database='shoemonk')
		cursor = cnxn.cursor()

		sql = 'SELECT name, sex, priceold, pricenew, discount, imgsmall, link FROM shoes INNER JOIN shoesizes ON shoes.ShoeID = shoesizes.refID AND shoes.Brand = shoesizes.SizeBrand AND shoes.Country = shoesizes.SizeCountry WHERE'

		if '_' in orderby:
			orderbysplit = orderby.split('_')

			sqlOrderby = ' ORDER BY %s %s' %(orderbysplit[0], orderbysplit[1])
		else:
			sqlOrderby = ' ORDER BY saledate desc'
		#end if

		includescountry = ''.join(['%', str(country), '%'])
		size = ''.join(['%', '    ', size, '    ', '%'])

		sqlSize = ' Size like \'%s\'' %(size)
		sqlStyle = ' AND Style = \'%s\'' %(style)
		sqlCountry = ' AND Country like \'%s\'' %(includescountry)

		for (count, sex) in enumerate(genders):
			if 0 == count:
				sqlSex = 'Sex = \'%s\'' %(sex)
			else:
				sqlSex1 = ' OR Sex = \'%s\'' %(sex)

				sqlSex = ''.join([sqlSex, sqlSex1])
			#end if
		#end for

		for (count, brand) in enumerate(brands):
			if 0 == count:
				sqlBrand = 'Brand = \'%s\'' %(brand)
			else:
				sqlBrand1 = ' OR Brand = \'%s\'' %(brand)

				sqlBrand = ''.join([sqlBrand, sqlBrand1])
			#end if
		#end for

		sqlStatement = ''.join([sql, sqlSize, sqlCountry, sqlStyle, ' AND (', sqlSex, ')', ' AND (', sqlBrand, ')', sqlOrderby])

		#if 'All' != style:
		#	sqlStatement = ''.join([sqlStatement, sqlStyle])
		#end if

		cursor.execute(sqlStatement)

		columns = [desc[0] for desc in cursor.description]

		shoes = cursor.fetchall()

		for shoe in shoes:
			jsonProduct.append(dict((label, str(value)) for label, value in zip(columns, shoe)))
		#end for

		cursor.close()
		cnxn.close()

		return jsonProduct
	#end def
#end class
