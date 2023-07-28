import Header from "../../components/Header";
import Search from "../../components/Chats/Search";
import ChatList from "../../components/Chats/ChatList";
import FriendsList from "../../components/Chats/FriendsList";
import ExpScrollView from "../../components/Utils/ExpScrollView";

export default function Page() {
  return (
    <>
      <Header>
        <Search />
      </Header>
      <ExpScrollView>
        <FriendsList />
        <ChatList />
      </ExpScrollView>
    </>
  );
}