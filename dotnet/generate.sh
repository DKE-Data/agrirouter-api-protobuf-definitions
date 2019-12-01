printf 'Removing generated files.\n\n'
rm -rf generated/Agrirouter 

printf 'Create folders.\n\n'
mkdir generated
mkdir generated/Agrirouter
mkdir generated/Agrirouter/Commons
mkdir generated/Agrirouter/Message
mkdir generated/Agrirouter/Message/Settings
mkdir generated/Agrirouter/Cloud
mkdir generated/Agrirouter/Cloud/Registration
mkdir generated/Agrirouter/Request
mkdir generated/Agrirouter/Request/Payload
mkdir generated/Agrirouter/Request/Payload/Account
mkdir generated/Agrirouter/Request/Payload/Endpoint
mkdir generated/Agrirouter/Response
mkdir generated/Agrirouter/Response/Payload
mkdir generated/Agrirouter/Response/Payload/Account
mkdir generated/Agrirouter/Response/Payload/Endpoint
mkdir generated/Agrirouter/Feed
mkdir generated/Agrirouter/Feed/Request
mkdir generated/Agrirouter/Feed/Response
mkdir generated/Agrirouter/Feed/Push
mkdir generated/Agrirouter/Feed/Push/Notification

printf 'Generating files | Commons\n\n' 
protoc -Igoogle/protobuf -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Commons agrirouter/protobuf/commons/*.proto

printf 'Generating files | Message Settings\n\n' 
protoc -Igoogle/protobuf -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Message/Settings agrirouter/protobuf/settings/*.proto

printf 'Generating files | Cloud Registration\n\n' 
protoc -Igoogle/protobuf -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Cloud/Registration agrirouter/protobuf/cloud-provider-integration/*.proto

printf 'Generating files | Request\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Request agrirouter/protobuf/messaging/request/*.proto

printf 'Generating files | Request Payload Account\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Request/Payload/Account agrirouter/protobuf/messaging/request/payload/account/*.proto

printf 'Generating files | Request Payload Endpoint\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Request/Payload/Endpoint agrirouter/protobuf/messaging/request/payload/endpoint/*.proto

printf 'Generating files | Response\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Response agrirouter/protobuf/messaging/response/*.proto

printf 'Generating files | Response Payload Account\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Response/Payload/Account agrirouter/protobuf/messaging/response/payload/account/*.proto

printf 'Generating files | Response Payload Endpoint\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Response/Payload/Endpoint agrirouter/protobuf/messaging/response/payload/endpoint/*.proto

printf 'Generating files | Feed Request\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Feed/Request agrirouter/protobuf/messaging/request/payload/feed/*.proto

printf 'Generating files | Feed Response\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Feed/Response agrirouter/protobuf/messaging/response/payload/feed/feed-response.proto

printf 'Generating files | Feed Push Notification\n\n' 
protoc -Igoogle/protobuf/ -Iagrirouter/protobuf/ --csharp_out=generated/Agrirouter/Feed/Push/Notification agrirouter/protobuf/messaging/response/payload/feed/push-notification.proto

printf 'Exchange files from the solution.'
rm -rf AgrirouterApiProtobufDefinitions/Agrirouter
mv generated/Agrirouter AgrirouterApiProtobufDefinitions

printf 'Clean up.'
rm -rf generated
