
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import background_1 from './assets/img/background/bg1.jpeg';
import background_3 from './assets/img/background/bg3.jpeg';
import PokemonCard from './components/PokemonCard/PokemonCard';
import POKEMONS from './assets/data/pokemons.json'
import './App.css';

const App = () => {

  return (
    <>
      <Header title="POKEMON BATTLE" descr="This is simple triad card game" />

      <Layout id='rules' title='Rules' urlBg={background_1}>

        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>

      </Layout>

      <Layout id='cards' title='Cards' colorTitle='#fefefe' colorBg='#51c2d575'>
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>

        <div className="flex">
          {
            POKEMONS.map(item => <PokemonCard
              name={item.name}
              key={item.id}
              id={item.id}
              type={item.type}
              img={item.img}
              values={item.values} />)
          }
        </div>

      </Layout>

      <Layout id='about' title='Full Rules' urlBg={background_3}>

        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>

      </Layout>

      <Footer />
    </>
  )
}

export default App;
