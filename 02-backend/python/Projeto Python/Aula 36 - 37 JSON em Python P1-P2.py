#import json


#carros={
#    "marca":"Honda",
#    "modelo":"Civic",
#    "cor":"prata"
#}

#carros_json=json.dumps(carros)
#print(carros_json)


#for x in carros.values():
#    print(x)
#print(carros["marca"])


import json
carros_dictionary={
    "marca":"honda",
    "modelo":"Civic",
    "cor":"grafite"
}

#dictionary -> objeto json

carros_list=["Honda","Volkswagem","Ford","Fiat","Chevrolet"]
#list -> array json

carros_tupla=("Honda","Volkswagem","Ford","Fiat","Chevrolet")
#tupla -> array json

carros_j=json.dumps(carros_dictionary,indent=4,separators=(": ","="),sort_keys=True)

print(carros_j)