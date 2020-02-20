// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: messaging/response/payload/feed/push-notification.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Agrirouter.Feed.Push.Notification {

  /// <summary>Holder for reflection information generated from messaging/response/payload/feed/push-notification.proto</summary>
  public static partial class PushNotificationReflection {

    #region Descriptor
    /// <summary>File descriptor for messaging/response/payload/feed/push-notification.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static PushNotificationReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjdtZXNzYWdpbmcvcmVzcG9uc2UvcGF5bG9hZC9mZWVkL3B1c2gtbm90aWZp",
            "Y2F0aW9uLnByb3RvEiFhZ3Jpcm91dGVyLmZlZWQucHVzaC5ub3RpZmljYXRp",
            "b24aH2dvb2dsZS9wcm90b2J1Zi90aW1lc3RhbXAucHJvdG8aGWdvb2dsZS9w",
            "cm90b2J1Zi9hbnkucHJvdG8aFWNvbW1vbnMvbWVzc2FnZS5wcm90bxoTY29t",
            "bW9ucy9jaHVuay5wcm90byLqBAoQUHVzaE5vdGlmaWNhdGlvbhJRCghtZXNz",
            "YWdlcxgBIAMoCzI/LmFncmlyb3V0ZXIuZmVlZC5wdXNoLm5vdGlmaWNhdGlv",
            "bi5QdXNoTm90aWZpY2F0aW9uLkZlZWRNZXNzYWdlGv8CCgZIZWFkZXISEwoL",
            "cmVjZWl2ZXJfaWQYASABKAkSHgoWdGVjaG5pY2FsX21lc3NhZ2VfdHlwZRgC",
            "IAEoCRIbChN0ZWFtX3NldF9jb250ZXh0X2lkGAMgASgJEjkKDWNodW5rX2Nv",
            "bnRleHQYBCABKAsyIi5hZ3Jpcm91dGVyLmNvbW1vbnMuQ2h1bmtDb21wb25l",
            "bnQSFAoMcGF5bG9hZF9zaXplGAUgASgDEjIKDnNlbnRfdGltZXN0YW1wGAYg",
            "ASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIXCg9zZXF1ZW5jZV9u",
            "dW1iZXIYByABKAMSEQoJc2VuZGVyX2lkGAggASgJEi4KCmNyZWF0ZWRfYXQY",
            "CSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhIKCm1lc3NhZ2Vf",
            "aWQYCiABKAkSLgoIbWV0YWRhdGEYCyABKAsyHC5hZ3Jpcm91dGVyLmNvbW1v",
            "bnMuTWV0YWRhdGEagAEKC0ZlZWRNZXNzYWdlEkoKBmhlYWRlchgBIAEoCzI6",
            "LmFncmlyb3V0ZXIuZmVlZC5wdXNoLm5vdGlmaWNhdGlvbi5QdXNoTm90aWZp",
            "Y2F0aW9uLkhlYWRlchIlCgdjb250ZW50GAIgASgLMhQuZ29vZ2xlLnByb3Rv",
            "YnVmLkFueWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Google.Protobuf.WellKnownTypes.TimestampReflection.Descriptor, global::Google.Protobuf.WellKnownTypes.AnyReflection.Descriptor, global::Agrirouter.Commons.MessageReflection.Descriptor, global::Agrirouter.Commons.ChunkReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Agrirouter.Feed.Push.Notification.PushNotification), global::Agrirouter.Feed.Push.Notification.PushNotification.Parser, new[]{ "Messages" }, null, null, null, new pbr::GeneratedClrTypeInfo[] { new pbr::GeneratedClrTypeInfo(typeof(global::Agrirouter.Feed.Push.Notification.PushNotification.Types.Header), global::Agrirouter.Feed.Push.Notification.PushNotification.Types.Header.Parser, new[]{ "ReceiverId", "TechnicalMessageType", "TeamSetContextId", "ChunkContext", "PayloadSize", "SentTimestamp", "SequenceNumber", "SenderId", "CreatedAt", "MessageId", "Metadata" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::Agrirouter.Feed.Push.Notification.PushNotification.Types.FeedMessage), global::Agrirouter.Feed.Push.Notification.PushNotification.Types.FeedMessage.Parser, new[]{ "Header", "Content" }, null, null, null, null)})
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class PushNotification : pb::IMessage<PushNotification> {
    private static readonly pb::MessageParser<PushNotification> _parser = new pb::MessageParser<PushNotification>(() => new PushNotification());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<PushNotification> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Agrirouter.Feed.Push.Notification.PushNotificationReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PushNotification() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PushNotification(PushNotification other) : this() {
      messages_ = other.messages_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public PushNotification Clone() {
      return new PushNotification(this);
    }

    /// <summary>Field number for the "messages" field.</summary>
    public const int MessagesFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Agrirouter.Feed.Push.Notification.PushNotification.Types.FeedMessage> _repeated_messages_codec
        = pb::FieldCodec.ForMessage(10, global::Agrirouter.Feed.Push.Notification.PushNotification.Types.FeedMessage.Parser);
    private readonly pbc::RepeatedField<global::Agrirouter.Feed.Push.Notification.PushNotification.Types.FeedMessage> messages_ = new pbc::RepeatedField<global::Agrirouter.Feed.Push.Notification.PushNotification.Types.FeedMessage>();
    /// <summary>
    /// Collection of messages allocated to this notification
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Agrirouter.Feed.Push.Notification.PushNotification.Types.FeedMessage> Messages {
      get { return messages_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as PushNotification);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(PushNotification other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!messages_.Equals(other.messages_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= messages_.GetHashCode();
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
      messages_.WriteTo(output, _repeated_messages_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += messages_.CalculateSize(_repeated_messages_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(PushNotification other) {
      if (other == null) {
        return;
      }
      messages_.Add(other.messages_);
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
            messages_.AddEntriesFrom(input, _repeated_messages_codec);
            break;
          }
        }
      }
    }

    #region Nested types
    /// <summary>Container for nested types declared in the PushNotification message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public sealed partial class Header : pb::IMessage<Header> {
        private static readonly pb::MessageParser<Header> _parser = new pb::MessageParser<Header>(() => new Header());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pb::MessageParser<Header> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::Agrirouter.Feed.Push.Notification.PushNotification.Descriptor.NestedTypes[0]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public Header() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public Header(Header other) : this() {
          receiverId_ = other.receiverId_;
          technicalMessageType_ = other.technicalMessageType_;
          teamSetContextId_ = other.teamSetContextId_;
          chunkContext_ = other.chunkContext_ != null ? other.chunkContext_.Clone() : null;
          payloadSize_ = other.payloadSize_;
          sentTimestamp_ = other.sentTimestamp_ != null ? other.sentTimestamp_.Clone() : null;
          sequenceNumber_ = other.sequenceNumber_;
          senderId_ = other.senderId_;
          createdAt_ = other.createdAt_ != null ? other.createdAt_.Clone() : null;
          messageId_ = other.messageId_;
          metadata_ = other.metadata_ != null ? other.metadata_.Clone() : null;
          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public Header Clone() {
          return new Header(this);
        }

        /// <summary>Field number for the "receiver_id" field.</summary>
        public const int ReceiverIdFieldNumber = 1;
        private string receiverId_ = "";
        /// <summary>
        /// Receiver for the group of messages
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string ReceiverId {
          get { return receiverId_; }
          set {
            receiverId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "technical_message_type" field.</summary>
        public const int TechnicalMessageTypeFieldNumber = 2;
        private string technicalMessageType_ = "";
        /// <summary>
        /// Technical Message Type ID
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string TechnicalMessageType {
          get { return technicalMessageType_; }
          set {
            technicalMessageType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "team_set_context_id" field.</summary>
        public const int TeamSetContextIdFieldNumber = 3;
        private string teamSetContextId_ = "";
        /// <summary>
        /// If associated with a team set context (Device Description) this is the linkage ID
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string TeamSetContextId {
          get { return teamSetContextId_; }
          set {
            teamSetContextId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "chunk_context" field.</summary>
        public const int ChunkContextFieldNumber = 4;
        private global::Agrirouter.Commons.ChunkComponent chunkContext_;
        /// <summary>
        /// Refer to agrirouter.commons.ChunkComponent
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public global::Agrirouter.Commons.ChunkComponent ChunkContext {
          get { return chunkContext_; }
          set {
            chunkContext_ = value;
          }
        }

        /// <summary>Field number for the "payload_size" field.</summary>
        public const int PayloadSizeFieldNumber = 5;
        private long payloadSize_;
        /// <summary>
        /// Expected size of the payload associated with this message
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public long PayloadSize {
          get { return payloadSize_; }
          set {
            payloadSize_ = value;
          }
        }

        /// <summary>Field number for the "sent_timestamp" field.</summary>
        public const int SentTimestampFieldNumber = 6;
        private global::Google.Protobuf.WellKnownTypes.Timestamp sentTimestamp_;
        /// <summary>
        /// The timestamp in UTC that the sender has sent this message
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public global::Google.Protobuf.WellKnownTypes.Timestamp SentTimestamp {
          get { return sentTimestamp_; }
          set {
            sentTimestamp_ = value;
          }
        }

        /// <summary>Field number for the "sequence_number" field.</summary>
        public const int SequenceNumberFieldNumber = 7;
        private long sequenceNumber_;
        /// <summary>
        /// Message sequence number
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public long SequenceNumber {
          get { return sequenceNumber_; }
          set {
            sequenceNumber_ = value;
          }
        }

        /// <summary>Field number for the "sender_id" field.</summary>
        public const int SenderIdFieldNumber = 8;
        private string senderId_ = "";
        /// <summary>
        /// Sender for the group of messages
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string SenderId {
          get { return senderId_; }
          set {
            senderId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "created_at" field.</summary>
        public const int CreatedAtFieldNumber = 9;
        private global::Google.Protobuf.WellKnownTypes.Timestamp createdAt_;
        /// <summary>
        /// The time at which the message was inserted into the endpoints feed within the agrirouter
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public global::Google.Protobuf.WellKnownTypes.Timestamp CreatedAt {
          get { return createdAt_; }
          set {
            createdAt_ = value;
          }
        }

        /// <summary>Field number for the "message_id" field.</summary>
        public const int MessageIdFieldNumber = 10;
        private string messageId_ = "";
        /// <summary>
        /// Internal AgriRouter message ID representing this message and its payload
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public string MessageId {
          get { return messageId_; }
          set {
            messageId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
          }
        }

        /// <summary>Field number for the "metadata" field.</summary>
        public const int MetadataFieldNumber = 11;
        private global::Agrirouter.Commons.Metadata metadata_;
        /// <summary>
        /// Additional metadata information to help differentiate between messages of the same type
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public global::Agrirouter.Commons.Metadata Metadata {
          get { return metadata_; }
          set {
            metadata_ = value;
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override bool Equals(object other) {
          return Equals(other as Header);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public bool Equals(Header other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (ReceiverId != other.ReceiverId) return false;
          if (TechnicalMessageType != other.TechnicalMessageType) return false;
          if (TeamSetContextId != other.TeamSetContextId) return false;
          if (!object.Equals(ChunkContext, other.ChunkContext)) return false;
          if (PayloadSize != other.PayloadSize) return false;
          if (!object.Equals(SentTimestamp, other.SentTimestamp)) return false;
          if (SequenceNumber != other.SequenceNumber) return false;
          if (SenderId != other.SenderId) return false;
          if (!object.Equals(CreatedAt, other.CreatedAt)) return false;
          if (MessageId != other.MessageId) return false;
          if (!object.Equals(Metadata, other.Metadata)) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override int GetHashCode() {
          int hash = 1;
          if (ReceiverId.Length != 0) hash ^= ReceiverId.GetHashCode();
          if (TechnicalMessageType.Length != 0) hash ^= TechnicalMessageType.GetHashCode();
          if (TeamSetContextId.Length != 0) hash ^= TeamSetContextId.GetHashCode();
          if (chunkContext_ != null) hash ^= ChunkContext.GetHashCode();
          if (PayloadSize != 0L) hash ^= PayloadSize.GetHashCode();
          if (sentTimestamp_ != null) hash ^= SentTimestamp.GetHashCode();
          if (SequenceNumber != 0L) hash ^= SequenceNumber.GetHashCode();
          if (SenderId.Length != 0) hash ^= SenderId.GetHashCode();
          if (createdAt_ != null) hash ^= CreatedAt.GetHashCode();
          if (MessageId.Length != 0) hash ^= MessageId.GetHashCode();
          if (metadata_ != null) hash ^= Metadata.GetHashCode();
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
          if (ReceiverId.Length != 0) {
            output.WriteRawTag(10);
            output.WriteString(ReceiverId);
          }
          if (TechnicalMessageType.Length != 0) {
            output.WriteRawTag(18);
            output.WriteString(TechnicalMessageType);
          }
          if (TeamSetContextId.Length != 0) {
            output.WriteRawTag(26);
            output.WriteString(TeamSetContextId);
          }
          if (chunkContext_ != null) {
            output.WriteRawTag(34);
            output.WriteMessage(ChunkContext);
          }
          if (PayloadSize != 0L) {
            output.WriteRawTag(40);
            output.WriteInt64(PayloadSize);
          }
          if (sentTimestamp_ != null) {
            output.WriteRawTag(50);
            output.WriteMessage(SentTimestamp);
          }
          if (SequenceNumber != 0L) {
            output.WriteRawTag(56);
            output.WriteInt64(SequenceNumber);
          }
          if (SenderId.Length != 0) {
            output.WriteRawTag(66);
            output.WriteString(SenderId);
          }
          if (createdAt_ != null) {
            output.WriteRawTag(74);
            output.WriteMessage(CreatedAt);
          }
          if (MessageId.Length != 0) {
            output.WriteRawTag(82);
            output.WriteString(MessageId);
          }
          if (metadata_ != null) {
            output.WriteRawTag(90);
            output.WriteMessage(Metadata);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(output);
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public int CalculateSize() {
          int size = 0;
          if (ReceiverId.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(ReceiverId);
          }
          if (TechnicalMessageType.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(TechnicalMessageType);
          }
          if (TeamSetContextId.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(TeamSetContextId);
          }
          if (chunkContext_ != null) {
            size += 1 + pb::CodedOutputStream.ComputeMessageSize(ChunkContext);
          }
          if (PayloadSize != 0L) {
            size += 1 + pb::CodedOutputStream.ComputeInt64Size(PayloadSize);
          }
          if (sentTimestamp_ != null) {
            size += 1 + pb::CodedOutputStream.ComputeMessageSize(SentTimestamp);
          }
          if (SequenceNumber != 0L) {
            size += 1 + pb::CodedOutputStream.ComputeInt64Size(SequenceNumber);
          }
          if (SenderId.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(SenderId);
          }
          if (createdAt_ != null) {
            size += 1 + pb::CodedOutputStream.ComputeMessageSize(CreatedAt);
          }
          if (MessageId.Length != 0) {
            size += 1 + pb::CodedOutputStream.ComputeStringSize(MessageId);
          }
          if (metadata_ != null) {
            size += 1 + pb::CodedOutputStream.ComputeMessageSize(Metadata);
          }
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public void MergeFrom(Header other) {
          if (other == null) {
            return;
          }
          if (other.ReceiverId.Length != 0) {
            ReceiverId = other.ReceiverId;
          }
          if (other.TechnicalMessageType.Length != 0) {
            TechnicalMessageType = other.TechnicalMessageType;
          }
          if (other.TeamSetContextId.Length != 0) {
            TeamSetContextId = other.TeamSetContextId;
          }
          if (other.chunkContext_ != null) {
            if (chunkContext_ == null) {
              ChunkContext = new global::Agrirouter.Commons.ChunkComponent();
            }
            ChunkContext.MergeFrom(other.ChunkContext);
          }
          if (other.PayloadSize != 0L) {
            PayloadSize = other.PayloadSize;
          }
          if (other.sentTimestamp_ != null) {
            if (sentTimestamp_ == null) {
              SentTimestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            SentTimestamp.MergeFrom(other.SentTimestamp);
          }
          if (other.SequenceNumber != 0L) {
            SequenceNumber = other.SequenceNumber;
          }
          if (other.SenderId.Length != 0) {
            SenderId = other.SenderId;
          }
          if (other.createdAt_ != null) {
            if (createdAt_ == null) {
              CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
            }
            CreatedAt.MergeFrom(other.CreatedAt);
          }
          if (other.MessageId.Length != 0) {
            MessageId = other.MessageId;
          }
          if (other.metadata_ != null) {
            if (metadata_ == null) {
              Metadata = new global::Agrirouter.Commons.Metadata();
            }
            Metadata.MergeFrom(other.Metadata);
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
                ReceiverId = input.ReadString();
                break;
              }
              case 18: {
                TechnicalMessageType = input.ReadString();
                break;
              }
              case 26: {
                TeamSetContextId = input.ReadString();
                break;
              }
              case 34: {
                if (chunkContext_ == null) {
                  ChunkContext = new global::Agrirouter.Commons.ChunkComponent();
                }
                input.ReadMessage(ChunkContext);
                break;
              }
              case 40: {
                PayloadSize = input.ReadInt64();
                break;
              }
              case 50: {
                if (sentTimestamp_ == null) {
                  SentTimestamp = new global::Google.Protobuf.WellKnownTypes.Timestamp();
                }
                input.ReadMessage(SentTimestamp);
                break;
              }
              case 56: {
                SequenceNumber = input.ReadInt64();
                break;
              }
              case 66: {
                SenderId = input.ReadString();
                break;
              }
              case 74: {
                if (createdAt_ == null) {
                  CreatedAt = new global::Google.Protobuf.WellKnownTypes.Timestamp();
                }
                input.ReadMessage(CreatedAt);
                break;
              }
              case 82: {
                MessageId = input.ReadString();
                break;
              }
              case 90: {
                if (metadata_ == null) {
                  Metadata = new global::Agrirouter.Commons.Metadata();
                }
                input.ReadMessage(Metadata);
                break;
              }
            }
          }
        }

      }

      public sealed partial class FeedMessage : pb::IMessage<FeedMessage> {
        private static readonly pb::MessageParser<FeedMessage> _parser = new pb::MessageParser<FeedMessage>(() => new FeedMessage());
        private pb::UnknownFieldSet _unknownFields;
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pb::MessageParser<FeedMessage> Parser { get { return _parser; } }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public static pbr::MessageDescriptor Descriptor {
          get { return global::Agrirouter.Feed.Push.Notification.PushNotification.Descriptor.NestedTypes[1]; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        pbr::MessageDescriptor pb::IMessage.Descriptor {
          get { return Descriptor; }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public FeedMessage() {
          OnConstruction();
        }

        partial void OnConstruction();

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public FeedMessage(FeedMessage other) : this() {
          header_ = other.header_ != null ? other.header_.Clone() : null;
          content_ = other.content_ != null ? other.content_.Clone() : null;
          _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public FeedMessage Clone() {
          return new FeedMessage(this);
        }

        /// <summary>Field number for the "header" field.</summary>
        public const int HeaderFieldNumber = 1;
        private global::Agrirouter.Feed.Push.Notification.PushNotification.Types.Header header_;
        /// <summary>
        /// Message Header Information for identification purposes
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public global::Agrirouter.Feed.Push.Notification.PushNotification.Types.Header Header {
          get { return header_; }
          set {
            header_ = value;
          }
        }

        /// <summary>Field number for the "content" field.</summary>
        public const int ContentFieldNumber = 2;
        private global::Google.Protobuf.WellKnownTypes.Any content_;
        /// <summary>
        /// The actual payload content to be decoded
        /// </summary>
        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public global::Google.Protobuf.WellKnownTypes.Any Content {
          get { return content_; }
          set {
            content_ = value;
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override bool Equals(object other) {
          return Equals(other as FeedMessage);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public bool Equals(FeedMessage other) {
          if (ReferenceEquals(other, null)) {
            return false;
          }
          if (ReferenceEquals(other, this)) {
            return true;
          }
          if (!object.Equals(Header, other.Header)) return false;
          if (!object.Equals(Content, other.Content)) return false;
          return Equals(_unknownFields, other._unknownFields);
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public override int GetHashCode() {
          int hash = 1;
          if (header_ != null) hash ^= Header.GetHashCode();
          if (content_ != null) hash ^= Content.GetHashCode();
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
          if (header_ != null) {
            output.WriteRawTag(10);
            output.WriteMessage(Header);
          }
          if (content_ != null) {
            output.WriteRawTag(18);
            output.WriteMessage(Content);
          }
          if (_unknownFields != null) {
            _unknownFields.WriteTo(output);
          }
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public int CalculateSize() {
          int size = 0;
          if (header_ != null) {
            size += 1 + pb::CodedOutputStream.ComputeMessageSize(Header);
          }
          if (content_ != null) {
            size += 1 + pb::CodedOutputStream.ComputeMessageSize(Content);
          }
          if (_unknownFields != null) {
            size += _unknownFields.CalculateSize();
          }
          return size;
        }

        [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
        public void MergeFrom(FeedMessage other) {
          if (other == null) {
            return;
          }
          if (other.header_ != null) {
            if (header_ == null) {
              Header = new global::Agrirouter.Feed.Push.Notification.PushNotification.Types.Header();
            }
            Header.MergeFrom(other.Header);
          }
          if (other.content_ != null) {
            if (content_ == null) {
              Content = new global::Google.Protobuf.WellKnownTypes.Any();
            }
            Content.MergeFrom(other.Content);
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
                if (header_ == null) {
                  Header = new global::Agrirouter.Feed.Push.Notification.PushNotification.Types.Header();
                }
                input.ReadMessage(Header);
                break;
              }
              case 18: {
                if (content_ == null) {
                  Content = new global::Google.Protobuf.WellKnownTypes.Any();
                }
                input.ReadMessage(Content);
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
