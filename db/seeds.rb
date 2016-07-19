require 'nokogiri'
require 'open-uri'

page = Nokogiri::HTML(open('http://pokemonqrcode.com/generation-1?limit=150'))
pokemon = page.css('div.product-thumb')
pokemon = pokemon.css('div.image')
pokemon_pics = pokemon.css('a')
data =[]



def farfetch
	#method for inserting farfetch'd data
	data =  {
		name: "Farfetch'd", 
		picture_url: "https://img.pokemondb.net/artwork/farfetchd.jpg", 
		description: "The sprig of green onions it holds is its weapon. It is used much like a metal sword."
	}
	return data
end




pokemon_pics.each do |pokemon|
	name = pokemon.children[0].attributes['title'].value
	url = pokemon.children[0].attributes['src'].value
	if name.include? "\u2642"
		# for Nidoran male
		name.chop!
		new_name = name + "-m"
		pokemon_page = Nokogiri::HTML(open("http://pokemondb.net/pokedex/#{new_name.downcase}"))
	elsif name.include? "\u2640"
		# for Nidoran female
		name.chop!
		new_name = name + '-f'
		pokemon_page = Nokogiri::HTML(open("http://pokemondb.net/pokedex/#{new_name.downcase}"))
	elsif name === "Mr. Mime"
		# for Mr. Mime
		pokemon_page = Nokogiri::HTML(open("http://pokemondb.net/pokedex/mr-mime"))
	else
		pokemon_page = Nokogiri::HTML(open("http://pokemondb.net/pokedex/#{name.downcase}"))
	end

	#gathers all H2 headers on page
	headers = pokemon_page.css('h2')
	if name === 'Magneton'
		# for inserting Farfetch'd
			headers.each do |header|
				# finds pokedex entries 
				if header.text.include? " entries"
					entry = header.next_sibling.next_sibling
					data.push({
						picture_url: url,
						name: pokemon.children[0].attributes['title'].value,
						description: entry.children[0].children[0].children[3].children.text
					})
					break
				end
			end
		data.push(farfetch)
	else
		headers.each do |header|
			# finds pokedex entries 
			if header.text.include? " entries"
				entry = header.next_sibling.next_sibling
				data.push({
							picture_url: url,
							name: pokemon.children[0].attributes['title'].value,
							description: entry.children[0].children[0].children[3].children.text
				})
				break
			end
		end
	end
end


data.each do |content|
	Pokemon.create(content)
end



