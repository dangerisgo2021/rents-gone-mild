import React  from "react";
import styles from "../css/who-what-where.module.scss";
import _ from "lodash"
import { missionCards } from "../data/cards/mission-cards.js";
import { playableCards } from "../data/cards/playable-cards.js";
import { whereCards } from "../data/cards/where-cards.js";

// TODO VVV
// const turn = () => {
//   // present current player name as selected
//   // show current player start turn
//   // show player their hand
//   // allow one card to be discarded and to draw another one
//   // player choose card to play
//   // player ends turn
//   // check if last player in turn
//
// }

const nextPlayer = ({ gameState }) => {
  const { players, activePlayer } = gameState
  
  const activeIndex = players
    .indexOf(activePlayer)
  
  const nextIndex = activeIndex === players.length - 1 ? 0 : activeIndex + 1
  console.log("nextPlayer", {players, nextIndex, activeIndex, activePlayer, x: players[nextIndex]})
  return players[nextIndex]
}

const update = ({gameState}, action) => {
  console.log("update start", {gameState} )
  const nextGameState = { ...gameState }
  
  // find there current round
  let round = nextGameState.currentRound
  console.log("round", {round} )
  
  // if there is no round make a new one
  if(!round) {
  
    // set chooser
    const chooser = _.sample(nextGameState.players)
    const newRound =  {
      where: _.sample(whereCards),
      chooser,
      pastChoosers: [chooser],
      currentState: "choose_mission",
      missionCards: _.sampleSize(missionCards, 5),
      playedCards: []
    }
    console.log("newRound", {newRound} )
  
    //add round to gameState
    nextGameState.rounds = [
      newRound
    ]
    nextGameState.currentRound = newRound
  } else {
    console.log("is round", {round, action} )
    const chooser = _.difference(gameState.players, round.pastChoosers)
    // if there is no chooser that means all players have had a turn this round and the round is over
    if(!chooser) {
      round.completed = true
    } else {
        // take turn
      switch(action.type) {
        case "mission_selected": {
          const nextActivePlayer = nextPlayer({gameState})
          console.log("nextActivePlayer !== round.chooser", {nextActivePlayer}, nextActivePlayer !== round.chooser)
          if(nextActivePlayer !== round.chooser) {
            round.mission = action.payload.mission
            round.currentState = "player_turn"
            nextGameState.activePlayer = nextActivePlayer
          } else {
            round.currentState = "choose_winner"
            nextGameState.activePlayer = nextActivePlayer
          }
          break;
        }
        case "card_played" : {
          console.log("card_played")
          const nextActivePlayer = nextPlayer({gameState})
          console.log("nextActivePlayer !== round.chooser", nextActivePlayer !== round.chooser)
          if(nextActivePlayer !== round.chooser) {
            round.playedCards = [
              ...round.playedCards,
              {
                ...action.payload.card,
                player: gameState.activePlayer
              }
            ];
            round.currentState = "player_turn"
            nextGameState.activePlayer = nextActivePlayer
          } else {
            round.currentState = "choose_winner"
            nextGameState.activePlayer = nextActivePlayer
          }
          break;
        }
        case "choose_winner" : {
          console.log("choose_winner", {action})
          round.currentState = "winner_chosen"
          round.winningCard = action.payload.winningCard
          round.winner = action.payload.winningCard.player
          break;
        }
      }
    }
  }

  return nextGameState
  // chooser selects mission
  // chooser ends turn
  // other players take turns playing a card
  // after all players take a turn chooser selects mission winning card
  // the player of the winning card is marked the winner of the mission
  // Next chooser is set to the next player
  // if all players have been chooser the game ends
  // the player with the most mission wins is the winner
}

const startGame = ({gameState}) => {
  console.log("game started")
  // create a hand for each player
  const hands = gameState.players.reduce((acc, val) => {
    acc[val] = _.sampleSize(playableCards, 4)
    return acc
  }, {})
  
  // setup game state
  let startingGameState = {
    ...gameState,
    started: true,
    hands,
    rounds: [],
    currentRound: undefined,
  }
  console.log({startingGameState})
  return startingGameState
}

export const WhoWhatWhereGame = () => {
  const [newPlayerName, setNewPlayerName] = React.useState("")
  const [gameState, setGameState] = React.useState({
    started: false,
    players: [
      "Bob",
      "John",
      "Steve",
      "Bill",
      "Ted",
      "Paul"
    ],
    hands: {},
    activePlayer: undefined,
    winner: undefined,
    currentRound: undefined,
    rounds: [],
    activePlayersCards: []
  })
  console.log("gameState", {gameState})
  
  const handleNameChange = (e) => {
    setNewPlayerName(e.target.value)
  }
  const handleRemoveClicked = (player) => {
    setGameState({
      ...gameState,
      players: _.without(gameState.players, player)
    })
  }
  const handleStateClicked = () => {
    
    const startingGameState = startGame({gameState})
    const nextGameState = update({gameState: startingGameState})
    setGameState(nextGameState)
  }
  const handleJoinClicked = () => {
    setGameState({
      ...gameState,
      players: [...gameState.players, newPlayerName]
    })
  }
  
  const handleMissionSelected = ({mission}) => {
    const nextGameState = update({ gameState }, { type: "mission_selected", payload: { mission } })
    console.log("handleMissionSelected", {nextGameState})
  
    setGameState(nextGameState)
  }
  
  const handlePlayCard = ({card}) => {
    const nextGameState = update({gameState}, { type: "card_played", payload: {card} })
    console.log("handlePlayCard", {nextGameState})
    setGameState(nextGameState)
  }
  
  const handleChooseWinner = ({winningCard}) => {
    const nextGameState = update({gameState}, { type: "choose_winner", payload: {winningCard} })
    console.log("handleChooseWinner", {nextGameState})
    setGameState(nextGameState)
  }
  
  console.log("render", {gameState})
  
  const currentRound = gameState.currentRound
  
  let roundStateRender = undefined;
  if(currentRound) {
    switch (currentRound.currentState) {
      case "choose_mission": {
        roundStateRender = (
          <div>
            <h1>Choose a Mission {gameState.activePlayer}</h1>
            <ul>
              {currentRound?.missionCards.map((mission, i) => (
                <li key={i}>
                  <button
                    onClick={() => {handleMissionSelected({mission });}}>
                    select: {mission}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
        break;
      }
      case "player_turn": {
        roundStateRender = (
          <div>
            <h1>Play a card [{gameState.activePlayer}]</h1>
            <div className={styles.Hand}>
              {gameState.hands[gameState.activePlayer]?.map((card) => (
                <button key={card.title} className={styles.Card} onClick={() => handlePlayCard({card})}>
                  <h4>Title: {card.title}</h4>
                  <h5>Type: {card.type}</h5>
                  <h5>Wiki: {card.link}</h5>
                  {card?.text?.map((text, i) => <p key={i}>{text}</p>)}
                </button>
              ))}
            </div>
          </div>
        )
        break;
      }
      case "choose_winner": {
        roundStateRender = (
          <div>
            <h1>Choose A winner [{gameState.activePlayer}]</h1>
            <div className={styles.Hand}>
              {gameState.currentRound.playedCards?.map((card) => (
                <button key={card.title} className={styles.Card} onClick={() => handleChooseWinner({winningCard: card})}>
                  <h4>Title: {card.title}</h4>
                  <h5>Type: {card.type}</h5>
                  <h5>Wiki: {card.link}</h5>
                  {card?.text?.map((text, i) => <p key={i}>{text}</p>)}
                </button>
              ))}
            </div>
          </div>
        )
        break;
      }
      case "winner_chosen": {
        console.log("winner_chosen render", gameState.currentRound)
        const { winningCard } = gameState.currentRound
        roundStateRender = (
          <div>
            <h1>The winner is [{gameState.currentRound.winner}]</h1>
            <button onClick={() => handleStartNextRound()}>
              <h4>Title: {winningCard?.title}</h4>
              <h5>Type: {winningCard?.type}</h5>
              <h5>Wiki: {winningCard?.link}</h5>
              {winningCard?.text?.map((text, i) => <p key={i}>{text}</p>)}
            </button>
          </div>
        )
        break;
      }
    }
  }
 
  
  return (
    <div className={styles.WhoWhatWhereGame}>
      <div className={styles.GameControls}>
        <div>
          <input placeholder="name" value={newPlayerName} onChange={handleNameChange}/>
          <button onClick={handleJoinClicked}>join</button>
        </div>
        {!gameState.started && gameState.players?.length >= 3 && <button onClick={handleStateClicked}>start</button>}
      </div>
      
      <div className={styles.GameView}>
        {
          currentRound && (
            <div className={styles.Round}>
              <div>
                <h1>Round # {gameState?.rounds?.indexOf(gameState.currentRound)}</h1>
                <h2>Chooser {currentRound.chooser}</h2>
                <div className={styles.Where}>
                  <h2>Setting</h2>
                  <h3>Where:  {currentRound.where.title}</h3>
                  <h3>Founded:  {currentRound.where.discoveryFoundingDate}</h3>
                  <h3>Wiki:  {currentRound.where.wikiLink}</h3>
                  <h4>funFact:  {currentRound.where.funFact}</h4>
                  <h4>shortSummary:  {currentRound.where.shortSummary}</h4>
                </div>
                <div className={styles.Mission}>
                  <h2>Mission</h2>
                  <h3>{currentRound?.mission}</h3>
                </div>
                {roundStateRender}
              </div>
              
            </div>
          )
        }
      </div>
      <div className={styles.Players}>
        Number of players {gameState?.players.length}
    
        <ul>
          {gameState?.players?.map((player) => (
            <li key={player}>{player}<button onClick={() => {handleRemoveClicked(player)}}>X</button> </li>)
          )}
        </ul>
      </div>
    </div>
  )
}