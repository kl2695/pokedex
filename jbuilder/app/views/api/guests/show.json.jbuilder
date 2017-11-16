json.partial!('api/guests/guests', guest: @guest)

json.extract!(@guest, :gifts)
