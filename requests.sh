
#! /bin/bash
echo "Hello World"

URL="http://localhost:4001"
simpleGet(){
  actor=$1
  curl "http://localhost:4001/$actor"
}
simplePost(){
  actor=$1
  curl -X POST \
    -H "Content-type: application/json" \
    --data '{"id":"0","name":"NAME","date":"DATE","objName":"OBJNAME","objId":"OBJID","ownerName":"OWNERNAME","ownerId":0,"agentName":"AGENTNAME","agentId":100,"dogovorType":"DOGOVORTYPE","systems":"SYSTEMS","price":"PRICE","srokDeistviya":"DSROKDEISTVIYA"}' \
   "http://localhost:4001/$actor"
}
simpleDelete(){
  actor=$1
  curl -X DELETE \
    -H "Content-type: application/json" \
    --data '{"id":"0"}' \
    "http://localhost:4001/$actor"
}
simplePut(){
  actor=$1
  curl -X PUT \
    -H "Content-type: application/json" \
    --data '{"id":"0","name":"NAME","date":"DATE","objName":"OBJNAME","objId":"OBJID","ownerName":"OWNERNAME","ownerId":0,"agentName":"AGENTNAME","agentId":100,"dogovorType":"DOGOVORTYPE","systems":"SYSTEMS","price":"PRICE","srokDeistviya":"DSROKDEISTVIYA"}' \
    "http://localhost:4001/$actor"
};

restCalls(){
  actor=$1
  printf "\n$actor GET\n"
  simpleGet "$actor"
  printf "\n"
  printf "\n$actor POST\n"
  simplePost "$actor"
  printf "\n"
  printf "\n$actor PUT\n"
  simplePut "$actor"
  printf "\n"
  printf "\n$actor DELETE\n"
  simpleDelete "$actor"
  printf "\n"
  printf "\ndogovors GET\n"
  simpleGet "$actor"
  printf "\n"
  printf "\n"
}

#restCalls "owners"
restCalls "dogovors"

