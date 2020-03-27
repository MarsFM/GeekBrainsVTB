import React, {Component} from "react";

import ChatItem from "../ChatItem";
import ChatForm from "../Chat-form";

import {List} from "@material-ui/core";

import './ChatList.css';

class ChatList extends Component {

  render() {
        const {chats} = this.props;
        const chatsUI = chats.map(({id, title}) => {
            return (
                  <ChatItem
                    chatId={id}
                    key={id}
                    name={title} />
            )
        });

        return(
            <div className="app__chat-list chat-list">
                <List component="nav" aria-label="main mailbox folders">
                    {chatsUI}
                </List>
                <ChatForm chats={chats} />
            </div>
        );
    }
}

export default ChatList;