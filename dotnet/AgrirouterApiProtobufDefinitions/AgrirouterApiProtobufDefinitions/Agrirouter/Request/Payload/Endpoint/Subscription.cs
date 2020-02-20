// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: messaging/request/payload/endpoint/subscription.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Agrirouter.Request.Payload.Endpoint {

  /// <summary>Holder for reflection information generated from messaging/request/payload/endpoint/subscription.proto</summary>
  public static partial class SubscriptionReflection {

    #region Descriptor
    /// <summary>File descriptor for messaging/request/payload/endpoint/subscription.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static SubscriptionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjVtZXNzYWdpbmcvcmVxdWVzdC9wYXlsb2FkL2VuZHBvaW50L3N1YnNjcmlw",
            "dGlvbi5wcm90bxIjYWdyaXJvdXRlci5yZXF1ZXN0LnBheWxvYWQuZW5kcG9p",
            "bnQi3QEKDFN1YnNjcmlwdGlvbhJuChd0ZWNobmljYWxfbWVzc2FnZV90eXBl",
            "cxgBIAMoCzJNLmFncmlyb3V0ZXIucmVxdWVzdC5wYXlsb2FkLmVuZHBvaW50",
            "LlN1YnNjcmlwdGlvbi5NZXNzYWdlVHlwZVN1YnNjcmlwdGlvbkl0ZW0aXQob",
            "TWVzc2FnZVR5cGVTdWJzY3JpcHRpb25JdGVtEh4KFnRlY2huaWNhbF9tZXNz",
            "YWdlX3R5cGUYASABKAkSDAoEZGRpcxgCIAMoDRIQCghwb3NpdGlvbhgDIAEo",
            "CGIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Agrirouter.Request.Payload.Endpoint.Subscription), global::Agrirouter.Request.Payload.Endpoint.Subscription.Parser, new[]{ "TechnicalMessageTypes" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { new pbr::GeneratedClrTypeInfo(typeof(global::Agrirouter.Request.Payload.Endpoint.Subscription.Types.MessageTypeSubscriptionItem), global::Agrirouter.Request.Payload.Endpoint.Subscription.Types.MessageTypeSubscriptionItem.Parser, new[]{ "TechnicalMessageType", "Ddis", "Position" }, null, null, null, null)})
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Subscription : pb::IMessage<Subscription> {
    private static readonly pb::MessageParser<Subscription> _parser = new pb::MessageParser<Subscription>(() => new Subscription());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Subscription> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Agrirouter.Request.Payload.Endpoint.SubscriptionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Subscription() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Subscription(Subscription other) : this() {
      technicalMessageTypes_ = other.technicalMessageTypes_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Subscription Clone() {
      return new Subscription(this);
    }

    /// <summary>Field number for the "technical_message_types" field.</summary>
    public const int TechnicalMessageTypesFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Agrirouter.Request.Payload.Endpoint.Subscription.Types.MessageTypeSubscriptionItem> _repeated_technicalMessageTypes_codec
        = pb::FieldCodec.ForMessage(10, global::Agrirouter.Request.Payload.Endpoint.Subscription.Types.MessageTypeSubscriptionItem.Parser);
    private readonly pbc::RepeatedField<global::Agrirouter.Request.Payload.Endpoint.Subscription.Types.MessageTypeSubscriptionItem> technicalMessageTypes_ = new pbc::RepeatedField<global::Agrirouter.Request.Payload.Endpoint.Subscription.Types.MessageTypeSubscriptionItem>();
    /// <summary>
    /// List of message types to subscribe to subscriptions
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Agrirouter.Request.Payload.Endpoint.Subscription.Types.MessageTypeSubscriptionItem> TechnicalMessageTypes {
      get { return technicalMessageTypes_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Subscription);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Subscription other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!technicalMessageTypes_.Equals(other.technicalMessageTypes_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= technicalMessageTypes_.GetHashCode();
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
      technicalMessageTypes_.WriteTo(output, _repeated_technicalMessageTypes_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += technicalMessageTypes_.CalculateSize(_repeated_technicalMessageTypes_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Subscription other) {
      if (other == null) {
        return;
      }
      technicalMessageTypes_.Add(other.technicalMessageTypes_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            technicalMessageTypes_.AddEntriesFrom(input, _repeated_technicalMessageTypes_codec);
            break;
          }
        }
      }
    }

    #region Nested types
    /// <summary>Container for nested types declared in the Subscription message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public sealed partial class MessageTypeSubscriptionItem : pb::IMessage<MessageTypeSubscriptionItem> {
        private static readonly pb::MessageParser<MessageTypeSubscriptionItem> _parser = new pb::MessageParser<MessageTypeSubscriptionItem>(() => new MessageTypeSubscriptionItem());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pb::MessageParser<MessageTypeSubscriptionItem> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::Agrirouter.Request.Payload.Endpoint.Subscription.Descriptor.NestedTypes[0]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public MessageTypeSubscriptionItem() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public MessageTypeSubscriptionItem(MessageTypeSubscriptionItem other) : this() {
          technicalMessageType_ = other.technicalMessageType_;
          ddis_ = other.ddis_.Clone();
          position_ = other.position_;
          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public MessageTypeSubscriptionItem Clone() {
          return new MessageTypeSubscriptionItem(this);
        }

        /// <summary>Field number for the "technical_message_type" field.</summary>
        public const int TechnicalMessageTypeFieldNumber = 1;
        private string technicalMessageType_ = "";
        /// <summary>
        /// Technical Message type from the agrirouter
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string TechnicalMessageType {
          get { return technicalMessageType_; }
          set {
            technicalMessageType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "ddis" field.</summary>
        public const int DdisFieldNumber = 2;
        private static readonly pb::FieldCodec<uint> _repeated_ddis_codec
            = pb::FieldCodec.ForUInt32(18);
        private readonly pbc::RepeatedField<uint> ddis_ = new pbc::RepeatedField<uint>();
        /// <summary>
        /// Applicable only for Telemetry Messages these are the DDI Codes to subscribe to
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public pbc::RepeatedField<uint> Ddis {
          get { return ddis_; }
        }

        /// <summary>Field number for the "position" field.</summary>
        public const int PositionFieldNumber = 3;
        private bool position_;
        /// <summary>
        /// Applicable only for Telemetry Messages to subscribe to GeoLocation Position information
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public bool Position {
          get { return position_; }
          set {
            position_ = value;
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override bool Equals(object other) {
          return Equals(other as MessageTypeSubscriptionItem);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public bool Equals(MessageTypeSubscriptionItem other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (TechnicalMessageType != other.TechnicalMessageType) return false;
          if(!ddis_.Equals(other.ddis_)) return false;
          if (Position != other.Position) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override int GetHashCode() {
          int hash = 1;
          if (TechnicalMessageType.Length != 0) hash ^= TechnicalMessageType.GetHashCode();
          hash ^= ddis_.GetHashCode();
          if (Position != false) hash ^= Position.GetHashCode();
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
          if (TechnicalMessageType.Length != 0) {
            output.WriteRawTag(10);
            output.WriteString(TechnicalMessageType);
          }
          ddis_.WriteTo(output, _repeated_ddis_codec);
          if (Position != false) {
            output.WriteRawTag(24);
            output.WriteBool(Position);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(output);
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public int CalculateSize() {
          int size = 0;
          if (TechnicalMessageType.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(TechnicalMessageType);
          }
          size += ddis_.CalculateSize(_repeated_ddis_codec);
          if (Position != false) {
            size += 1 + 1;
          }
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public void MergeFrom(MessageTypeSubscriptionItem other) {
          if (other == null) {
            return;
          }
          if (other.TechnicalMessageType.Length != 0) {
            TechnicalMessageType = other.TechnicalMessageType;
          }
          ddis_.Add(other.ddis_);
          if (other.Position != false) {
            Position = other.Position;
          }
          _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public void MergeFrom(pb::CodedInputStream input) {
          uint tag;
          while ((tag = input.ReadTag()) != 0) {
            switch(tag) {
              default:
                _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
                break;
              case 10: {
                TechnicalMessageType = input.ReadString();
                break;
              }
              case 18:
              case 16: {
                ddis_.AddEntriesFrom(input, _repeated_ddis_codec);
                break;
              }
              case 24: {
                Position = input.ReadBool();
                break;
              }
            }
          }
        }

      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code
