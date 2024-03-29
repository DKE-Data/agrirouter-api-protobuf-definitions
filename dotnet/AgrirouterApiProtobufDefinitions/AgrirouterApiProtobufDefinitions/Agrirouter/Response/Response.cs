// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: messaging/response/response.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Agrirouter.Response {

  /// <summary>Holder for reflection information generated from messaging/response/response.proto</summary>
  public static partial class ResponseReflection {

    #region Descriptor
    /// <summary>File descriptor for messaging/response/response.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ResponseReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiFtZXNzYWdpbmcvcmVzcG9uc2UvcmVzcG9uc2UucHJvdG8SE2Fncmlyb3V0",
            "ZXIucmVzcG9uc2UaGWdvb2dsZS9wcm90b2J1Zi9hbnkucHJvdG8aH2dvb2ds",
            "ZS9wcm90b2J1Zi90aW1lc3RhbXAucHJvdG8iywMKEFJlc3BvbnNlRW52ZWxv",
            "cGUSFQoNcmVzcG9uc2VfY29kZRgBIAEoBRJECgR0eXBlGAIgASgOMjYuYWdy",
            "aXJvdXRlci5yZXNwb25zZS5SZXNwb25zZUVudmVsb3BlLlJlc3BvbnNlQm9k",
            "eVR5cGUSHgoWYXBwbGljYXRpb25fbWVzc2FnZV9pZBgDIAEoCRISCgptZXNz",
            "YWdlX2lkGAQgASgJEi0KCXRpbWVzdGFtcBgFIAEoCzIaLmdvb2dsZS5wcm90",
            "b2J1Zi5UaW1lc3RhbXAi9gEKEFJlc3BvbnNlQm9keVR5cGUSDAoITUVTU0FH",
            "RVMQABIHCgNBQ0sQARIVChFBQ0tfV0lUSF9NRVNTQUdFUxACEhQKEEFDS19X",
            "SVRIX0ZBSUxVUkUQAxIcChhBQ0tfRk9SX0ZFRURfSEVBREVSX0xJU1QQBhIY",
            "ChRBQ0tfRk9SX0ZFRURfTUVTU0FHRRAHEh8KG0FDS19GT1JfRkVFRF9GQUlM",
            "RURfTUVTU0FHRRAIEhUKEUVORFBPSU5UU19MSVNUSU5HEAoSFwoTQ0xPVURf",
            "UkVHSVNUUkFUSU9OUxALEhUKEVBVU0hfTk9USUZJQ0FUSU9OEAwiPwoWUmVz",
            "cG9uc2VQYXlsb2FkV3JhcHBlchIlCgdkZXRhaWxzGAEgASgLMhQuZ29vZ2xl",
            "LnByb3RvYnVmLkFueWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.AnyReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Agrirouter.Response.ResponseEnvelope), global::Agrirouter.Response.ResponseEnvelope.Parser, new[]{ "ResponseCode", "Type", "ApplicationMessageId", "MessageId", "Timestamp" }, null, new[]{ typeof(global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType) }, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Agrirouter.Response.ResponsePayloadWrapper), global::Agrirouter.Response.ResponsePayloadWrapper.Parser, new[]{ "Details" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class ResponseEnvelope : pb::IMessage<ResponseEnvelope>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ResponseEnvelope> _parser = new pb::MessageParser<ResponseEnvelope>(() => new ResponseEnvelope());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ResponseEnvelope> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Agrirouter.Response.ResponseReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ResponseEnvelope() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ResponseEnvelope(ResponseEnvelope other) : this() {
      responseCode_ = other.responseCode_;
      type_ = other.type_;
      applicationMessageId_ = other.applicationMessageId_;
      messageId_ = other.messageId_;
      timestamp_ = other.timestamp_ != null ? other.timestamp_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ResponseEnvelope Clone() {
      return new ResponseEnvelope(this);
    }

    /// <summary>Field number for the "response_code" field.</summary>
    public const int ResponseCodeFieldNumber = 1;
    private int responseCode_;
    /// <summary>
    /// HTTP Response Codes will be used here (200, 400, 201, etc)
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int ResponseCode {
      get { return responseCode_; }
      set {
        responseCode_ = value;
      }
    }

    /// <summary>Field number for the "type" field.</summary>
    public const int TypeFieldNumber = 2;
    private global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType type_ = global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType.Messages;
    /// <summary>
    /// The Type of the Body so that it can be decoded
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType Type {
      get { return type_; }
      set {
        type_ = value;
      }
    }

    /// <summary>Field number for the "application_message_id" field.</summary>
    public const int ApplicationMessageIdFieldNumber = 3;
    private string applicationMessageId_ = "";
    /// <summary>
    /// If this is in reference to a message received by the agrirouter this ID could be placed here as it was sent by the application
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ApplicationMessageId {
      get { return applicationMessageId_; }
      set {
        applicationMessageId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "message_id" field.</summary>
    public const int MessageIdFieldNumber = 4;
    private string messageId_ = "";
    /// <summary>
    /// If this is in reference to a message received by the agrirouter the generated agrirouter ID would be here in reference
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string MessageId {
      get { return messageId_; }
      set {
        messageId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "timestamp" field.</summary>
    public const int TimestampFieldNumber = 5;
    private global::Google.Protobuf.WellKnownTypes.Timestamp timestamp_;
    /// <summary>
    /// UTC Timestamp for when this acknowledgement was generated by the DH
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Google.Protobuf.WellKnownTypes.Timestamp Timestamp {
      get { return timestamp_; }
      set {
        timestamp_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as ResponseEnvelope);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ResponseEnvelope other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ResponseCode != other.ResponseCode) return false;
      if (Type != other.Type) return false;
      if (ApplicationMessageId != other.ApplicationMessageId) return false;
      if (MessageId != other.MessageId) return false;
      if (!object.Equals(Timestamp, other.Timestamp)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (ResponseCode != 0) hash ^= ResponseCode.GetHashCode();
      if (Type != global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType.Messages) hash ^= Type.GetHashCode();
      if (ApplicationMessageId.Length != 0) hash ^= ApplicationMessageId.GetHashCode();
      if (MessageId.Length != 0) hash ^= MessageId.GetHashCode();
      if (timestamp_ != null) hash ^= Timestamp.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (ResponseCode != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(ResponseCode);
      }
      if (Type != global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType.Messages) {
        output.WriteRawTag(16);
        output.WriteEnum((int) Type);
      }
      if (ApplicationMessageId.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(ApplicationMessageId);
      }
      if (MessageId.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(MessageId);
      }
      if (timestamp_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(Timestamp);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (ResponseCode != 0) {
        output.WriteRawTag(8);
        output.WriteInt32(ResponseCode);
      }
      if (Type != global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType.Messages) {
        output.WriteRawTag(16);
        output.WriteEnum((int) Type);
      }
      if (ApplicationMessageId.Length != 0) {
        output.WriteRawTag(26);
        output.WriteString(ApplicationMessageId);
      }
      if (MessageId.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(MessageId);
      }
      if (timestamp_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(Timestamp);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (ResponseCode != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(ResponseCode);
      }
      if (Type != global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType.Messages) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Type);
      }
      if (ApplicationMessageId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ApplicationMessageId);
      }
      if (MessageId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(MessageId);
      }
      if (timestamp_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Timestamp);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ResponseEnvelope other) {
      if (other == null) {
        return;
      }
      if (other.ResponseCode != 0) {
        ResponseCode = other.ResponseCode;
      }
      if (other.Type != global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType.Messages) {
        Type = other.Type;
      }
      if (other.ApplicationMessageId.Length != 0) {
        ApplicationMessageId = other.ApplicationMessageId;
      }
      if (other.MessageId.Length != 0) {
        MessageId = other.MessageId;
      }
      if (other.timestamp_ != null) {
        if (timestamp_ == null) {
          Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
        }
        Timestamp.MergeFrom(other.Timestamp);
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            ResponseCode = input.ReadInt32();
            break;
          }
          case 16: {
            Type = (global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType) input.ReadEnum();
            break;
          }
          case 26: {
            ApplicationMessageId = input.ReadString();
            break;
          }
          case 34: {
            MessageId = input.ReadString();
            break;
          }
          case 42: {
            if (timestamp_ == null) {
              Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(Timestamp);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            ResponseCode = input.ReadInt32();
            break;
          }
          case 16: {
            Type = (global::Agrirouter.Response.ResponseEnvelope.Types.ResponseBodyType) input.ReadEnum();
            break;
          }
          case 26: {
            ApplicationMessageId = input.ReadString();
            break;
          }
          case 34: {
            MessageId = input.ReadString();
            break;
          }
          case 42: {
            if (timestamp_ == null) {
              Timestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            input.ReadMessage(Timestamp);
            break;
          }
        }
      }
    }
    #endif

    #region Nested types
    /// <summary>Container for nested types declared in the ResponseEnvelope message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public enum ResponseBodyType {
        [pbr::OriginalName("MESSAGES")] Messages = 0,
        /// <summary>
        /// Represents a successful acknowledgement of a message sent to the agrirouter
        /// </summary>
        [pbr::OriginalName("ACK")] Ack = 1,
        /// <summary>
        /// Represents a successful acknowledgement of a message sent to the agrirouter but contains some info or warn messages back
        /// </summary>
        [pbr::OriginalName("ACK_WITH_MESSAGES")] AckWithMessages = 2,
        /// <summary>
        /// Represents a failure response in correlation to a message sent to the agrirouter
        /// </summary>
        [pbr::OriginalName("ACK_WITH_FAILURE")] AckWithFailure = 3,
        /// <summary>
        /// Used for acknowledgements for feed envelope requests and cantain the agrirouter.feed.response.EnvelopeResponse details
        /// </summary>
        [pbr::OriginalName("ACK_FOR_FEED_HEADER_LIST")] AckForFeedHeaderList = 6,
        /// <summary>
        /// Used for acknowledgements for feed payload requests and cantain the agrirouter.feed.response.PayloadResponse details
        /// </summary>
        [pbr::OriginalName("ACK_FOR_FEED_MESSAGE")] AckForFeedMessage = 7,
        /// <summary>
        /// Response for failed requests to feed queries
        /// </summary>
        [pbr::OriginalName("ACK_FOR_FEED_FAILED_MESSAGE")] AckForFeedFailedMessage = 8,
        /// <summary>
        /// Used for a response which contains the endpoint listing query results
        /// </summary>
        [pbr::OriginalName("ENDPOINTS_LISTING")] EndpointsListing = 10,
        /// <summary>
        /// Used for the response body type for agrirouter.cloud.registration.OnboardingResponse
        /// </summary>
        [pbr::OriginalName("CLOUD_REGISTRATIONS")] CloudRegistrations = 11,
        /// <summary>
        /// Used for push notification messages
        /// </summary>
        [pbr::OriginalName("PUSH_NOTIFICATION")] PushNotification = 12,
      }

    }
    #endregion

  }

  public sealed partial class ResponsePayloadWrapper : pb::IMessage<ResponsePayloadWrapper>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<ResponsePayloadWrapper> _parser = new pb::MessageParser<ResponsePayloadWrapper>(() => new ResponsePayloadWrapper());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<ResponsePayloadWrapper> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Agrirouter.Response.ResponseReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ResponsePayloadWrapper() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ResponsePayloadWrapper(ResponsePayloadWrapper other) : this() {
      details_ = other.details_ != null ? other.details_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ResponsePayloadWrapper Clone() {
      return new ResponsePayloadWrapper(this);
    }

    /// <summary>Field number for the "details" field.</summary>
    public const int DetailsFieldNumber = 1;
    private global::Google.Protobuf.WellKnownTypes.Any details_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Google.Protobuf.WellKnownTypes.Any Details {
      get { return details_; }
      set {
        details_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as ResponsePayloadWrapper);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(ResponsePayloadWrapper other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(Details, other.Details)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (details_ != null) hash ^= Details.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (details_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Details);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (details_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(Details);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (details_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Details);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(ResponsePayloadWrapper other) {
      if (other == null) {
        return;
      }
      if (other.details_ != null) {
        if (details_ == null) {
          Details = new global::Google.Protobuf.WellKnownTypes.Any();
        }
        Details.MergeFrom(other.Details);
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (details_ == null) {
              Details = new global::Google.Protobuf.WellKnownTypes.Any();
            }
            input.ReadMessage(Details);
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            if (details_ == null) {
              Details = new global::Google.Protobuf.WellKnownTypes.Any();
            }
            input.ReadMessage(Details);
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code
