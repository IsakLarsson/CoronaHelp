import React from "react";
import "./index.scss";
import CreateButton from "../../components/buttons/CreateButton";
import JoinButton from "../../components/buttons/JoinButton";

const RoomCard = (props) => {
  const { header, text } = props;
  return (
    <div className="card">
      <div className="cardHeaderContainer">
        <h1>{header}</h1>
      </div>
      <div className="cardDescriptionContainer">
        <p>{text}</p>
      </div>
      <div className="buttonsContainer">
        <CreateButton />
        <JoinButton />
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <section className="roomsPage">
      <div className="headerContainer">
        <h1>What do you want to do?</h1>
        <div className="description">
          <p>
            Chat with people, watch a movie together or find new people to play
            games with.
          </p>
        </div>
      </div>
      <div className="cardsContainer">
        <RoomCard
          header="Chat room"
          text="Start a chat room with your homies or join a random one "
        />
        <RoomCard
          header="Watch together"
          text="Have a show or a movie that you want to watch with the boyz? This is the place for you!"
        />
        <RoomCard
          header="Game lobby"
          text="Wanna play some gaimz with the homies? or find new homies that don’t suck?"
        />
      </div>
    </section>
  );
};

export default Rooms;
