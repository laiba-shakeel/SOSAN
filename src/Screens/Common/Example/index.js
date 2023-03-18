import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat , Bubble , Send , InputToolbar , SystemMessage } from 'react-native-gifted-chat'
import { View  , StyleSheet , ActivityIndicator} from 'react-native';
import { IconButton } from 'react-native-paper';
export function Example() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        avatar: 'https://placeimg.com/140/140/any',
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      placeholder='Type your message here...'
      showUserAvatar={true}
      showAvatarForEveryMessage={true}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      renderLoading={renderLoading}
      renderInputToolbar={props => customtInputToolbar(props)}
      alignTop
      maxComposerHeight={200}

    />
  )
}

function renderBubble(props) {
  return (
    // Step 3: return the component
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          // Here is the color change
          backgroundColor: '#6646ee'
        }
      }}
      textStyle={{
        right: {
          color: '#fff'
        }
      }}
    />
  );
}
function renderSend(props) {
  return (
    <Send {...props}>
      <View style={styles.sendingContainer}>
        <IconButton icon='send-circle' size={32} color='#6646ee' />
      </View>
    </Send>
  );
}
const customSystemMessage = props => {
  return (
    <View style={styles.ChatMessageSytemMessageContainer}>
      <Icon name="lock" color="#9d9d9d" size={16} />
      <Text style={styles.ChatMessageSystemMessageText}>
        Your chat is secured. Remember to be cautious about what you share
        with others.
      </Text>
    </View>
  );
};
function renderLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}

const customtInputToolbar = props => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "white",
        borderTopColor: "#E8E8E8",
        borderTopWidth: 1,
        padding: 8
      }}
    />
  );
};

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});