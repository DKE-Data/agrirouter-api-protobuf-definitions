/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.agrirouter = (function() {

    /**
     * Namespace agrirouter.
     * @exports agrirouter
     * @namespace
     */
    var agrirouter = {};

    agrirouter.cloud = (function() {

        /**
         * Namespace cloud.
         * @memberof agrirouter
         * @namespace
         */
        var cloud = {};

        cloud.registration = (function() {

            /**
             * Namespace registration.
             * @memberof agrirouter.cloud
             * @namespace
             */
            var registration = {};

            registration.OnboardingRequest = (function() {

                /**
                 * Properties of an OnboardingRequest.
                 * @memberof agrirouter.cloud.registration
                 * @interface IOnboardingRequest
                 * @property {Array.<agrirouter.cloud.registration.OnboardingRequest.IEndpointRegistrationDetails>|null} [onboardingRequests] OnboardingRequest onboardingRequests
                 */

                /**
                 * Constructs a new OnboardingRequest.
                 * @memberof agrirouter.cloud.registration
                 * @classdesc Represents an OnboardingRequest.
                 * @implements IOnboardingRequest
                 * @constructor
                 * @param {agrirouter.cloud.registration.IOnboardingRequest=} [properties] Properties to set
                 */
                function OnboardingRequest(properties) {
                    this.onboardingRequests = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OnboardingRequest onboardingRequests.
                 * @member {Array.<agrirouter.cloud.registration.OnboardingRequest.IEndpointRegistrationDetails>} onboardingRequests
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @instance
                 */
                OnboardingRequest.prototype.onboardingRequests = $util.emptyArray;

                /**
                 * Creates a new OnboardingRequest instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.IOnboardingRequest=} [properties] Properties to set
                 * @returns {agrirouter.cloud.registration.OnboardingRequest} OnboardingRequest instance
                 */
                OnboardingRequest.create = function create(properties) {
                    return new OnboardingRequest(properties);
                };

                /**
                 * Encodes the specified OnboardingRequest message. Does not implicitly {@link agrirouter.cloud.registration.OnboardingRequest.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.IOnboardingRequest} message OnboardingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OnboardingRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.onboardingRequests != null && message.onboardingRequests.length)
                        for (var i = 0; i < message.onboardingRequests.length; ++i)
                            $root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails.encode(message.onboardingRequests[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OnboardingRequest message, length delimited. Does not implicitly {@link agrirouter.cloud.registration.OnboardingRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.IOnboardingRequest} message OnboardingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OnboardingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OnboardingRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.cloud.registration.OnboardingRequest} OnboardingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OnboardingRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.cloud.registration.OnboardingRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.onboardingRequests && message.onboardingRequests.length))
                                message.onboardingRequests = [];
                            message.onboardingRequests.push($root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OnboardingRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.cloud.registration.OnboardingRequest} OnboardingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OnboardingRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OnboardingRequest message.
                 * @function verify
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OnboardingRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.onboardingRequests != null && message.hasOwnProperty("onboardingRequests")) {
                        if (!Array.isArray(message.onboardingRequests))
                            return "onboardingRequests: array expected";
                        for (var i = 0; i < message.onboardingRequests.length; ++i) {
                            var error = $root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails.verify(message.onboardingRequests[i]);
                            if (error)
                                return "onboardingRequests." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an OnboardingRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.cloud.registration.OnboardingRequest} OnboardingRequest
                 */
                OnboardingRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.cloud.registration.OnboardingRequest)
                        return object;
                    var message = new $root.agrirouter.cloud.registration.OnboardingRequest();
                    if (object.onboardingRequests) {
                        if (!Array.isArray(object.onboardingRequests))
                            throw TypeError(".agrirouter.cloud.registration.OnboardingRequest.onboardingRequests: array expected");
                        message.onboardingRequests = [];
                        for (var i = 0; i < object.onboardingRequests.length; ++i) {
                            if (typeof object.onboardingRequests[i] !== "object")
                                throw TypeError(".agrirouter.cloud.registration.OnboardingRequest.onboardingRequests: object expected");
                            message.onboardingRequests[i] = $root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails.fromObject(object.onboardingRequests[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OnboardingRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.OnboardingRequest} message OnboardingRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OnboardingRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.onboardingRequests = [];
                    if (message.onboardingRequests && message.onboardingRequests.length) {
                        object.onboardingRequests = [];
                        for (var j = 0; j < message.onboardingRequests.length; ++j)
                            object.onboardingRequests[j] = $root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails.toObject(message.onboardingRequests[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this OnboardingRequest to JSON.
                 * @function toJSON
                 * @memberof agrirouter.cloud.registration.OnboardingRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OnboardingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                OnboardingRequest.EndpointRegistrationDetails = (function() {

                    /**
                     * Properties of an EndpointRegistrationDetails.
                     * @memberof agrirouter.cloud.registration.OnboardingRequest
                     * @interface IEndpointRegistrationDetails
                     * @property {string|null} [id] EndpointRegistrationDetails id
                     * @property {string|null} [name] EndpointRegistrationDetails name
                     */

                    /**
                     * Constructs a new EndpointRegistrationDetails.
                     * @memberof agrirouter.cloud.registration.OnboardingRequest
                     * @classdesc Represents an EndpointRegistrationDetails.
                     * @implements IEndpointRegistrationDetails
                     * @constructor
                     * @param {agrirouter.cloud.registration.OnboardingRequest.IEndpointRegistrationDetails=} [properties] Properties to set
                     */
                    function EndpointRegistrationDetails(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EndpointRegistrationDetails id.
                     * @member {string} id
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @instance
                     */
                    EndpointRegistrationDetails.prototype.id = "";

                    /**
                     * EndpointRegistrationDetails name.
                     * @member {string} name
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @instance
                     */
                    EndpointRegistrationDetails.prototype.name = "";

                    /**
                     * Creates a new EndpointRegistrationDetails instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingRequest.IEndpointRegistrationDetails=} [properties] Properties to set
                     * @returns {agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails} EndpointRegistrationDetails instance
                     */
                    EndpointRegistrationDetails.create = function create(properties) {
                        return new EndpointRegistrationDetails(properties);
                    };

                    /**
                     * Encodes the specified EndpointRegistrationDetails message. Does not implicitly {@link agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingRequest.IEndpointRegistrationDetails} message EndpointRegistrationDetails message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndpointRegistrationDetails.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                        return writer;
                    };

                    /**
                     * Encodes the specified EndpointRegistrationDetails message, length delimited. Does not implicitly {@link agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingRequest.IEndpointRegistrationDetails} message EndpointRegistrationDetails message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndpointRegistrationDetails.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EndpointRegistrationDetails message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails} EndpointRegistrationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EndpointRegistrationDetails.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EndpointRegistrationDetails message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails} EndpointRegistrationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EndpointRegistrationDetails.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EndpointRegistrationDetails message.
                     * @function verify
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EndpointRegistrationDetails.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        return null;
                    };

                    /**
                     * Creates an EndpointRegistrationDetails message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails} EndpointRegistrationDetails
                     */
                    EndpointRegistrationDetails.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails)
                            return object;
                        var message = new $root.agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.name != null)
                            message.name = String(object.name);
                        return message;
                    };

                    /**
                     * Creates a plain object from an EndpointRegistrationDetails message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails} message EndpointRegistrationDetails
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EndpointRegistrationDetails.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.name = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        return object;
                    };

                    /**
                     * Converts this EndpointRegistrationDetails to JSON.
                     * @function toJSON
                     * @memberof agrirouter.cloud.registration.OnboardingRequest.EndpointRegistrationDetails
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EndpointRegistrationDetails.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EndpointRegistrationDetails;
                })();

                return OnboardingRequest;
            })();

            registration.OnboardingResponse = (function() {

                /**
                 * Properties of an OnboardingResponse.
                 * @memberof agrirouter.cloud.registration
                 * @interface IOnboardingResponse
                 * @property {Array.<agrirouter.cloud.registration.OnboardingResponse.IEndpointRegistrationDetails>|null} [onboardedEndpoints] OnboardingResponse onboardedEndpoints
                 * @property {Array.<agrirouter.cloud.registration.OnboardingResponse.IFailures>|null} [failures] OnboardingResponse failures
                 */

                /**
                 * Constructs a new OnboardingResponse.
                 * @memberof agrirouter.cloud.registration
                 * @classdesc Represents an OnboardingResponse.
                 * @implements IOnboardingResponse
                 * @constructor
                 * @param {agrirouter.cloud.registration.IOnboardingResponse=} [properties] Properties to set
                 */
                function OnboardingResponse(properties) {
                    this.onboardedEndpoints = [];
                    this.failures = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OnboardingResponse onboardedEndpoints.
                 * @member {Array.<agrirouter.cloud.registration.OnboardingResponse.IEndpointRegistrationDetails>} onboardedEndpoints
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @instance
                 */
                OnboardingResponse.prototype.onboardedEndpoints = $util.emptyArray;

                /**
                 * OnboardingResponse failures.
                 * @member {Array.<agrirouter.cloud.registration.OnboardingResponse.IFailures>} failures
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @instance
                 */
                OnboardingResponse.prototype.failures = $util.emptyArray;

                /**
                 * Creates a new OnboardingResponse instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {agrirouter.cloud.registration.IOnboardingResponse=} [properties] Properties to set
                 * @returns {agrirouter.cloud.registration.OnboardingResponse} OnboardingResponse instance
                 */
                OnboardingResponse.create = function create(properties) {
                    return new OnboardingResponse(properties);
                };

                /**
                 * Encodes the specified OnboardingResponse message. Does not implicitly {@link agrirouter.cloud.registration.OnboardingResponse.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {agrirouter.cloud.registration.IOnboardingResponse} message OnboardingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OnboardingResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.onboardedEndpoints != null && message.onboardedEndpoints.length)
                        for (var i = 0; i < message.onboardedEndpoints.length; ++i)
                            $root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails.encode(message.onboardedEndpoints[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.failures != null && message.failures.length)
                        for (var i = 0; i < message.failures.length; ++i)
                            $root.agrirouter.cloud.registration.OnboardingResponse.Failures.encode(message.failures[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OnboardingResponse message, length delimited. Does not implicitly {@link agrirouter.cloud.registration.OnboardingResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {agrirouter.cloud.registration.IOnboardingResponse} message OnboardingResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OnboardingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OnboardingResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.cloud.registration.OnboardingResponse} OnboardingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OnboardingResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.cloud.registration.OnboardingResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.onboardedEndpoints && message.onboardedEndpoints.length))
                                message.onboardedEndpoints = [];
                            message.onboardedEndpoints.push($root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            if (!(message.failures && message.failures.length))
                                message.failures = [];
                            message.failures.push($root.agrirouter.cloud.registration.OnboardingResponse.Failures.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OnboardingResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.cloud.registration.OnboardingResponse} OnboardingResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OnboardingResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OnboardingResponse message.
                 * @function verify
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OnboardingResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.onboardedEndpoints != null && message.hasOwnProperty("onboardedEndpoints")) {
                        if (!Array.isArray(message.onboardedEndpoints))
                            return "onboardedEndpoints: array expected";
                        for (var i = 0; i < message.onboardedEndpoints.length; ++i) {
                            var error = $root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails.verify(message.onboardedEndpoints[i]);
                            if (error)
                                return "onboardedEndpoints." + error;
                        }
                    }
                    if (message.failures != null && message.hasOwnProperty("failures")) {
                        if (!Array.isArray(message.failures))
                            return "failures: array expected";
                        for (var i = 0; i < message.failures.length; ++i) {
                            var error = $root.agrirouter.cloud.registration.OnboardingResponse.Failures.verify(message.failures[i]);
                            if (error)
                                return "failures." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an OnboardingResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.cloud.registration.OnboardingResponse} OnboardingResponse
                 */
                OnboardingResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.cloud.registration.OnboardingResponse)
                        return object;
                    var message = new $root.agrirouter.cloud.registration.OnboardingResponse();
                    if (object.onboardedEndpoints) {
                        if (!Array.isArray(object.onboardedEndpoints))
                            throw TypeError(".agrirouter.cloud.registration.OnboardingResponse.onboardedEndpoints: array expected");
                        message.onboardedEndpoints = [];
                        for (var i = 0; i < object.onboardedEndpoints.length; ++i) {
                            if (typeof object.onboardedEndpoints[i] !== "object")
                                throw TypeError(".agrirouter.cloud.registration.OnboardingResponse.onboardedEndpoints: object expected");
                            message.onboardedEndpoints[i] = $root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails.fromObject(object.onboardedEndpoints[i]);
                        }
                    }
                    if (object.failures) {
                        if (!Array.isArray(object.failures))
                            throw TypeError(".agrirouter.cloud.registration.OnboardingResponse.failures: array expected");
                        message.failures = [];
                        for (var i = 0; i < object.failures.length; ++i) {
                            if (typeof object.failures[i] !== "object")
                                throw TypeError(".agrirouter.cloud.registration.OnboardingResponse.failures: object expected");
                            message.failures[i] = $root.agrirouter.cloud.registration.OnboardingResponse.Failures.fromObject(object.failures[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OnboardingResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @static
                 * @param {agrirouter.cloud.registration.OnboardingResponse} message OnboardingResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OnboardingResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.onboardedEndpoints = [];
                        object.failures = [];
                    }
                    if (message.onboardedEndpoints && message.onboardedEndpoints.length) {
                        object.onboardedEndpoints = [];
                        for (var j = 0; j < message.onboardedEndpoints.length; ++j)
                            object.onboardedEndpoints[j] = $root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails.toObject(message.onboardedEndpoints[j], options);
                    }
                    if (message.failures && message.failures.length) {
                        object.failures = [];
                        for (var j = 0; j < message.failures.length; ++j)
                            object.failures[j] = $root.agrirouter.cloud.registration.OnboardingResponse.Failures.toObject(message.failures[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this OnboardingResponse to JSON.
                 * @function toJSON
                 * @memberof agrirouter.cloud.registration.OnboardingResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OnboardingResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                OnboardingResponse.EndpointRegistrationDetails = (function() {

                    /**
                     * Properties of an EndpointRegistrationDetails.
                     * @memberof agrirouter.cloud.registration.OnboardingResponse
                     * @interface IEndpointRegistrationDetails
                     * @property {string|null} [id] EndpointRegistrationDetails id
                     * @property {string|null} [deviceAlternateId] EndpointRegistrationDetails deviceAlternateId
                     * @property {string|null} [sensorAlternateId] EndpointRegistrationDetails sensorAlternateId
                     * @property {string|null} [capabilityAlternateId] EndpointRegistrationDetails capabilityAlternateId
                     * @property {string|null} [endpointId] EndpointRegistrationDetails endpointId
                     */

                    /**
                     * Constructs a new EndpointRegistrationDetails.
                     * @memberof agrirouter.cloud.registration.OnboardingResponse
                     * @classdesc Represents an EndpointRegistrationDetails.
                     * @implements IEndpointRegistrationDetails
                     * @constructor
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IEndpointRegistrationDetails=} [properties] Properties to set
                     */
                    function EndpointRegistrationDetails(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * EndpointRegistrationDetails id.
                     * @member {string} id
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @instance
                     */
                    EndpointRegistrationDetails.prototype.id = "";

                    /**
                     * EndpointRegistrationDetails deviceAlternateId.
                     * @member {string} deviceAlternateId
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @instance
                     */
                    EndpointRegistrationDetails.prototype.deviceAlternateId = "";

                    /**
                     * EndpointRegistrationDetails sensorAlternateId.
                     * @member {string} sensorAlternateId
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @instance
                     */
                    EndpointRegistrationDetails.prototype.sensorAlternateId = "";

                    /**
                     * EndpointRegistrationDetails capabilityAlternateId.
                     * @member {string} capabilityAlternateId
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @instance
                     */
                    EndpointRegistrationDetails.prototype.capabilityAlternateId = "";

                    /**
                     * EndpointRegistrationDetails endpointId.
                     * @member {string} endpointId
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @instance
                     */
                    EndpointRegistrationDetails.prototype.endpointId = "";

                    /**
                     * Creates a new EndpointRegistrationDetails instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IEndpointRegistrationDetails=} [properties] Properties to set
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails} EndpointRegistrationDetails instance
                     */
                    EndpointRegistrationDetails.create = function create(properties) {
                        return new EndpointRegistrationDetails(properties);
                    };

                    /**
                     * Encodes the specified EndpointRegistrationDetails message. Does not implicitly {@link agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IEndpointRegistrationDetails} message EndpointRegistrationDetails message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndpointRegistrationDetails.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.deviceAlternateId != null && Object.hasOwnProperty.call(message, "deviceAlternateId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceAlternateId);
                        if (message.sensorAlternateId != null && Object.hasOwnProperty.call(message, "sensorAlternateId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.sensorAlternateId);
                        if (message.capabilityAlternateId != null && Object.hasOwnProperty.call(message, "capabilityAlternateId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.capabilityAlternateId);
                        if (message.endpointId != null && Object.hasOwnProperty.call(message, "endpointId"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.endpointId);
                        return writer;
                    };

                    /**
                     * Encodes the specified EndpointRegistrationDetails message, length delimited. Does not implicitly {@link agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IEndpointRegistrationDetails} message EndpointRegistrationDetails message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EndpointRegistrationDetails.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an EndpointRegistrationDetails message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails} EndpointRegistrationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EndpointRegistrationDetails.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.deviceAlternateId = reader.string();
                                break;
                            case 3:
                                message.sensorAlternateId = reader.string();
                                break;
                            case 4:
                                message.capabilityAlternateId = reader.string();
                                break;
                            case 5:
                                message.endpointId = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an EndpointRegistrationDetails message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails} EndpointRegistrationDetails
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EndpointRegistrationDetails.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an EndpointRegistrationDetails message.
                     * @function verify
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EndpointRegistrationDetails.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.deviceAlternateId != null && message.hasOwnProperty("deviceAlternateId"))
                            if (!$util.isString(message.deviceAlternateId))
                                return "deviceAlternateId: string expected";
                        if (message.sensorAlternateId != null && message.hasOwnProperty("sensorAlternateId"))
                            if (!$util.isString(message.sensorAlternateId))
                                return "sensorAlternateId: string expected";
                        if (message.capabilityAlternateId != null && message.hasOwnProperty("capabilityAlternateId"))
                            if (!$util.isString(message.capabilityAlternateId))
                                return "capabilityAlternateId: string expected";
                        if (message.endpointId != null && message.hasOwnProperty("endpointId"))
                            if (!$util.isString(message.endpointId))
                                return "endpointId: string expected";
                        return null;
                    };

                    /**
                     * Creates an EndpointRegistrationDetails message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails} EndpointRegistrationDetails
                     */
                    EndpointRegistrationDetails.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails)
                            return object;
                        var message = new $root.agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.deviceAlternateId != null)
                            message.deviceAlternateId = String(object.deviceAlternateId);
                        if (object.sensorAlternateId != null)
                            message.sensorAlternateId = String(object.sensorAlternateId);
                        if (object.capabilityAlternateId != null)
                            message.capabilityAlternateId = String(object.capabilityAlternateId);
                        if (object.endpointId != null)
                            message.endpointId = String(object.endpointId);
                        return message;
                    };

                    /**
                     * Creates a plain object from an EndpointRegistrationDetails message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails} message EndpointRegistrationDetails
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EndpointRegistrationDetails.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.deviceAlternateId = "";
                            object.sensorAlternateId = "";
                            object.capabilityAlternateId = "";
                            object.endpointId = "";
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.deviceAlternateId != null && message.hasOwnProperty("deviceAlternateId"))
                            object.deviceAlternateId = message.deviceAlternateId;
                        if (message.sensorAlternateId != null && message.hasOwnProperty("sensorAlternateId"))
                            object.sensorAlternateId = message.sensorAlternateId;
                        if (message.capabilityAlternateId != null && message.hasOwnProperty("capabilityAlternateId"))
                            object.capabilityAlternateId = message.capabilityAlternateId;
                        if (message.endpointId != null && message.hasOwnProperty("endpointId"))
                            object.endpointId = message.endpointId;
                        return object;
                    };

                    /**
                     * Converts this EndpointRegistrationDetails to JSON.
                     * @function toJSON
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.EndpointRegistrationDetails
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EndpointRegistrationDetails.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return EndpointRegistrationDetails;
                })();

                OnboardingResponse.Failures = (function() {

                    /**
                     * Properties of a Failures.
                     * @memberof agrirouter.cloud.registration.OnboardingResponse
                     * @interface IFailures
                     * @property {string|null} [id] Failures id
                     * @property {agrirouter.commons.IMessage|null} [reason] Failures reason
                     */

                    /**
                     * Constructs a new Failures.
                     * @memberof agrirouter.cloud.registration.OnboardingResponse
                     * @classdesc Represents a Failures.
                     * @implements IFailures
                     * @constructor
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IFailures=} [properties] Properties to set
                     */
                    function Failures(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Failures id.
                     * @member {string} id
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @instance
                     */
                    Failures.prototype.id = "";

                    /**
                     * Failures reason.
                     * @member {agrirouter.commons.IMessage|null|undefined} reason
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @instance
                     */
                    Failures.prototype.reason = null;

                    /**
                     * Creates a new Failures instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IFailures=} [properties] Properties to set
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.Failures} Failures instance
                     */
                    Failures.create = function create(properties) {
                        return new Failures(properties);
                    };

                    /**
                     * Encodes the specified Failures message. Does not implicitly {@link agrirouter.cloud.registration.OnboardingResponse.Failures.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IFailures} message Failures message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Failures.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                            $root.agrirouter.commons.Message.encode(message.reason, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Failures message, length delimited. Does not implicitly {@link agrirouter.cloud.registration.OnboardingResponse.Failures.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.IFailures} message Failures message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Failures.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Failures message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.Failures} Failures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Failures.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.cloud.registration.OnboardingResponse.Failures();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = reader.string();
                                break;
                            case 2:
                                message.reason = $root.agrirouter.commons.Message.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Failures message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.Failures} Failures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Failures.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Failures message.
                     * @function verify
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Failures.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id"))
                            if (!$util.isString(message.id))
                                return "id: string expected";
                        if (message.reason != null && message.hasOwnProperty("reason")) {
                            var error = $root.agrirouter.commons.Message.verify(message.reason);
                            if (error)
                                return "reason." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Failures message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.cloud.registration.OnboardingResponse.Failures} Failures
                     */
                    Failures.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.cloud.registration.OnboardingResponse.Failures)
                            return object;
                        var message = new $root.agrirouter.cloud.registration.OnboardingResponse.Failures();
                        if (object.id != null)
                            message.id = String(object.id);
                        if (object.reason != null) {
                            if (typeof object.reason !== "object")
                                throw TypeError(".agrirouter.cloud.registration.OnboardingResponse.Failures.reason: object expected");
                            message.reason = $root.agrirouter.commons.Message.fromObject(object.reason);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Failures message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @static
                     * @param {agrirouter.cloud.registration.OnboardingResponse.Failures} message Failures
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Failures.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.id = "";
                            object.reason = null;
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = message.id;
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = $root.agrirouter.commons.Message.toObject(message.reason, options);
                        return object;
                    };

                    /**
                     * Converts this Failures to JSON.
                     * @function toJSON
                     * @memberof agrirouter.cloud.registration.OnboardingResponse.Failures
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Failures.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Failures;
                })();

                return OnboardingResponse;
            })();

            registration.OffboardingRequest = (function() {

                /**
                 * Properties of an OffboardingRequest.
                 * @memberof agrirouter.cloud.registration
                 * @interface IOffboardingRequest
                 * @property {Array.<string>|null} [endpoints] OffboardingRequest endpoints
                 */

                /**
                 * Constructs a new OffboardingRequest.
                 * @memberof agrirouter.cloud.registration
                 * @classdesc Represents an OffboardingRequest.
                 * @implements IOffboardingRequest
                 * @constructor
                 * @param {agrirouter.cloud.registration.IOffboardingRequest=} [properties] Properties to set
                 */
                function OffboardingRequest(properties) {
                    this.endpoints = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OffboardingRequest endpoints.
                 * @member {Array.<string>} endpoints
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @instance
                 */
                OffboardingRequest.prototype.endpoints = $util.emptyArray;

                /**
                 * Creates a new OffboardingRequest instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.IOffboardingRequest=} [properties] Properties to set
                 * @returns {agrirouter.cloud.registration.OffboardingRequest} OffboardingRequest instance
                 */
                OffboardingRequest.create = function create(properties) {
                    return new OffboardingRequest(properties);
                };

                /**
                 * Encodes the specified OffboardingRequest message. Does not implicitly {@link agrirouter.cloud.registration.OffboardingRequest.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.IOffboardingRequest} message OffboardingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OffboardingRequest.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.endpoints != null && message.endpoints.length)
                        for (var i = 0; i < message.endpoints.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpoints[i]);
                    return writer;
                };

                /**
                 * Encodes the specified OffboardingRequest message, length delimited. Does not implicitly {@link agrirouter.cloud.registration.OffboardingRequest.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.IOffboardingRequest} message OffboardingRequest message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OffboardingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OffboardingRequest message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.cloud.registration.OffboardingRequest} OffboardingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OffboardingRequest.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.cloud.registration.OffboardingRequest();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.endpoints && message.endpoints.length))
                                message.endpoints = [];
                            message.endpoints.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OffboardingRequest message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.cloud.registration.OffboardingRequest} OffboardingRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OffboardingRequest.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OffboardingRequest message.
                 * @function verify
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OffboardingRequest.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.endpoints != null && message.hasOwnProperty("endpoints")) {
                        if (!Array.isArray(message.endpoints))
                            return "endpoints: array expected";
                        for (var i = 0; i < message.endpoints.length; ++i)
                            if (!$util.isString(message.endpoints[i]))
                                return "endpoints: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates an OffboardingRequest message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.cloud.registration.OffboardingRequest} OffboardingRequest
                 */
                OffboardingRequest.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.cloud.registration.OffboardingRequest)
                        return object;
                    var message = new $root.agrirouter.cloud.registration.OffboardingRequest();
                    if (object.endpoints) {
                        if (!Array.isArray(object.endpoints))
                            throw TypeError(".agrirouter.cloud.registration.OffboardingRequest.endpoints: array expected");
                        message.endpoints = [];
                        for (var i = 0; i < object.endpoints.length; ++i)
                            message.endpoints[i] = String(object.endpoints[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OffboardingRequest message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @static
                 * @param {agrirouter.cloud.registration.OffboardingRequest} message OffboardingRequest
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OffboardingRequest.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.endpoints = [];
                    if (message.endpoints && message.endpoints.length) {
                        object.endpoints = [];
                        for (var j = 0; j < message.endpoints.length; ++j)
                            object.endpoints[j] = message.endpoints[j];
                    }
                    return object;
                };

                /**
                 * Converts this OffboardingRequest to JSON.
                 * @function toJSON
                 * @memberof agrirouter.cloud.registration.OffboardingRequest
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OffboardingRequest.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return OffboardingRequest;
            })();

            return registration;
        })();

        return cloud;
    })();

    agrirouter.commons = (function() {

        /**
         * Namespace commons.
         * @memberof agrirouter
         * @namespace
         */
        var commons = {};

        commons.ChunkComponent = (function() {

            /**
             * Properties of a ChunkComponent.
             * @memberof agrirouter.commons
             * @interface IChunkComponent
             * @property {string|null} [contextId] ChunkComponent contextId
             * @property {number|Long|null} [current] ChunkComponent current
             * @property {number|Long|null} [total] ChunkComponent total
             * @property {number|Long|null} [totalSize] ChunkComponent totalSize
             */

            /**
             * Constructs a new ChunkComponent.
             * @memberof agrirouter.commons
             * @classdesc Represents a ChunkComponent.
             * @implements IChunkComponent
             * @constructor
             * @param {agrirouter.commons.IChunkComponent=} [properties] Properties to set
             */
            function ChunkComponent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChunkComponent contextId.
             * @member {string} contextId
             * @memberof agrirouter.commons.ChunkComponent
             * @instance
             */
            ChunkComponent.prototype.contextId = "";

            /**
             * ChunkComponent current.
             * @member {number|Long} current
             * @memberof agrirouter.commons.ChunkComponent
             * @instance
             */
            ChunkComponent.prototype.current = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ChunkComponent total.
             * @member {number|Long} total
             * @memberof agrirouter.commons.ChunkComponent
             * @instance
             */
            ChunkComponent.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ChunkComponent totalSize.
             * @member {number|Long} totalSize
             * @memberof agrirouter.commons.ChunkComponent
             * @instance
             */
            ChunkComponent.prototype.totalSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new ChunkComponent instance using the specified properties.
             * @function create
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {agrirouter.commons.IChunkComponent=} [properties] Properties to set
             * @returns {agrirouter.commons.ChunkComponent} ChunkComponent instance
             */
            ChunkComponent.create = function create(properties) {
                return new ChunkComponent(properties);
            };

            /**
             * Encodes the specified ChunkComponent message. Does not implicitly {@link agrirouter.commons.ChunkComponent.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {agrirouter.commons.IChunkComponent} message ChunkComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChunkComponent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.contextId != null && Object.hasOwnProperty.call(message, "contextId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.contextId);
                if (message.current != null && Object.hasOwnProperty.call(message, "current"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.current);
                if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.total);
                if (message.totalSize != null && Object.hasOwnProperty.call(message, "totalSize"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalSize);
                return writer;
            };

            /**
             * Encodes the specified ChunkComponent message, length delimited. Does not implicitly {@link agrirouter.commons.ChunkComponent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {agrirouter.commons.IChunkComponent} message ChunkComponent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChunkComponent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChunkComponent message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.commons.ChunkComponent} ChunkComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChunkComponent.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.commons.ChunkComponent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.contextId = reader.string();
                        break;
                    case 2:
                        message.current = reader.int64();
                        break;
                    case 3:
                        message.total = reader.int64();
                        break;
                    case 4:
                        message.totalSize = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ChunkComponent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.commons.ChunkComponent} ChunkComponent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChunkComponent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChunkComponent message.
             * @function verify
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChunkComponent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.contextId != null && message.hasOwnProperty("contextId"))
                    if (!$util.isString(message.contextId))
                        return "contextId: string expected";
                if (message.current != null && message.hasOwnProperty("current"))
                    if (!$util.isInteger(message.current) && !(message.current && $util.isInteger(message.current.low) && $util.isInteger(message.current.high)))
                        return "current: integer|Long expected";
                if (message.total != null && message.hasOwnProperty("total"))
                    if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                        return "total: integer|Long expected";
                if (message.totalSize != null && message.hasOwnProperty("totalSize"))
                    if (!$util.isInteger(message.totalSize) && !(message.totalSize && $util.isInteger(message.totalSize.low) && $util.isInteger(message.totalSize.high)))
                        return "totalSize: integer|Long expected";
                return null;
            };

            /**
             * Creates a ChunkComponent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.commons.ChunkComponent} ChunkComponent
             */
            ChunkComponent.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.commons.ChunkComponent)
                    return object;
                var message = new $root.agrirouter.commons.ChunkComponent();
                if (object.contextId != null)
                    message.contextId = String(object.contextId);
                if (object.current != null)
                    if ($util.Long)
                        (message.current = $util.Long.fromValue(object.current)).unsigned = false;
                    else if (typeof object.current === "string")
                        message.current = parseInt(object.current, 10);
                    else if (typeof object.current === "number")
                        message.current = object.current;
                    else if (typeof object.current === "object")
                        message.current = new $util.LongBits(object.current.low >>> 0, object.current.high >>> 0).toNumber();
                if (object.total != null)
                    if ($util.Long)
                        (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                    else if (typeof object.total === "string")
                        message.total = parseInt(object.total, 10);
                    else if (typeof object.total === "number")
                        message.total = object.total;
                    else if (typeof object.total === "object")
                        message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
                if (object.totalSize != null)
                    if ($util.Long)
                        (message.totalSize = $util.Long.fromValue(object.totalSize)).unsigned = false;
                    else if (typeof object.totalSize === "string")
                        message.totalSize = parseInt(object.totalSize, 10);
                    else if (typeof object.totalSize === "number")
                        message.totalSize = object.totalSize;
                    else if (typeof object.totalSize === "object")
                        message.totalSize = new $util.LongBits(object.totalSize.low >>> 0, object.totalSize.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a ChunkComponent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.commons.ChunkComponent
             * @static
             * @param {agrirouter.commons.ChunkComponent} message ChunkComponent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChunkComponent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.contextId = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.current = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.current = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.total = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.totalSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.totalSize = options.longs === String ? "0" : 0;
                }
                if (message.contextId != null && message.hasOwnProperty("contextId"))
                    object.contextId = message.contextId;
                if (message.current != null && message.hasOwnProperty("current"))
                    if (typeof message.current === "number")
                        object.current = options.longs === String ? String(message.current) : message.current;
                    else
                        object.current = options.longs === String ? $util.Long.prototype.toString.call(message.current) : options.longs === Number ? new $util.LongBits(message.current.low >>> 0, message.current.high >>> 0).toNumber() : message.current;
                if (message.total != null && message.hasOwnProperty("total"))
                    if (typeof message.total === "number")
                        object.total = options.longs === String ? String(message.total) : message.total;
                    else
                        object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
                if (message.totalSize != null && message.hasOwnProperty("totalSize"))
                    if (typeof message.totalSize === "number")
                        object.totalSize = options.longs === String ? String(message.totalSize) : message.totalSize;
                    else
                        object.totalSize = options.longs === String ? $util.Long.prototype.toString.call(message.totalSize) : options.longs === Number ? new $util.LongBits(message.totalSize.low >>> 0, message.totalSize.high >>> 0).toNumber() : message.totalSize;
                return object;
            };

            /**
             * Converts this ChunkComponent to JSON.
             * @function toJSON
             * @memberof agrirouter.commons.ChunkComponent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChunkComponent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChunkComponent;
        })();

        commons.Message = (function() {

            /**
             * Properties of a Message.
             * @memberof agrirouter.commons
             * @interface IMessage
             * @property {string|null} [message] Message message
             * @property {string|null} [messageCode] Message messageCode
             * @property {Object.<string,string>|null} [args] Message args
             */

            /**
             * Constructs a new Message.
             * @memberof agrirouter.commons
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {agrirouter.commons.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                this.args = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Message message.
             * @member {string} message
             * @memberof agrirouter.commons.Message
             * @instance
             */
            Message.prototype.message = "";

            /**
             * Message messageCode.
             * @member {string} messageCode
             * @memberof agrirouter.commons.Message
             * @instance
             */
            Message.prototype.messageCode = "";

            /**
             * Message args.
             * @member {Object.<string,string>} args
             * @memberof agrirouter.commons.Message
             * @instance
             */
            Message.prototype.args = $util.emptyObject;

            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof agrirouter.commons.Message
             * @static
             * @param {agrirouter.commons.IMessage=} [properties] Properties to set
             * @returns {agrirouter.commons.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };

            /**
             * Encodes the specified Message message. Does not implicitly {@link agrirouter.commons.Message.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.commons.Message
             * @static
             * @param {agrirouter.commons.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.messageCode != null && Object.hasOwnProperty.call(message, "messageCode"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageCode);
                if (message.args != null && Object.hasOwnProperty.call(message, "args"))
                    for (var keys = Object.keys(message.args), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.args[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link agrirouter.commons.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.commons.Message
             * @static
             * @param {agrirouter.commons.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.commons.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.commons.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.commons.Message(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.message = reader.string();
                        break;
                    case 2:
                        message.messageCode = reader.string();
                        break;
                    case 3:
                        if (message.args === $util.emptyObject)
                            message.args = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.args[key] = value;
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.commons.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.commons.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Message message.
             * @function verify
             * @memberof agrirouter.commons.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.messageCode != null && message.hasOwnProperty("messageCode"))
                    if (!$util.isString(message.messageCode))
                        return "messageCode: string expected";
                if (message.args != null && message.hasOwnProperty("args")) {
                    if (!$util.isObject(message.args))
                        return "args: object expected";
                    var key = Object.keys(message.args);
                    for (var i = 0; i < key.length; ++i)
                        if (!$util.isString(message.args[key[i]]))
                            return "args: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.commons.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.commons.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.commons.Message)
                    return object;
                var message = new $root.agrirouter.commons.Message();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.messageCode != null)
                    message.messageCode = String(object.messageCode);
                if (object.args) {
                    if (typeof object.args !== "object")
                        throw TypeError(".agrirouter.commons.Message.args: object expected");
                    message.args = {};
                    for (var keys = Object.keys(object.args), i = 0; i < keys.length; ++i)
                        message.args[keys[i]] = String(object.args[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.commons.Message
             * @static
             * @param {agrirouter.commons.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.args = {};
                if (options.defaults) {
                    object.message = "";
                    object.messageCode = "";
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.messageCode != null && message.hasOwnProperty("messageCode"))
                    object.messageCode = message.messageCode;
                var keys2;
                if (message.args && (keys2 = Object.keys(message.args)).length) {
                    object.args = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.args[keys2[j]] = message.args[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof agrirouter.commons.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Message;
        })();

        commons.Metadata = (function() {

            /**
             * Properties of a Metadata.
             * @memberof agrirouter.commons
             * @interface IMetadata
             * @property {string|null} [fileName] Metadata fileName
             */

            /**
             * Constructs a new Metadata.
             * @memberof agrirouter.commons
             * @classdesc Represents a Metadata.
             * @implements IMetadata
             * @constructor
             * @param {agrirouter.commons.IMetadata=} [properties] Properties to set
             */
            function Metadata(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Metadata fileName.
             * @member {string} fileName
             * @memberof agrirouter.commons.Metadata
             * @instance
             */
            Metadata.prototype.fileName = "";

            /**
             * Creates a new Metadata instance using the specified properties.
             * @function create
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {agrirouter.commons.IMetadata=} [properties] Properties to set
             * @returns {agrirouter.commons.Metadata} Metadata instance
             */
            Metadata.create = function create(properties) {
                return new Metadata(properties);
            };

            /**
             * Encodes the specified Metadata message. Does not implicitly {@link agrirouter.commons.Metadata.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {agrirouter.commons.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileName);
                return writer;
            };

            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link agrirouter.commons.Metadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {agrirouter.commons.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.commons.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.commons.Metadata();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.fileName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.commons.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Metadata message.
             * @function verify
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Metadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    if (!$util.isString(message.fileName))
                        return "fileName: string expected";
                return null;
            };

            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.commons.Metadata} Metadata
             */
            Metadata.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.commons.Metadata)
                    return object;
                var message = new $root.agrirouter.commons.Metadata();
                if (object.fileName != null)
                    message.fileName = String(object.fileName);
                return message;
            };

            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.commons.Metadata
             * @static
             * @param {agrirouter.commons.Metadata} message Metadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Metadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.fileName = "";
                if (message.fileName != null && message.hasOwnProperty("fileName"))
                    object.fileName = message.fileName;
                return object;
            };

            /**
             * Converts this Metadata to JSON.
             * @function toJSON
             * @memberof agrirouter.commons.Metadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Metadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Metadata;
        })();

        commons.Messages = (function() {

            /**
             * Properties of a Messages.
             * @memberof agrirouter.commons
             * @interface IMessages
             * @property {Array.<agrirouter.commons.IMessage>|null} [messages] Messages messages
             */

            /**
             * Constructs a new Messages.
             * @memberof agrirouter.commons
             * @classdesc Represents a Messages.
             * @implements IMessages
             * @constructor
             * @param {agrirouter.commons.IMessages=} [properties] Properties to set
             */
            function Messages(properties) {
                this.messages = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Messages messages.
             * @member {Array.<agrirouter.commons.IMessage>} messages
             * @memberof agrirouter.commons.Messages
             * @instance
             */
            Messages.prototype.messages = $util.emptyArray;

            /**
             * Creates a new Messages instance using the specified properties.
             * @function create
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {agrirouter.commons.IMessages=} [properties] Properties to set
             * @returns {agrirouter.commons.Messages} Messages instance
             */
            Messages.create = function create(properties) {
                return new Messages(properties);
            };

            /**
             * Encodes the specified Messages message. Does not implicitly {@link agrirouter.commons.Messages.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {agrirouter.commons.IMessages} message Messages message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Messages.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messages != null && message.messages.length)
                    for (var i = 0; i < message.messages.length; ++i)
                        $root.agrirouter.commons.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Messages message, length delimited. Does not implicitly {@link agrirouter.commons.Messages.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {agrirouter.commons.IMessages} message Messages message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Messages.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Messages message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.commons.Messages} Messages
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Messages.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.commons.Messages();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.agrirouter.commons.Message.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Messages message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.commons.Messages} Messages
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Messages.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Messages message.
             * @function verify
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Messages.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messages != null && message.hasOwnProperty("messages")) {
                    if (!Array.isArray(message.messages))
                        return "messages: array expected";
                    for (var i = 0; i < message.messages.length; ++i) {
                        var error = $root.agrirouter.commons.Message.verify(message.messages[i]);
                        if (error)
                            return "messages." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Messages message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.commons.Messages} Messages
             */
            Messages.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.commons.Messages)
                    return object;
                var message = new $root.agrirouter.commons.Messages();
                if (object.messages) {
                    if (!Array.isArray(object.messages))
                        throw TypeError(".agrirouter.commons.Messages.messages: array expected");
                    message.messages = [];
                    for (var i = 0; i < object.messages.length; ++i) {
                        if (typeof object.messages[i] !== "object")
                            throw TypeError(".agrirouter.commons.Messages.messages: object expected");
                        message.messages[i] = $root.agrirouter.commons.Message.fromObject(object.messages[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Messages message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.commons.Messages
             * @static
             * @param {agrirouter.commons.Messages} message Messages
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Messages.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.messages = [];
                if (message.messages && message.messages.length) {
                    object.messages = [];
                    for (var j = 0; j < message.messages.length; ++j)
                        object.messages[j] = $root.agrirouter.commons.Message.toObject(message.messages[j], options);
                }
                return object;
            };

            /**
             * Converts this Messages to JSON.
             * @function toJSON
             * @memberof agrirouter.commons.Messages
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Messages.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Messages;
        })();

        return commons;
    })();

    agrirouter.request = (function() {

        /**
         * Namespace request.
         * @memberof agrirouter
         * @namespace
         */
        var request = {};

        request.payload = (function() {

            /**
             * Namespace payload.
             * @memberof agrirouter.request
             * @namespace
             */
            var payload = {};

            payload.account = (function() {

                /**
                 * Namespace account.
                 * @memberof agrirouter.request.payload
                 * @namespace
                 */
                var account = {};

                account.ListEndpointsQuery = (function() {

                    /**
                     * Properties of a ListEndpointsQuery.
                     * @memberof agrirouter.request.payload.account
                     * @interface IListEndpointsQuery
                     * @property {string|null} [technicalMessageType] ListEndpointsQuery technicalMessageType
                     * @property {agrirouter.request.payload.account.ListEndpointsQuery.Direction|null} [direction] ListEndpointsQuery direction
                     */

                    /**
                     * Constructs a new ListEndpointsQuery.
                     * @memberof agrirouter.request.payload.account
                     * @classdesc Represents a ListEndpointsQuery.
                     * @implements IListEndpointsQuery
                     * @constructor
                     * @param {agrirouter.request.payload.account.IListEndpointsQuery=} [properties] Properties to set
                     */
                    function ListEndpointsQuery(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListEndpointsQuery technicalMessageType.
                     * @member {string} technicalMessageType
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @instance
                     */
                    ListEndpointsQuery.prototype.technicalMessageType = "";

                    /**
                     * ListEndpointsQuery direction.
                     * @member {agrirouter.request.payload.account.ListEndpointsQuery.Direction} direction
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @instance
                     */
                    ListEndpointsQuery.prototype.direction = 0;

                    /**
                     * Creates a new ListEndpointsQuery instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {agrirouter.request.payload.account.IListEndpointsQuery=} [properties] Properties to set
                     * @returns {agrirouter.request.payload.account.ListEndpointsQuery} ListEndpointsQuery instance
                     */
                    ListEndpointsQuery.create = function create(properties) {
                        return new ListEndpointsQuery(properties);
                    };

                    /**
                     * Encodes the specified ListEndpointsQuery message. Does not implicitly {@link agrirouter.request.payload.account.ListEndpointsQuery.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {agrirouter.request.payload.account.IListEndpointsQuery} message ListEndpointsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListEndpointsQuery.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.technicalMessageType);
                        if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
                        return writer;
                    };

                    /**
                     * Encodes the specified ListEndpointsQuery message, length delimited. Does not implicitly {@link agrirouter.request.payload.account.ListEndpointsQuery.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {agrirouter.request.payload.account.IListEndpointsQuery} message ListEndpointsQuery message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListEndpointsQuery.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListEndpointsQuery message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.request.payload.account.ListEndpointsQuery} ListEndpointsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListEndpointsQuery.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.request.payload.account.ListEndpointsQuery();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.technicalMessageType = reader.string();
                                break;
                            case 2:
                                message.direction = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListEndpointsQuery message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.request.payload.account.ListEndpointsQuery} ListEndpointsQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListEndpointsQuery.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListEndpointsQuery message.
                     * @function verify
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListEndpointsQuery.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            if (!$util.isString(message.technicalMessageType))
                                return "technicalMessageType: string expected";
                        if (message.direction != null && message.hasOwnProperty("direction"))
                            switch (message.direction) {
                            default:
                                return "direction: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a ListEndpointsQuery message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.request.payload.account.ListEndpointsQuery} ListEndpointsQuery
                     */
                    ListEndpointsQuery.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.request.payload.account.ListEndpointsQuery)
                            return object;
                        var message = new $root.agrirouter.request.payload.account.ListEndpointsQuery();
                        if (object.technicalMessageType != null)
                            message.technicalMessageType = String(object.technicalMessageType);
                        switch (object.direction) {
                        case "SEND":
                        case 0:
                            message.direction = 0;
                            break;
                        case "RECEIVE":
                        case 1:
                            message.direction = 1;
                            break;
                        case "SEND_RECEIVE":
                        case 2:
                            message.direction = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListEndpointsQuery message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @static
                     * @param {agrirouter.request.payload.account.ListEndpointsQuery} message ListEndpointsQuery
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListEndpointsQuery.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.technicalMessageType = "";
                            object.direction = options.enums === String ? "SEND" : 0;
                        }
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            object.technicalMessageType = message.technicalMessageType;
                        if (message.direction != null && message.hasOwnProperty("direction"))
                            object.direction = options.enums === String ? $root.agrirouter.request.payload.account.ListEndpointsQuery.Direction[message.direction] : message.direction;
                        return object;
                    };

                    /**
                     * Converts this ListEndpointsQuery to JSON.
                     * @function toJSON
                     * @memberof agrirouter.request.payload.account.ListEndpointsQuery
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListEndpointsQuery.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Direction enum.
                     * @name agrirouter.request.payload.account.ListEndpointsQuery.Direction
                     * @enum {number}
                     * @property {number} SEND=0 SEND value
                     * @property {number} RECEIVE=1 RECEIVE value
                     * @property {number} SEND_RECEIVE=2 SEND_RECEIVE value
                     */
                    ListEndpointsQuery.Direction = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SEND"] = 0;
                        values[valuesById[1] = "RECEIVE"] = 1;
                        values[valuesById[2] = "SEND_RECEIVE"] = 2;
                        return values;
                    })();

                    return ListEndpointsQuery;
                })();

                return account;
            })();

            payload.endpoint = (function() {

                /**
                 * Namespace endpoint.
                 * @memberof agrirouter.request.payload
                 * @namespace
                 */
                var endpoint = {};

                endpoint.CapabilitySpecification = (function() {

                    /**
                     * Properties of a CapabilitySpecification.
                     * @memberof agrirouter.request.payload.endpoint
                     * @interface ICapabilitySpecification
                     * @property {Array.<agrirouter.request.payload.endpoint.CapabilitySpecification.ICapability>|null} [capabilities] CapabilitySpecification capabilities
                     * @property {string|null} [appCertificationId] CapabilitySpecification appCertificationId
                     * @property {string|null} [appCertificationVersionId] CapabilitySpecification appCertificationVersionId
                     * @property {agrirouter.request.payload.endpoint.CapabilitySpecification.PushNotification|null} [enablePushNotifications] CapabilitySpecification enablePushNotifications
                     */

                    /**
                     * Constructs a new CapabilitySpecification.
                     * @memberof agrirouter.request.payload.endpoint
                     * @classdesc Represents a CapabilitySpecification.
                     * @implements ICapabilitySpecification
                     * @constructor
                     * @param {agrirouter.request.payload.endpoint.ICapabilitySpecification=} [properties] Properties to set
                     */
                    function CapabilitySpecification(properties) {
                        this.capabilities = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CapabilitySpecification capabilities.
                     * @member {Array.<agrirouter.request.payload.endpoint.CapabilitySpecification.ICapability>} capabilities
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @instance
                     */
                    CapabilitySpecification.prototype.capabilities = $util.emptyArray;

                    /**
                     * CapabilitySpecification appCertificationId.
                     * @member {string} appCertificationId
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @instance
                     */
                    CapabilitySpecification.prototype.appCertificationId = "";

                    /**
                     * CapabilitySpecification appCertificationVersionId.
                     * @member {string} appCertificationVersionId
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @instance
                     */
                    CapabilitySpecification.prototype.appCertificationVersionId = "";

                    /**
                     * CapabilitySpecification enablePushNotifications.
                     * @member {agrirouter.request.payload.endpoint.CapabilitySpecification.PushNotification} enablePushNotifications
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @instance
                     */
                    CapabilitySpecification.prototype.enablePushNotifications = 0;

                    /**
                     * Creates a new CapabilitySpecification instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {agrirouter.request.payload.endpoint.ICapabilitySpecification=} [properties] Properties to set
                     * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification} CapabilitySpecification instance
                     */
                    CapabilitySpecification.create = function create(properties) {
                        return new CapabilitySpecification(properties);
                    };

                    /**
                     * Encodes the specified CapabilitySpecification message. Does not implicitly {@link agrirouter.request.payload.endpoint.CapabilitySpecification.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {agrirouter.request.payload.endpoint.ICapabilitySpecification} message CapabilitySpecification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CapabilitySpecification.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.capabilities != null && message.capabilities.length)
                            for (var i = 0; i < message.capabilities.length; ++i)
                                $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability.encode(message.capabilities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.appCertificationId != null && Object.hasOwnProperty.call(message, "appCertificationId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.appCertificationId);
                        if (message.appCertificationVersionId != null && Object.hasOwnProperty.call(message, "appCertificationVersionId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.appCertificationVersionId);
                        if (message.enablePushNotifications != null && Object.hasOwnProperty.call(message, "enablePushNotifications"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.enablePushNotifications);
                        return writer;
                    };

                    /**
                     * Encodes the specified CapabilitySpecification message, length delimited. Does not implicitly {@link agrirouter.request.payload.endpoint.CapabilitySpecification.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {agrirouter.request.payload.endpoint.ICapabilitySpecification} message CapabilitySpecification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CapabilitySpecification.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CapabilitySpecification message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification} CapabilitySpecification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CapabilitySpecification.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.request.payload.endpoint.CapabilitySpecification();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.capabilities && message.capabilities.length))
                                    message.capabilities = [];
                                message.capabilities.push($root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.appCertificationId = reader.string();
                                break;
                            case 3:
                                message.appCertificationVersionId = reader.string();
                                break;
                            case 4:
                                message.enablePushNotifications = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CapabilitySpecification message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification} CapabilitySpecification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CapabilitySpecification.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CapabilitySpecification message.
                     * @function verify
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CapabilitySpecification.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.capabilities != null && message.hasOwnProperty("capabilities")) {
                            if (!Array.isArray(message.capabilities))
                                return "capabilities: array expected";
                            for (var i = 0; i < message.capabilities.length; ++i) {
                                var error = $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability.verify(message.capabilities[i]);
                                if (error)
                                    return "capabilities." + error;
                            }
                        }
                        if (message.appCertificationId != null && message.hasOwnProperty("appCertificationId"))
                            if (!$util.isString(message.appCertificationId))
                                return "appCertificationId: string expected";
                        if (message.appCertificationVersionId != null && message.hasOwnProperty("appCertificationVersionId"))
                            if (!$util.isString(message.appCertificationVersionId))
                                return "appCertificationVersionId: string expected";
                        if (message.enablePushNotifications != null && message.hasOwnProperty("enablePushNotifications"))
                            switch (message.enablePushNotifications) {
                            default:
                                return "enablePushNotifications: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a CapabilitySpecification message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification} CapabilitySpecification
                     */
                    CapabilitySpecification.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.request.payload.endpoint.CapabilitySpecification)
                            return object;
                        var message = new $root.agrirouter.request.payload.endpoint.CapabilitySpecification();
                        if (object.capabilities) {
                            if (!Array.isArray(object.capabilities))
                                throw TypeError(".agrirouter.request.payload.endpoint.CapabilitySpecification.capabilities: array expected");
                            message.capabilities = [];
                            for (var i = 0; i < object.capabilities.length; ++i) {
                                if (typeof object.capabilities[i] !== "object")
                                    throw TypeError(".agrirouter.request.payload.endpoint.CapabilitySpecification.capabilities: object expected");
                                message.capabilities[i] = $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability.fromObject(object.capabilities[i]);
                            }
                        }
                        if (object.appCertificationId != null)
                            message.appCertificationId = String(object.appCertificationId);
                        if (object.appCertificationVersionId != null)
                            message.appCertificationVersionId = String(object.appCertificationVersionId);
                        switch (object.enablePushNotifications) {
                        case "DISABLED":
                        case 0:
                            message.enablePushNotifications = 0;
                            break;
                        case "ENABLED":
                        case 1:
                            message.enablePushNotifications = 1;
                            break;
                        case "ENABLED_HIGH_FREQUENCY":
                        case 2:
                            message.enablePushNotifications = 2;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CapabilitySpecification message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @static
                     * @param {agrirouter.request.payload.endpoint.CapabilitySpecification} message CapabilitySpecification
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CapabilitySpecification.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.capabilities = [];
                        if (options.defaults) {
                            object.appCertificationId = "";
                            object.appCertificationVersionId = "";
                            object.enablePushNotifications = options.enums === String ? "DISABLED" : 0;
                        }
                        if (message.capabilities && message.capabilities.length) {
                            object.capabilities = [];
                            for (var j = 0; j < message.capabilities.length; ++j)
                                object.capabilities[j] = $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability.toObject(message.capabilities[j], options);
                        }
                        if (message.appCertificationId != null && message.hasOwnProperty("appCertificationId"))
                            object.appCertificationId = message.appCertificationId;
                        if (message.appCertificationVersionId != null && message.hasOwnProperty("appCertificationVersionId"))
                            object.appCertificationVersionId = message.appCertificationVersionId;
                        if (message.enablePushNotifications != null && message.hasOwnProperty("enablePushNotifications"))
                            object.enablePushNotifications = options.enums === String ? $root.agrirouter.request.payload.endpoint.CapabilitySpecification.PushNotification[message.enablePushNotifications] : message.enablePushNotifications;
                        return object;
                    };

                    /**
                     * Converts this CapabilitySpecification to JSON.
                     * @function toJSON
                     * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CapabilitySpecification.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Direction enum.
                     * @name agrirouter.request.payload.endpoint.CapabilitySpecification.Direction
                     * @enum {number}
                     * @property {number} SEND=0 SEND value
                     * @property {number} RECEIVE=1 RECEIVE value
                     * @property {number} SEND_RECEIVE=2 SEND_RECEIVE value
                     */
                    CapabilitySpecification.Direction = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SEND"] = 0;
                        values[valuesById[1] = "RECEIVE"] = 1;
                        values[valuesById[2] = "SEND_RECEIVE"] = 2;
                        return values;
                    })();

                    /**
                     * PushNotification enum.
                     * @name agrirouter.request.payload.endpoint.CapabilitySpecification.PushNotification
                     * @enum {number}
                     * @property {number} DISABLED=0 DISABLED value
                     * @property {number} ENABLED=1 ENABLED value
                     * @property {number} ENABLED_HIGH_FREQUENCY=2 ENABLED_HIGH_FREQUENCY value
                     */
                    CapabilitySpecification.PushNotification = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "DISABLED"] = 0;
                        values[valuesById[1] = "ENABLED"] = 1;
                        values[valuesById[2] = "ENABLED_HIGH_FREQUENCY"] = 2;
                        return values;
                    })();

                    CapabilitySpecification.Capability = (function() {

                        /**
                         * Properties of a Capability.
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                         * @interface ICapability
                         * @property {string|null} [technicalMessageType] Capability technicalMessageType
                         * @property {agrirouter.request.payload.endpoint.CapabilitySpecification.Direction|null} [direction] Capability direction
                         */

                        /**
                         * Constructs a new Capability.
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification
                         * @classdesc Represents a Capability.
                         * @implements ICapability
                         * @constructor
                         * @param {agrirouter.request.payload.endpoint.CapabilitySpecification.ICapability=} [properties] Properties to set
                         */
                        function Capability(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Capability technicalMessageType.
                         * @member {string} technicalMessageType
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @instance
                         */
                        Capability.prototype.technicalMessageType = "";

                        /**
                         * Capability direction.
                         * @member {agrirouter.request.payload.endpoint.CapabilitySpecification.Direction} direction
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @instance
                         */
                        Capability.prototype.direction = 0;

                        /**
                         * Creates a new Capability instance using the specified properties.
                         * @function create
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {agrirouter.request.payload.endpoint.CapabilitySpecification.ICapability=} [properties] Properties to set
                         * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification.Capability} Capability instance
                         */
                        Capability.create = function create(properties) {
                            return new Capability(properties);
                        };

                        /**
                         * Encodes the specified Capability message. Does not implicitly {@link agrirouter.request.payload.endpoint.CapabilitySpecification.Capability.verify|verify} messages.
                         * @function encode
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {agrirouter.request.payload.endpoint.CapabilitySpecification.ICapability} message Capability message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Capability.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.technicalMessageType);
                            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
                            return writer;
                        };

                        /**
                         * Encodes the specified Capability message, length delimited. Does not implicitly {@link agrirouter.request.payload.endpoint.CapabilitySpecification.Capability.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {agrirouter.request.payload.endpoint.CapabilitySpecification.ICapability} message Capability message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Capability.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Capability message from the specified reader or buffer.
                         * @function decode
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification.Capability} Capability
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Capability.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.technicalMessageType = reader.string();
                                    break;
                                case 2:
                                    message.direction = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Capability message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification.Capability} Capability
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Capability.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Capability message.
                         * @function verify
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Capability.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                if (!$util.isString(message.technicalMessageType))
                                    return "technicalMessageType: string expected";
                            if (message.direction != null && message.hasOwnProperty("direction"))
                                switch (message.direction) {
                                default:
                                    return "direction: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };

                        /**
                         * Creates a Capability message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {agrirouter.request.payload.endpoint.CapabilitySpecification.Capability} Capability
                         */
                        Capability.fromObject = function fromObject(object) {
                            if (object instanceof $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability)
                                return object;
                            var message = new $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Capability();
                            if (object.technicalMessageType != null)
                                message.technicalMessageType = String(object.technicalMessageType);
                            switch (object.direction) {
                            case "SEND":
                            case 0:
                                message.direction = 0;
                                break;
                            case "RECEIVE":
                            case 1:
                                message.direction = 1;
                                break;
                            case "SEND_RECEIVE":
                            case 2:
                                message.direction = 2;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Capability message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @static
                         * @param {agrirouter.request.payload.endpoint.CapabilitySpecification.Capability} message Capability
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Capability.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.technicalMessageType = "";
                                object.direction = options.enums === String ? "SEND" : 0;
                            }
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                object.technicalMessageType = message.technicalMessageType;
                            if (message.direction != null && message.hasOwnProperty("direction"))
                                object.direction = options.enums === String ? $root.agrirouter.request.payload.endpoint.CapabilitySpecification.Direction[message.direction] : message.direction;
                            return object;
                        };

                        /**
                         * Converts this Capability to JSON.
                         * @function toJSON
                         * @memberof agrirouter.request.payload.endpoint.CapabilitySpecification.Capability
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Capability.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Capability;
                    })();

                    return CapabilitySpecification;
                })();

                endpoint.Subscription = (function() {

                    /**
                     * Properties of a Subscription.
                     * @memberof agrirouter.request.payload.endpoint
                     * @interface ISubscription
                     * @property {Array.<agrirouter.request.payload.endpoint.Subscription.IMessageTypeSubscriptionItem>|null} [technicalMessageTypes] Subscription technicalMessageTypes
                     */

                    /**
                     * Constructs a new Subscription.
                     * @memberof agrirouter.request.payload.endpoint
                     * @classdesc Represents a Subscription.
                     * @implements ISubscription
                     * @constructor
                     * @param {agrirouter.request.payload.endpoint.ISubscription=} [properties] Properties to set
                     */
                    function Subscription(properties) {
                        this.technicalMessageTypes = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Subscription technicalMessageTypes.
                     * @member {Array.<agrirouter.request.payload.endpoint.Subscription.IMessageTypeSubscriptionItem>} technicalMessageTypes
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @instance
                     */
                    Subscription.prototype.technicalMessageTypes = $util.emptyArray;

                    /**
                     * Creates a new Subscription instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {agrirouter.request.payload.endpoint.ISubscription=} [properties] Properties to set
                     * @returns {agrirouter.request.payload.endpoint.Subscription} Subscription instance
                     */
                    Subscription.create = function create(properties) {
                        return new Subscription(properties);
                    };

                    /**
                     * Encodes the specified Subscription message. Does not implicitly {@link agrirouter.request.payload.endpoint.Subscription.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {agrirouter.request.payload.endpoint.ISubscription} message Subscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Subscription.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.technicalMessageTypes != null && message.technicalMessageTypes.length)
                            for (var i = 0; i < message.technicalMessageTypes.length; ++i)
                                $root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.encode(message.technicalMessageTypes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Subscription message, length delimited. Does not implicitly {@link agrirouter.request.payload.endpoint.Subscription.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {agrirouter.request.payload.endpoint.ISubscription} message Subscription message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Subscription.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Subscription message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.request.payload.endpoint.Subscription} Subscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Subscription.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.request.payload.endpoint.Subscription();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.technicalMessageTypes && message.technicalMessageTypes.length))
                                    message.technicalMessageTypes = [];
                                message.technicalMessageTypes.push($root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Subscription message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.request.payload.endpoint.Subscription} Subscription
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Subscription.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Subscription message.
                     * @function verify
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Subscription.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.technicalMessageTypes != null && message.hasOwnProperty("technicalMessageTypes")) {
                            if (!Array.isArray(message.technicalMessageTypes))
                                return "technicalMessageTypes: array expected";
                            for (var i = 0; i < message.technicalMessageTypes.length; ++i) {
                                var error = $root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.verify(message.technicalMessageTypes[i]);
                                if (error)
                                    return "technicalMessageTypes." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Subscription message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.request.payload.endpoint.Subscription} Subscription
                     */
                    Subscription.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.request.payload.endpoint.Subscription)
                            return object;
                        var message = new $root.agrirouter.request.payload.endpoint.Subscription();
                        if (object.technicalMessageTypes) {
                            if (!Array.isArray(object.technicalMessageTypes))
                                throw TypeError(".agrirouter.request.payload.endpoint.Subscription.technicalMessageTypes: array expected");
                            message.technicalMessageTypes = [];
                            for (var i = 0; i < object.technicalMessageTypes.length; ++i) {
                                if (typeof object.technicalMessageTypes[i] !== "object")
                                    throw TypeError(".agrirouter.request.payload.endpoint.Subscription.technicalMessageTypes: object expected");
                                message.technicalMessageTypes[i] = $root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.fromObject(object.technicalMessageTypes[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Subscription message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @static
                     * @param {agrirouter.request.payload.endpoint.Subscription} message Subscription
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Subscription.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.technicalMessageTypes = [];
                        if (message.technicalMessageTypes && message.technicalMessageTypes.length) {
                            object.technicalMessageTypes = [];
                            for (var j = 0; j < message.technicalMessageTypes.length; ++j)
                                object.technicalMessageTypes[j] = $root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.toObject(message.technicalMessageTypes[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Subscription to JSON.
                     * @function toJSON
                     * @memberof agrirouter.request.payload.endpoint.Subscription
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Subscription.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    Subscription.MessageTypeSubscriptionItem = (function() {

                        /**
                         * Properties of a MessageTypeSubscriptionItem.
                         * @memberof agrirouter.request.payload.endpoint.Subscription
                         * @interface IMessageTypeSubscriptionItem
                         * @property {string|null} [technicalMessageType] MessageTypeSubscriptionItem technicalMessageType
                         * @property {Array.<number>|null} [ddis] MessageTypeSubscriptionItem ddis
                         * @property {boolean|null} [position] MessageTypeSubscriptionItem position
                         */

                        /**
                         * Constructs a new MessageTypeSubscriptionItem.
                         * @memberof agrirouter.request.payload.endpoint.Subscription
                         * @classdesc Represents a MessageTypeSubscriptionItem.
                         * @implements IMessageTypeSubscriptionItem
                         * @constructor
                         * @param {agrirouter.request.payload.endpoint.Subscription.IMessageTypeSubscriptionItem=} [properties] Properties to set
                         */
                        function MessageTypeSubscriptionItem(properties) {
                            this.ddis = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * MessageTypeSubscriptionItem technicalMessageType.
                         * @member {string} technicalMessageType
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @instance
                         */
                        MessageTypeSubscriptionItem.prototype.technicalMessageType = "";

                        /**
                         * MessageTypeSubscriptionItem ddis.
                         * @member {Array.<number>} ddis
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @instance
                         */
                        MessageTypeSubscriptionItem.prototype.ddis = $util.emptyArray;

                        /**
                         * MessageTypeSubscriptionItem position.
                         * @member {boolean} position
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @instance
                         */
                        MessageTypeSubscriptionItem.prototype.position = false;

                        /**
                         * Creates a new MessageTypeSubscriptionItem instance using the specified properties.
                         * @function create
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {agrirouter.request.payload.endpoint.Subscription.IMessageTypeSubscriptionItem=} [properties] Properties to set
                         * @returns {agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} MessageTypeSubscriptionItem instance
                         */
                        MessageTypeSubscriptionItem.create = function create(properties) {
                            return new MessageTypeSubscriptionItem(properties);
                        };

                        /**
                         * Encodes the specified MessageTypeSubscriptionItem message. Does not implicitly {@link agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.verify|verify} messages.
                         * @function encode
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {agrirouter.request.payload.endpoint.Subscription.IMessageTypeSubscriptionItem} message MessageTypeSubscriptionItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MessageTypeSubscriptionItem.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.technicalMessageType);
                            if (message.ddis != null && message.ddis.length) {
                                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                                for (var i = 0; i < message.ddis.length; ++i)
                                    writer.uint32(message.ddis[i]);
                                writer.ldelim();
                            }
                            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.position);
                            return writer;
                        };

                        /**
                         * Encodes the specified MessageTypeSubscriptionItem message, length delimited. Does not implicitly {@link agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {agrirouter.request.payload.endpoint.Subscription.IMessageTypeSubscriptionItem} message MessageTypeSubscriptionItem message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MessageTypeSubscriptionItem.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a MessageTypeSubscriptionItem message from the specified reader or buffer.
                         * @function decode
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} MessageTypeSubscriptionItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MessageTypeSubscriptionItem.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.technicalMessageType = reader.string();
                                    break;
                                case 2:
                                    if (!(message.ddis && message.ddis.length))
                                        message.ddis = [];
                                    if ((tag & 7) === 2) {
                                        var end2 = reader.uint32() + reader.pos;
                                        while (reader.pos < end2)
                                            message.ddis.push(reader.uint32());
                                    } else
                                        message.ddis.push(reader.uint32());
                                    break;
                                case 3:
                                    message.position = reader.bool();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a MessageTypeSubscriptionItem message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} MessageTypeSubscriptionItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MessageTypeSubscriptionItem.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a MessageTypeSubscriptionItem message.
                         * @function verify
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        MessageTypeSubscriptionItem.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                if (!$util.isString(message.technicalMessageType))
                                    return "technicalMessageType: string expected";
                            if (message.ddis != null && message.hasOwnProperty("ddis")) {
                                if (!Array.isArray(message.ddis))
                                    return "ddis: array expected";
                                for (var i = 0; i < message.ddis.length; ++i)
                                    if (!$util.isInteger(message.ddis[i]))
                                        return "ddis: integer[] expected";
                            }
                            if (message.position != null && message.hasOwnProperty("position"))
                                if (typeof message.position !== "boolean")
                                    return "position: boolean expected";
                            return null;
                        };

                        /**
                         * Creates a MessageTypeSubscriptionItem message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} MessageTypeSubscriptionItem
                         */
                        MessageTypeSubscriptionItem.fromObject = function fromObject(object) {
                            if (object instanceof $root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem)
                                return object;
                            var message = new $root.agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem();
                            if (object.technicalMessageType != null)
                                message.technicalMessageType = String(object.technicalMessageType);
                            if (object.ddis) {
                                if (!Array.isArray(object.ddis))
                                    throw TypeError(".agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem.ddis: array expected");
                                message.ddis = [];
                                for (var i = 0; i < object.ddis.length; ++i)
                                    message.ddis[i] = object.ddis[i] >>> 0;
                            }
                            if (object.position != null)
                                message.position = Boolean(object.position);
                            return message;
                        };

                        /**
                         * Creates a plain object from a MessageTypeSubscriptionItem message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @static
                         * @param {agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem} message MessageTypeSubscriptionItem
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MessageTypeSubscriptionItem.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.ddis = [];
                            if (options.defaults) {
                                object.technicalMessageType = "";
                                object.position = false;
                            }
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                object.technicalMessageType = message.technicalMessageType;
                            if (message.ddis && message.ddis.length) {
                                object.ddis = [];
                                for (var j = 0; j < message.ddis.length; ++j)
                                    object.ddis[j] = message.ddis[j];
                            }
                            if (message.position != null && message.hasOwnProperty("position"))
                                object.position = message.position;
                            return object;
                        };

                        /**
                         * Converts this MessageTypeSubscriptionItem to JSON.
                         * @function toJSON
                         * @memberof agrirouter.request.payload.endpoint.Subscription.MessageTypeSubscriptionItem
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        MessageTypeSubscriptionItem.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return MessageTypeSubscriptionItem;
                    })();

                    return Subscription;
                })();

                return endpoint;
            })();

            return payload;
        })();

        request.RequestEnvelope = (function() {

            /**
             * Properties of a RequestEnvelope.
             * @memberof agrirouter.request
             * @interface IRequestEnvelope
             * @property {string|null} [applicationMessageId] RequestEnvelope applicationMessageId
             * @property {number|Long|null} [applicationMessageSeqNo] RequestEnvelope applicationMessageSeqNo
             * @property {string|null} [technicalMessageType] RequestEnvelope technicalMessageType
             * @property {string|null} [teamSetContextId] RequestEnvelope teamSetContextId
             * @property {agrirouter.request.RequestEnvelope.Mode|null} [mode] RequestEnvelope mode
             * @property {Array.<string>|null} [recipients] RequestEnvelope recipients
             * @property {agrirouter.commons.IChunkComponent|null} [chunkInfo] RequestEnvelope chunkInfo
             * @property {google.protobuf.ITimestamp|null} [timestamp] RequestEnvelope timestamp
             * @property {agrirouter.commons.IMetadata|null} [metadata] RequestEnvelope metadata
             */

            /**
             * Constructs a new RequestEnvelope.
             * @memberof agrirouter.request
             * @classdesc Represents a RequestEnvelope.
             * @implements IRequestEnvelope
             * @constructor
             * @param {agrirouter.request.IRequestEnvelope=} [properties] Properties to set
             */
            function RequestEnvelope(properties) {
                this.recipients = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestEnvelope applicationMessageId.
             * @member {string} applicationMessageId
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.applicationMessageId = "";

            /**
             * RequestEnvelope applicationMessageSeqNo.
             * @member {number|Long} applicationMessageSeqNo
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.applicationMessageSeqNo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RequestEnvelope technicalMessageType.
             * @member {string} technicalMessageType
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.technicalMessageType = "";

            /**
             * RequestEnvelope teamSetContextId.
             * @member {string} teamSetContextId
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.teamSetContextId = "";

            /**
             * RequestEnvelope mode.
             * @member {agrirouter.request.RequestEnvelope.Mode} mode
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.mode = 0;

            /**
             * RequestEnvelope recipients.
             * @member {Array.<string>} recipients
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.recipients = $util.emptyArray;

            /**
             * RequestEnvelope chunkInfo.
             * @member {agrirouter.commons.IChunkComponent|null|undefined} chunkInfo
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.chunkInfo = null;

            /**
             * RequestEnvelope timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.timestamp = null;

            /**
             * RequestEnvelope metadata.
             * @member {agrirouter.commons.IMetadata|null|undefined} metadata
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             */
            RequestEnvelope.prototype.metadata = null;

            /**
             * Creates a new RequestEnvelope instance using the specified properties.
             * @function create
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {agrirouter.request.IRequestEnvelope=} [properties] Properties to set
             * @returns {agrirouter.request.RequestEnvelope} RequestEnvelope instance
             */
            RequestEnvelope.create = function create(properties) {
                return new RequestEnvelope(properties);
            };

            /**
             * Encodes the specified RequestEnvelope message. Does not implicitly {@link agrirouter.request.RequestEnvelope.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {agrirouter.request.IRequestEnvelope} message RequestEnvelope message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestEnvelope.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.applicationMessageId != null && Object.hasOwnProperty.call(message, "applicationMessageId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.applicationMessageId);
                if (message.applicationMessageSeqNo != null && Object.hasOwnProperty.call(message, "applicationMessageSeqNo"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.applicationMessageSeqNo);
                if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.technicalMessageType);
                if (message.teamSetContextId != null && Object.hasOwnProperty.call(message, "teamSetContextId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.teamSetContextId);
                if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.mode);
                if (message.recipients != null && message.recipients.length)
                    for (var i = 0; i < message.recipients.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.recipients[i]);
                if (message.chunkInfo != null && Object.hasOwnProperty.call(message, "chunkInfo"))
                    $root.agrirouter.commons.ChunkComponent.encode(message.chunkInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                    $root.agrirouter.commons.Metadata.encode(message.metadata, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestEnvelope message, length delimited. Does not implicitly {@link agrirouter.request.RequestEnvelope.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {agrirouter.request.IRequestEnvelope} message RequestEnvelope message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestEnvelope.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestEnvelope message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.request.RequestEnvelope} RequestEnvelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestEnvelope.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.request.RequestEnvelope();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.applicationMessageId = reader.string();
                        break;
                    case 2:
                        message.applicationMessageSeqNo = reader.int64();
                        break;
                    case 3:
                        message.technicalMessageType = reader.string();
                        break;
                    case 4:
                        message.teamSetContextId = reader.string();
                        break;
                    case 5:
                        message.mode = reader.int32();
                        break;
                    case 6:
                        if (!(message.recipients && message.recipients.length))
                            message.recipients = [];
                        message.recipients.push(reader.string());
                        break;
                    case 7:
                        message.chunkInfo = $root.agrirouter.commons.ChunkComponent.decode(reader, reader.uint32());
                        break;
                    case 8:
                        message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    case 9:
                        message.metadata = $root.agrirouter.commons.Metadata.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestEnvelope message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.request.RequestEnvelope} RequestEnvelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestEnvelope.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestEnvelope message.
             * @function verify
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestEnvelope.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.applicationMessageId != null && message.hasOwnProperty("applicationMessageId"))
                    if (!$util.isString(message.applicationMessageId))
                        return "applicationMessageId: string expected";
                if (message.applicationMessageSeqNo != null && message.hasOwnProperty("applicationMessageSeqNo"))
                    if (!$util.isInteger(message.applicationMessageSeqNo) && !(message.applicationMessageSeqNo && $util.isInteger(message.applicationMessageSeqNo.low) && $util.isInteger(message.applicationMessageSeqNo.high)))
                        return "applicationMessageSeqNo: integer|Long expected";
                if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                    if (!$util.isString(message.technicalMessageType))
                        return "technicalMessageType: string expected";
                if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                    if (!$util.isString(message.teamSetContextId))
                        return "teamSetContextId: string expected";
                if (message.mode != null && message.hasOwnProperty("mode"))
                    switch (message.mode) {
                    default:
                        return "mode: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.recipients != null && message.hasOwnProperty("recipients")) {
                    if (!Array.isArray(message.recipients))
                        return "recipients: array expected";
                    for (var i = 0; i < message.recipients.length; ++i)
                        if (!$util.isString(message.recipients[i]))
                            return "recipients: string[] expected";
                }
                if (message.chunkInfo != null && message.hasOwnProperty("chunkInfo")) {
                    var error = $root.agrirouter.commons.ChunkComponent.verify(message.chunkInfo);
                    if (error)
                        return "chunkInfo." + error;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    var error = $root.agrirouter.commons.Metadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                return null;
            };

            /**
             * Creates a RequestEnvelope message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.request.RequestEnvelope} RequestEnvelope
             */
            RequestEnvelope.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.request.RequestEnvelope)
                    return object;
                var message = new $root.agrirouter.request.RequestEnvelope();
                if (object.applicationMessageId != null)
                    message.applicationMessageId = String(object.applicationMessageId);
                if (object.applicationMessageSeqNo != null)
                    if ($util.Long)
                        (message.applicationMessageSeqNo = $util.Long.fromValue(object.applicationMessageSeqNo)).unsigned = false;
                    else if (typeof object.applicationMessageSeqNo === "string")
                        message.applicationMessageSeqNo = parseInt(object.applicationMessageSeqNo, 10);
                    else if (typeof object.applicationMessageSeqNo === "number")
                        message.applicationMessageSeqNo = object.applicationMessageSeqNo;
                    else if (typeof object.applicationMessageSeqNo === "object")
                        message.applicationMessageSeqNo = new $util.LongBits(object.applicationMessageSeqNo.low >>> 0, object.applicationMessageSeqNo.high >>> 0).toNumber();
                if (object.technicalMessageType != null)
                    message.technicalMessageType = String(object.technicalMessageType);
                if (object.teamSetContextId != null)
                    message.teamSetContextId = String(object.teamSetContextId);
                switch (object.mode) {
                case "DIRECT":
                case 0:
                    message.mode = 0;
                    break;
                case "PUBLISH":
                case 1:
                    message.mode = 1;
                    break;
                case "PUBLISH_WITH_DIRECT":
                case 2:
                    message.mode = 2;
                    break;
                }
                if (object.recipients) {
                    if (!Array.isArray(object.recipients))
                        throw TypeError(".agrirouter.request.RequestEnvelope.recipients: array expected");
                    message.recipients = [];
                    for (var i = 0; i < object.recipients.length; ++i)
                        message.recipients[i] = String(object.recipients[i]);
                }
                if (object.chunkInfo != null) {
                    if (typeof object.chunkInfo !== "object")
                        throw TypeError(".agrirouter.request.RequestEnvelope.chunkInfo: object expected");
                    message.chunkInfo = $root.agrirouter.commons.ChunkComponent.fromObject(object.chunkInfo);
                }
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".agrirouter.request.RequestEnvelope.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                if (object.metadata != null) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(".agrirouter.request.RequestEnvelope.metadata: object expected");
                    message.metadata = $root.agrirouter.commons.Metadata.fromObject(object.metadata);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestEnvelope message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.request.RequestEnvelope
             * @static
             * @param {agrirouter.request.RequestEnvelope} message RequestEnvelope
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestEnvelope.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.recipients = [];
                if (options.defaults) {
                    object.applicationMessageId = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.applicationMessageSeqNo = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.applicationMessageSeqNo = options.longs === String ? "0" : 0;
                    object.technicalMessageType = "";
                    object.teamSetContextId = "";
                    object.mode = options.enums === String ? "DIRECT" : 0;
                    object.chunkInfo = null;
                    object.timestamp = null;
                    object.metadata = null;
                }
                if (message.applicationMessageId != null && message.hasOwnProperty("applicationMessageId"))
                    object.applicationMessageId = message.applicationMessageId;
                if (message.applicationMessageSeqNo != null && message.hasOwnProperty("applicationMessageSeqNo"))
                    if (typeof message.applicationMessageSeqNo === "number")
                        object.applicationMessageSeqNo = options.longs === String ? String(message.applicationMessageSeqNo) : message.applicationMessageSeqNo;
                    else
                        object.applicationMessageSeqNo = options.longs === String ? $util.Long.prototype.toString.call(message.applicationMessageSeqNo) : options.longs === Number ? new $util.LongBits(message.applicationMessageSeqNo.low >>> 0, message.applicationMessageSeqNo.high >>> 0).toNumber() : message.applicationMessageSeqNo;
                if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                    object.technicalMessageType = message.technicalMessageType;
                if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                    object.teamSetContextId = message.teamSetContextId;
                if (message.mode != null && message.hasOwnProperty("mode"))
                    object.mode = options.enums === String ? $root.agrirouter.request.RequestEnvelope.Mode[message.mode] : message.mode;
                if (message.recipients && message.recipients.length) {
                    object.recipients = [];
                    for (var j = 0; j < message.recipients.length; ++j)
                        object.recipients[j] = message.recipients[j];
                }
                if (message.chunkInfo != null && message.hasOwnProperty("chunkInfo"))
                    object.chunkInfo = $root.agrirouter.commons.ChunkComponent.toObject(message.chunkInfo, options);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    object.metadata = $root.agrirouter.commons.Metadata.toObject(message.metadata, options);
                return object;
            };

            /**
             * Converts this RequestEnvelope to JSON.
             * @function toJSON
             * @memberof agrirouter.request.RequestEnvelope
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestEnvelope.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Mode enum.
             * @name agrirouter.request.RequestEnvelope.Mode
             * @enum {number}
             * @property {number} DIRECT=0 DIRECT value
             * @property {number} PUBLISH=1 PUBLISH value
             * @property {number} PUBLISH_WITH_DIRECT=2 PUBLISH_WITH_DIRECT value
             */
            RequestEnvelope.Mode = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "DIRECT"] = 0;
                values[valuesById[1] = "PUBLISH"] = 1;
                values[valuesById[2] = "PUBLISH_WITH_DIRECT"] = 2;
                return values;
            })();

            return RequestEnvelope;
        })();

        request.RequestPayloadWrapper = (function() {

            /**
             * Properties of a RequestPayloadWrapper.
             * @memberof agrirouter.request
             * @interface IRequestPayloadWrapper
             * @property {google.protobuf.IAny|null} [details] RequestPayloadWrapper details
             */

            /**
             * Constructs a new RequestPayloadWrapper.
             * @memberof agrirouter.request
             * @classdesc Represents a RequestPayloadWrapper.
             * @implements IRequestPayloadWrapper
             * @constructor
             * @param {agrirouter.request.IRequestPayloadWrapper=} [properties] Properties to set
             */
            function RequestPayloadWrapper(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestPayloadWrapper details.
             * @member {google.protobuf.IAny|null|undefined} details
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @instance
             */
            RequestPayloadWrapper.prototype.details = null;

            /**
             * Creates a new RequestPayloadWrapper instance using the specified properties.
             * @function create
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {agrirouter.request.IRequestPayloadWrapper=} [properties] Properties to set
             * @returns {agrirouter.request.RequestPayloadWrapper} RequestPayloadWrapper instance
             */
            RequestPayloadWrapper.create = function create(properties) {
                return new RequestPayloadWrapper(properties);
            };

            /**
             * Encodes the specified RequestPayloadWrapper message. Does not implicitly {@link agrirouter.request.RequestPayloadWrapper.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {agrirouter.request.IRequestPayloadWrapper} message RequestPayloadWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestPayloadWrapper.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                    $root.google.protobuf.Any.encode(message.details, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestPayloadWrapper message, length delimited. Does not implicitly {@link agrirouter.request.RequestPayloadWrapper.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {agrirouter.request.IRequestPayloadWrapper} message RequestPayloadWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestPayloadWrapper.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestPayloadWrapper message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.request.RequestPayloadWrapper} RequestPayloadWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestPayloadWrapper.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.request.RequestPayloadWrapper();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.details = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestPayloadWrapper message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.request.RequestPayloadWrapper} RequestPayloadWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestPayloadWrapper.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestPayloadWrapper message.
             * @function verify
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestPayloadWrapper.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.details != null && message.hasOwnProperty("details")) {
                    var error = $root.google.protobuf.Any.verify(message.details);
                    if (error)
                        return "details." + error;
                }
                return null;
            };

            /**
             * Creates a RequestPayloadWrapper message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.request.RequestPayloadWrapper} RequestPayloadWrapper
             */
            RequestPayloadWrapper.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.request.RequestPayloadWrapper)
                    return object;
                var message = new $root.agrirouter.request.RequestPayloadWrapper();
                if (object.details != null) {
                    if (typeof object.details !== "object")
                        throw TypeError(".agrirouter.request.RequestPayloadWrapper.details: object expected");
                    message.details = $root.google.protobuf.Any.fromObject(object.details);
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestPayloadWrapper message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @static
             * @param {agrirouter.request.RequestPayloadWrapper} message RequestPayloadWrapper
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestPayloadWrapper.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.details = null;
                if (message.details != null && message.hasOwnProperty("details"))
                    object.details = $root.google.protobuf.Any.toObject(message.details, options);
                return object;
            };

            /**
             * Converts this RequestPayloadWrapper to JSON.
             * @function toJSON
             * @memberof agrirouter.request.RequestPayloadWrapper
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestPayloadWrapper.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RequestPayloadWrapper;
        })();

        return request;
    })();

    agrirouter.feed = (function() {

        /**
         * Namespace feed.
         * @memberof agrirouter
         * @namespace
         */
        var feed = {};

        feed.request = (function() {

            /**
             * Namespace request.
             * @memberof agrirouter.feed
             * @namespace
             */
            var request = {};

            request.ValidityPeriod = (function() {

                /**
                 * Properties of a ValidityPeriod.
                 * @memberof agrirouter.feed.request
                 * @interface IValidityPeriod
                 * @property {google.protobuf.ITimestamp|null} [sentFrom] ValidityPeriod sentFrom
                 * @property {google.protobuf.ITimestamp|null} [sentTo] ValidityPeriod sentTo
                 */

                /**
                 * Constructs a new ValidityPeriod.
                 * @memberof agrirouter.feed.request
                 * @classdesc Represents a ValidityPeriod.
                 * @implements IValidityPeriod
                 * @constructor
                 * @param {agrirouter.feed.request.IValidityPeriod=} [properties] Properties to set
                 */
                function ValidityPeriod(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ValidityPeriod sentFrom.
                 * @member {google.protobuf.ITimestamp|null|undefined} sentFrom
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @instance
                 */
                ValidityPeriod.prototype.sentFrom = null;

                /**
                 * ValidityPeriod sentTo.
                 * @member {google.protobuf.ITimestamp|null|undefined} sentTo
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @instance
                 */
                ValidityPeriod.prototype.sentTo = null;

                /**
                 * Creates a new ValidityPeriod instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {agrirouter.feed.request.IValidityPeriod=} [properties] Properties to set
                 * @returns {agrirouter.feed.request.ValidityPeriod} ValidityPeriod instance
                 */
                ValidityPeriod.create = function create(properties) {
                    return new ValidityPeriod(properties);
                };

                /**
                 * Encodes the specified ValidityPeriod message. Does not implicitly {@link agrirouter.feed.request.ValidityPeriod.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {agrirouter.feed.request.IValidityPeriod} message ValidityPeriod message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ValidityPeriod.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.sentFrom != null && Object.hasOwnProperty.call(message, "sentFrom"))
                        $root.google.protobuf.Timestamp.encode(message.sentFrom, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.sentTo != null && Object.hasOwnProperty.call(message, "sentTo"))
                        $root.google.protobuf.Timestamp.encode(message.sentTo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ValidityPeriod message, length delimited. Does not implicitly {@link agrirouter.feed.request.ValidityPeriod.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {agrirouter.feed.request.IValidityPeriod} message ValidityPeriod message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ValidityPeriod.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ValidityPeriod message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.request.ValidityPeriod} ValidityPeriod
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ValidityPeriod.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.request.ValidityPeriod();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.sentFrom = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.sentTo = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ValidityPeriod message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.request.ValidityPeriod} ValidityPeriod
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ValidityPeriod.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ValidityPeriod message.
                 * @function verify
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ValidityPeriod.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.sentFrom != null && message.hasOwnProperty("sentFrom")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.sentFrom);
                        if (error)
                            return "sentFrom." + error;
                    }
                    if (message.sentTo != null && message.hasOwnProperty("sentTo")) {
                        var error = $root.google.protobuf.Timestamp.verify(message.sentTo);
                        if (error)
                            return "sentTo." + error;
                    }
                    return null;
                };

                /**
                 * Creates a ValidityPeriod message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.request.ValidityPeriod} ValidityPeriod
                 */
                ValidityPeriod.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.request.ValidityPeriod)
                        return object;
                    var message = new $root.agrirouter.feed.request.ValidityPeriod();
                    if (object.sentFrom != null) {
                        if (typeof object.sentFrom !== "object")
                            throw TypeError(".agrirouter.feed.request.ValidityPeriod.sentFrom: object expected");
                        message.sentFrom = $root.google.protobuf.Timestamp.fromObject(object.sentFrom);
                    }
                    if (object.sentTo != null) {
                        if (typeof object.sentTo !== "object")
                            throw TypeError(".agrirouter.feed.request.ValidityPeriod.sentTo: object expected");
                        message.sentTo = $root.google.protobuf.Timestamp.fromObject(object.sentTo);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ValidityPeriod message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @static
                 * @param {agrirouter.feed.request.ValidityPeriod} message ValidityPeriod
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ValidityPeriod.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.sentFrom = null;
                        object.sentTo = null;
                    }
                    if (message.sentFrom != null && message.hasOwnProperty("sentFrom"))
                        object.sentFrom = $root.google.protobuf.Timestamp.toObject(message.sentFrom, options);
                    if (message.sentTo != null && message.hasOwnProperty("sentTo"))
                        object.sentTo = $root.google.protobuf.Timestamp.toObject(message.sentTo, options);
                    return object;
                };

                /**
                 * Converts this ValidityPeriod to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.request.ValidityPeriod
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ValidityPeriod.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ValidityPeriod;
            })();

            request.MessageQuery = (function() {

                /**
                 * Properties of a MessageQuery.
                 * @memberof agrirouter.feed.request
                 * @interface IMessageQuery
                 * @property {Array.<string>|null} [messageIds] MessageQuery messageIds
                 * @property {Array.<string>|null} [senders] MessageQuery senders
                 * @property {agrirouter.feed.request.IValidityPeriod|null} [validityPeriod] MessageQuery validityPeriod
                 */

                /**
                 * Constructs a new MessageQuery.
                 * @memberof agrirouter.feed.request
                 * @classdesc Represents a MessageQuery.
                 * @implements IMessageQuery
                 * @constructor
                 * @param {agrirouter.feed.request.IMessageQuery=} [properties] Properties to set
                 */
                function MessageQuery(properties) {
                    this.messageIds = [];
                    this.senders = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageQuery messageIds.
                 * @member {Array.<string>} messageIds
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @instance
                 */
                MessageQuery.prototype.messageIds = $util.emptyArray;

                /**
                 * MessageQuery senders.
                 * @member {Array.<string>} senders
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @instance
                 */
                MessageQuery.prototype.senders = $util.emptyArray;

                /**
                 * MessageQuery validityPeriod.
                 * @member {agrirouter.feed.request.IValidityPeriod|null|undefined} validityPeriod
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @instance
                 */
                MessageQuery.prototype.validityPeriod = null;

                /**
                 * Creates a new MessageQuery instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {agrirouter.feed.request.IMessageQuery=} [properties] Properties to set
                 * @returns {agrirouter.feed.request.MessageQuery} MessageQuery instance
                 */
                MessageQuery.create = function create(properties) {
                    return new MessageQuery(properties);
                };

                /**
                 * Encodes the specified MessageQuery message. Does not implicitly {@link agrirouter.feed.request.MessageQuery.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {agrirouter.feed.request.IMessageQuery} message MessageQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageQuery.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageIds != null && message.messageIds.length)
                        for (var i = 0; i < message.messageIds.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageIds[i]);
                    if (message.senders != null && message.senders.length)
                        for (var i = 0; i < message.senders.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.senders[i]);
                    if (message.validityPeriod != null && Object.hasOwnProperty.call(message, "validityPeriod"))
                        $root.agrirouter.feed.request.ValidityPeriod.encode(message.validityPeriod, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MessageQuery message, length delimited. Does not implicitly {@link agrirouter.feed.request.MessageQuery.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {agrirouter.feed.request.IMessageQuery} message MessageQuery message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageQuery.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageQuery message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.request.MessageQuery} MessageQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageQuery.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.request.MessageQuery();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.messageIds && message.messageIds.length))
                                message.messageIds = [];
                            message.messageIds.push(reader.string());
                            break;
                        case 2:
                            if (!(message.senders && message.senders.length))
                                message.senders = [];
                            message.senders.push(reader.string());
                            break;
                        case 3:
                            message.validityPeriod = $root.agrirouter.feed.request.ValidityPeriod.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageQuery message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.request.MessageQuery} MessageQuery
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageQuery.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageQuery message.
                 * @function verify
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageQuery.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageIds != null && message.hasOwnProperty("messageIds")) {
                        if (!Array.isArray(message.messageIds))
                            return "messageIds: array expected";
                        for (var i = 0; i < message.messageIds.length; ++i)
                            if (!$util.isString(message.messageIds[i]))
                                return "messageIds: string[] expected";
                    }
                    if (message.senders != null && message.hasOwnProperty("senders")) {
                        if (!Array.isArray(message.senders))
                            return "senders: array expected";
                        for (var i = 0; i < message.senders.length; ++i)
                            if (!$util.isString(message.senders[i]))
                                return "senders: string[] expected";
                    }
                    if (message.validityPeriod != null && message.hasOwnProperty("validityPeriod")) {
                        var error = $root.agrirouter.feed.request.ValidityPeriod.verify(message.validityPeriod);
                        if (error)
                            return "validityPeriod." + error;
                    }
                    return null;
                };

                /**
                 * Creates a MessageQuery message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.request.MessageQuery} MessageQuery
                 */
                MessageQuery.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.request.MessageQuery)
                        return object;
                    var message = new $root.agrirouter.feed.request.MessageQuery();
                    if (object.messageIds) {
                        if (!Array.isArray(object.messageIds))
                            throw TypeError(".agrirouter.feed.request.MessageQuery.messageIds: array expected");
                        message.messageIds = [];
                        for (var i = 0; i < object.messageIds.length; ++i)
                            message.messageIds[i] = String(object.messageIds[i]);
                    }
                    if (object.senders) {
                        if (!Array.isArray(object.senders))
                            throw TypeError(".agrirouter.feed.request.MessageQuery.senders: array expected");
                        message.senders = [];
                        for (var i = 0; i < object.senders.length; ++i)
                            message.senders[i] = String(object.senders[i]);
                    }
                    if (object.validityPeriod != null) {
                        if (typeof object.validityPeriod !== "object")
                            throw TypeError(".agrirouter.feed.request.MessageQuery.validityPeriod: object expected");
                        message.validityPeriod = $root.agrirouter.feed.request.ValidityPeriod.fromObject(object.validityPeriod);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MessageQuery message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @static
                 * @param {agrirouter.feed.request.MessageQuery} message MessageQuery
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageQuery.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.messageIds = [];
                        object.senders = [];
                    }
                    if (options.defaults)
                        object.validityPeriod = null;
                    if (message.messageIds && message.messageIds.length) {
                        object.messageIds = [];
                        for (var j = 0; j < message.messageIds.length; ++j)
                            object.messageIds[j] = message.messageIds[j];
                    }
                    if (message.senders && message.senders.length) {
                        object.senders = [];
                        for (var j = 0; j < message.senders.length; ++j)
                            object.senders[j] = message.senders[j];
                    }
                    if (message.validityPeriod != null && message.hasOwnProperty("validityPeriod"))
                        object.validityPeriod = $root.agrirouter.feed.request.ValidityPeriod.toObject(message.validityPeriod, options);
                    return object;
                };

                /**
                 * Converts this MessageQuery to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.request.MessageQuery
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageQuery.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MessageQuery;
            })();

            request.MessageConfirm = (function() {

                /**
                 * Properties of a MessageConfirm.
                 * @memberof agrirouter.feed.request
                 * @interface IMessageConfirm
                 * @property {Array.<string>|null} [messageIds] MessageConfirm messageIds
                 */

                /**
                 * Constructs a new MessageConfirm.
                 * @memberof agrirouter.feed.request
                 * @classdesc Represents a MessageConfirm.
                 * @implements IMessageConfirm
                 * @constructor
                 * @param {agrirouter.feed.request.IMessageConfirm=} [properties] Properties to set
                 */
                function MessageConfirm(properties) {
                    this.messageIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageConfirm messageIds.
                 * @member {Array.<string>} messageIds
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @instance
                 */
                MessageConfirm.prototype.messageIds = $util.emptyArray;

                /**
                 * Creates a new MessageConfirm instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {agrirouter.feed.request.IMessageConfirm=} [properties] Properties to set
                 * @returns {agrirouter.feed.request.MessageConfirm} MessageConfirm instance
                 */
                MessageConfirm.create = function create(properties) {
                    return new MessageConfirm(properties);
                };

                /**
                 * Encodes the specified MessageConfirm message. Does not implicitly {@link agrirouter.feed.request.MessageConfirm.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {agrirouter.feed.request.IMessageConfirm} message MessageConfirm message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageConfirm.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageIds != null && message.messageIds.length)
                        for (var i = 0; i < message.messageIds.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageIds[i]);
                    return writer;
                };

                /**
                 * Encodes the specified MessageConfirm message, length delimited. Does not implicitly {@link agrirouter.feed.request.MessageConfirm.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {agrirouter.feed.request.IMessageConfirm} message MessageConfirm message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageConfirm.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageConfirm message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.request.MessageConfirm} MessageConfirm
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageConfirm.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.request.MessageConfirm();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.messageIds && message.messageIds.length))
                                message.messageIds = [];
                            message.messageIds.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageConfirm message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.request.MessageConfirm} MessageConfirm
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageConfirm.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageConfirm message.
                 * @function verify
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageConfirm.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageIds != null && message.hasOwnProperty("messageIds")) {
                        if (!Array.isArray(message.messageIds))
                            return "messageIds: array expected";
                        for (var i = 0; i < message.messageIds.length; ++i)
                            if (!$util.isString(message.messageIds[i]))
                                return "messageIds: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a MessageConfirm message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.request.MessageConfirm} MessageConfirm
                 */
                MessageConfirm.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.request.MessageConfirm)
                        return object;
                    var message = new $root.agrirouter.feed.request.MessageConfirm();
                    if (object.messageIds) {
                        if (!Array.isArray(object.messageIds))
                            throw TypeError(".agrirouter.feed.request.MessageConfirm.messageIds: array expected");
                        message.messageIds = [];
                        for (var i = 0; i < object.messageIds.length; ++i)
                            message.messageIds[i] = String(object.messageIds[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MessageConfirm message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @static
                 * @param {agrirouter.feed.request.MessageConfirm} message MessageConfirm
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageConfirm.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.messageIds = [];
                    if (message.messageIds && message.messageIds.length) {
                        object.messageIds = [];
                        for (var j = 0; j < message.messageIds.length; ++j)
                            object.messageIds[j] = message.messageIds[j];
                    }
                    return object;
                };

                /**
                 * Converts this MessageConfirm to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.request.MessageConfirm
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageConfirm.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MessageConfirm;
            })();

            request.MessageDelete = (function() {

                /**
                 * Properties of a MessageDelete.
                 * @memberof agrirouter.feed.request
                 * @interface IMessageDelete
                 * @property {Array.<string>|null} [messageIds] MessageDelete messageIds
                 * @property {Array.<string>|null} [senders] MessageDelete senders
                 * @property {agrirouter.feed.request.IValidityPeriod|null} [validityPeriod] MessageDelete validityPeriod
                 */

                /**
                 * Constructs a new MessageDelete.
                 * @memberof agrirouter.feed.request
                 * @classdesc Represents a MessageDelete.
                 * @implements IMessageDelete
                 * @constructor
                 * @param {agrirouter.feed.request.IMessageDelete=} [properties] Properties to set
                 */
                function MessageDelete(properties) {
                    this.messageIds = [];
                    this.senders = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageDelete messageIds.
                 * @member {Array.<string>} messageIds
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @instance
                 */
                MessageDelete.prototype.messageIds = $util.emptyArray;

                /**
                 * MessageDelete senders.
                 * @member {Array.<string>} senders
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @instance
                 */
                MessageDelete.prototype.senders = $util.emptyArray;

                /**
                 * MessageDelete validityPeriod.
                 * @member {agrirouter.feed.request.IValidityPeriod|null|undefined} validityPeriod
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @instance
                 */
                MessageDelete.prototype.validityPeriod = null;

                /**
                 * Creates a new MessageDelete instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {agrirouter.feed.request.IMessageDelete=} [properties] Properties to set
                 * @returns {agrirouter.feed.request.MessageDelete} MessageDelete instance
                 */
                MessageDelete.create = function create(properties) {
                    return new MessageDelete(properties);
                };

                /**
                 * Encodes the specified MessageDelete message. Does not implicitly {@link agrirouter.feed.request.MessageDelete.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {agrirouter.feed.request.IMessageDelete} message MessageDelete message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageDelete.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageIds != null && message.messageIds.length)
                        for (var i = 0; i < message.messageIds.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageIds[i]);
                    if (message.senders != null && message.senders.length)
                        for (var i = 0; i < message.senders.length; ++i)
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.senders[i]);
                    if (message.validityPeriod != null && Object.hasOwnProperty.call(message, "validityPeriod"))
                        $root.agrirouter.feed.request.ValidityPeriod.encode(message.validityPeriod, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MessageDelete message, length delimited. Does not implicitly {@link agrirouter.feed.request.MessageDelete.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {agrirouter.feed.request.IMessageDelete} message MessageDelete message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageDelete.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageDelete message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.request.MessageDelete} MessageDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageDelete.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.request.MessageDelete();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.messageIds && message.messageIds.length))
                                message.messageIds = [];
                            message.messageIds.push(reader.string());
                            break;
                        case 2:
                            if (!(message.senders && message.senders.length))
                                message.senders = [];
                            message.senders.push(reader.string());
                            break;
                        case 3:
                            message.validityPeriod = $root.agrirouter.feed.request.ValidityPeriod.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageDelete message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.request.MessageDelete} MessageDelete
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageDelete.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageDelete message.
                 * @function verify
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageDelete.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageIds != null && message.hasOwnProperty("messageIds")) {
                        if (!Array.isArray(message.messageIds))
                            return "messageIds: array expected";
                        for (var i = 0; i < message.messageIds.length; ++i)
                            if (!$util.isString(message.messageIds[i]))
                                return "messageIds: string[] expected";
                    }
                    if (message.senders != null && message.hasOwnProperty("senders")) {
                        if (!Array.isArray(message.senders))
                            return "senders: array expected";
                        for (var i = 0; i < message.senders.length; ++i)
                            if (!$util.isString(message.senders[i]))
                                return "senders: string[] expected";
                    }
                    if (message.validityPeriod != null && message.hasOwnProperty("validityPeriod")) {
                        var error = $root.agrirouter.feed.request.ValidityPeriod.verify(message.validityPeriod);
                        if (error)
                            return "validityPeriod." + error;
                    }
                    return null;
                };

                /**
                 * Creates a MessageDelete message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.request.MessageDelete} MessageDelete
                 */
                MessageDelete.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.request.MessageDelete)
                        return object;
                    var message = new $root.agrirouter.feed.request.MessageDelete();
                    if (object.messageIds) {
                        if (!Array.isArray(object.messageIds))
                            throw TypeError(".agrirouter.feed.request.MessageDelete.messageIds: array expected");
                        message.messageIds = [];
                        for (var i = 0; i < object.messageIds.length; ++i)
                            message.messageIds[i] = String(object.messageIds[i]);
                    }
                    if (object.senders) {
                        if (!Array.isArray(object.senders))
                            throw TypeError(".agrirouter.feed.request.MessageDelete.senders: array expected");
                        message.senders = [];
                        for (var i = 0; i < object.senders.length; ++i)
                            message.senders[i] = String(object.senders[i]);
                    }
                    if (object.validityPeriod != null) {
                        if (typeof object.validityPeriod !== "object")
                            throw TypeError(".agrirouter.feed.request.MessageDelete.validityPeriod: object expected");
                        message.validityPeriod = $root.agrirouter.feed.request.ValidityPeriod.fromObject(object.validityPeriod);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MessageDelete message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @static
                 * @param {agrirouter.feed.request.MessageDelete} message MessageDelete
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageDelete.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.messageIds = [];
                        object.senders = [];
                    }
                    if (options.defaults)
                        object.validityPeriod = null;
                    if (message.messageIds && message.messageIds.length) {
                        object.messageIds = [];
                        for (var j = 0; j < message.messageIds.length; ++j)
                            object.messageIds[j] = message.messageIds[j];
                    }
                    if (message.senders && message.senders.length) {
                        object.senders = [];
                        for (var j = 0; j < message.senders.length; ++j)
                            object.senders[j] = message.senders[j];
                    }
                    if (message.validityPeriod != null && message.hasOwnProperty("validityPeriod"))
                        object.validityPeriod = $root.agrirouter.feed.request.ValidityPeriod.toObject(message.validityPeriod, options);
                    return object;
                };

                /**
                 * Converts this MessageDelete to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.request.MessageDelete
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageDelete.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return MessageDelete;
            })();

            return request;
        })();

        feed.response = (function() {

            /**
             * Namespace response.
             * @memberof agrirouter.feed
             * @namespace
             */
            var response = {};

            response.Page = (function() {

                /**
                 * Properties of a Page.
                 * @memberof agrirouter.feed.response
                 * @interface IPage
                 * @property {number|null} [number] Page number
                 * @property {number|null} [total] Page total
                 */

                /**
                 * Constructs a new Page.
                 * @memberof agrirouter.feed.response
                 * @classdesc Represents a Page.
                 * @implements IPage
                 * @constructor
                 * @param {agrirouter.feed.response.IPage=} [properties] Properties to set
                 */
                function Page(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Page number.
                 * @member {number} number
                 * @memberof agrirouter.feed.response.Page
                 * @instance
                 */
                Page.prototype.number = 0;

                /**
                 * Page total.
                 * @member {number} total
                 * @memberof agrirouter.feed.response.Page
                 * @instance
                 */
                Page.prototype.total = 0;

                /**
                 * Creates a new Page instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {agrirouter.feed.response.IPage=} [properties] Properties to set
                 * @returns {agrirouter.feed.response.Page} Page instance
                 */
                Page.create = function create(properties) {
                    return new Page(properties);
                };

                /**
                 * Encodes the specified Page message. Does not implicitly {@link agrirouter.feed.response.Page.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {agrirouter.feed.response.IPage} message Page message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Page.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
                    if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.total);
                    return writer;
                };

                /**
                 * Encodes the specified Page message, length delimited. Does not implicitly {@link agrirouter.feed.response.Page.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {agrirouter.feed.response.IPage} message Page message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Page.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Page message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.response.Page} Page
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Page.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.Page();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.number = reader.int32();
                            break;
                        case 2:
                            message.total = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Page message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.response.Page} Page
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Page.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Page message.
                 * @function verify
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Page.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.total != null && message.hasOwnProperty("total"))
                        if (!$util.isInteger(message.total))
                            return "total: integer expected";
                    return null;
                };

                /**
                 * Creates a Page message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.response.Page} Page
                 */
                Page.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.response.Page)
                        return object;
                    var message = new $root.agrirouter.feed.response.Page();
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.total != null)
                        message.total = object.total | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Page message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.response.Page
                 * @static
                 * @param {agrirouter.feed.response.Page} message Page
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Page.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.number = 0;
                        object.total = 0;
                    }
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.total != null && message.hasOwnProperty("total"))
                        object.total = message.total;
                    return object;
                };

                /**
                 * Converts this Page to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.response.Page
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Page.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Page;
            })();

            response.QueryMetrics = (function() {

                /**
                 * Properties of a QueryMetrics.
                 * @memberof agrirouter.feed.response
                 * @interface IQueryMetrics
                 * @property {number|null} [totalMessagesInQuery] QueryMetrics totalMessagesInQuery
                 * @property {number|null} [maxCountRestriction] QueryMetrics maxCountRestriction
                 */

                /**
                 * Constructs a new QueryMetrics.
                 * @memberof agrirouter.feed.response
                 * @classdesc Represents a QueryMetrics.
                 * @implements IQueryMetrics
                 * @constructor
                 * @param {agrirouter.feed.response.IQueryMetrics=} [properties] Properties to set
                 */
                function QueryMetrics(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * QueryMetrics totalMessagesInQuery.
                 * @member {number} totalMessagesInQuery
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @instance
                 */
                QueryMetrics.prototype.totalMessagesInQuery = 0;

                /**
                 * QueryMetrics maxCountRestriction.
                 * @member {number} maxCountRestriction
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @instance
                 */
                QueryMetrics.prototype.maxCountRestriction = 0;

                /**
                 * Creates a new QueryMetrics instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {agrirouter.feed.response.IQueryMetrics=} [properties] Properties to set
                 * @returns {agrirouter.feed.response.QueryMetrics} QueryMetrics instance
                 */
                QueryMetrics.create = function create(properties) {
                    return new QueryMetrics(properties);
                };

                /**
                 * Encodes the specified QueryMetrics message. Does not implicitly {@link agrirouter.feed.response.QueryMetrics.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {agrirouter.feed.response.IQueryMetrics} message QueryMetrics message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryMetrics.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.totalMessagesInQuery != null && Object.hasOwnProperty.call(message, "totalMessagesInQuery"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.totalMessagesInQuery);
                    if (message.maxCountRestriction != null && Object.hasOwnProperty.call(message, "maxCountRestriction"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxCountRestriction);
                    return writer;
                };

                /**
                 * Encodes the specified QueryMetrics message, length delimited. Does not implicitly {@link agrirouter.feed.response.QueryMetrics.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {agrirouter.feed.response.IQueryMetrics} message QueryMetrics message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                QueryMetrics.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a QueryMetrics message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.response.QueryMetrics} QueryMetrics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryMetrics.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.QueryMetrics();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.totalMessagesInQuery = reader.int32();
                            break;
                        case 2:
                            message.maxCountRestriction = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a QueryMetrics message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.response.QueryMetrics} QueryMetrics
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                QueryMetrics.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a QueryMetrics message.
                 * @function verify
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                QueryMetrics.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.totalMessagesInQuery != null && message.hasOwnProperty("totalMessagesInQuery"))
                        if (!$util.isInteger(message.totalMessagesInQuery))
                            return "totalMessagesInQuery: integer expected";
                    if (message.maxCountRestriction != null && message.hasOwnProperty("maxCountRestriction"))
                        if (!$util.isInteger(message.maxCountRestriction))
                            return "maxCountRestriction: integer expected";
                    return null;
                };

                /**
                 * Creates a QueryMetrics message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.response.QueryMetrics} QueryMetrics
                 */
                QueryMetrics.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.response.QueryMetrics)
                        return object;
                    var message = new $root.agrirouter.feed.response.QueryMetrics();
                    if (object.totalMessagesInQuery != null)
                        message.totalMessagesInQuery = object.totalMessagesInQuery | 0;
                    if (object.maxCountRestriction != null)
                        message.maxCountRestriction = object.maxCountRestriction | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a QueryMetrics message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @static
                 * @param {agrirouter.feed.response.QueryMetrics} message QueryMetrics
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                QueryMetrics.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.totalMessagesInQuery = 0;
                        object.maxCountRestriction = 0;
                    }
                    if (message.totalMessagesInQuery != null && message.hasOwnProperty("totalMessagesInQuery"))
                        object.totalMessagesInQuery = message.totalMessagesInQuery;
                    if (message.maxCountRestriction != null && message.hasOwnProperty("maxCountRestriction"))
                        object.maxCountRestriction = message.maxCountRestriction;
                    return object;
                };

                /**
                 * Converts this QueryMetrics to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.response.QueryMetrics
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                QueryMetrics.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return QueryMetrics;
            })();

            response.HeaderQueryResponse = (function() {

                /**
                 * Properties of a HeaderQueryResponse.
                 * @memberof agrirouter.feed.response
                 * @interface IHeaderQueryResponse
                 * @property {agrirouter.feed.response.IQueryMetrics|null} [queryMetrics] HeaderQueryResponse queryMetrics
                 * @property {agrirouter.feed.response.IPage|null} [page] HeaderQueryResponse page
                 * @property {Array.<agrirouter.commons.IChunkComponent>|null} [chunkContexts] HeaderQueryResponse chunkContexts
                 * @property {Array.<agrirouter.feed.response.HeaderQueryResponse.IFeed>|null} [feed] HeaderQueryResponse feed
                 * @property {Array.<string>|null} [pendingMessageIds] HeaderQueryResponse pendingMessageIds
                 */

                /**
                 * Constructs a new HeaderQueryResponse.
                 * @memberof agrirouter.feed.response
                 * @classdesc Represents a HeaderQueryResponse.
                 * @implements IHeaderQueryResponse
                 * @constructor
                 * @param {agrirouter.feed.response.IHeaderQueryResponse=} [properties] Properties to set
                 */
                function HeaderQueryResponse(properties) {
                    this.chunkContexts = [];
                    this.feed = [];
                    this.pendingMessageIds = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * HeaderQueryResponse queryMetrics.
                 * @member {agrirouter.feed.response.IQueryMetrics|null|undefined} queryMetrics
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @instance
                 */
                HeaderQueryResponse.prototype.queryMetrics = null;

                /**
                 * HeaderQueryResponse page.
                 * @member {agrirouter.feed.response.IPage|null|undefined} page
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @instance
                 */
                HeaderQueryResponse.prototype.page = null;

                /**
                 * HeaderQueryResponse chunkContexts.
                 * @member {Array.<agrirouter.commons.IChunkComponent>} chunkContexts
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @instance
                 */
                HeaderQueryResponse.prototype.chunkContexts = $util.emptyArray;

                /**
                 * HeaderQueryResponse feed.
                 * @member {Array.<agrirouter.feed.response.HeaderQueryResponse.IFeed>} feed
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @instance
                 */
                HeaderQueryResponse.prototype.feed = $util.emptyArray;

                /**
                 * HeaderQueryResponse pendingMessageIds.
                 * @member {Array.<string>} pendingMessageIds
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @instance
                 */
                HeaderQueryResponse.prototype.pendingMessageIds = $util.emptyArray;

                /**
                 * Creates a new HeaderQueryResponse instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IHeaderQueryResponse=} [properties] Properties to set
                 * @returns {agrirouter.feed.response.HeaderQueryResponse} HeaderQueryResponse instance
                 */
                HeaderQueryResponse.create = function create(properties) {
                    return new HeaderQueryResponse(properties);
                };

                /**
                 * Encodes the specified HeaderQueryResponse message. Does not implicitly {@link agrirouter.feed.response.HeaderQueryResponse.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IHeaderQueryResponse} message HeaderQueryResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeaderQueryResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.queryMetrics != null && Object.hasOwnProperty.call(message, "queryMetrics"))
                        $root.agrirouter.feed.response.QueryMetrics.encode(message.queryMetrics, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                        $root.agrirouter.feed.response.Page.encode(message.page, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.chunkContexts != null && message.chunkContexts.length)
                        for (var i = 0; i < message.chunkContexts.length; ++i)
                            $root.agrirouter.commons.ChunkComponent.encode(message.chunkContexts[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.feed != null && message.feed.length)
                        for (var i = 0; i < message.feed.length; ++i)
                            $root.agrirouter.feed.response.HeaderQueryResponse.Feed.encode(message.feed[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.pendingMessageIds != null && message.pendingMessageIds.length)
                        for (var i = 0; i < message.pendingMessageIds.length; ++i)
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.pendingMessageIds[i]);
                    return writer;
                };

                /**
                 * Encodes the specified HeaderQueryResponse message, length delimited. Does not implicitly {@link agrirouter.feed.response.HeaderQueryResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IHeaderQueryResponse} message HeaderQueryResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HeaderQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a HeaderQueryResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.response.HeaderQueryResponse} HeaderQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeaderQueryResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.HeaderQueryResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.page = $root.agrirouter.feed.response.Page.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.chunkContexts && message.chunkContexts.length))
                                message.chunkContexts = [];
                            message.chunkContexts.push($root.agrirouter.commons.ChunkComponent.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.feed && message.feed.length))
                                message.feed = [];
                            message.feed.push($root.agrirouter.feed.response.HeaderQueryResponse.Feed.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.pendingMessageIds && message.pendingMessageIds.length))
                                message.pendingMessageIds = [];
                            message.pendingMessageIds.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a HeaderQueryResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.response.HeaderQueryResponse} HeaderQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HeaderQueryResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a HeaderQueryResponse message.
                 * @function verify
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HeaderQueryResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.queryMetrics != null && message.hasOwnProperty("queryMetrics")) {
                        var error = $root.agrirouter.feed.response.QueryMetrics.verify(message.queryMetrics);
                        if (error)
                            return "queryMetrics." + error;
                    }
                    if (message.page != null && message.hasOwnProperty("page")) {
                        var error = $root.agrirouter.feed.response.Page.verify(message.page);
                        if (error)
                            return "page." + error;
                    }
                    if (message.chunkContexts != null && message.hasOwnProperty("chunkContexts")) {
                        if (!Array.isArray(message.chunkContexts))
                            return "chunkContexts: array expected";
                        for (var i = 0; i < message.chunkContexts.length; ++i) {
                            var error = $root.agrirouter.commons.ChunkComponent.verify(message.chunkContexts[i]);
                            if (error)
                                return "chunkContexts." + error;
                        }
                    }
                    if (message.feed != null && message.hasOwnProperty("feed")) {
                        if (!Array.isArray(message.feed))
                            return "feed: array expected";
                        for (var i = 0; i < message.feed.length; ++i) {
                            var error = $root.agrirouter.feed.response.HeaderQueryResponse.Feed.verify(message.feed[i]);
                            if (error)
                                return "feed." + error;
                        }
                    }
                    if (message.pendingMessageIds != null && message.hasOwnProperty("pendingMessageIds")) {
                        if (!Array.isArray(message.pendingMessageIds))
                            return "pendingMessageIds: array expected";
                        for (var i = 0; i < message.pendingMessageIds.length; ++i)
                            if (!$util.isString(message.pendingMessageIds[i]))
                                return "pendingMessageIds: string[] expected";
                    }
                    return null;
                };

                /**
                 * Creates a HeaderQueryResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.response.HeaderQueryResponse} HeaderQueryResponse
                 */
                HeaderQueryResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.response.HeaderQueryResponse)
                        return object;
                    var message = new $root.agrirouter.feed.response.HeaderQueryResponse();
                    if (object.queryMetrics != null) {
                        if (typeof object.queryMetrics !== "object")
                            throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.queryMetrics: object expected");
                        message.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.fromObject(object.queryMetrics);
                    }
                    if (object.page != null) {
                        if (typeof object.page !== "object")
                            throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.page: object expected");
                        message.page = $root.agrirouter.feed.response.Page.fromObject(object.page);
                    }
                    if (object.chunkContexts) {
                        if (!Array.isArray(object.chunkContexts))
                            throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.chunkContexts: array expected");
                        message.chunkContexts = [];
                        for (var i = 0; i < object.chunkContexts.length; ++i) {
                            if (typeof object.chunkContexts[i] !== "object")
                                throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.chunkContexts: object expected");
                            message.chunkContexts[i] = $root.agrirouter.commons.ChunkComponent.fromObject(object.chunkContexts[i]);
                        }
                    }
                    if (object.feed) {
                        if (!Array.isArray(object.feed))
                            throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.feed: array expected");
                        message.feed = [];
                        for (var i = 0; i < object.feed.length; ++i) {
                            if (typeof object.feed[i] !== "object")
                                throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.feed: object expected");
                            message.feed[i] = $root.agrirouter.feed.response.HeaderQueryResponse.Feed.fromObject(object.feed[i]);
                        }
                    }
                    if (object.pendingMessageIds) {
                        if (!Array.isArray(object.pendingMessageIds))
                            throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.pendingMessageIds: array expected");
                        message.pendingMessageIds = [];
                        for (var i = 0; i < object.pendingMessageIds.length; ++i)
                            message.pendingMessageIds[i] = String(object.pendingMessageIds[i]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a HeaderQueryResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.HeaderQueryResponse} message HeaderQueryResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HeaderQueryResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.chunkContexts = [];
                        object.feed = [];
                        object.pendingMessageIds = [];
                    }
                    if (options.defaults) {
                        object.queryMetrics = null;
                        object.page = null;
                    }
                    if (message.queryMetrics != null && message.hasOwnProperty("queryMetrics"))
                        object.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.toObject(message.queryMetrics, options);
                    if (message.page != null && message.hasOwnProperty("page"))
                        object.page = $root.agrirouter.feed.response.Page.toObject(message.page, options);
                    if (message.chunkContexts && message.chunkContexts.length) {
                        object.chunkContexts = [];
                        for (var j = 0; j < message.chunkContexts.length; ++j)
                            object.chunkContexts[j] = $root.agrirouter.commons.ChunkComponent.toObject(message.chunkContexts[j], options);
                    }
                    if (message.feed && message.feed.length) {
                        object.feed = [];
                        for (var j = 0; j < message.feed.length; ++j)
                            object.feed[j] = $root.agrirouter.feed.response.HeaderQueryResponse.Feed.toObject(message.feed[j], options);
                    }
                    if (message.pendingMessageIds && message.pendingMessageIds.length) {
                        object.pendingMessageIds = [];
                        for (var j = 0; j < message.pendingMessageIds.length; ++j)
                            object.pendingMessageIds[j] = message.pendingMessageIds[j];
                    }
                    return object;
                };

                /**
                 * Converts this HeaderQueryResponse to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.response.HeaderQueryResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HeaderQueryResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                HeaderQueryResponse.Header = (function() {

                    /**
                     * Properties of a Header.
                     * @memberof agrirouter.feed.response.HeaderQueryResponse
                     * @interface IHeader
                     * @property {string|null} [messageId] Header messageId
                     * @property {string|null} [technicalMessageType] Header technicalMessageType
                     * @property {string|null} [teamSetContextId] Header teamSetContextId
                     * @property {string|null} [chunkContextId] Header chunkContextId
                     * @property {number|Long|null} [payloadSize] Header payloadSize
                     * @property {google.protobuf.ITimestamp|null} [sentTimestamp] Header sentTimestamp
                     * @property {number|Long|null} [sequenceNumber] Header sequenceNumber
                     * @property {number|Long|null} [currentChunk] Header currentChunk
                     * @property {google.protobuf.ITimestamp|null} [createdAt] Header createdAt
                     * @property {agrirouter.commons.IMetadata|null} [metadata] Header metadata
                     */

                    /**
                     * Constructs a new Header.
                     * @memberof agrirouter.feed.response.HeaderQueryResponse
                     * @classdesc Represents a Header.
                     * @implements IHeader
                     * @constructor
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IHeader=} [properties] Properties to set
                     */
                    function Header(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Header messageId.
                     * @member {string} messageId
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.messageId = "";

                    /**
                     * Header technicalMessageType.
                     * @member {string} technicalMessageType
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.technicalMessageType = "";

                    /**
                     * Header teamSetContextId.
                     * @member {string} teamSetContextId
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.teamSetContextId = "";

                    /**
                     * Header chunkContextId.
                     * @member {string} chunkContextId
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.chunkContextId = "";

                    /**
                     * Header payloadSize.
                     * @member {number|Long} payloadSize
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.payloadSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header sentTimestamp.
                     * @member {google.protobuf.ITimestamp|null|undefined} sentTimestamp
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.sentTimestamp = null;

                    /**
                     * Header sequenceNumber.
                     * @member {number|Long} sequenceNumber
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.sequenceNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header currentChunk.
                     * @member {number|Long} currentChunk
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.currentChunk = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header createdAt.
                     * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.createdAt = null;

                    /**
                     * Header metadata.
                     * @member {agrirouter.commons.IMetadata|null|undefined} metadata
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.metadata = null;

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IHeader=} [properties] Properties to set
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Header} Header instance
                     */
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link agrirouter.feed.response.HeaderQueryResponse.Header.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
                        if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.technicalMessageType);
                        if (message.teamSetContextId != null && Object.hasOwnProperty.call(message, "teamSetContextId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.teamSetContextId);
                        if (message.chunkContextId != null && Object.hasOwnProperty.call(message, "chunkContextId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.chunkContextId);
                        if (message.payloadSize != null && Object.hasOwnProperty.call(message, "payloadSize"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.payloadSize);
                        if (message.sentTimestamp != null && Object.hasOwnProperty.call(message, "sentTimestamp"))
                            $root.google.protobuf.Timestamp.encode(message.sentTimestamp, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.sequenceNumber != null && Object.hasOwnProperty.call(message, "sequenceNumber"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sequenceNumber);
                        if (message.currentChunk != null && Object.hasOwnProperty.call(message, "currentChunk"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.currentChunk);
                        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                            $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            $root.agrirouter.commons.Metadata.encode(message.metadata, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Header message, length delimited. Does not implicitly {@link agrirouter.feed.response.HeaderQueryResponse.Header.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.HeaderQueryResponse.Header();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.messageId = reader.string();
                                break;
                            case 2:
                                message.technicalMessageType = reader.string();
                                break;
                            case 3:
                                message.teamSetContextId = reader.string();
                                break;
                            case 4:
                                message.chunkContextId = reader.string();
                                break;
                            case 5:
                                message.payloadSize = reader.int64();
                                break;
                            case 6:
                                message.sentTimestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.sequenceNumber = reader.int64();
                                break;
                            case 8:
                                message.currentChunk = reader.int64();
                                break;
                            case 9:
                                message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 10:
                                message.metadata = $root.agrirouter.commons.Metadata.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Header message.
                     * @function verify
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Header.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            if (!$util.isString(message.messageId))
                                return "messageId: string expected";
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            if (!$util.isString(message.technicalMessageType))
                                return "technicalMessageType: string expected";
                        if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                            if (!$util.isString(message.teamSetContextId))
                                return "teamSetContextId: string expected";
                        if (message.chunkContextId != null && message.hasOwnProperty("chunkContextId"))
                            if (!$util.isString(message.chunkContextId))
                                return "chunkContextId: string expected";
                        if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                            if (!$util.isInteger(message.payloadSize) && !(message.payloadSize && $util.isInteger(message.payloadSize.low) && $util.isInteger(message.payloadSize.high)))
                                return "payloadSize: integer|Long expected";
                        if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.sentTimestamp);
                            if (error)
                                return "sentTimestamp." + error;
                        }
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (!$util.isInteger(message.sequenceNumber) && !(message.sequenceNumber && $util.isInteger(message.sequenceNumber.low) && $util.isInteger(message.sequenceNumber.high)))
                                return "sequenceNumber: integer|Long expected";
                        if (message.currentChunk != null && message.hasOwnProperty("currentChunk"))
                            if (!$util.isInteger(message.currentChunk) && !(message.currentChunk && $util.isInteger(message.currentChunk.low) && $util.isInteger(message.currentChunk.high)))
                                return "currentChunk: integer|Long expected";
                        if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                            if (error)
                                return "createdAt." + error;
                        }
                        if (message.metadata != null && message.hasOwnProperty("metadata")) {
                            var error = $root.agrirouter.commons.Metadata.verify(message.metadata);
                            if (error)
                                return "metadata." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Header message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Header} Header
                     */
                    Header.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.feed.response.HeaderQueryResponse.Header)
                            return object;
                        var message = new $root.agrirouter.feed.response.HeaderQueryResponse.Header();
                        if (object.messageId != null)
                            message.messageId = String(object.messageId);
                        if (object.technicalMessageType != null)
                            message.technicalMessageType = String(object.technicalMessageType);
                        if (object.teamSetContextId != null)
                            message.teamSetContextId = String(object.teamSetContextId);
                        if (object.chunkContextId != null)
                            message.chunkContextId = String(object.chunkContextId);
                        if (object.payloadSize != null)
                            if ($util.Long)
                                (message.payloadSize = $util.Long.fromValue(object.payloadSize)).unsigned = false;
                            else if (typeof object.payloadSize === "string")
                                message.payloadSize = parseInt(object.payloadSize, 10);
                            else if (typeof object.payloadSize === "number")
                                message.payloadSize = object.payloadSize;
                            else if (typeof object.payloadSize === "object")
                                message.payloadSize = new $util.LongBits(object.payloadSize.low >>> 0, object.payloadSize.high >>> 0).toNumber();
                        if (object.sentTimestamp != null) {
                            if (typeof object.sentTimestamp !== "object")
                                throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.Header.sentTimestamp: object expected");
                            message.sentTimestamp = $root.google.protobuf.Timestamp.fromObject(object.sentTimestamp);
                        }
                        if (object.sequenceNumber != null)
                            if ($util.Long)
                                (message.sequenceNumber = $util.Long.fromValue(object.sequenceNumber)).unsigned = false;
                            else if (typeof object.sequenceNumber === "string")
                                message.sequenceNumber = parseInt(object.sequenceNumber, 10);
                            else if (typeof object.sequenceNumber === "number")
                                message.sequenceNumber = object.sequenceNumber;
                            else if (typeof object.sequenceNumber === "object")
                                message.sequenceNumber = new $util.LongBits(object.sequenceNumber.low >>> 0, object.sequenceNumber.high >>> 0).toNumber();
                        if (object.currentChunk != null)
                            if ($util.Long)
                                (message.currentChunk = $util.Long.fromValue(object.currentChunk)).unsigned = false;
                            else if (typeof object.currentChunk === "string")
                                message.currentChunk = parseInt(object.currentChunk, 10);
                            else if (typeof object.currentChunk === "number")
                                message.currentChunk = object.currentChunk;
                            else if (typeof object.currentChunk === "object")
                                message.currentChunk = new $util.LongBits(object.currentChunk.low >>> 0, object.currentChunk.high >>> 0).toNumber();
                        if (object.createdAt != null) {
                            if (typeof object.createdAt !== "object")
                                throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.Header.createdAt: object expected");
                            message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                        }
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.Header.metadata: object expected");
                            message.metadata = $root.agrirouter.commons.Metadata.fromObject(object.metadata);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Header message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.Header} message Header
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Header.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.messageId = "";
                            object.technicalMessageType = "";
                            object.teamSetContextId = "";
                            object.chunkContextId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.payloadSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.payloadSize = options.longs === String ? "0" : 0;
                            object.sentTimestamp = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.sequenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.sequenceNumber = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.currentChunk = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.currentChunk = options.longs === String ? "0" : 0;
                            object.createdAt = null;
                            object.metadata = null;
                        }
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            object.messageId = message.messageId;
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            object.technicalMessageType = message.technicalMessageType;
                        if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                            object.teamSetContextId = message.teamSetContextId;
                        if (message.chunkContextId != null && message.hasOwnProperty("chunkContextId"))
                            object.chunkContextId = message.chunkContextId;
                        if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                            if (typeof message.payloadSize === "number")
                                object.payloadSize = options.longs === String ? String(message.payloadSize) : message.payloadSize;
                            else
                                object.payloadSize = options.longs === String ? $util.Long.prototype.toString.call(message.payloadSize) : options.longs === Number ? new $util.LongBits(message.payloadSize.low >>> 0, message.payloadSize.high >>> 0).toNumber() : message.payloadSize;
                        if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp"))
                            object.sentTimestamp = $root.google.protobuf.Timestamp.toObject(message.sentTimestamp, options);
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (typeof message.sequenceNumber === "number")
                                object.sequenceNumber = options.longs === String ? String(message.sequenceNumber) : message.sequenceNumber;
                            else
                                object.sequenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceNumber) : options.longs === Number ? new $util.LongBits(message.sequenceNumber.low >>> 0, message.sequenceNumber.high >>> 0).toNumber() : message.sequenceNumber;
                        if (message.currentChunk != null && message.hasOwnProperty("currentChunk"))
                            if (typeof message.currentChunk === "number")
                                object.currentChunk = options.longs === String ? String(message.currentChunk) : message.currentChunk;
                            else
                                object.currentChunk = options.longs === String ? $util.Long.prototype.toString.call(message.currentChunk) : options.longs === Number ? new $util.LongBits(message.currentChunk.low >>> 0, message.currentChunk.high >>> 0).toNumber() : message.currentChunk;
                        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                            object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.agrirouter.commons.Metadata.toObject(message.metadata, options);
                        return object;
                    };

                    /**
                     * Converts this Header to JSON.
                     * @function toJSON
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Header
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Header.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Header;
                })();

                HeaderQueryResponse.Feed = (function() {

                    /**
                     * Properties of a Feed.
                     * @memberof agrirouter.feed.response.HeaderQueryResponse
                     * @interface IFeed
                     * @property {string|null} [senderId] Feed senderId
                     * @property {string|null} [receiverId] Feed receiverId
                     * @property {Array.<agrirouter.feed.response.HeaderQueryResponse.IHeader>|null} [headers] Feed headers
                     */

                    /**
                     * Constructs a new Feed.
                     * @memberof agrirouter.feed.response.HeaderQueryResponse
                     * @classdesc Represents a Feed.
                     * @implements IFeed
                     * @constructor
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IFeed=} [properties] Properties to set
                     */
                    function Feed(properties) {
                        this.headers = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Feed senderId.
                     * @member {string} senderId
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @instance
                     */
                    Feed.prototype.senderId = "";

                    /**
                     * Feed receiverId.
                     * @member {string} receiverId
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @instance
                     */
                    Feed.prototype.receiverId = "";

                    /**
                     * Feed headers.
                     * @member {Array.<agrirouter.feed.response.HeaderQueryResponse.IHeader>} headers
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @instance
                     */
                    Feed.prototype.headers = $util.emptyArray;

                    /**
                     * Creates a new Feed instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IFeed=} [properties] Properties to set
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Feed} Feed instance
                     */
                    Feed.create = function create(properties) {
                        return new Feed(properties);
                    };

                    /**
                     * Encodes the specified Feed message. Does not implicitly {@link agrirouter.feed.response.HeaderQueryResponse.Feed.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IFeed} message Feed message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Feed.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.senderId);
                        if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.receiverId);
                        if (message.headers != null && message.headers.length)
                            for (var i = 0; i < message.headers.length; ++i)
                                $root.agrirouter.feed.response.HeaderQueryResponse.Header.encode(message.headers[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Feed message, length delimited. Does not implicitly {@link agrirouter.feed.response.HeaderQueryResponse.Feed.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.IFeed} message Feed message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Feed.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Feed message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Feed} Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feed.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.HeaderQueryResponse.Feed();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.senderId = reader.string();
                                break;
                            case 2:
                                message.receiverId = reader.string();
                                break;
                            case 3:
                                if (!(message.headers && message.headers.length))
                                    message.headers = [];
                                message.headers.push($root.agrirouter.feed.response.HeaderQueryResponse.Header.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Feed message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Feed} Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Feed.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Feed message.
                     * @function verify
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Feed.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.senderId != null && message.hasOwnProperty("senderId"))
                            if (!$util.isString(message.senderId))
                                return "senderId: string expected";
                        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                            if (!$util.isString(message.receiverId))
                                return "receiverId: string expected";
                        if (message.headers != null && message.hasOwnProperty("headers")) {
                            if (!Array.isArray(message.headers))
                                return "headers: array expected";
                            for (var i = 0; i < message.headers.length; ++i) {
                                var error = $root.agrirouter.feed.response.HeaderQueryResponse.Header.verify(message.headers[i]);
                                if (error)
                                    return "headers." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a Feed message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.feed.response.HeaderQueryResponse.Feed} Feed
                     */
                    Feed.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.feed.response.HeaderQueryResponse.Feed)
                            return object;
                        var message = new $root.agrirouter.feed.response.HeaderQueryResponse.Feed();
                        if (object.senderId != null)
                            message.senderId = String(object.senderId);
                        if (object.receiverId != null)
                            message.receiverId = String(object.receiverId);
                        if (object.headers) {
                            if (!Array.isArray(object.headers))
                                throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.Feed.headers: array expected");
                            message.headers = [];
                            for (var i = 0; i < object.headers.length; ++i) {
                                if (typeof object.headers[i] !== "object")
                                    throw TypeError(".agrirouter.feed.response.HeaderQueryResponse.Feed.headers: object expected");
                                message.headers[i] = $root.agrirouter.feed.response.HeaderQueryResponse.Header.fromObject(object.headers[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Feed message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @static
                     * @param {agrirouter.feed.response.HeaderQueryResponse.Feed} message Feed
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Feed.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.headers = [];
                        if (options.defaults) {
                            object.senderId = "";
                            object.receiverId = "";
                        }
                        if (message.senderId != null && message.hasOwnProperty("senderId"))
                            object.senderId = message.senderId;
                        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                            object.receiverId = message.receiverId;
                        if (message.headers && message.headers.length) {
                            object.headers = [];
                            for (var j = 0; j < message.headers.length; ++j)
                                object.headers[j] = $root.agrirouter.feed.response.HeaderQueryResponse.Header.toObject(message.headers[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this Feed to JSON.
                     * @function toJSON
                     * @memberof agrirouter.feed.response.HeaderQueryResponse.Feed
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Feed.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Feed;
                })();

                return HeaderQueryResponse;
            })();

            response.MessageQueryResponse = (function() {

                /**
                 * Properties of a MessageQueryResponse.
                 * @memberof agrirouter.feed.response
                 * @interface IMessageQueryResponse
                 * @property {agrirouter.feed.response.IQueryMetrics|null} [queryMetrics] MessageQueryResponse queryMetrics
                 * @property {agrirouter.feed.response.IPage|null} [page] MessageQueryResponse page
                 * @property {Array.<agrirouter.feed.response.MessageQueryResponse.IFeedMessage>|null} [messages] MessageQueryResponse messages
                 */

                /**
                 * Constructs a new MessageQueryResponse.
                 * @memberof agrirouter.feed.response
                 * @classdesc Represents a MessageQueryResponse.
                 * @implements IMessageQueryResponse
                 * @constructor
                 * @param {agrirouter.feed.response.IMessageQueryResponse=} [properties] Properties to set
                 */
                function MessageQueryResponse(properties) {
                    this.messages = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * MessageQueryResponse queryMetrics.
                 * @member {agrirouter.feed.response.IQueryMetrics|null|undefined} queryMetrics
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @instance
                 */
                MessageQueryResponse.prototype.queryMetrics = null;

                /**
                 * MessageQueryResponse page.
                 * @member {agrirouter.feed.response.IPage|null|undefined} page
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @instance
                 */
                MessageQueryResponse.prototype.page = null;

                /**
                 * MessageQueryResponse messages.
                 * @member {Array.<agrirouter.feed.response.MessageQueryResponse.IFeedMessage>} messages
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @instance
                 */
                MessageQueryResponse.prototype.messages = $util.emptyArray;

                /**
                 * Creates a new MessageQueryResponse instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IMessageQueryResponse=} [properties] Properties to set
                 * @returns {agrirouter.feed.response.MessageQueryResponse} MessageQueryResponse instance
                 */
                MessageQueryResponse.create = function create(properties) {
                    return new MessageQueryResponse(properties);
                };

                /**
                 * Encodes the specified MessageQueryResponse message. Does not implicitly {@link agrirouter.feed.response.MessageQueryResponse.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IMessageQueryResponse} message MessageQueryResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageQueryResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.queryMetrics != null && Object.hasOwnProperty.call(message, "queryMetrics"))
                        $root.agrirouter.feed.response.QueryMetrics.encode(message.queryMetrics, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                        $root.agrirouter.feed.response.Page.encode(message.page, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.messages != null && message.messages.length)
                        for (var i = 0; i < message.messages.length; ++i)
                            $root.agrirouter.feed.response.MessageQueryResponse.FeedMessage.encode(message.messages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified MessageQueryResponse message, length delimited. Does not implicitly {@link agrirouter.feed.response.MessageQueryResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IMessageQueryResponse} message MessageQueryResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a MessageQueryResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.response.MessageQueryResponse} MessageQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageQueryResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.MessageQueryResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.page = $root.agrirouter.feed.response.Page.decode(reader, reader.uint32());
                            break;
                        case 3:
                            if (!(message.messages && message.messages.length))
                                message.messages = [];
                            message.messages.push($root.agrirouter.feed.response.MessageQueryResponse.FeedMessage.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a MessageQueryResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.response.MessageQueryResponse} MessageQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageQueryResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageQueryResponse message.
                 * @function verify
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageQueryResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.queryMetrics != null && message.hasOwnProperty("queryMetrics")) {
                        var error = $root.agrirouter.feed.response.QueryMetrics.verify(message.queryMetrics);
                        if (error)
                            return "queryMetrics." + error;
                    }
                    if (message.page != null && message.hasOwnProperty("page")) {
                        var error = $root.agrirouter.feed.response.Page.verify(message.page);
                        if (error)
                            return "page." + error;
                    }
                    if (message.messages != null && message.hasOwnProperty("messages")) {
                        if (!Array.isArray(message.messages))
                            return "messages: array expected";
                        for (var i = 0; i < message.messages.length; ++i) {
                            var error = $root.agrirouter.feed.response.MessageQueryResponse.FeedMessage.verify(message.messages[i]);
                            if (error)
                                return "messages." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a MessageQueryResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.response.MessageQueryResponse} MessageQueryResponse
                 */
                MessageQueryResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.response.MessageQueryResponse)
                        return object;
                    var message = new $root.agrirouter.feed.response.MessageQueryResponse();
                    if (object.queryMetrics != null) {
                        if (typeof object.queryMetrics !== "object")
                            throw TypeError(".agrirouter.feed.response.MessageQueryResponse.queryMetrics: object expected");
                        message.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.fromObject(object.queryMetrics);
                    }
                    if (object.page != null) {
                        if (typeof object.page !== "object")
                            throw TypeError(".agrirouter.feed.response.MessageQueryResponse.page: object expected");
                        message.page = $root.agrirouter.feed.response.Page.fromObject(object.page);
                    }
                    if (object.messages) {
                        if (!Array.isArray(object.messages))
                            throw TypeError(".agrirouter.feed.response.MessageQueryResponse.messages: array expected");
                        message.messages = [];
                        for (var i = 0; i < object.messages.length; ++i) {
                            if (typeof object.messages[i] !== "object")
                                throw TypeError(".agrirouter.feed.response.MessageQueryResponse.messages: object expected");
                            message.messages[i] = $root.agrirouter.feed.response.MessageQueryResponse.FeedMessage.fromObject(object.messages[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a MessageQueryResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.MessageQueryResponse} message MessageQueryResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageQueryResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.messages = [];
                    if (options.defaults) {
                        object.queryMetrics = null;
                        object.page = null;
                    }
                    if (message.queryMetrics != null && message.hasOwnProperty("queryMetrics"))
                        object.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.toObject(message.queryMetrics, options);
                    if (message.page != null && message.hasOwnProperty("page"))
                        object.page = $root.agrirouter.feed.response.Page.toObject(message.page, options);
                    if (message.messages && message.messages.length) {
                        object.messages = [];
                        for (var j = 0; j < message.messages.length; ++j)
                            object.messages[j] = $root.agrirouter.feed.response.MessageQueryResponse.FeedMessage.toObject(message.messages[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this MessageQueryResponse to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.response.MessageQueryResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageQueryResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                MessageQueryResponse.Header = (function() {

                    /**
                     * Properties of a Header.
                     * @memberof agrirouter.feed.response.MessageQueryResponse
                     * @interface IHeader
                     * @property {string|null} [receiverId] Header receiverId
                     * @property {string|null} [technicalMessageType] Header technicalMessageType
                     * @property {string|null} [teamSetContextId] Header teamSetContextId
                     * @property {agrirouter.commons.IChunkComponent|null} [chunkContext] Header chunkContext
                     * @property {number|Long|null} [payloadSize] Header payloadSize
                     * @property {google.protobuf.ITimestamp|null} [sentTimestamp] Header sentTimestamp
                     * @property {number|Long|null} [sequenceNumber] Header sequenceNumber
                     * @property {string|null} [senderId] Header senderId
                     * @property {google.protobuf.ITimestamp|null} [createdAt] Header createdAt
                     * @property {string|null} [messageId] Header messageId
                     * @property {agrirouter.commons.IMetadata|null} [metadata] Header metadata
                     */

                    /**
                     * Constructs a new Header.
                     * @memberof agrirouter.feed.response.MessageQueryResponse
                     * @classdesc Represents a Header.
                     * @implements IHeader
                     * @constructor
                     * @param {agrirouter.feed.response.MessageQueryResponse.IHeader=} [properties] Properties to set
                     */
                    function Header(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Header receiverId.
                     * @member {string} receiverId
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.receiverId = "";

                    /**
                     * Header technicalMessageType.
                     * @member {string} technicalMessageType
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.technicalMessageType = "";

                    /**
                     * Header teamSetContextId.
                     * @member {string} teamSetContextId
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.teamSetContextId = "";

                    /**
                     * Header chunkContext.
                     * @member {agrirouter.commons.IChunkComponent|null|undefined} chunkContext
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.chunkContext = null;

                    /**
                     * Header payloadSize.
                     * @member {number|Long} payloadSize
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.payloadSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header sentTimestamp.
                     * @member {google.protobuf.ITimestamp|null|undefined} sentTimestamp
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.sentTimestamp = null;

                    /**
                     * Header sequenceNumber.
                     * @member {number|Long} sequenceNumber
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.sequenceNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header senderId.
                     * @member {string} senderId
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.senderId = "";

                    /**
                     * Header createdAt.
                     * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.createdAt = null;

                    /**
                     * Header messageId.
                     * @member {string} messageId
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.messageId = "";

                    /**
                     * Header metadata.
                     * @member {agrirouter.commons.IMetadata|null|undefined} metadata
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.metadata = null;

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.IHeader=} [properties] Properties to set
                     * @returns {agrirouter.feed.response.MessageQueryResponse.Header} Header instance
                     */
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link agrirouter.feed.response.MessageQueryResponse.Header.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.receiverId);
                        if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.technicalMessageType);
                        if (message.teamSetContextId != null && Object.hasOwnProperty.call(message, "teamSetContextId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.teamSetContextId);
                        if (message.chunkContext != null && Object.hasOwnProperty.call(message, "chunkContext"))
                            $root.agrirouter.commons.ChunkComponent.encode(message.chunkContext, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.payloadSize != null && Object.hasOwnProperty.call(message, "payloadSize"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.payloadSize);
                        if (message.sentTimestamp != null && Object.hasOwnProperty.call(message, "sentTimestamp"))
                            $root.google.protobuf.Timestamp.encode(message.sentTimestamp, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.sequenceNumber != null && Object.hasOwnProperty.call(message, "sequenceNumber"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sequenceNumber);
                        if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.senderId);
                        if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                            $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                        if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.messageId);
                        if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                            $root.agrirouter.commons.Metadata.encode(message.metadata, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Header message, length delimited. Does not implicitly {@link agrirouter.feed.response.MessageQueryResponse.Header.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.feed.response.MessageQueryResponse.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.MessageQueryResponse.Header();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.receiverId = reader.string();
                                break;
                            case 2:
                                message.technicalMessageType = reader.string();
                                break;
                            case 3:
                                message.teamSetContextId = reader.string();
                                break;
                            case 4:
                                message.chunkContext = $root.agrirouter.commons.ChunkComponent.decode(reader, reader.uint32());
                                break;
                            case 5:
                                message.payloadSize = reader.int64();
                                break;
                            case 6:
                                message.sentTimestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 7:
                                message.sequenceNumber = reader.int64();
                                break;
                            case 8:
                                message.senderId = reader.string();
                                break;
                            case 9:
                                message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            case 10:
                                message.messageId = reader.string();
                                break;
                            case 11:
                                message.metadata = $root.agrirouter.commons.Metadata.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.feed.response.MessageQueryResponse.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Header message.
                     * @function verify
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Header.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                            if (!$util.isString(message.receiverId))
                                return "receiverId: string expected";
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            if (!$util.isString(message.technicalMessageType))
                                return "technicalMessageType: string expected";
                        if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                            if (!$util.isString(message.teamSetContextId))
                                return "teamSetContextId: string expected";
                        if (message.chunkContext != null && message.hasOwnProperty("chunkContext")) {
                            var error = $root.agrirouter.commons.ChunkComponent.verify(message.chunkContext);
                            if (error)
                                return "chunkContext." + error;
                        }
                        if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                            if (!$util.isInteger(message.payloadSize) && !(message.payloadSize && $util.isInteger(message.payloadSize.low) && $util.isInteger(message.payloadSize.high)))
                                return "payloadSize: integer|Long expected";
                        if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.sentTimestamp);
                            if (error)
                                return "sentTimestamp." + error;
                        }
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (!$util.isInteger(message.sequenceNumber) && !(message.sequenceNumber && $util.isInteger(message.sequenceNumber.low) && $util.isInteger(message.sequenceNumber.high)))
                                return "sequenceNumber: integer|Long expected";
                        if (message.senderId != null && message.hasOwnProperty("senderId"))
                            if (!$util.isString(message.senderId))
                                return "senderId: string expected";
                        if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                            if (error)
                                return "createdAt." + error;
                        }
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            if (!$util.isString(message.messageId))
                                return "messageId: string expected";
                        if (message.metadata != null && message.hasOwnProperty("metadata")) {
                            var error = $root.agrirouter.commons.Metadata.verify(message.metadata);
                            if (error)
                                return "metadata." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Header message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.feed.response.MessageQueryResponse.Header} Header
                     */
                    Header.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.feed.response.MessageQueryResponse.Header)
                            return object;
                        var message = new $root.agrirouter.feed.response.MessageQueryResponse.Header();
                        if (object.receiverId != null)
                            message.receiverId = String(object.receiverId);
                        if (object.technicalMessageType != null)
                            message.technicalMessageType = String(object.technicalMessageType);
                        if (object.teamSetContextId != null)
                            message.teamSetContextId = String(object.teamSetContextId);
                        if (object.chunkContext != null) {
                            if (typeof object.chunkContext !== "object")
                                throw TypeError(".agrirouter.feed.response.MessageQueryResponse.Header.chunkContext: object expected");
                            message.chunkContext = $root.agrirouter.commons.ChunkComponent.fromObject(object.chunkContext);
                        }
                        if (object.payloadSize != null)
                            if ($util.Long)
                                (message.payloadSize = $util.Long.fromValue(object.payloadSize)).unsigned = false;
                            else if (typeof object.payloadSize === "string")
                                message.payloadSize = parseInt(object.payloadSize, 10);
                            else if (typeof object.payloadSize === "number")
                                message.payloadSize = object.payloadSize;
                            else if (typeof object.payloadSize === "object")
                                message.payloadSize = new $util.LongBits(object.payloadSize.low >>> 0, object.payloadSize.high >>> 0).toNumber();
                        if (object.sentTimestamp != null) {
                            if (typeof object.sentTimestamp !== "object")
                                throw TypeError(".agrirouter.feed.response.MessageQueryResponse.Header.sentTimestamp: object expected");
                            message.sentTimestamp = $root.google.protobuf.Timestamp.fromObject(object.sentTimestamp);
                        }
                        if (object.sequenceNumber != null)
                            if ($util.Long)
                                (message.sequenceNumber = $util.Long.fromValue(object.sequenceNumber)).unsigned = false;
                            else if (typeof object.sequenceNumber === "string")
                                message.sequenceNumber = parseInt(object.sequenceNumber, 10);
                            else if (typeof object.sequenceNumber === "number")
                                message.sequenceNumber = object.sequenceNumber;
                            else if (typeof object.sequenceNumber === "object")
                                message.sequenceNumber = new $util.LongBits(object.sequenceNumber.low >>> 0, object.sequenceNumber.high >>> 0).toNumber();
                        if (object.senderId != null)
                            message.senderId = String(object.senderId);
                        if (object.createdAt != null) {
                            if (typeof object.createdAt !== "object")
                                throw TypeError(".agrirouter.feed.response.MessageQueryResponse.Header.createdAt: object expected");
                            message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                        }
                        if (object.messageId != null)
                            message.messageId = String(object.messageId);
                        if (object.metadata != null) {
                            if (typeof object.metadata !== "object")
                                throw TypeError(".agrirouter.feed.response.MessageQueryResponse.Header.metadata: object expected");
                            message.metadata = $root.agrirouter.commons.Metadata.fromObject(object.metadata);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Header message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.Header} message Header
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Header.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.receiverId = "";
                            object.technicalMessageType = "";
                            object.teamSetContextId = "";
                            object.chunkContext = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.payloadSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.payloadSize = options.longs === String ? "0" : 0;
                            object.sentTimestamp = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.sequenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.sequenceNumber = options.longs === String ? "0" : 0;
                            object.senderId = "";
                            object.createdAt = null;
                            object.messageId = "";
                            object.metadata = null;
                        }
                        if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                            object.receiverId = message.receiverId;
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            object.technicalMessageType = message.technicalMessageType;
                        if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                            object.teamSetContextId = message.teamSetContextId;
                        if (message.chunkContext != null && message.hasOwnProperty("chunkContext"))
                            object.chunkContext = $root.agrirouter.commons.ChunkComponent.toObject(message.chunkContext, options);
                        if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                            if (typeof message.payloadSize === "number")
                                object.payloadSize = options.longs === String ? String(message.payloadSize) : message.payloadSize;
                            else
                                object.payloadSize = options.longs === String ? $util.Long.prototype.toString.call(message.payloadSize) : options.longs === Number ? new $util.LongBits(message.payloadSize.low >>> 0, message.payloadSize.high >>> 0).toNumber() : message.payloadSize;
                        if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp"))
                            object.sentTimestamp = $root.google.protobuf.Timestamp.toObject(message.sentTimestamp, options);
                        if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                            if (typeof message.sequenceNumber === "number")
                                object.sequenceNumber = options.longs === String ? String(message.sequenceNumber) : message.sequenceNumber;
                            else
                                object.sequenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceNumber) : options.longs === Number ? new $util.LongBits(message.sequenceNumber.low >>> 0, message.sequenceNumber.high >>> 0).toNumber() : message.sequenceNumber;
                        if (message.senderId != null && message.hasOwnProperty("senderId"))
                            object.senderId = message.senderId;
                        if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                            object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                        if (message.messageId != null && message.hasOwnProperty("messageId"))
                            object.messageId = message.messageId;
                        if (message.metadata != null && message.hasOwnProperty("metadata"))
                            object.metadata = $root.agrirouter.commons.Metadata.toObject(message.metadata, options);
                        return object;
                    };

                    /**
                     * Converts this Header to JSON.
                     * @function toJSON
                     * @memberof agrirouter.feed.response.MessageQueryResponse.Header
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Header.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Header;
                })();

                MessageQueryResponse.FeedMessage = (function() {

                    /**
                     * Properties of a FeedMessage.
                     * @memberof agrirouter.feed.response.MessageQueryResponse
                     * @interface IFeedMessage
                     * @property {agrirouter.feed.response.MessageQueryResponse.IHeader|null} [header] FeedMessage header
                     * @property {google.protobuf.IAny|null} [content] FeedMessage content
                     */

                    /**
                     * Constructs a new FeedMessage.
                     * @memberof agrirouter.feed.response.MessageQueryResponse
                     * @classdesc Represents a FeedMessage.
                     * @implements IFeedMessage
                     * @constructor
                     * @param {agrirouter.feed.response.MessageQueryResponse.IFeedMessage=} [properties] Properties to set
                     */
                    function FeedMessage(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * FeedMessage header.
                     * @member {agrirouter.feed.response.MessageQueryResponse.IHeader|null|undefined} header
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @instance
                     */
                    FeedMessage.prototype.header = null;

                    /**
                     * FeedMessage content.
                     * @member {google.protobuf.IAny|null|undefined} content
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @instance
                     */
                    FeedMessage.prototype.content = null;

                    /**
                     * Creates a new FeedMessage instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.IFeedMessage=} [properties] Properties to set
                     * @returns {agrirouter.feed.response.MessageQueryResponse.FeedMessage} FeedMessage instance
                     */
                    FeedMessage.create = function create(properties) {
                        return new FeedMessage(properties);
                    };

                    /**
                     * Encodes the specified FeedMessage message. Does not implicitly {@link agrirouter.feed.response.MessageQueryResponse.FeedMessage.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.IFeedMessage} message FeedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FeedMessage.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                            $root.agrirouter.feed.response.MessageQueryResponse.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                            $root.google.protobuf.Any.encode(message.content, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified FeedMessage message, length delimited. Does not implicitly {@link agrirouter.feed.response.MessageQueryResponse.FeedMessage.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.IFeedMessage} message FeedMessage message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FeedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a FeedMessage message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.feed.response.MessageQueryResponse.FeedMessage} FeedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FeedMessage.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.MessageQueryResponse.FeedMessage();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.header = $root.agrirouter.feed.response.MessageQueryResponse.Header.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.content = $root.google.protobuf.Any.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a FeedMessage message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.feed.response.MessageQueryResponse.FeedMessage} FeedMessage
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FeedMessage.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a FeedMessage message.
                     * @function verify
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FeedMessage.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.header != null && message.hasOwnProperty("header")) {
                            var error = $root.agrirouter.feed.response.MessageQueryResponse.Header.verify(message.header);
                            if (error)
                                return "header." + error;
                        }
                        if (message.content != null && message.hasOwnProperty("content")) {
                            var error = $root.google.protobuf.Any.verify(message.content);
                            if (error)
                                return "content." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.feed.response.MessageQueryResponse.FeedMessage} FeedMessage
                     */
                    FeedMessage.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.feed.response.MessageQueryResponse.FeedMessage)
                            return object;
                        var message = new $root.agrirouter.feed.response.MessageQueryResponse.FeedMessage();
                        if (object.header != null) {
                            if (typeof object.header !== "object")
                                throw TypeError(".agrirouter.feed.response.MessageQueryResponse.FeedMessage.header: object expected");
                            message.header = $root.agrirouter.feed.response.MessageQueryResponse.Header.fromObject(object.header);
                        }
                        if (object.content != null) {
                            if (typeof object.content !== "object")
                                throw TypeError(".agrirouter.feed.response.MessageQueryResponse.FeedMessage.content: object expected");
                            message.content = $root.google.protobuf.Any.fromObject(object.content);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a FeedMessage message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @static
                     * @param {agrirouter.feed.response.MessageQueryResponse.FeedMessage} message FeedMessage
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FeedMessage.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.header = null;
                            object.content = null;
                        }
                        if (message.header != null && message.hasOwnProperty("header"))
                            object.header = $root.agrirouter.feed.response.MessageQueryResponse.Header.toObject(message.header, options);
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = $root.google.protobuf.Any.toObject(message.content, options);
                        return object;
                    };

                    /**
                     * Converts this FeedMessage to JSON.
                     * @function toJSON
                     * @memberof agrirouter.feed.response.MessageQueryResponse.FeedMessage
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FeedMessage.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return FeedMessage;
                })();

                return MessageQueryResponse;
            })();

            response.FailedMessageQueryResponse = (function() {

                /**
                 * Properties of a FailedMessageQueryResponse.
                 * @memberof agrirouter.feed.response
                 * @interface IFailedMessageQueryResponse
                 * @property {agrirouter.feed.response.IQueryMetrics|null} [queryMetrics] FailedMessageQueryResponse queryMetrics
                 * @property {agrirouter.feed.response.IPage|null} [page] FailedMessageQueryResponse page
                 * @property {agrirouter.feed.response.FailedMessageQueryResponse.IHeader|null} [header] FailedMessageQueryResponse header
                 * @property {Array.<agrirouter.commons.IMessage>|null} [reasons] FailedMessageQueryResponse reasons
                 */

                /**
                 * Constructs a new FailedMessageQueryResponse.
                 * @memberof agrirouter.feed.response
                 * @classdesc Represents a FailedMessageQueryResponse.
                 * @implements IFailedMessageQueryResponse
                 * @constructor
                 * @param {agrirouter.feed.response.IFailedMessageQueryResponse=} [properties] Properties to set
                 */
                function FailedMessageQueryResponse(properties) {
                    this.reasons = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FailedMessageQueryResponse queryMetrics.
                 * @member {agrirouter.feed.response.IQueryMetrics|null|undefined} queryMetrics
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @instance
                 */
                FailedMessageQueryResponse.prototype.queryMetrics = null;

                /**
                 * FailedMessageQueryResponse page.
                 * @member {agrirouter.feed.response.IPage|null|undefined} page
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @instance
                 */
                FailedMessageQueryResponse.prototype.page = null;

                /**
                 * FailedMessageQueryResponse header.
                 * @member {agrirouter.feed.response.FailedMessageQueryResponse.IHeader|null|undefined} header
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @instance
                 */
                FailedMessageQueryResponse.prototype.header = null;

                /**
                 * FailedMessageQueryResponse reasons.
                 * @member {Array.<agrirouter.commons.IMessage>} reasons
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @instance
                 */
                FailedMessageQueryResponse.prototype.reasons = $util.emptyArray;

                /**
                 * Creates a new FailedMessageQueryResponse instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IFailedMessageQueryResponse=} [properties] Properties to set
                 * @returns {agrirouter.feed.response.FailedMessageQueryResponse} FailedMessageQueryResponse instance
                 */
                FailedMessageQueryResponse.create = function create(properties) {
                    return new FailedMessageQueryResponse(properties);
                };

                /**
                 * Encodes the specified FailedMessageQueryResponse message. Does not implicitly {@link agrirouter.feed.response.FailedMessageQueryResponse.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IFailedMessageQueryResponse} message FailedMessageQueryResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FailedMessageQueryResponse.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.queryMetrics != null && Object.hasOwnProperty.call(message, "queryMetrics"))
                        $root.agrirouter.feed.response.QueryMetrics.encode(message.queryMetrics, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                        $root.agrirouter.feed.response.Page.encode(message.page, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                        $root.agrirouter.feed.response.FailedMessageQueryResponse.Header.encode(message.header, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.reasons != null && message.reasons.length)
                        for (var i = 0; i < message.reasons.length; ++i)
                            $root.agrirouter.commons.Message.encode(message.reasons[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified FailedMessageQueryResponse message, length delimited. Does not implicitly {@link agrirouter.feed.response.FailedMessageQueryResponse.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.IFailedMessageQueryResponse} message FailedMessageQueryResponse message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FailedMessageQueryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FailedMessageQueryResponse message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.feed.response.FailedMessageQueryResponse} FailedMessageQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FailedMessageQueryResponse.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.FailedMessageQueryResponse();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.decode(reader, reader.uint32());
                            break;
                        case 2:
                            message.page = $root.agrirouter.feed.response.Page.decode(reader, reader.uint32());
                            break;
                        case 3:
                            message.header = $root.agrirouter.feed.response.FailedMessageQueryResponse.Header.decode(reader, reader.uint32());
                            break;
                        case 4:
                            if (!(message.reasons && message.reasons.length))
                                message.reasons = [];
                            message.reasons.push($root.agrirouter.commons.Message.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FailedMessageQueryResponse message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.feed.response.FailedMessageQueryResponse} FailedMessageQueryResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FailedMessageQueryResponse.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FailedMessageQueryResponse message.
                 * @function verify
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FailedMessageQueryResponse.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.queryMetrics != null && message.hasOwnProperty("queryMetrics")) {
                        var error = $root.agrirouter.feed.response.QueryMetrics.verify(message.queryMetrics);
                        if (error)
                            return "queryMetrics." + error;
                    }
                    if (message.page != null && message.hasOwnProperty("page")) {
                        var error = $root.agrirouter.feed.response.Page.verify(message.page);
                        if (error)
                            return "page." + error;
                    }
                    if (message.header != null && message.hasOwnProperty("header")) {
                        var error = $root.agrirouter.feed.response.FailedMessageQueryResponse.Header.verify(message.header);
                        if (error)
                            return "header." + error;
                    }
                    if (message.reasons != null && message.hasOwnProperty("reasons")) {
                        if (!Array.isArray(message.reasons))
                            return "reasons: array expected";
                        for (var i = 0; i < message.reasons.length; ++i) {
                            var error = $root.agrirouter.commons.Message.verify(message.reasons[i]);
                            if (error)
                                return "reasons." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a FailedMessageQueryResponse message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.feed.response.FailedMessageQueryResponse} FailedMessageQueryResponse
                 */
                FailedMessageQueryResponse.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.feed.response.FailedMessageQueryResponse)
                        return object;
                    var message = new $root.agrirouter.feed.response.FailedMessageQueryResponse();
                    if (object.queryMetrics != null) {
                        if (typeof object.queryMetrics !== "object")
                            throw TypeError(".agrirouter.feed.response.FailedMessageQueryResponse.queryMetrics: object expected");
                        message.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.fromObject(object.queryMetrics);
                    }
                    if (object.page != null) {
                        if (typeof object.page !== "object")
                            throw TypeError(".agrirouter.feed.response.FailedMessageQueryResponse.page: object expected");
                        message.page = $root.agrirouter.feed.response.Page.fromObject(object.page);
                    }
                    if (object.header != null) {
                        if (typeof object.header !== "object")
                            throw TypeError(".agrirouter.feed.response.FailedMessageQueryResponse.header: object expected");
                        message.header = $root.agrirouter.feed.response.FailedMessageQueryResponse.Header.fromObject(object.header);
                    }
                    if (object.reasons) {
                        if (!Array.isArray(object.reasons))
                            throw TypeError(".agrirouter.feed.response.FailedMessageQueryResponse.reasons: array expected");
                        message.reasons = [];
                        for (var i = 0; i < object.reasons.length; ++i) {
                            if (typeof object.reasons[i] !== "object")
                                throw TypeError(".agrirouter.feed.response.FailedMessageQueryResponse.reasons: object expected");
                            message.reasons[i] = $root.agrirouter.commons.Message.fromObject(object.reasons[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FailedMessageQueryResponse message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @static
                 * @param {agrirouter.feed.response.FailedMessageQueryResponse} message FailedMessageQueryResponse
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FailedMessageQueryResponse.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.reasons = [];
                    if (options.defaults) {
                        object.queryMetrics = null;
                        object.page = null;
                        object.header = null;
                    }
                    if (message.queryMetrics != null && message.hasOwnProperty("queryMetrics"))
                        object.queryMetrics = $root.agrirouter.feed.response.QueryMetrics.toObject(message.queryMetrics, options);
                    if (message.page != null && message.hasOwnProperty("page"))
                        object.page = $root.agrirouter.feed.response.Page.toObject(message.page, options);
                    if (message.header != null && message.hasOwnProperty("header"))
                        object.header = $root.agrirouter.feed.response.FailedMessageQueryResponse.Header.toObject(message.header, options);
                    if (message.reasons && message.reasons.length) {
                        object.reasons = [];
                        for (var j = 0; j < message.reasons.length; ++j)
                            object.reasons[j] = $root.agrirouter.commons.Message.toObject(message.reasons[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this FailedMessageQueryResponse to JSON.
                 * @function toJSON
                 * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FailedMessageQueryResponse.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                FailedMessageQueryResponse.Header = (function() {

                    /**
                     * Properties of a Header.
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                     * @interface IHeader
                     * @property {string|null} [technicalMessageType] Header technicalMessageType
                     * @property {string|null} [teamSetContextId] Header teamSetContextId
                     * @property {number|Long|null} [payloadSize] Header payloadSize
                     * @property {google.protobuf.ITimestamp|null} [sentTimestamp] Header sentTimestamp
                     */

                    /**
                     * Constructs a new Header.
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse
                     * @classdesc Represents a Header.
                     * @implements IHeader
                     * @constructor
                     * @param {agrirouter.feed.response.FailedMessageQueryResponse.IHeader=} [properties] Properties to set
                     */
                    function Header(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Header technicalMessageType.
                     * @member {string} technicalMessageType
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.technicalMessageType = "";

                    /**
                     * Header teamSetContextId.
                     * @member {string} teamSetContextId
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.teamSetContextId = "";

                    /**
                     * Header payloadSize.
                     * @member {number|Long} payloadSize
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.payloadSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                    /**
                     * Header sentTimestamp.
                     * @member {google.protobuf.ITimestamp|null|undefined} sentTimestamp
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @instance
                     */
                    Header.prototype.sentTimestamp = null;

                    /**
                     * Creates a new Header instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.FailedMessageQueryResponse.IHeader=} [properties] Properties to set
                     * @returns {agrirouter.feed.response.FailedMessageQueryResponse.Header} Header instance
                     */
                    Header.create = function create(properties) {
                        return new Header(properties);
                    };

                    /**
                     * Encodes the specified Header message. Does not implicitly {@link agrirouter.feed.response.FailedMessageQueryResponse.Header.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.FailedMessageQueryResponse.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.technicalMessageType);
                        if (message.teamSetContextId != null && Object.hasOwnProperty.call(message, "teamSetContextId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.teamSetContextId);
                        if (message.payloadSize != null && Object.hasOwnProperty.call(message, "payloadSize"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.payloadSize);
                        if (message.sentTimestamp != null && Object.hasOwnProperty.call(message, "sentTimestamp"))
                            $root.google.protobuf.Timestamp.encode(message.sentTimestamp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified Header message, length delimited. Does not implicitly {@link agrirouter.feed.response.FailedMessageQueryResponse.Header.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.FailedMessageQueryResponse.IHeader} message Header message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Header.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.feed.response.FailedMessageQueryResponse.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.response.FailedMessageQueryResponse.Header();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.technicalMessageType = reader.string();
                                break;
                            case 2:
                                message.teamSetContextId = reader.string();
                                break;
                            case 3:
                                message.payloadSize = reader.int64();
                                break;
                            case 4:
                                message.sentTimestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Header message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.feed.response.FailedMessageQueryResponse.Header} Header
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Header.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Header message.
                     * @function verify
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Header.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            if (!$util.isString(message.technicalMessageType))
                                return "technicalMessageType: string expected";
                        if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                            if (!$util.isString(message.teamSetContextId))
                                return "teamSetContextId: string expected";
                        if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                            if (!$util.isInteger(message.payloadSize) && !(message.payloadSize && $util.isInteger(message.payloadSize.low) && $util.isInteger(message.payloadSize.high)))
                                return "payloadSize: integer|Long expected";
                        if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp")) {
                            var error = $root.google.protobuf.Timestamp.verify(message.sentTimestamp);
                            if (error)
                                return "sentTimestamp." + error;
                        }
                        return null;
                    };

                    /**
                     * Creates a Header message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.feed.response.FailedMessageQueryResponse.Header} Header
                     */
                    Header.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.feed.response.FailedMessageQueryResponse.Header)
                            return object;
                        var message = new $root.agrirouter.feed.response.FailedMessageQueryResponse.Header();
                        if (object.technicalMessageType != null)
                            message.technicalMessageType = String(object.technicalMessageType);
                        if (object.teamSetContextId != null)
                            message.teamSetContextId = String(object.teamSetContextId);
                        if (object.payloadSize != null)
                            if ($util.Long)
                                (message.payloadSize = $util.Long.fromValue(object.payloadSize)).unsigned = false;
                            else if (typeof object.payloadSize === "string")
                                message.payloadSize = parseInt(object.payloadSize, 10);
                            else if (typeof object.payloadSize === "number")
                                message.payloadSize = object.payloadSize;
                            else if (typeof object.payloadSize === "object")
                                message.payloadSize = new $util.LongBits(object.payloadSize.low >>> 0, object.payloadSize.high >>> 0).toNumber();
                        if (object.sentTimestamp != null) {
                            if (typeof object.sentTimestamp !== "object")
                                throw TypeError(".agrirouter.feed.response.FailedMessageQueryResponse.Header.sentTimestamp: object expected");
                            message.sentTimestamp = $root.google.protobuf.Timestamp.fromObject(object.sentTimestamp);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Header message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @static
                     * @param {agrirouter.feed.response.FailedMessageQueryResponse.Header} message Header
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Header.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.technicalMessageType = "";
                            object.teamSetContextId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, false);
                                object.payloadSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.payloadSize = options.longs === String ? "0" : 0;
                            object.sentTimestamp = null;
                        }
                        if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                            object.technicalMessageType = message.technicalMessageType;
                        if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                            object.teamSetContextId = message.teamSetContextId;
                        if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                            if (typeof message.payloadSize === "number")
                                object.payloadSize = options.longs === String ? String(message.payloadSize) : message.payloadSize;
                            else
                                object.payloadSize = options.longs === String ? $util.Long.prototype.toString.call(message.payloadSize) : options.longs === Number ? new $util.LongBits(message.payloadSize.low >>> 0, message.payloadSize.high >>> 0).toNumber() : message.payloadSize;
                        if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp"))
                            object.sentTimestamp = $root.google.protobuf.Timestamp.toObject(message.sentTimestamp, options);
                        return object;
                    };

                    /**
                     * Converts this Header to JSON.
                     * @function toJSON
                     * @memberof agrirouter.feed.response.FailedMessageQueryResponse.Header
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Header.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    return Header;
                })();

                return FailedMessageQueryResponse;
            })();

            return response;
        })();

        feed.push = (function() {

            /**
             * Namespace push.
             * @memberof agrirouter.feed
             * @namespace
             */
            var push = {};

            push.notification = (function() {

                /**
                 * Namespace notification.
                 * @memberof agrirouter.feed.push
                 * @namespace
                 */
                var notification = {};

                notification.PushNotification = (function() {

                    /**
                     * Properties of a PushNotification.
                     * @memberof agrirouter.feed.push.notification
                     * @interface IPushNotification
                     * @property {Array.<agrirouter.feed.push.notification.PushNotification.IFeedMessage>|null} [messages] PushNotification messages
                     */

                    /**
                     * Constructs a new PushNotification.
                     * @memberof agrirouter.feed.push.notification
                     * @classdesc Represents a PushNotification.
                     * @implements IPushNotification
                     * @constructor
                     * @param {agrirouter.feed.push.notification.IPushNotification=} [properties] Properties to set
                     */
                    function PushNotification(properties) {
                        this.messages = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * PushNotification messages.
                     * @member {Array.<agrirouter.feed.push.notification.PushNotification.IFeedMessage>} messages
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @instance
                     */
                    PushNotification.prototype.messages = $util.emptyArray;

                    /**
                     * Creates a new PushNotification instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {agrirouter.feed.push.notification.IPushNotification=} [properties] Properties to set
                     * @returns {agrirouter.feed.push.notification.PushNotification} PushNotification instance
                     */
                    PushNotification.create = function create(properties) {
                        return new PushNotification(properties);
                    };

                    /**
                     * Encodes the specified PushNotification message. Does not implicitly {@link agrirouter.feed.push.notification.PushNotification.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {agrirouter.feed.push.notification.IPushNotification} message PushNotification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PushNotification.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.messages != null && message.messages.length)
                            for (var i = 0; i < message.messages.length; ++i)
                                $root.agrirouter.feed.push.notification.PushNotification.FeedMessage.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified PushNotification message, length delimited. Does not implicitly {@link agrirouter.feed.push.notification.PushNotification.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {agrirouter.feed.push.notification.IPushNotification} message PushNotification message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    PushNotification.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a PushNotification message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.feed.push.notification.PushNotification} PushNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PushNotification.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.push.notification.PushNotification();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.messages && message.messages.length))
                                    message.messages = [];
                                message.messages.push($root.agrirouter.feed.push.notification.PushNotification.FeedMessage.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a PushNotification message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.feed.push.notification.PushNotification} PushNotification
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    PushNotification.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a PushNotification message.
                     * @function verify
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    PushNotification.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.messages != null && message.hasOwnProperty("messages")) {
                            if (!Array.isArray(message.messages))
                                return "messages: array expected";
                            for (var i = 0; i < message.messages.length; ++i) {
                                var error = $root.agrirouter.feed.push.notification.PushNotification.FeedMessage.verify(message.messages[i]);
                                if (error)
                                    return "messages." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a PushNotification message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.feed.push.notification.PushNotification} PushNotification
                     */
                    PushNotification.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.feed.push.notification.PushNotification)
                            return object;
                        var message = new $root.agrirouter.feed.push.notification.PushNotification();
                        if (object.messages) {
                            if (!Array.isArray(object.messages))
                                throw TypeError(".agrirouter.feed.push.notification.PushNotification.messages: array expected");
                            message.messages = [];
                            for (var i = 0; i < object.messages.length; ++i) {
                                if (typeof object.messages[i] !== "object")
                                    throw TypeError(".agrirouter.feed.push.notification.PushNotification.messages: object expected");
                                message.messages[i] = $root.agrirouter.feed.push.notification.PushNotification.FeedMessage.fromObject(object.messages[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a PushNotification message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @static
                     * @param {agrirouter.feed.push.notification.PushNotification} message PushNotification
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    PushNotification.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.messages = [];
                        if (message.messages && message.messages.length) {
                            object.messages = [];
                            for (var j = 0; j < message.messages.length; ++j)
                                object.messages[j] = $root.agrirouter.feed.push.notification.PushNotification.FeedMessage.toObject(message.messages[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this PushNotification to JSON.
                     * @function toJSON
                     * @memberof agrirouter.feed.push.notification.PushNotification
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    PushNotification.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    PushNotification.Header = (function() {

                        /**
                         * Properties of a Header.
                         * @memberof agrirouter.feed.push.notification.PushNotification
                         * @interface IHeader
                         * @property {string|null} [receiverId] Header receiverId
                         * @property {string|null} [technicalMessageType] Header technicalMessageType
                         * @property {string|null} [teamSetContextId] Header teamSetContextId
                         * @property {agrirouter.commons.IChunkComponent|null} [chunkContext] Header chunkContext
                         * @property {number|Long|null} [payloadSize] Header payloadSize
                         * @property {google.protobuf.ITimestamp|null} [sentTimestamp] Header sentTimestamp
                         * @property {number|Long|null} [sequenceNumber] Header sequenceNumber
                         * @property {string|null} [senderId] Header senderId
                         * @property {google.protobuf.ITimestamp|null} [createdAt] Header createdAt
                         * @property {string|null} [messageId] Header messageId
                         * @property {agrirouter.commons.IMetadata|null} [metadata] Header metadata
                         */

                        /**
                         * Constructs a new Header.
                         * @memberof agrirouter.feed.push.notification.PushNotification
                         * @classdesc Represents a Header.
                         * @implements IHeader
                         * @constructor
                         * @param {agrirouter.feed.push.notification.PushNotification.IHeader=} [properties] Properties to set
                         */
                        function Header(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Header receiverId.
                         * @member {string} receiverId
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.receiverId = "";

                        /**
                         * Header technicalMessageType.
                         * @member {string} technicalMessageType
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.technicalMessageType = "";

                        /**
                         * Header teamSetContextId.
                         * @member {string} teamSetContextId
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.teamSetContextId = "";

                        /**
                         * Header chunkContext.
                         * @member {agrirouter.commons.IChunkComponent|null|undefined} chunkContext
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.chunkContext = null;

                        /**
                         * Header payloadSize.
                         * @member {number|Long} payloadSize
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.payloadSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Header sentTimestamp.
                         * @member {google.protobuf.ITimestamp|null|undefined} sentTimestamp
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.sentTimestamp = null;

                        /**
                         * Header sequenceNumber.
                         * @member {number|Long} sequenceNumber
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.sequenceNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                        /**
                         * Header senderId.
                         * @member {string} senderId
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.senderId = "";

                        /**
                         * Header createdAt.
                         * @member {google.protobuf.ITimestamp|null|undefined} createdAt
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.createdAt = null;

                        /**
                         * Header messageId.
                         * @member {string} messageId
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.messageId = "";

                        /**
                         * Header metadata.
                         * @member {agrirouter.commons.IMetadata|null|undefined} metadata
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         */
                        Header.prototype.metadata = null;

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @function create
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.IHeader=} [properties] Properties to set
                         * @returns {agrirouter.feed.push.notification.PushNotification.Header} Header instance
                         */
                        Header.create = function create(properties) {
                            return new Header(properties);
                        };

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link agrirouter.feed.push.notification.PushNotification.Header.verify|verify} messages.
                         * @function encode
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.IHeader} message Header message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Header.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.receiverId);
                            if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.technicalMessageType);
                            if (message.teamSetContextId != null && Object.hasOwnProperty.call(message, "teamSetContextId"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.teamSetContextId);
                            if (message.chunkContext != null && Object.hasOwnProperty.call(message, "chunkContext"))
                                $root.agrirouter.commons.ChunkComponent.encode(message.chunkContext, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                            if (message.payloadSize != null && Object.hasOwnProperty.call(message, "payloadSize"))
                                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.payloadSize);
                            if (message.sentTimestamp != null && Object.hasOwnProperty.call(message, "sentTimestamp"))
                                $root.google.protobuf.Timestamp.encode(message.sentTimestamp, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                            if (message.sequenceNumber != null && Object.hasOwnProperty.call(message, "sequenceNumber"))
                                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sequenceNumber);
                            if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                                writer.uint32(/* id 8, wireType 2 =*/66).string(message.senderId);
                            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                                $root.google.protobuf.Timestamp.encode(message.createdAt, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                            if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                                writer.uint32(/* id 10, wireType 2 =*/82).string(message.messageId);
                            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                                $root.agrirouter.commons.Metadata.encode(message.metadata, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link agrirouter.feed.push.notification.PushNotification.Header.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.IHeader} message Header message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Header.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @function decode
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {agrirouter.feed.push.notification.PushNotification.Header} Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Header.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.push.notification.PushNotification.Header();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.receiverId = reader.string();
                                    break;
                                case 2:
                                    message.technicalMessageType = reader.string();
                                    break;
                                case 3:
                                    message.teamSetContextId = reader.string();
                                    break;
                                case 4:
                                    message.chunkContext = $root.agrirouter.commons.ChunkComponent.decode(reader, reader.uint32());
                                    break;
                                case 5:
                                    message.payloadSize = reader.int64();
                                    break;
                                case 6:
                                    message.sentTimestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                case 7:
                                    message.sequenceNumber = reader.int64();
                                    break;
                                case 8:
                                    message.senderId = reader.string();
                                    break;
                                case 9:
                                    message.createdAt = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                                    break;
                                case 10:
                                    message.messageId = reader.string();
                                    break;
                                case 11:
                                    message.metadata = $root.agrirouter.commons.Metadata.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {agrirouter.feed.push.notification.PushNotification.Header} Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Header.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Header message.
                         * @function verify
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Header.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                                if (!$util.isString(message.receiverId))
                                    return "receiverId: string expected";
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                if (!$util.isString(message.technicalMessageType))
                                    return "technicalMessageType: string expected";
                            if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                                if (!$util.isString(message.teamSetContextId))
                                    return "teamSetContextId: string expected";
                            if (message.chunkContext != null && message.hasOwnProperty("chunkContext")) {
                                var error = $root.agrirouter.commons.ChunkComponent.verify(message.chunkContext);
                                if (error)
                                    return "chunkContext." + error;
                            }
                            if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                                if (!$util.isInteger(message.payloadSize) && !(message.payloadSize && $util.isInteger(message.payloadSize.low) && $util.isInteger(message.payloadSize.high)))
                                    return "payloadSize: integer|Long expected";
                            if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.sentTimestamp);
                                if (error)
                                    return "sentTimestamp." + error;
                            }
                            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                                if (!$util.isInteger(message.sequenceNumber) && !(message.sequenceNumber && $util.isInteger(message.sequenceNumber.low) && $util.isInteger(message.sequenceNumber.high)))
                                    return "sequenceNumber: integer|Long expected";
                            if (message.senderId != null && message.hasOwnProperty("senderId"))
                                if (!$util.isString(message.senderId))
                                    return "senderId: string expected";
                            if (message.createdAt != null && message.hasOwnProperty("createdAt")) {
                                var error = $root.google.protobuf.Timestamp.verify(message.createdAt);
                                if (error)
                                    return "createdAt." + error;
                            }
                            if (message.messageId != null && message.hasOwnProperty("messageId"))
                                if (!$util.isString(message.messageId))
                                    return "messageId: string expected";
                            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                                var error = $root.agrirouter.commons.Metadata.verify(message.metadata);
                                if (error)
                                    return "metadata." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {agrirouter.feed.push.notification.PushNotification.Header} Header
                         */
                        Header.fromObject = function fromObject(object) {
                            if (object instanceof $root.agrirouter.feed.push.notification.PushNotification.Header)
                                return object;
                            var message = new $root.agrirouter.feed.push.notification.PushNotification.Header();
                            if (object.receiverId != null)
                                message.receiverId = String(object.receiverId);
                            if (object.technicalMessageType != null)
                                message.technicalMessageType = String(object.technicalMessageType);
                            if (object.teamSetContextId != null)
                                message.teamSetContextId = String(object.teamSetContextId);
                            if (object.chunkContext != null) {
                                if (typeof object.chunkContext !== "object")
                                    throw TypeError(".agrirouter.feed.push.notification.PushNotification.Header.chunkContext: object expected");
                                message.chunkContext = $root.agrirouter.commons.ChunkComponent.fromObject(object.chunkContext);
                            }
                            if (object.payloadSize != null)
                                if ($util.Long)
                                    (message.payloadSize = $util.Long.fromValue(object.payloadSize)).unsigned = false;
                                else if (typeof object.payloadSize === "string")
                                    message.payloadSize = parseInt(object.payloadSize, 10);
                                else if (typeof object.payloadSize === "number")
                                    message.payloadSize = object.payloadSize;
                                else if (typeof object.payloadSize === "object")
                                    message.payloadSize = new $util.LongBits(object.payloadSize.low >>> 0, object.payloadSize.high >>> 0).toNumber();
                            if (object.sentTimestamp != null) {
                                if (typeof object.sentTimestamp !== "object")
                                    throw TypeError(".agrirouter.feed.push.notification.PushNotification.Header.sentTimestamp: object expected");
                                message.sentTimestamp = $root.google.protobuf.Timestamp.fromObject(object.sentTimestamp);
                            }
                            if (object.sequenceNumber != null)
                                if ($util.Long)
                                    (message.sequenceNumber = $util.Long.fromValue(object.sequenceNumber)).unsigned = false;
                                else if (typeof object.sequenceNumber === "string")
                                    message.sequenceNumber = parseInt(object.sequenceNumber, 10);
                                else if (typeof object.sequenceNumber === "number")
                                    message.sequenceNumber = object.sequenceNumber;
                                else if (typeof object.sequenceNumber === "object")
                                    message.sequenceNumber = new $util.LongBits(object.sequenceNumber.low >>> 0, object.sequenceNumber.high >>> 0).toNumber();
                            if (object.senderId != null)
                                message.senderId = String(object.senderId);
                            if (object.createdAt != null) {
                                if (typeof object.createdAt !== "object")
                                    throw TypeError(".agrirouter.feed.push.notification.PushNotification.Header.createdAt: object expected");
                                message.createdAt = $root.google.protobuf.Timestamp.fromObject(object.createdAt);
                            }
                            if (object.messageId != null)
                                message.messageId = String(object.messageId);
                            if (object.metadata != null) {
                                if (typeof object.metadata !== "object")
                                    throw TypeError(".agrirouter.feed.push.notification.PushNotification.Header.metadata: object expected");
                                message.metadata = $root.agrirouter.commons.Metadata.fromObject(object.metadata);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.Header} message Header
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Header.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.receiverId = "";
                                object.technicalMessageType = "";
                                object.teamSetContextId = "";
                                object.chunkContext = null;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.payloadSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.payloadSize = options.longs === String ? "0" : 0;
                                object.sentTimestamp = null;
                                if ($util.Long) {
                                    var long = new $util.Long(0, 0, false);
                                    object.sequenceNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                                } else
                                    object.sequenceNumber = options.longs === String ? "0" : 0;
                                object.senderId = "";
                                object.createdAt = null;
                                object.messageId = "";
                                object.metadata = null;
                            }
                            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                                object.receiverId = message.receiverId;
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                object.technicalMessageType = message.technicalMessageType;
                            if (message.teamSetContextId != null && message.hasOwnProperty("teamSetContextId"))
                                object.teamSetContextId = message.teamSetContextId;
                            if (message.chunkContext != null && message.hasOwnProperty("chunkContext"))
                                object.chunkContext = $root.agrirouter.commons.ChunkComponent.toObject(message.chunkContext, options);
                            if (message.payloadSize != null && message.hasOwnProperty("payloadSize"))
                                if (typeof message.payloadSize === "number")
                                    object.payloadSize = options.longs === String ? String(message.payloadSize) : message.payloadSize;
                                else
                                    object.payloadSize = options.longs === String ? $util.Long.prototype.toString.call(message.payloadSize) : options.longs === Number ? new $util.LongBits(message.payloadSize.low >>> 0, message.payloadSize.high >>> 0).toNumber() : message.payloadSize;
                            if (message.sentTimestamp != null && message.hasOwnProperty("sentTimestamp"))
                                object.sentTimestamp = $root.google.protobuf.Timestamp.toObject(message.sentTimestamp, options);
                            if (message.sequenceNumber != null && message.hasOwnProperty("sequenceNumber"))
                                if (typeof message.sequenceNumber === "number")
                                    object.sequenceNumber = options.longs === String ? String(message.sequenceNumber) : message.sequenceNumber;
                                else
                                    object.sequenceNumber = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceNumber) : options.longs === Number ? new $util.LongBits(message.sequenceNumber.low >>> 0, message.sequenceNumber.high >>> 0).toNumber() : message.sequenceNumber;
                            if (message.senderId != null && message.hasOwnProperty("senderId"))
                                object.senderId = message.senderId;
                            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                                object.createdAt = $root.google.protobuf.Timestamp.toObject(message.createdAt, options);
                            if (message.messageId != null && message.hasOwnProperty("messageId"))
                                object.messageId = message.messageId;
                            if (message.metadata != null && message.hasOwnProperty("metadata"))
                                object.metadata = $root.agrirouter.commons.Metadata.toObject(message.metadata, options);
                            return object;
                        };

                        /**
                         * Converts this Header to JSON.
                         * @function toJSON
                         * @memberof agrirouter.feed.push.notification.PushNotification.Header
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Header.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Header;
                    })();

                    PushNotification.FeedMessage = (function() {

                        /**
                         * Properties of a FeedMessage.
                         * @memberof agrirouter.feed.push.notification.PushNotification
                         * @interface IFeedMessage
                         * @property {agrirouter.feed.push.notification.PushNotification.IHeader|null} [header] FeedMessage header
                         * @property {google.protobuf.IAny|null} [content] FeedMessage content
                         */

                        /**
                         * Constructs a new FeedMessage.
                         * @memberof agrirouter.feed.push.notification.PushNotification
                         * @classdesc Represents a FeedMessage.
                         * @implements IFeedMessage
                         * @constructor
                         * @param {agrirouter.feed.push.notification.PushNotification.IFeedMessage=} [properties] Properties to set
                         */
                        function FeedMessage(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * FeedMessage header.
                         * @member {agrirouter.feed.push.notification.PushNotification.IHeader|null|undefined} header
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @instance
                         */
                        FeedMessage.prototype.header = null;

                        /**
                         * FeedMessage content.
                         * @member {google.protobuf.IAny|null|undefined} content
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @instance
                         */
                        FeedMessage.prototype.content = null;

                        /**
                         * Creates a new FeedMessage instance using the specified properties.
                         * @function create
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.IFeedMessage=} [properties] Properties to set
                         * @returns {agrirouter.feed.push.notification.PushNotification.FeedMessage} FeedMessage instance
                         */
                        FeedMessage.create = function create(properties) {
                            return new FeedMessage(properties);
                        };

                        /**
                         * Encodes the specified FeedMessage message. Does not implicitly {@link agrirouter.feed.push.notification.PushNotification.FeedMessage.verify|verify} messages.
                         * @function encode
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.IFeedMessage} message FeedMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        FeedMessage.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                                $root.agrirouter.feed.push.notification.PushNotification.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                                $root.google.protobuf.Any.encode(message.content, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };

                        /**
                         * Encodes the specified FeedMessage message, length delimited. Does not implicitly {@link agrirouter.feed.push.notification.PushNotification.FeedMessage.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.IFeedMessage} message FeedMessage message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        FeedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a FeedMessage message from the specified reader or buffer.
                         * @function decode
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {agrirouter.feed.push.notification.PushNotification.FeedMessage} FeedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        FeedMessage.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.feed.push.notification.PushNotification.FeedMessage();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.header = $root.agrirouter.feed.push.notification.PushNotification.Header.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.content = $root.google.protobuf.Any.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a FeedMessage message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {agrirouter.feed.push.notification.PushNotification.FeedMessage} FeedMessage
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        FeedMessage.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a FeedMessage message.
                         * @function verify
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        FeedMessage.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.header != null && message.hasOwnProperty("header")) {
                                var error = $root.agrirouter.feed.push.notification.PushNotification.Header.verify(message.header);
                                if (error)
                                    return "header." + error;
                            }
                            if (message.content != null && message.hasOwnProperty("content")) {
                                var error = $root.google.protobuf.Any.verify(message.content);
                                if (error)
                                    return "content." + error;
                            }
                            return null;
                        };

                        /**
                         * Creates a FeedMessage message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {agrirouter.feed.push.notification.PushNotification.FeedMessage} FeedMessage
                         */
                        FeedMessage.fromObject = function fromObject(object) {
                            if (object instanceof $root.agrirouter.feed.push.notification.PushNotification.FeedMessage)
                                return object;
                            var message = new $root.agrirouter.feed.push.notification.PushNotification.FeedMessage();
                            if (object.header != null) {
                                if (typeof object.header !== "object")
                                    throw TypeError(".agrirouter.feed.push.notification.PushNotification.FeedMessage.header: object expected");
                                message.header = $root.agrirouter.feed.push.notification.PushNotification.Header.fromObject(object.header);
                            }
                            if (object.content != null) {
                                if (typeof object.content !== "object")
                                    throw TypeError(".agrirouter.feed.push.notification.PushNotification.FeedMessage.content: object expected");
                                message.content = $root.google.protobuf.Any.fromObject(object.content);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a FeedMessage message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @static
                         * @param {agrirouter.feed.push.notification.PushNotification.FeedMessage} message FeedMessage
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        FeedMessage.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.header = null;
                                object.content = null;
                            }
                            if (message.header != null && message.hasOwnProperty("header"))
                                object.header = $root.agrirouter.feed.push.notification.PushNotification.Header.toObject(message.header, options);
                            if (message.content != null && message.hasOwnProperty("content"))
                                object.content = $root.google.protobuf.Any.toObject(message.content, options);
                            return object;
                        };

                        /**
                         * Converts this FeedMessage to JSON.
                         * @function toJSON
                         * @memberof agrirouter.feed.push.notification.PushNotification.FeedMessage
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        FeedMessage.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return FeedMessage;
                    })();

                    return PushNotification;
                })();

                return notification;
            })();

            return push;
        })();

        return feed;
    })();

    agrirouter.response = (function() {

        /**
         * Namespace response.
         * @memberof agrirouter
         * @namespace
         */
        var response = {};

        response.payload = (function() {

            /**
             * Namespace payload.
             * @memberof agrirouter.response
             * @namespace
             */
            var payload = {};

            payload.account = (function() {

                /**
                 * Namespace account.
                 * @memberof agrirouter.response.payload
                 * @namespace
                 */
                var account = {};

                account.ListEndpointsResponse = (function() {

                    /**
                     * Properties of a ListEndpointsResponse.
                     * @memberof agrirouter.response.payload.account
                     * @interface IListEndpointsResponse
                     * @property {Array.<agrirouter.response.payload.account.ListEndpointsResponse.IEndpoint>|null} [endpoints] ListEndpointsResponse endpoints
                     */

                    /**
                     * Constructs a new ListEndpointsResponse.
                     * @memberof agrirouter.response.payload.account
                     * @classdesc Represents a ListEndpointsResponse.
                     * @implements IListEndpointsResponse
                     * @constructor
                     * @param {agrirouter.response.payload.account.IListEndpointsResponse=} [properties] Properties to set
                     */
                    function ListEndpointsResponse(properties) {
                        this.endpoints = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * ListEndpointsResponse endpoints.
                     * @member {Array.<agrirouter.response.payload.account.ListEndpointsResponse.IEndpoint>} endpoints
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @instance
                     */
                    ListEndpointsResponse.prototype.endpoints = $util.emptyArray;

                    /**
                     * Creates a new ListEndpointsResponse instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {agrirouter.response.payload.account.IListEndpointsResponse=} [properties] Properties to set
                     * @returns {agrirouter.response.payload.account.ListEndpointsResponse} ListEndpointsResponse instance
                     */
                    ListEndpointsResponse.create = function create(properties) {
                        return new ListEndpointsResponse(properties);
                    };

                    /**
                     * Encodes the specified ListEndpointsResponse message. Does not implicitly {@link agrirouter.response.payload.account.ListEndpointsResponse.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {agrirouter.response.payload.account.IListEndpointsResponse} message ListEndpointsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListEndpointsResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.endpoints != null && message.endpoints.length)
                            for (var i = 0; i < message.endpoints.length; ++i)
                                $root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.encode(message.endpoints[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified ListEndpointsResponse message, length delimited. Does not implicitly {@link agrirouter.response.payload.account.ListEndpointsResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {agrirouter.response.payload.account.IListEndpointsResponse} message ListEndpointsResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ListEndpointsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a ListEndpointsResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.response.payload.account.ListEndpointsResponse} ListEndpointsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListEndpointsResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.response.payload.account.ListEndpointsResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.endpoints && message.endpoints.length))
                                    message.endpoints = [];
                                message.endpoints.push($root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a ListEndpointsResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.response.payload.account.ListEndpointsResponse} ListEndpointsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ListEndpointsResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a ListEndpointsResponse message.
                     * @function verify
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ListEndpointsResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.endpoints != null && message.hasOwnProperty("endpoints")) {
                            if (!Array.isArray(message.endpoints))
                                return "endpoints: array expected";
                            for (var i = 0; i < message.endpoints.length; ++i) {
                                var error = $root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.verify(message.endpoints[i]);
                                if (error)
                                    return "endpoints." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a ListEndpointsResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.response.payload.account.ListEndpointsResponse} ListEndpointsResponse
                     */
                    ListEndpointsResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.response.payload.account.ListEndpointsResponse)
                            return object;
                        var message = new $root.agrirouter.response.payload.account.ListEndpointsResponse();
                        if (object.endpoints) {
                            if (!Array.isArray(object.endpoints))
                                throw TypeError(".agrirouter.response.payload.account.ListEndpointsResponse.endpoints: array expected");
                            message.endpoints = [];
                            for (var i = 0; i < object.endpoints.length; ++i) {
                                if (typeof object.endpoints[i] !== "object")
                                    throw TypeError(".agrirouter.response.payload.account.ListEndpointsResponse.endpoints: object expected");
                                message.endpoints[i] = $root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.fromObject(object.endpoints[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a ListEndpointsResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @static
                     * @param {agrirouter.response.payload.account.ListEndpointsResponse} message ListEndpointsResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ListEndpointsResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.endpoints = [];
                        if (message.endpoints && message.endpoints.length) {
                            object.endpoints = [];
                            for (var j = 0; j < message.endpoints.length; ++j)
                                object.endpoints[j] = $root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.toObject(message.endpoints[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this ListEndpointsResponse to JSON.
                     * @function toJSON
                     * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ListEndpointsResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Direction enum.
                     * @name agrirouter.response.payload.account.ListEndpointsResponse.Direction
                     * @enum {number}
                     * @property {number} SEND=0 SEND value
                     * @property {number} RECEIVE=1 RECEIVE value
                     * @property {number} SEND_RECEIVE=2 SEND_RECEIVE value
                     */
                    ListEndpointsResponse.Direction = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "SEND"] = 0;
                        values[valuesById[1] = "RECEIVE"] = 1;
                        values[valuesById[2] = "SEND_RECEIVE"] = 2;
                        return values;
                    })();

                    ListEndpointsResponse.MessageType = (function() {

                        /**
                         * Properties of a MessageType.
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                         * @interface IMessageType
                         * @property {string|null} [technicalMessageType] MessageType technicalMessageType
                         * @property {agrirouter.response.payload.account.ListEndpointsResponse.Direction|null} [direction] MessageType direction
                         */

                        /**
                         * Constructs a new MessageType.
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                         * @classdesc Represents a MessageType.
                         * @implements IMessageType
                         * @constructor
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IMessageType=} [properties] Properties to set
                         */
                        function MessageType(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * MessageType technicalMessageType.
                         * @member {string} technicalMessageType
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @instance
                         */
                        MessageType.prototype.technicalMessageType = "";

                        /**
                         * MessageType direction.
                         * @member {agrirouter.response.payload.account.ListEndpointsResponse.Direction} direction
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @instance
                         */
                        MessageType.prototype.direction = 0;

                        /**
                         * Creates a new MessageType instance using the specified properties.
                         * @function create
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IMessageType=} [properties] Properties to set
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.MessageType} MessageType instance
                         */
                        MessageType.create = function create(properties) {
                            return new MessageType(properties);
                        };

                        /**
                         * Encodes the specified MessageType message. Does not implicitly {@link agrirouter.response.payload.account.ListEndpointsResponse.MessageType.verify|verify} messages.
                         * @function encode
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IMessageType} message MessageType message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MessageType.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.technicalMessageType != null && Object.hasOwnProperty.call(message, "technicalMessageType"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.technicalMessageType);
                            if (message.direction != null && Object.hasOwnProperty.call(message, "direction"))
                                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.direction);
                            return writer;
                        };

                        /**
                         * Encodes the specified MessageType message, length delimited. Does not implicitly {@link agrirouter.response.payload.account.ListEndpointsResponse.MessageType.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IMessageType} message MessageType message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        MessageType.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a MessageType message from the specified reader or buffer.
                         * @function decode
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.MessageType} MessageType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MessageType.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.technicalMessageType = reader.string();
                                    break;
                                case 2:
                                    message.direction = reader.int32();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a MessageType message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.MessageType} MessageType
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        MessageType.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a MessageType message.
                         * @function verify
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        MessageType.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                if (!$util.isString(message.technicalMessageType))
                                    return "technicalMessageType: string expected";
                            if (message.direction != null && message.hasOwnProperty("direction"))
                                switch (message.direction) {
                                default:
                                    return "direction: enum value expected";
                                case 0:
                                case 1:
                                case 2:
                                    break;
                                }
                            return null;
                        };

                        /**
                         * Creates a MessageType message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.MessageType} MessageType
                         */
                        MessageType.fromObject = function fromObject(object) {
                            if (object instanceof $root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType)
                                return object;
                            var message = new $root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType();
                            if (object.technicalMessageType != null)
                                message.technicalMessageType = String(object.technicalMessageType);
                            switch (object.direction) {
                            case "SEND":
                            case 0:
                                message.direction = 0;
                                break;
                            case "RECEIVE":
                            case 1:
                                message.direction = 1;
                                break;
                            case "SEND_RECEIVE":
                            case 2:
                                message.direction = 2;
                                break;
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a MessageType message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.MessageType} message MessageType
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        MessageType.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.technicalMessageType = "";
                                object.direction = options.enums === String ? "SEND" : 0;
                            }
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType"))
                                object.technicalMessageType = message.technicalMessageType;
                            if (message.direction != null && message.hasOwnProperty("direction"))
                                object.direction = options.enums === String ? $root.agrirouter.response.payload.account.ListEndpointsResponse.Direction[message.direction] : message.direction;
                            return object;
                        };

                        /**
                         * Converts this MessageType to JSON.
                         * @function toJSON
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.MessageType
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        MessageType.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return MessageType;
                    })();

                    ListEndpointsResponse.Endpoint = (function() {

                        /**
                         * Properties of an Endpoint.
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                         * @interface IEndpoint
                         * @property {string|null} [endpointId] Endpoint endpointId
                         * @property {string|null} [endpointName] Endpoint endpointName
                         * @property {string|null} [endpointType] Endpoint endpointType
                         * @property {string|null} [status] Endpoint status
                         * @property {Array.<agrirouter.response.payload.account.ListEndpointsResponse.IMessageType>|null} [messageTypes] Endpoint messageTypes
                         * @property {string|null} [externalId] Endpoint externalId
                         */

                        /**
                         * Constructs a new Endpoint.
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse
                         * @classdesc Represents an Endpoint.
                         * @implements IEndpoint
                         * @constructor
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IEndpoint=} [properties] Properties to set
                         */
                        function Endpoint(properties) {
                            this.messageTypes = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Endpoint endpointId.
                         * @member {string} endpointId
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @instance
                         */
                        Endpoint.prototype.endpointId = "";

                        /**
                         * Endpoint endpointName.
                         * @member {string} endpointName
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @instance
                         */
                        Endpoint.prototype.endpointName = "";

                        /**
                         * Endpoint endpointType.
                         * @member {string} endpointType
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @instance
                         */
                        Endpoint.prototype.endpointType = "";

                        /**
                         * Endpoint status.
                         * @member {string} status
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @instance
                         */
                        Endpoint.prototype.status = "";

                        /**
                         * Endpoint messageTypes.
                         * @member {Array.<agrirouter.response.payload.account.ListEndpointsResponse.IMessageType>} messageTypes
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @instance
                         */
                        Endpoint.prototype.messageTypes = $util.emptyArray;

                        /**
                         * Endpoint externalId.
                         * @member {string} externalId
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @instance
                         */
                        Endpoint.prototype.externalId = "";

                        /**
                         * Creates a new Endpoint instance using the specified properties.
                         * @function create
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IEndpoint=} [properties] Properties to set
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.Endpoint} Endpoint instance
                         */
                        Endpoint.create = function create(properties) {
                            return new Endpoint(properties);
                        };

                        /**
                         * Encodes the specified Endpoint message. Does not implicitly {@link agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.verify|verify} messages.
                         * @function encode
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IEndpoint} message Endpoint message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Endpoint.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.endpointId != null && Object.hasOwnProperty.call(message, "endpointId"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.endpointId);
                            if (message.endpointName != null && Object.hasOwnProperty.call(message, "endpointName"))
                                writer.uint32(/* id 2, wireType 2 =*/18).string(message.endpointName);
                            if (message.endpointType != null && Object.hasOwnProperty.call(message, "endpointType"))
                                writer.uint32(/* id 3, wireType 2 =*/26).string(message.endpointType);
                            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                                writer.uint32(/* id 4, wireType 2 =*/34).string(message.status);
                            if (message.messageTypes != null && message.messageTypes.length)
                                for (var i = 0; i < message.messageTypes.length; ++i)
                                    $root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType.encode(message.messageTypes[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                            if (message.externalId != null && Object.hasOwnProperty.call(message, "externalId"))
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.externalId);
                            return writer;
                        };

                        /**
                         * Encodes the specified Endpoint message, length delimited. Does not implicitly {@link agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.IEndpoint} message Endpoint message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Endpoint.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes an Endpoint message from the specified reader or buffer.
                         * @function decode
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.Endpoint} Endpoint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Endpoint.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.endpointId = reader.string();
                                    break;
                                case 2:
                                    message.endpointName = reader.string();
                                    break;
                                case 3:
                                    message.endpointType = reader.string();
                                    break;
                                case 4:
                                    message.status = reader.string();
                                    break;
                                case 5:
                                    if (!(message.messageTypes && message.messageTypes.length))
                                        message.messageTypes = [];
                                    message.messageTypes.push($root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType.decode(reader, reader.uint32()));
                                    break;
                                case 6:
                                    message.externalId = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes an Endpoint message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.Endpoint} Endpoint
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Endpoint.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies an Endpoint message.
                         * @function verify
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Endpoint.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.endpointId != null && message.hasOwnProperty("endpointId"))
                                if (!$util.isString(message.endpointId))
                                    return "endpointId: string expected";
                            if (message.endpointName != null && message.hasOwnProperty("endpointName"))
                                if (!$util.isString(message.endpointName))
                                    return "endpointName: string expected";
                            if (message.endpointType != null && message.hasOwnProperty("endpointType"))
                                if (!$util.isString(message.endpointType))
                                    return "endpointType: string expected";
                            if (message.status != null && message.hasOwnProperty("status"))
                                if (!$util.isString(message.status))
                                    return "status: string expected";
                            if (message.messageTypes != null && message.hasOwnProperty("messageTypes")) {
                                if (!Array.isArray(message.messageTypes))
                                    return "messageTypes: array expected";
                                for (var i = 0; i < message.messageTypes.length; ++i) {
                                    var error = $root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType.verify(message.messageTypes[i]);
                                    if (error)
                                        return "messageTypes." + error;
                                }
                            }
                            if (message.externalId != null && message.hasOwnProperty("externalId"))
                                if (!$util.isString(message.externalId))
                                    return "externalId: string expected";
                            return null;
                        };

                        /**
                         * Creates an Endpoint message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {agrirouter.response.payload.account.ListEndpointsResponse.Endpoint} Endpoint
                         */
                        Endpoint.fromObject = function fromObject(object) {
                            if (object instanceof $root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint)
                                return object;
                            var message = new $root.agrirouter.response.payload.account.ListEndpointsResponse.Endpoint();
                            if (object.endpointId != null)
                                message.endpointId = String(object.endpointId);
                            if (object.endpointName != null)
                                message.endpointName = String(object.endpointName);
                            if (object.endpointType != null)
                                message.endpointType = String(object.endpointType);
                            if (object.status != null)
                                message.status = String(object.status);
                            if (object.messageTypes) {
                                if (!Array.isArray(object.messageTypes))
                                    throw TypeError(".agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.messageTypes: array expected");
                                message.messageTypes = [];
                                for (var i = 0; i < object.messageTypes.length; ++i) {
                                    if (typeof object.messageTypes[i] !== "object")
                                        throw TypeError(".agrirouter.response.payload.account.ListEndpointsResponse.Endpoint.messageTypes: object expected");
                                    message.messageTypes[i] = $root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType.fromObject(object.messageTypes[i]);
                                }
                            }
                            if (object.externalId != null)
                                message.externalId = String(object.externalId);
                            return message;
                        };

                        /**
                         * Creates a plain object from an Endpoint message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @static
                         * @param {agrirouter.response.payload.account.ListEndpointsResponse.Endpoint} message Endpoint
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Endpoint.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.messageTypes = [];
                            if (options.defaults) {
                                object.endpointId = "";
                                object.endpointName = "";
                                object.endpointType = "";
                                object.status = "";
                                object.externalId = "";
                            }
                            if (message.endpointId != null && message.hasOwnProperty("endpointId"))
                                object.endpointId = message.endpointId;
                            if (message.endpointName != null && message.hasOwnProperty("endpointName"))
                                object.endpointName = message.endpointName;
                            if (message.endpointType != null && message.hasOwnProperty("endpointType"))
                                object.endpointType = message.endpointType;
                            if (message.status != null && message.hasOwnProperty("status"))
                                object.status = message.status;
                            if (message.messageTypes && message.messageTypes.length) {
                                object.messageTypes = [];
                                for (var j = 0; j < message.messageTypes.length; ++j)
                                    object.messageTypes[j] = $root.agrirouter.response.payload.account.ListEndpointsResponse.MessageType.toObject(message.messageTypes[j], options);
                            }
                            if (message.externalId != null && message.hasOwnProperty("externalId"))
                                object.externalId = message.externalId;
                            return object;
                        };

                        /**
                         * Converts this Endpoint to JSON.
                         * @function toJSON
                         * @memberof agrirouter.response.payload.account.ListEndpointsResponse.Endpoint
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Endpoint.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Endpoint;
                    })();

                    return ListEndpointsResponse;
                })();

                return account;
            })();

            payload.endpoint = (function() {

                /**
                 * Namespace endpoint.
                 * @memberof agrirouter.response.payload
                 * @namespace
                 */
                var endpoint = {};

                endpoint.CapabilityResponse = (function() {

                    /**
                     * Properties of a CapabilityResponse.
                     * @memberof agrirouter.response.payload.endpoint
                     * @interface ICapabilityResponse
                     * @property {string|null} [applicationMessageId] CapabilityResponse applicationMessageId
                     * @property {Array.<agrirouter.response.payload.endpoint.CapabilityResponse.IRecipient>|null} [recipients] CapabilityResponse recipients
                     */

                    /**
                     * Constructs a new CapabilityResponse.
                     * @memberof agrirouter.response.payload.endpoint
                     * @classdesc Represents a CapabilityResponse.
                     * @implements ICapabilityResponse
                     * @constructor
                     * @param {agrirouter.response.payload.endpoint.ICapabilityResponse=} [properties] Properties to set
                     */
                    function CapabilityResponse(properties) {
                        this.recipients = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * CapabilityResponse applicationMessageId.
                     * @member {string} applicationMessageId
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @instance
                     */
                    CapabilityResponse.prototype.applicationMessageId = "";

                    /**
                     * CapabilityResponse recipients.
                     * @member {Array.<agrirouter.response.payload.endpoint.CapabilityResponse.IRecipient>} recipients
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @instance
                     */
                    CapabilityResponse.prototype.recipients = $util.emptyArray;

                    /**
                     * Creates a new CapabilityResponse instance using the specified properties.
                     * @function create
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {agrirouter.response.payload.endpoint.ICapabilityResponse=} [properties] Properties to set
                     * @returns {agrirouter.response.payload.endpoint.CapabilityResponse} CapabilityResponse instance
                     */
                    CapabilityResponse.create = function create(properties) {
                        return new CapabilityResponse(properties);
                    };

                    /**
                     * Encodes the specified CapabilityResponse message. Does not implicitly {@link agrirouter.response.payload.endpoint.CapabilityResponse.verify|verify} messages.
                     * @function encode
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {agrirouter.response.payload.endpoint.ICapabilityResponse} message CapabilityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CapabilityResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.applicationMessageId != null && Object.hasOwnProperty.call(message, "applicationMessageId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.applicationMessageId);
                        if (message.recipients != null && message.recipients.length)
                            for (var i = 0; i < message.recipients.length; ++i)
                                $root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.encode(message.recipients[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified CapabilityResponse message, length delimited. Does not implicitly {@link agrirouter.response.payload.endpoint.CapabilityResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {agrirouter.response.payload.endpoint.ICapabilityResponse} message CapabilityResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CapabilityResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a CapabilityResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {agrirouter.response.payload.endpoint.CapabilityResponse} CapabilityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CapabilityResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.response.payload.endpoint.CapabilityResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.applicationMessageId = reader.string();
                                break;
                            case 2:
                                if (!(message.recipients && message.recipients.length))
                                    message.recipients = [];
                                message.recipients.push($root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a CapabilityResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {agrirouter.response.payload.endpoint.CapabilityResponse} CapabilityResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CapabilityResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a CapabilityResponse message.
                     * @function verify
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CapabilityResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.applicationMessageId != null && message.hasOwnProperty("applicationMessageId"))
                            if (!$util.isString(message.applicationMessageId))
                                return "applicationMessageId: string expected";
                        if (message.recipients != null && message.hasOwnProperty("recipients")) {
                            if (!Array.isArray(message.recipients))
                                return "recipients: array expected";
                            for (var i = 0; i < message.recipients.length; ++i) {
                                var error = $root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.verify(message.recipients[i]);
                                if (error)
                                    return "recipients." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates a CapabilityResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {agrirouter.response.payload.endpoint.CapabilityResponse} CapabilityResponse
                     */
                    CapabilityResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.agrirouter.response.payload.endpoint.CapabilityResponse)
                            return object;
                        var message = new $root.agrirouter.response.payload.endpoint.CapabilityResponse();
                        if (object.applicationMessageId != null)
                            message.applicationMessageId = String(object.applicationMessageId);
                        if (object.recipients) {
                            if (!Array.isArray(object.recipients))
                                throw TypeError(".agrirouter.response.payload.endpoint.CapabilityResponse.recipients: array expected");
                            message.recipients = [];
                            for (var i = 0; i < object.recipients.length; ++i) {
                                if (typeof object.recipients[i] !== "object")
                                    throw TypeError(".agrirouter.response.payload.endpoint.CapabilityResponse.recipients: object expected");
                                message.recipients[i] = $root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.fromObject(object.recipients[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a CapabilityResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @static
                     * @param {agrirouter.response.payload.endpoint.CapabilityResponse} message CapabilityResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CapabilityResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.recipients = [];
                        if (options.defaults)
                            object.applicationMessageId = "";
                        if (message.applicationMessageId != null && message.hasOwnProperty("applicationMessageId"))
                            object.applicationMessageId = message.applicationMessageId;
                        if (message.recipients && message.recipients.length) {
                            object.recipients = [];
                            for (var j = 0; j < message.recipients.length; ++j)
                                object.recipients[j] = $root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.toObject(message.recipients[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this CapabilityResponse to JSON.
                     * @function toJSON
                     * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CapabilityResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    CapabilityResponse.Recipient = (function() {

                        /**
                         * Properties of a Recipient.
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                         * @interface IRecipient
                         * @property {string|null} [id] Recipient id
                         * @property {Array.<string>|null} [technicalMessageType] Recipient technicalMessageType
                         */

                        /**
                         * Constructs a new Recipient.
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse
                         * @classdesc Represents a Recipient.
                         * @implements IRecipient
                         * @constructor
                         * @param {agrirouter.response.payload.endpoint.CapabilityResponse.IRecipient=} [properties] Properties to set
                         */
                        function Recipient(properties) {
                            this.technicalMessageType = [];
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }

                        /**
                         * Recipient id.
                         * @member {string} id
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @instance
                         */
                        Recipient.prototype.id = "";

                        /**
                         * Recipient technicalMessageType.
                         * @member {Array.<string>} technicalMessageType
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @instance
                         */
                        Recipient.prototype.technicalMessageType = $util.emptyArray;

                        /**
                         * Creates a new Recipient instance using the specified properties.
                         * @function create
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {agrirouter.response.payload.endpoint.CapabilityResponse.IRecipient=} [properties] Properties to set
                         * @returns {agrirouter.response.payload.endpoint.CapabilityResponse.Recipient} Recipient instance
                         */
                        Recipient.create = function create(properties) {
                            return new Recipient(properties);
                        };

                        /**
                         * Encodes the specified Recipient message. Does not implicitly {@link agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.verify|verify} messages.
                         * @function encode
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {agrirouter.response.payload.endpoint.CapabilityResponse.IRecipient} message Recipient message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Recipient.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                            if (message.technicalMessageType != null && message.technicalMessageType.length)
                                for (var i = 0; i < message.technicalMessageType.length; ++i)
                                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.technicalMessageType[i]);
                            return writer;
                        };

                        /**
                         * Encodes the specified Recipient message, length delimited. Does not implicitly {@link agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {agrirouter.response.payload.endpoint.CapabilityResponse.IRecipient} message Recipient message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Recipient.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };

                        /**
                         * Decodes a Recipient message from the specified reader or buffer.
                         * @function decode
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {agrirouter.response.payload.endpoint.CapabilityResponse.Recipient} Recipient
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Recipient.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.id = reader.string();
                                    break;
                                case 2:
                                    if (!(message.technicalMessageType && message.technicalMessageType.length))
                                        message.technicalMessageType = [];
                                    message.technicalMessageType.push(reader.string());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };

                        /**
                         * Decodes a Recipient message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {agrirouter.response.payload.endpoint.CapabilityResponse.Recipient} Recipient
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Recipient.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };

                        /**
                         * Verifies a Recipient message.
                         * @function verify
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Recipient.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.id != null && message.hasOwnProperty("id"))
                                if (!$util.isString(message.id))
                                    return "id: string expected";
                            if (message.technicalMessageType != null && message.hasOwnProperty("technicalMessageType")) {
                                if (!Array.isArray(message.technicalMessageType))
                                    return "technicalMessageType: array expected";
                                for (var i = 0; i < message.technicalMessageType.length; ++i)
                                    if (!$util.isString(message.technicalMessageType[i]))
                                        return "technicalMessageType: string[] expected";
                            }
                            return null;
                        };

                        /**
                         * Creates a Recipient message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {agrirouter.response.payload.endpoint.CapabilityResponse.Recipient} Recipient
                         */
                        Recipient.fromObject = function fromObject(object) {
                            if (object instanceof $root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient)
                                return object;
                            var message = new $root.agrirouter.response.payload.endpoint.CapabilityResponse.Recipient();
                            if (object.id != null)
                                message.id = String(object.id);
                            if (object.technicalMessageType) {
                                if (!Array.isArray(object.technicalMessageType))
                                    throw TypeError(".agrirouter.response.payload.endpoint.CapabilityResponse.Recipient.technicalMessageType: array expected");
                                message.technicalMessageType = [];
                                for (var i = 0; i < object.technicalMessageType.length; ++i)
                                    message.technicalMessageType[i] = String(object.technicalMessageType[i]);
                            }
                            return message;
                        };

                        /**
                         * Creates a plain object from a Recipient message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @static
                         * @param {agrirouter.response.payload.endpoint.CapabilityResponse.Recipient} message Recipient
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Recipient.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.arrays || options.defaults)
                                object.technicalMessageType = [];
                            if (options.defaults)
                                object.id = "";
                            if (message.id != null && message.hasOwnProperty("id"))
                                object.id = message.id;
                            if (message.technicalMessageType && message.technicalMessageType.length) {
                                object.technicalMessageType = [];
                                for (var j = 0; j < message.technicalMessageType.length; ++j)
                                    object.technicalMessageType[j] = message.technicalMessageType[j];
                            }
                            return object;
                        };

                        /**
                         * Converts this Recipient to JSON.
                         * @function toJSON
                         * @memberof agrirouter.response.payload.endpoint.CapabilityResponse.Recipient
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Recipient.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };

                        return Recipient;
                    })();

                    return CapabilityResponse;
                })();

                return endpoint;
            })();

            return payload;
        })();

        response.ResponseEnvelope = (function() {

            /**
             * Properties of a ResponseEnvelope.
             * @memberof agrirouter.response
             * @interface IResponseEnvelope
             * @property {number|null} [responseCode] ResponseEnvelope responseCode
             * @property {agrirouter.response.ResponseEnvelope.ResponseBodyType|null} [type] ResponseEnvelope type
             * @property {string|null} [applicationMessageId] ResponseEnvelope applicationMessageId
             * @property {string|null} [messageId] ResponseEnvelope messageId
             * @property {google.protobuf.ITimestamp|null} [timestamp] ResponseEnvelope timestamp
             */

            /**
             * Constructs a new ResponseEnvelope.
             * @memberof agrirouter.response
             * @classdesc Represents a ResponseEnvelope.
             * @implements IResponseEnvelope
             * @constructor
             * @param {agrirouter.response.IResponseEnvelope=} [properties] Properties to set
             */
            function ResponseEnvelope(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponseEnvelope responseCode.
             * @member {number} responseCode
             * @memberof agrirouter.response.ResponseEnvelope
             * @instance
             */
            ResponseEnvelope.prototype.responseCode = 0;

            /**
             * ResponseEnvelope type.
             * @member {agrirouter.response.ResponseEnvelope.ResponseBodyType} type
             * @memberof agrirouter.response.ResponseEnvelope
             * @instance
             */
            ResponseEnvelope.prototype.type = 0;

            /**
             * ResponseEnvelope applicationMessageId.
             * @member {string} applicationMessageId
             * @memberof agrirouter.response.ResponseEnvelope
             * @instance
             */
            ResponseEnvelope.prototype.applicationMessageId = "";

            /**
             * ResponseEnvelope messageId.
             * @member {string} messageId
             * @memberof agrirouter.response.ResponseEnvelope
             * @instance
             */
            ResponseEnvelope.prototype.messageId = "";

            /**
             * ResponseEnvelope timestamp.
             * @member {google.protobuf.ITimestamp|null|undefined} timestamp
             * @memberof agrirouter.response.ResponseEnvelope
             * @instance
             */
            ResponseEnvelope.prototype.timestamp = null;

            /**
             * Creates a new ResponseEnvelope instance using the specified properties.
             * @function create
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {agrirouter.response.IResponseEnvelope=} [properties] Properties to set
             * @returns {agrirouter.response.ResponseEnvelope} ResponseEnvelope instance
             */
            ResponseEnvelope.create = function create(properties) {
                return new ResponseEnvelope(properties);
            };

            /**
             * Encodes the specified ResponseEnvelope message. Does not implicitly {@link agrirouter.response.ResponseEnvelope.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {agrirouter.response.IResponseEnvelope} message ResponseEnvelope message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseEnvelope.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.responseCode != null && Object.hasOwnProperty.call(message, "responseCode"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.responseCode);
                if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                if (message.applicationMessageId != null && Object.hasOwnProperty.call(message, "applicationMessageId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.applicationMessageId);
                if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.messageId);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResponseEnvelope message, length delimited. Does not implicitly {@link agrirouter.response.ResponseEnvelope.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {agrirouter.response.IResponseEnvelope} message ResponseEnvelope message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponseEnvelope.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponseEnvelope message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.response.ResponseEnvelope} ResponseEnvelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseEnvelope.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.response.ResponseEnvelope();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.responseCode = reader.int32();
                        break;
                    case 2:
                        message.type = reader.int32();
                        break;
                    case 3:
                        message.applicationMessageId = reader.string();
                        break;
                    case 4:
                        message.messageId = reader.string();
                        break;
                    case 5:
                        message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponseEnvelope message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.response.ResponseEnvelope} ResponseEnvelope
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponseEnvelope.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponseEnvelope message.
             * @function verify
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponseEnvelope.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.responseCode != null && message.hasOwnProperty("responseCode"))
                    if (!$util.isInteger(message.responseCode))
                        return "responseCode: integer expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 6:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case 12:
                        break;
                    }
                if (message.applicationMessageId != null && message.hasOwnProperty("applicationMessageId"))
                    if (!$util.isString(message.applicationMessageId))
                        return "applicationMessageId: string expected";
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    if (!$util.isString(message.messageId))
                        return "messageId: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                    if (error)
                        return "timestamp." + error;
                }
                return null;
            };

            /**
             * Creates a ResponseEnvelope message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.response.ResponseEnvelope} ResponseEnvelope
             */
            ResponseEnvelope.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.response.ResponseEnvelope)
                    return object;
                var message = new $root.agrirouter.response.ResponseEnvelope();
                if (object.responseCode != null)
                    message.responseCode = object.responseCode | 0;
                switch (object.type) {
                case "MESSAGES":
                case 0:
                    message.type = 0;
                    break;
                case "ACK":
                case 1:
                    message.type = 1;
                    break;
                case "ACK_WITH_MESSAGES":
                case 2:
                    message.type = 2;
                    break;
                case "ACK_WITH_FAILURE":
                case 3:
                    message.type = 3;
                    break;
                case "ACK_FOR_FEED_HEADER_LIST":
                case 6:
                    message.type = 6;
                    break;
                case "ACK_FOR_FEED_MESSAGE":
                case 7:
                    message.type = 7;
                    break;
                case "ACK_FOR_FEED_FAILED_MESSAGE":
                case 8:
                    message.type = 8;
                    break;
                case "ENDPOINTS_LISTING":
                case 10:
                    message.type = 10;
                    break;
                case "CLOUD_REGISTRATIONS":
                case 11:
                    message.type = 11;
                    break;
                case "PUSH_NOTIFICATION":
                case 12:
                    message.type = 12;
                    break;
                }
                if (object.applicationMessageId != null)
                    message.applicationMessageId = String(object.applicationMessageId);
                if (object.messageId != null)
                    message.messageId = String(object.messageId);
                if (object.timestamp != null) {
                    if (typeof object.timestamp !== "object")
                        throw TypeError(".agrirouter.response.ResponseEnvelope.timestamp: object expected");
                    message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponseEnvelope message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.response.ResponseEnvelope
             * @static
             * @param {agrirouter.response.ResponseEnvelope} message ResponseEnvelope
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponseEnvelope.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.responseCode = 0;
                    object.type = options.enums === String ? "MESSAGES" : 0;
                    object.applicationMessageId = "";
                    object.messageId = "";
                    object.timestamp = null;
                }
                if (message.responseCode != null && message.hasOwnProperty("responseCode"))
                    object.responseCode = message.responseCode;
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.agrirouter.response.ResponseEnvelope.ResponseBodyType[message.type] : message.type;
                if (message.applicationMessageId != null && message.hasOwnProperty("applicationMessageId"))
                    object.applicationMessageId = message.applicationMessageId;
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    object.messageId = message.messageId;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
                return object;
            };

            /**
             * Converts this ResponseEnvelope to JSON.
             * @function toJSON
             * @memberof agrirouter.response.ResponseEnvelope
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponseEnvelope.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * ResponseBodyType enum.
             * @name agrirouter.response.ResponseEnvelope.ResponseBodyType
             * @enum {number}
             * @property {number} MESSAGES=0 MESSAGES value
             * @property {number} ACK=1 ACK value
             * @property {number} ACK_WITH_MESSAGES=2 ACK_WITH_MESSAGES value
             * @property {number} ACK_WITH_FAILURE=3 ACK_WITH_FAILURE value
             * @property {number} ACK_FOR_FEED_HEADER_LIST=6 ACK_FOR_FEED_HEADER_LIST value
             * @property {number} ACK_FOR_FEED_MESSAGE=7 ACK_FOR_FEED_MESSAGE value
             * @property {number} ACK_FOR_FEED_FAILED_MESSAGE=8 ACK_FOR_FEED_FAILED_MESSAGE value
             * @property {number} ENDPOINTS_LISTING=10 ENDPOINTS_LISTING value
             * @property {number} CLOUD_REGISTRATIONS=11 CLOUD_REGISTRATIONS value
             * @property {number} PUSH_NOTIFICATION=12 PUSH_NOTIFICATION value
             */
            ResponseEnvelope.ResponseBodyType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "MESSAGES"] = 0;
                values[valuesById[1] = "ACK"] = 1;
                values[valuesById[2] = "ACK_WITH_MESSAGES"] = 2;
                values[valuesById[3] = "ACK_WITH_FAILURE"] = 3;
                values[valuesById[6] = "ACK_FOR_FEED_HEADER_LIST"] = 6;
                values[valuesById[7] = "ACK_FOR_FEED_MESSAGE"] = 7;
                values[valuesById[8] = "ACK_FOR_FEED_FAILED_MESSAGE"] = 8;
                values[valuesById[10] = "ENDPOINTS_LISTING"] = 10;
                values[valuesById[11] = "CLOUD_REGISTRATIONS"] = 11;
                values[valuesById[12] = "PUSH_NOTIFICATION"] = 12;
                return values;
            })();

            return ResponseEnvelope;
        })();

        response.ResponsePayloadWrapper = (function() {

            /**
             * Properties of a ResponsePayloadWrapper.
             * @memberof agrirouter.response
             * @interface IResponsePayloadWrapper
             * @property {google.protobuf.IAny|null} [details] ResponsePayloadWrapper details
             */

            /**
             * Constructs a new ResponsePayloadWrapper.
             * @memberof agrirouter.response
             * @classdesc Represents a ResponsePayloadWrapper.
             * @implements IResponsePayloadWrapper
             * @constructor
             * @param {agrirouter.response.IResponsePayloadWrapper=} [properties] Properties to set
             */
            function ResponsePayloadWrapper(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResponsePayloadWrapper details.
             * @member {google.protobuf.IAny|null|undefined} details
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @instance
             */
            ResponsePayloadWrapper.prototype.details = null;

            /**
             * Creates a new ResponsePayloadWrapper instance using the specified properties.
             * @function create
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {agrirouter.response.IResponsePayloadWrapper=} [properties] Properties to set
             * @returns {agrirouter.response.ResponsePayloadWrapper} ResponsePayloadWrapper instance
             */
            ResponsePayloadWrapper.create = function create(properties) {
                return new ResponsePayloadWrapper(properties);
            };

            /**
             * Encodes the specified ResponsePayloadWrapper message. Does not implicitly {@link agrirouter.response.ResponsePayloadWrapper.verify|verify} messages.
             * @function encode
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {agrirouter.response.IResponsePayloadWrapper} message ResponsePayloadWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePayloadWrapper.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                    $root.google.protobuf.Any.encode(message.details, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResponsePayloadWrapper message, length delimited. Does not implicitly {@link agrirouter.response.ResponsePayloadWrapper.verify|verify} messages.
             * @function encodeDelimited
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {agrirouter.response.IResponsePayloadWrapper} message ResponsePayloadWrapper message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResponsePayloadWrapper.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResponsePayloadWrapper message from the specified reader or buffer.
             * @function decode
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {agrirouter.response.ResponsePayloadWrapper} ResponsePayloadWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePayloadWrapper.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.response.ResponsePayloadWrapper();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.details = $root.google.protobuf.Any.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResponsePayloadWrapper message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {agrirouter.response.ResponsePayloadWrapper} ResponsePayloadWrapper
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResponsePayloadWrapper.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResponsePayloadWrapper message.
             * @function verify
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResponsePayloadWrapper.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.details != null && message.hasOwnProperty("details")) {
                    var error = $root.google.protobuf.Any.verify(message.details);
                    if (error)
                        return "details." + error;
                }
                return null;
            };

            /**
             * Creates a ResponsePayloadWrapper message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {agrirouter.response.ResponsePayloadWrapper} ResponsePayloadWrapper
             */
            ResponsePayloadWrapper.fromObject = function fromObject(object) {
                if (object instanceof $root.agrirouter.response.ResponsePayloadWrapper)
                    return object;
                var message = new $root.agrirouter.response.ResponsePayloadWrapper();
                if (object.details != null) {
                    if (typeof object.details !== "object")
                        throw TypeError(".agrirouter.response.ResponsePayloadWrapper.details: object expected");
                    message.details = $root.google.protobuf.Any.fromObject(object.details);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResponsePayloadWrapper message. Also converts values to other types if specified.
             * @function toObject
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @static
             * @param {agrirouter.response.ResponsePayloadWrapper} message ResponsePayloadWrapper
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResponsePayloadWrapper.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.details = null;
                if (message.details != null && message.hasOwnProperty("details"))
                    object.details = $root.google.protobuf.Any.toObject(message.details, options);
                return object;
            };

            /**
             * Converts this ResponsePayloadWrapper to JSON.
             * @function toJSON
             * @memberof agrirouter.response.ResponsePayloadWrapper
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResponsePayloadWrapper.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ResponsePayloadWrapper;
        })();

        return response;
    })();

    agrirouter.message = (function() {

        /**
         * Namespace message.
         * @memberof agrirouter
         * @namespace
         */
        var message = {};

        message.settings = (function() {

            /**
             * Namespace settings.
             * @memberof agrirouter.message
             * @namespace
             */
            var settings = {};

            settings.DataHubControlSettings = (function() {

                /**
                 * Properties of a DataHubControlSettings.
                 * @memberof agrirouter.message.settings
                 * @interface IDataHubControlSettings
                 * @property {number|null} [maxMessageSize] DataHubControlSettings maxMessageSize
                 * @property {number|null} [maxMessagesPerQuery] DataHubControlSettings maxMessagesPerQuery
                 */

                /**
                 * Constructs a new DataHubControlSettings.
                 * @memberof agrirouter.message.settings
                 * @classdesc Represents a DataHubControlSettings.
                 * @implements IDataHubControlSettings
                 * @constructor
                 * @param {agrirouter.message.settings.IDataHubControlSettings=} [properties] Properties to set
                 */
                function DataHubControlSettings(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * DataHubControlSettings maxMessageSize.
                 * @member {number} maxMessageSize
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @instance
                 */
                DataHubControlSettings.prototype.maxMessageSize = 0;

                /**
                 * DataHubControlSettings maxMessagesPerQuery.
                 * @member {number} maxMessagesPerQuery
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @instance
                 */
                DataHubControlSettings.prototype.maxMessagesPerQuery = 0;

                /**
                 * Creates a new DataHubControlSettings instance using the specified properties.
                 * @function create
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {agrirouter.message.settings.IDataHubControlSettings=} [properties] Properties to set
                 * @returns {agrirouter.message.settings.DataHubControlSettings} DataHubControlSettings instance
                 */
                DataHubControlSettings.create = function create(properties) {
                    return new DataHubControlSettings(properties);
                };

                /**
                 * Encodes the specified DataHubControlSettings message. Does not implicitly {@link agrirouter.message.settings.DataHubControlSettings.verify|verify} messages.
                 * @function encode
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {agrirouter.message.settings.IDataHubControlSettings} message DataHubControlSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DataHubControlSettings.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.maxMessageSize != null && Object.hasOwnProperty.call(message, "maxMessageSize"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.maxMessageSize);
                    if (message.maxMessagesPerQuery != null && Object.hasOwnProperty.call(message, "maxMessagesPerQuery"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxMessagesPerQuery);
                    return writer;
                };

                /**
                 * Encodes the specified DataHubControlSettings message, length delimited. Does not implicitly {@link agrirouter.message.settings.DataHubControlSettings.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {agrirouter.message.settings.IDataHubControlSettings} message DataHubControlSettings message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DataHubControlSettings.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a DataHubControlSettings message from the specified reader or buffer.
                 * @function decode
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {agrirouter.message.settings.DataHubControlSettings} DataHubControlSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DataHubControlSettings.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.agrirouter.message.settings.DataHubControlSettings();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.maxMessageSize = reader.int32();
                            break;
                        case 2:
                            message.maxMessagesPerQuery = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a DataHubControlSettings message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {agrirouter.message.settings.DataHubControlSettings} DataHubControlSettings
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DataHubControlSettings.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a DataHubControlSettings message.
                 * @function verify
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DataHubControlSettings.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.maxMessageSize != null && message.hasOwnProperty("maxMessageSize"))
                        if (!$util.isInteger(message.maxMessageSize))
                            return "maxMessageSize: integer expected";
                    if (message.maxMessagesPerQuery != null && message.hasOwnProperty("maxMessagesPerQuery"))
                        if (!$util.isInteger(message.maxMessagesPerQuery))
                            return "maxMessagesPerQuery: integer expected";
                    return null;
                };

                /**
                 * Creates a DataHubControlSettings message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {agrirouter.message.settings.DataHubControlSettings} DataHubControlSettings
                 */
                DataHubControlSettings.fromObject = function fromObject(object) {
                    if (object instanceof $root.agrirouter.message.settings.DataHubControlSettings)
                        return object;
                    var message = new $root.agrirouter.message.settings.DataHubControlSettings();
                    if (object.maxMessageSize != null)
                        message.maxMessageSize = object.maxMessageSize | 0;
                    if (object.maxMessagesPerQuery != null)
                        message.maxMessagesPerQuery = object.maxMessagesPerQuery | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a DataHubControlSettings message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @static
                 * @param {agrirouter.message.settings.DataHubControlSettings} message DataHubControlSettings
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DataHubControlSettings.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.maxMessageSize = 0;
                        object.maxMessagesPerQuery = 0;
                    }
                    if (message.maxMessageSize != null && message.hasOwnProperty("maxMessageSize"))
                        object.maxMessageSize = message.maxMessageSize;
                    if (message.maxMessagesPerQuery != null && message.hasOwnProperty("maxMessagesPerQuery"))
                        object.maxMessagesPerQuery = message.maxMessagesPerQuery;
                    return object;
                };

                /**
                 * Converts this DataHubControlSettings to JSON.
                 * @function toJSON
                 * @memberof agrirouter.message.settings.DataHubControlSettings
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DataHubControlSettings.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return DataHubControlSettings;
            })();

            return settings;
        })();

        return message;
    })();

    return agrirouter;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                var message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
