# deletes the object with id '625def0fda8a2002a8d199b9'
curl --request DELETE localhost:5000/users/625def0fda8a2002a8d199b9

# assuming unique ids, this should result in 404 status
curl --request DELETE localhost:5000/users/625def0fda8a2002a8d199b9
