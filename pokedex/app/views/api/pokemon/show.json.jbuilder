json.set! :pokemon do
    json.extract!(
      @pokemon,
      :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
    )
    json.image_url asset_path(@pokemon.image_url)
end

json.set! :items do
  json.array! @pokemon.items do |item|
    json.extract!(item, :id, :name, :pokemon_id, :price, :happiness, :image_url)
  end
end
