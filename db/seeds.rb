# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
	Pokemon.create(
		name: 'Bulbasur', 
		picture_url:'http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/bulbasaur-500x500.jpg', 
		description:'The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.'
	)

	Pokemon.create(
		name:'Ivysaur',
		picture_url:'http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/ivysaur-500x500.jpg',
		description:'The bulb on its back grows as it absorbs nutrients. The bulb gives off a pleasant aroma when it blooms.'
	)

	Pokemon.create(
		name:'Venasaur',
		picture_url:'http://pokemonqrcode.com/image/cache/catalog/Pokemon/Gen1/venusaur-500x500.jpg',
		description:'It is able to convert sunlight into energy. As a result, it is more powerful in the summertime.'
	)